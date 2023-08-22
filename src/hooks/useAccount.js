import { useState, useEffect, useCallback } from 'react';
import { ethers } from 'ethers';
import { Web3ModalSetup } from '../helpers';
import { useStaticJsonRPC } from '../hooks';
import { ENVIRONMENT } from '../constants';
import { useUserProviderAndSigner } from 'eth-hooks';
const web3Modal = Web3ModalSetup();
const USE_BURNER_WALLET = false;

export const useAccount = () => {
  const [injectedProvider, setInjectedProvider] = useState();
  const [address, setAddress] = useState();
  const [signer, setSigner] = useState();
  const targetNetwork = ENVIRONMENT;
  const localProvider = new ethers.providers.StaticJsonRpcProvider(ENVIRONMENT.jsonRpcUrl);
  const userProviderAndSigner = useUserProviderAndSigner(injectedProvider, localProvider, USE_BURNER_WALLET);
  const userSigner = userProviderAndSigner.signer;

  const logoutOfWeb3Modal = async () => {
    await web3Modal.clearCachedProvider();
    if (injectedProvider && injectedProvider.provider && typeof injectedProvider.provider.disconnect == 'function') {
      await injectedProvider.provider.disconnect();
    }
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  const loadWeb3Modal = useCallback(async () => {
    const provider = await web3Modal.connect();
    setInjectedProvider(new ethers.providers.Web3Provider(provider));

    provider.on('chainChanged', chainId => {
      console.log(`chain changed to ${chainId}! updating providers`);
      setInjectedProvider(new ethers.providers.Web3Provider(provider));
    });

    provider.on('accountsChanged', () => {
      console.log(`account changed!`);
      setInjectedProvider(new ethers.providers.Web3Provider(provider));
    });

    // Subscribe to session disconnection
    provider.on('disconnect', (code, reason) => {
      console.log(code, reason);
      logoutOfWeb3Modal();
    });
    // eslint-disable-next-line
  }, [setInjectedProvider]);

  async function getAddress() {
    if (userSigner) {
      const newAddress = await userSigner.getAddress();
      setAddress(newAddress);
      setSigner(userSigner);
      console.log('Address', newAddress);
    } else {
      console.log('No signer');
    }
  }

  useEffect(() => {
    getAddress();
  }, [userSigner]);

  return {
    localProvider,
    injectedProvider,
    address,
    logoutOfWeb3Modal,
    loadWeb3Modal,
    signer,
    getAddress,
  };
};
