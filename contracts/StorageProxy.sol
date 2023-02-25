// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./StorageSlot.sol";

contract Proxy {
    fallback() external {
        (bool success, ) = StorageSlot.getAddressSlot(keccak256("impl")).value.delegatecall(msg.data);
        require(success);
    }

    function changeImplementation(address _implementation) external {
        StorageSlot.getAddressSlot(keccak256("impl")).value = _implementation;
    }
}

contract Logic1 {
    uint256 public x;

    function changeX(uint256 _x) external {
        x = _x;
    }
}

contract Logic2 {
    uint256 public x;

    function changeX(uint256 _x) external {
        x = _x;
    }

    // function tripleX() external {
    //     x *= 3;
    // }
}
