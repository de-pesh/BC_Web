// SPDX-License-Identifier: MIT
pragma solidity 0.8;
contract CertificateVandV {
    bytes32 certificate;
    function getbalance() public view returns(bytes32){
        return certificate;
    }
    function insertCertificate(string memory cert) public  {
        bytes memory c = bytes(cert);
        certificate = sha256(c);
    }
}