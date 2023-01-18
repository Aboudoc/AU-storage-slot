const hre = require("hardhat");

async function main() {
  const Storage = await hre.ethers.getContractFactory("Storage");
  const storage = await Storage.deploy();

  await storage.deployed();

  console.log(`Contract deployed to: ${storage.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
