const hre = require("hardhat");

const address = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

async function lookup() {
  // eth_getStorageAt
  const value = await hre.ethers.provider.getStorageAt(address, "0x0");

  console.log(parseInt(value));
}

lookup();
