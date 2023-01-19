# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# Scripts

** Storage & StorageSlot contracts **

3 scripts to practice different use cases to lookup storage

1. lookup script:
   The base case is commented out, using getStorageAt() to lookup storage at 0x0 slot.
   The second case uses hexZeroPad to convert value to hex (32bytes) to concatenate the key and the baseSlot and finally get the slot (slot = keccak256(key + baseSlot))

2. lookupAllocated script
   We used StorageSlot library from OpenZeppelin in order to allocate a random slot to a value using keccak256 on a random string
   Same calculation is done to lookup to storage slote allocated to the value 2019.

3. lookupCheckFunction script
   We use the interface of the contract to call the check method. We don't use getStorageAt, instead we use the hre method getContractAt.
   The value will be logged to our local node since we used console.log on the backend (solidity contract)

** FunWithStorage contract **
