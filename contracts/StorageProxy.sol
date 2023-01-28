// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./StorageSlot.sol";

contract Proxy {
    fallback() external {
        (bool success, ) = StorageSlot
            .getAddressSlot(keccak256("impl"))
            .value
            .delegatecall(msg.data);
        require(success);
    }

    function changeImplementation(address _implementation) external {
        StorageSlot.getAddressSlot(keccak256("impl")).value = _implementation;
    }
}

contract logic1 {
    uint x;

    function changeX(uint _x) external {
        x = _x;
    }
}

contract logic2 {
    uint x;

    function changeX(uint _x) external {
        x = _x;
    }

    function tripleX() external {
        x *= 3;
    }
}
