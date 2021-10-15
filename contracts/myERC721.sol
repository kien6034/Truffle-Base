// SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract myERC721 is ERC721 {
    address public owner;

    mapping(address => bool) whitelisted;

    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {
        owner = msg.sender;
    }

    function addWhitelistAddress(address _address) public {
        whitelisted[_address] = true;
    }

    function checkIfWhiteListed(address _address) public view returns (bool) {
        return whitelisted[_address];
    }
}
