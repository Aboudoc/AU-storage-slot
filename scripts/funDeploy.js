const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const FunWithStorage = await ethers.getContractFactory("FunWithStorage");
  const funWithStorage = await FunWithStorage.deploy();

  console.log(`Contract deployed to: ${funWithStorage.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
