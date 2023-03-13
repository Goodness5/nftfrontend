import { ethers } from "ethers";
import { useState } from "react";

const Token = () => {
  const contractAddress: any = "0x206a0b20f28290D0dAC891996b9B4C71baD549E9";
  const contractAbi = "../utils/nft.json";
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = provider.getSigner();
  const Contract = new ethers.Contract(contractAddress, contractAbi, provider);

  const [formValues, setFormValues] = useState({
    parameter1: "",
    parameter2: "",
    parameter3: "",
  });

  const handleChange = (event: any) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    Contract.contractMethod(
      formValues.parameter1,
      formValues.parameter2,
      formValues.parameter3
    )
      .then((result: any) => {
        console.log(result);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="parameter1">Parameter 1:</label>
        <input
          type="text"
          id="parameter1"
          name="parameter1"
          value={formValues.parameter1}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="parameter2">Parameter 2:</label>
        <input
          type="text"
          id="parameter2"
          name="parameter2"
          value={formValues.parameter2}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="parameter3">Parameter 3:</label>
        <input
          type="text"
          id="parameter3"
          name="parameter3"
          value={formValues.parameter3}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Contract Method</button>
      </form>
    </div>
  );
};

export default Token;
