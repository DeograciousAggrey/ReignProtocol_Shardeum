
    /*
Save The Private Key in the .env file
PRIVATE_KEY="YOUR PRIVATE KEY"
Important: Add the .env file to your .gitignore
*/
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config()

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    "stavanger": {
      url: "https://sn2-stavanger-rpc.eu-north-2.gateway.fm",
      chainId: 686669576,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      
    }
  }
};

export default config;
    