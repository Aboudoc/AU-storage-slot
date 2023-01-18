// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./StorageSlot.sol";

contract Storage {
    uint256 x = 22; // 0x0
    uint256 y = 12; // 0x1

    mapping(uint => uint) testing; // 0x2

    constructor() {
        // keccak256(84 in hex + 0x2)
        testing[84] = 7;
        // keccack256(19 in hex + 0x2)
        testing[19] = 44;

        /** Allocating 2019 value to keccak256("aboutika") slot */
        StorageSlot.getUint256Slot(keccak256("aboutika")).value = 2019;
    }
}
