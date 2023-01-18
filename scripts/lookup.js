const hre = require("hardhat");
const { keccak256, hexZeroPad } = hre.ethers.utils;

const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const address2 = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

async function lookup() {
  // eth_getStorageAt
  //const value = await hre.ethers.provider.getStorageAt(address, "0x0");

  const key = hexZeroPad(84, 32);
  const baseSlot = hexZeroPad(0x2, 32).slice(2);
  //   console.log({ key, baseSlot });

  const slot = keccak256(key + baseSlot);

  const value = await hre.ethers.provider.getStorageAt(address2, slot);

  console.log(parseInt(value));
}

lookup();
