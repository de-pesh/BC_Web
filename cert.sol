// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateRegistry {


    //VARIABLES
    address private owner;
    mapping(address => bool) private  authorizedAddresses;
    mapping(bytes32 => bool) private  certificates;
    mapping(address => string) private  authorizedNames;
    address [] private  keys;


    //EVENTS
    event CertificateAdded(address indexed issuer, bytes32 certificateHash);
    event AuthorizationChanged(address indexed authorizedAddress, bool isAuthorized);


    //MODIFIER
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyAuthorized() {
        require(authorizedAddresses[msg.sender], "Not authorized");
        _;
    }


    //CONSTRUCTOR
    constructor(string memory name) {
        authorizedNames[msg.sender] = name;
        owner = msg.sender;
        authorizedAddresses[msg.sender] = true;
        keys.push(msg.sender);
    }


    //ADD CERTIFICATE
    function addCertificate(string memory certificate) external onlyAuthorized {
        bytes32 certificateHash = sha256(bytes(certificate));
        require(!certificates[certificateHash], "Certificate already exists");
        certificates[certificateHash] = true;
        emit CertificateAdded(msg.sender, certificateHash);
    }


    //VERIFY CERTIFICATE
    function verifyCertificate(string memory certificate) public view returns (bool) {
        bytes32 certificateHash = sha256(bytes(certificate));
        return (bool)(certificates[certificateHash]);
    }


    //VERIFY AUTHORITY
    function verifyAuthority(address auth) public view returns (bool) {
        return (bool)(authorizedAddresses[auth]);
    }


    //UPDATE AUTHORITY
    function changeAuthorization(address authorizedAddress, bool isAuthorized, string memory name) external onlyOwner {
        authorizedAddresses[authorizedAddress] = isAuthorized;
        authorizedNames[authorizedAddress] = name;
        keys.push(authorizedAddress);
        emit AuthorizationChanged(authorizedAddress, isAuthorized);
    }


    //GET KEYS
    function getKeys() public view returns(address[] memory) {
        return keys;
     }


    //GET NAME
     function getName(address a) public view returns(string memory){
        return authorizedNames[a];
     }


    //GET STATUS
     function getAuthorisedStatus(address a) public view returns(bool){
        return authorizedAddresses[a];
     }

    
}
