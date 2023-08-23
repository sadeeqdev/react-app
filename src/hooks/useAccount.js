import { useState, useEffect, useCallback, useMemo } from 'react';
import { ethers } from 'ethers';
import { Web3ModalSetup } from '../helpers';
import { useUserProviderAndSigner } from 'eth-hooks';
import { ENVIRONMENT } from '../constants';

const web3Modal = Web3ModalSetup();
const USE_BURNER_WALLET = false;

export const useAccount = () => {
  const [injectedProvider, setInjectedProvider] = useState();
  const [address, setAddress] = useState();

  const localProvider = new ethers.providers.StaticJsonRpcProvider(ENVIRONMENT.jsonRpcUrl);
  const { signer } = useUserProviderAndSigner(injectedProvider, localProvider, USE_BURNER_WALLET);

  const logoutOfWeb3Modal = useCallback(async () => {
    await web3Modal.clearCachedProvider();
    if (injectedProvider && injectedProvider.provider && typeof injectedProvider.provider.disconnect === 'function') {
      await injectedProvider.provider.disconnect();
    }
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }, [injectedProvider]);

  const loadWeb3Modal = useCallback(async () => {
    const provider = await web3Modal.connect();
    setInjectedProvider(new ethers.providers.Web3Provider(provider));
    getAddress();
    const updateProvider = chainId => {
      console.log(`chain changed to ${chainId}! updating providers`);
      setInjectedProvider(new ethers.providers.Web3Provider(provider));
    };

    provider.on('chainChanged', updateProvider);
    provider.on('accountsChanged', updateProvider);

    provider.on('disconnect', (code, reason) => {
      console.log(code, reason);
      logoutOfWeb3Modal();
    });
  }, [logoutOfWeb3Modal]);

  const getAddress = useCallback(async () => {
    if (signer && !address) {
      const newAddress = await signer.getAddress();
      setAddress(newAddress);
      console.log('Address', newAddress);
    } else {
      console.log('No signer or address already set');
    }
  }, [signer, address]);

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
