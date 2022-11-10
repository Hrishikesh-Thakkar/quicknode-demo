require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: ".env"});


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.API_KEY,
      accounts:[process.env.GOERLI_PRIVATE_KEY],
    }
  }
};
