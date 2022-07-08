require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
// This is a sample Hardhat task. 
// To learn how to create your own go to
// <https://hardhat.org/guides/create-task.html>
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});
// You need to export an object to set up your config
// Go to <https://hardhat.org/config/> to learn more
const API_URL = "https://ropsten.infura.io/v3/";
const PRIVATE_KEY = "";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};