import React, { useState } from 'react';
import CoinLogo from '../assets/logos/usdc-logo.png';

export const ActionContainer = () => {
  const [isDepositCheddaTab, setIsDepositCheddaTab] = useState(true);
  const pool = {
    asset: {
      logo: CoinLogo, // Replace with actual logo path
      name: 'USDC', // Replace with actual asset name
    },
  };
  const myAssetBalance = 100;
  const assetSymbol = 'USDC';
  const myVaultSharesBalance = 50;
  const vaultTokenSymbol = 'Chedda';
  const totalVaultAssets = 200;
  const utilizationRate = 80;
  const depositApy = 5.5;
  const rewardsApy = 2.5;
  const isApproved = false;
  const assetName = 'USD Coin';

  const switchDepositCheddaTab = isDeposit => {
    setIsDepositCheddaTab(isDeposit);
  };

  const fillMaxDeposit = () => {
    // Handle filling maximum deposit
  };

  const approveAsset = () => {
    // Handle approving asset
  };

  const deposit = () => {
    // Handle depositing
  };

  const fillMaxWithdraw = () => {
    // Handle filling maximum withdrawal
  };

  const redeem = () => {
    // Handle redeeming
  };

  return (
    <div className="pb-5">
      <div className="w-11/12 md:w-[540px] h-auto mx-auto rounded-[30px] my-10 text-white card-bg">
        <div className="py-8 sm:h-20 border-b flex items-center justify-center space-x-3 border-gray-500">
          <div className="w-7 h-7">
            <img src={pool.asset.logo} alt="Asset Logo" />
          </div>
          <div className="text-lg sm:text-xl">Lend {pool.asset.name}</div>
        </div>
        <div className="pt-3 pb-8 px-6 sm:px-8">
          <div className="h-auto w-full flex text-[#B5C2EB]">
            <div
              className={`text-sm py-3 w-full text-center hover:opacity-75 ${
                isDepositCheddaTab ? 'activeTab' : ''
              } hover:bg-transparent`}
            >
              <button className="w-full font-semibold uppercase" onClick={() => switchDepositCheddaTab(true)}>
                Deposit
              </button>
            </div>
            <div
              className={`text-sm py-3 w-full text-center hover:opacity-75 ${
                !isDepositCheddaTab ? 'activeTab' : ''
              } hover:bg-transparent`}
            >
              <button className="w-full font-semibold uppercase" onClick={() => switchDepositCheddaTab(false)}>
                Withdraw
              </button>
            </div>
          </div>
          {isDepositCheddaTab ? (
            <div>
              <div className="mt-6 flex justify-between opacity-50 text-lg font-semibold">
                <div>Deposit {assetName}</div>
              </div>
              <div className="mt-4 flex justify-between text-lavendar-purple text-xs">
                <div className="opacity-50">Enter amount to deposit</div>
                <div className="font-semibold">
                  Balance: {myAssetBalance.toFixed(4)} {assetSymbol}
                </div>
              </div>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Amount"
                  className="bg-black w-full rounded mt-2 h-10 sm:h-14 px-4 font-semibold text-white text-xs sm:text-sm focus:outline-none focus:shadow-outline"
                />
                <div className="absolute top-0 right-0 mt-3 sm:mt-4 mr-1 sm:mr-2">
                  <button
                    onClick={fillMaxDeposit}
                    className="w-auto px-3 sm:px-4 h-[31px] sm:h-[41px] bg-[#20173F] rounded flex justify-center items-center hover:bg-[#4e26e0] text-xs sm:text-sm font-semibold text-[#ffffff50] hover:text-white uppercase"
                  >
                    Max
                  </button>
                </div>
              </div>
              <button
                onClick={approveAsset}
                className={`h-10 sm:h-12 primary-button-bg w-full mt-4 sm:mt-4 rounded-lg font-bold uppercase text-lg hover:opacity-90 ${
                  !isApproved ? 'visible' : 'hidden'
                }`}
              >
                Approve {assetSymbol}
              </button>
              <button
                onClick={deposit}
                className={`h-10 sm:h-12 primary-button-bg w-full mt-4 sm:mt-4 rounded-lg font-bold uppercase text-lg hover:opacity-90 ${
                  isApproved ? 'visible' : 'hidden'
                }`}
              >
                Deposit {assetSymbol}
              </button>
            </div>
          ) : (
            <div>
              <div className="mt-6 flex justify-between opacity-50 text-lg font-semibold">
                <div>Withdraw {assetName}</div>
              </div>
              <div className="mt-4 flex justify-between text-lavendar-purple text-xs">
                <div className="opacity-50">Enter amount to withdraw</div>
                <div className="font-semibold">
                  Balance: {myAssetBalance.toFixed(4)} {assetSymbol}
                </div>
              </div>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Amount"
                  className="bg-black w-full rounded mt-2 h-10 sm:h-14 px-4 font-semibold text-white text-xs sm:text-sm focus:outline-none focus:shadow-outline"
                />
                <div className="absolute top-0 right-0 mt-3 sm:mt-4 mr-1 sm:mr-2">
                  <button
                    onClick={fillMaxDeposit}
                    className="w-auto px-3 sm:px-4 h-[31px] sm:h-[41px] bg-[#20173F] rounded flex justify-center items-center hover:bg-[#4e26e0] text-xs sm:text-sm font-semibold text-[#ffffff50] hover:text-white uppercase"
                  >
                    Max
                  </button>
                </div>
              </div>
              <button
                onClick={approveAsset}
                className={`h-10 sm:h-12 secondary-button w-full mt-4 sm:mt-4 rounded-lg font-bold uppercase text-lg hover:opacity-90 ${
                  !isApproved ? 'visible' : 'hidden'
                }`}
              >
                Withdraw {assetSymbol}
              </button>
              <button
                onClick={deposit}
                className={`h-10 sm:h-12 primary-button-bg w-full mt-4 sm:mt-4 rounded-lg font-bold uppercase text-lg hover:opacity-90 ${
                  isApproved ? 'visible' : 'hidden'
                }`}
              >
                Deposit {assetSymbol}
              </button>
            </div>
          )}
          <div className="w-full h-auto flex justify-between mt-4 rounded-[20px] border-[1px] border-[#bab9bb] text-white px-5 py-4 sm:px-8 sm:py-6">
            <div className="flex flex-col gap-y-4 font-bold text-xs sm:text-sm text-[#999898]">
              <div>My Deposits</div>
              <div>Available Liquidity</div>
              <div>Utilization</div>
              <div>Deposit APY</div>
              <div>Rewards APY</div>
            </div>
            <div className="flex flex-col gap-y-4 font-bold text-xs sm:text-sm">
              <div>
                {myVaultSharesBalance.toFixed(6)} {vaultTokenSymbol}
              </div>
              <div>
                {totalVaultAssets.toFixed(6)} {assetSymbol}
              </div>
              <div>{utilizationRate.toFixed(3)}%</div>
              <div>{depositApy.toFixed(3)}%</div>
              <div>{rewardsApy.toFixed(3)}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
