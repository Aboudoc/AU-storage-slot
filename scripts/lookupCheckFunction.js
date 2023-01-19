const { ethers } = require("hardhat");
const hre = require("hardhat");

const address = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

async function lookupCheck() {
  const storage = await ethers.getContractAt("Storage", address);
  await storage.check();
  // result will be logged to the local node we are running using npx hardhat node
}

lookupCheck();
