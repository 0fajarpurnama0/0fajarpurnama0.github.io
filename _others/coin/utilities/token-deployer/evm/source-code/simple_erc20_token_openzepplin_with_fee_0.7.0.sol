// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^3.4.2-solc-0.7
pragma solidity ^0.7.0;

import {ERC20} from "@openzeppelin/contracts@3.4.2-solc-0.7/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(
        string memory name_,
        string memory symbol_,
        uint256 initialSupply,
        address recipient,
        address payable admin,
        uint256 adminFeePercentage,
        uint256 fixedEthFeeInWei
    ) payable ERC20(name_, symbol_) {
        require(msg.value >= fixedEthFeeInWei, "Incorrect ETH fee sent during deployment.");

        uint256 adminMint = (initialSupply * adminFeePercentage) / 100;
        uint256 recipientMint = initialSupply - adminMint;

        _mint(recipient, recipientMint * 10 ** decimals());
        _mint(admin, adminMint * 10 ** decimals());

        (bool success, ) = admin.call{value: msg.value}("");
        require(success, "ETH transfer to admin failed.");
    }
}