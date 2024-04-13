require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  } 
} );

module.exports = {
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {
      gasPrice: 470000000000,
      chainId: 43112,
    },
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
  path: {
    artifacts: "../frontend/src/artifacts"
  },
  solidity: {
     compilers: [
      {
        version: "0.5.16"
      },
      {
        version: "0.6.2"
      },
      {
        version: "0.6.4"
      },
      {
        version: "0.7.0"
      },
      {
        version: "0.8.4"
      },{
        version: "0.8.9"
      },
      {
        version: "0.8.20"
      }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}