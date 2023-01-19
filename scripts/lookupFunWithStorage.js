const { ethers } = require("hardhat");
const hre = require("hardhat");

const funAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

async function lookupFunWithStorage() {
  const funWithStorage = await ethers.getContractAt(
    "FunWithStorage",
    funAddress
  );
  for (let i = 0; i < 5; i++) {
    const response = await ethers.provider.getStorageAt(funAddress, i);
    console.log(`Slot 0x${i}: ${response}`);
  }
}

lookupFunWithStorage();
