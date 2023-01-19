const { ethers } = require("hardhat");
const hre = require("hardhat");
const { keccak256, hexZeroPad } = hre.ethers.utils;

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
  console.log("--------------------------------");

  const baseSlot = hexZeroPad(0x2, 32);
  const slot = keccak256(baseSlot);
  const arrayValue = await ethers.provider.getStorageAt(funAddress, slot);
  console.log(
    `Value of the index 0 of the array stored at slot ${slot}: ${parseInt(
      arrayValue
    )}`
  );

  const key2 = hexZeroPad(0, 32);
  const baseSlot2 = hexZeroPad(0x3, 32).slice(2);
  const slot2 = keccak256(key2 + baseSlot2);
  const mappingValue = await ethers.provider.getStorageAt(funAddress, slot2);
  console.log(
    `Value of the key 0 of the mapping stored to slot ${slot2}: ${parseInt(
      mappingValue
    )}`
  );
}

lookupFunWithStorage();
