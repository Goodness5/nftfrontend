import {
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
  useAccount
} from "wagmi";
import { ChangeEvent, useState, useEffect } from "react";
import nft from "./utils/nft.json";

const Token = () => {
  const contractAddress = "0x206a0b20f28290D0dAC891996b9B4C71baD549E9";
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
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

  const MintToken = () => {
  const { address } = useAccount()
  const [address_to, setAddress_to] = useState<string>("");

  const { config } = usePrepareContractWrite({
    address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
    abi: nft,
    functionName: 'mint',
    args: [address_to, ]
  })
   const { data, write } = useContractWrite(config)
   const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleSubmit = (e: any)=>{
       e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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








      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="address to"
          id=""
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAddress_to(e.target.value)
          }
        />
        <button type="submit">
          {<p>Mint</p> ? isLoading : <p>..loading</p> ? isSuccess : <p>Mint</p>}
        </button>
      </form>



      
    </div>
  );
}
};

export default Token;
