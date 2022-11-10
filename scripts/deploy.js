// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
require("dotenv").config({path: ".env"});

async function main() {
  const lockedAmount = hre.ethers.utils.parseEther("0.1");
  const SimpleContractFaucet = await hre.ethers.getContractFactory("SimpleContractFaucet")
  let beforeTime = new Date().getTime()
  const simpleContractFaucet = await SimpleContractFaucet.deploy({value: lockedAmount})
  await simpleContractFaucet.deployed()
  let totalTime = new Date().getTime()-beforeTime
  await simpleContractFaucet.withdrawFromFaucet()
  console.log("SimpleContractFaucet is at: "+simpleContractFaucet.address)
  console.log("Total Time Taken: ".concat(totalTime.toString())+" milliseconds")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
