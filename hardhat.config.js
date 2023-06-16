require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { PRIVATE_KEY, INFURA_PROJECT_ID } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks:{
    sepolia:{
      url: `https://sepolia.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts:[PRIVATE_KEY]
    },
    goerli:{
      url: `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts:[PRIVATE_KEY]
    },
  }  
};