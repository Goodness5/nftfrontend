import {
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
} from "wagmi";
import { ChangeEvent, useState, useEffect } from "react";
import nft from "./utils/nft.json";

const Token = () => {
  const contractAddress = "0x206a0b20f28290D0dAC891996b9B4C71baD549E9";
  const [address, setAddress] = useState("");
  const [transferOwnershipTx, setTransferOwnershipTx] = useState("");
  const [balance, setBalance] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    data: balanceData,
    isLoading: balanceLoading,
    error: balanceError,
  } = useContractRead({
    address: contractAddress,
    abi: nft,
    functionName: "balanceOf",
    args: [address],
  });

  const contractWrite = useContractWrite({
    mode: 'recklesslyUnprepared',
    address: contractAddress,
    abi: nft,
    functionName: "transferOwnership",
  });
  
  const { data: transferOwnership } = contractWrite || {};

  const handleGetBalance = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const balancetx = await balanceData;
      setBalance(balance);
      setError("");
    } catch (err) {
      setError('');
      setBalance("");
    } finally {
      setIsLoading(false);
    }
  };

  const handleTransferOwnership = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const { hash } = await transferOwnership?.();
      setTransferOwnershipTx(hash);
      setError("");
      await useWaitForTransaction(hash);
    } catch (err) {
      setError("transfer ownership failed");
      setTransferOwnershipTx("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleGetBalance}>
        <input
          type="text"
          placeholder="Enter address to check its balance"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAddress(e.target.value)
          }
        />
        <button type="submit">Check Balance</button>
      </form>
      {isLoading || balanceLoading ? (
        <p>Loading balance...</p>
      ) : error || balanceError ? (
        <p>Error: {error}</p>
      ) : (
        <p>Balance: {balance}</p>
      )}
      <form onSubmit={handleTransferOwnership}>
        <input type="text" placeholder="address to" id="" />
        <button type="submit" disabled={contractWrite?.status == "loading" }/>
      </form>
    </div>
  );
};

export default Token;
