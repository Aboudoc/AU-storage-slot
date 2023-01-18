const hre = require("hardhat");
const { keccak256, toUtf8Bytes } = hre.ethers.utils;

const address = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

async function lookupAllocated() {
  // eth_getStorageAt

  const slot = keccak256(toUtf8Bytes("aboutika"));

  const value = await hre.ethers.provider.getStorageAt(address, slot);

  console.log(parseInt(value));
}

lookupAllocated();
