// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateRegistry {
    address public owner;
    mapping(address => bool) public authorizedAddresses;
    mapping(bytes32 => bool) public certificates;

    event CertificateAdded(address indexed issuer, bytes32 certificateHash);
    event AuthorizationChanged(address indexed authorizedAddress, bool isAuthorized);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyAuthorized() {
        require(authorizedAddresses[msg.sender], "Not authorized");
        _;
    }

    constructor() {
        owner = msg.sender;
        authorizedAddresses[msg.sender] = true;
    }

    function addCertificate(string memory certificate) external onlyAuthorized {
        bytes32 certificateHash = sha256(bytes(certificate));
        require(!certificates[certificateHash], "Certificate already exists");
        certificates[certificateHash] = true;
        emit CertificateAdded(msg.sender, certificateHash);
    }

    function verifyCertificate(bytes32 certificateHash) external view returns (bool) {
        return certificates[certificateHash];
    }

    function changeAuthorization(address authorizedAddress, bool isAuthorized) external onlyOwner {
        authorizedAddresses[authorizedAddress] = isAuthorized;
        emit AuthorizationChanged(authorizedAddress, isAuthorized);
    }
}
