var abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "certificate",
				"type": "string"
			}
		],
		"name": "addCertificate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "authorizedAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isAuthorized",
				"type": "bool"
			}
		],
		"name": "AuthorizationChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "issuer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "certificateHash",
				"type": "bytes32"
			}
		],
		"name": "CertificateAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "authorizedAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isAuthorized",
				"type": "bool"
			}
		],
		"name": "changeAuthorization",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "authorizedAddresses",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "certificates",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "certificate",
				"type": "string"
			}
		],
		"name": "verifyCertificate",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
var address = '0x58954Ec5695b2Ef53FB7F964f9C6D5A3440b2281';


function toHex(str) {
    var result = '';
    for (var i=0; i<str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
  }

// function get_data() {
//     $(document).ready(function () {
//         var output = document.getElementById("balance");
//         var web3 = new Web3();
//         web3 = new Web3(web3.currentProvider);
//         var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//         //var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"))
//         var contract;
//         var address = "0xf1a03A2856E0576566B7D8051a18fC841E802197";
//         var abi = 
//         contract = new web3.eth.Contract(abi, address);

//         var x = document.getElementById("cert_id").value;
//         console.log(typeof (x));
//         web3.eth.getAccounts().then(function (accounts) {
//             var acc = accounts[0];
//             return contract.methods.verifyCertificate(x).send({ from: acc })
//         }).then(function (tx) {
//             output.textContent = "The document is : " + tx;
//             console.log(tx);
//         }).catch(function (tx) {
//             output.textContent = "The document is error::: " + tx;
//         });

//         // contract.methods.verifyCertificate(x).call().then(function(bal){
//         //         output.text("The document is : " + bal) 
//         // })
//         // .catch((error) => {
//         //     output.textContent = "Failed to reach servers" + error;
//         // });
//     });
// }

// function clean_up() {
//     var element = document.getElementById("balance");
//     element.textContent = "newText";

// }


// function connect_Metamask() {
//     let account;
//     const connectMetamask = async () => {
//         if (window.ethereum !== "undefined") {
//             const accounts = await ethereum.request({ method: "eth_requestAccounts" });
//             account = accounts[0];
//             document.getElementById("accountArea").innerHTML = account;
//         }
//     }
// }

async function Verify() {
    
    if (window.ethereum) {
        var certificate = document.getElementById("cert_id").value;
        var output = document.getElementById("balance");
        var web3 = new Web3(window.ethereum);
        var contract = new web3.eth.Contract(abi, address);
        await contract.methods.verifyCertificate(certificate).call().then(function (result) {
            if (result == true) {
                output.textContent = "The document is Verified";
                output.style.background = "rgba(136, 255, 0, 0.5)";
                output.style.color = "rgb(33, 33, 33) ";
                output.style.boxShadow = "10px 10px 8px  #3a3a3a";
            } else {
                output.textContent = "The document is not Verified";
                output.style.background = "rgb(255, 36, 36)";
                output.style.color = "white ";
                output.style.boxShadow = "10px 10px 8px  #3a3a3a";
            }
        }).catch(function (tx) {
            output.textContent = "Transaction Error: " + tx;
            output.style.background = "rgb(255, 36, 36)";
            output.style.color = "white ";
            output.style.boxShadow = "10px 10px 8px  #3a3a3a";
        });
    }
    else {
        var output = document.getElementById("balance");
        output.textContent = "Please check metamask";
        output.style.background = "rgba(20, 20, 20, 0.5)";
        output.style.color = "rgb(255, 223, 223)";
        output.style.boxShadow = "10px 10px 8px  #3a3a3a";

    }
}
// }


async function AddCertificate() {
    if (window.ethereum) {
        var accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        var certificate = document.getElementById("cert_id").value;
        var output = document.getElementById("balance");
        var web3 = new Web3(window.ethereum);
        var contract = new web3.eth.Contract(abi, address);
        var status = false;
        await contract.methods.verifyCertificate(certificate).call().then(function (result) {
            status = result;
        });
        console.log(status)
        if (status == false) {
            await contract.methods.addCertificate(certificate).send({ from: accounts[0] }).then(function () {
                output.textContent = "The document is Added";
                output.style.background = "rgba(136, 255, 0, 0.5)";
                output.style.color = "rgb(33, 33, 33) ";
                output.style.boxShadow = "10px 10px 8px  #3a3a3a";
            }).catch(function (error) {
                output.textContent = error;
                output.style.background = "rgb(255, 36, 36)";
                output.style.color = "white ";
                output.style.boxShadow = "10px 10px 8px  #3a3a3a";
            });
        } else {
            output.textContent = "The document already exists";
            output.style.background = "rgb(255, 36, 36)";
            output.style.color = "white ";
            output.style.boxShadow = "10px 10px 8px  #3a3a3a";
        }
    }
    else {
        var output = document.getElementById("balance");
        output.textContent = "Please check metamask";
        output.style.background = "rgba(20, 20, 20, 0.5)";
        output.style.color = "rgb(255, 223, 223)";
        output.style.boxShadow = "10px 10px 8px  #3a3a3a";

    }
}



async function AddAuthority() {
    if (window.ethereum) {
        var accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        var certificate = document.getElementById("cert_id").value;
        var output = document.getElementById("balance");
        var web3 = new Web3(window.ethereum);
        var contract = new web3.eth.Contract(abi, address);
        var status = false;
        await contract.methods.verifyAuthority(certificate).call().then(function (result) {
            status = result;
        });
        console.log(status)
        if (status == false) {
            await contract.methods.addCertificate(certificate, true).send({ from: accounts[0] }).then(function () {
                output.textContent = "Authority is updated";
                output.style.background = "rgba(136, 255, 0, 0.5)";
                output.style.color = "rgb(33, 33, 33) ";
                output.style.boxShadow = "10px 10px 8px  #3a3a3a";
            }).catch(function (error) {
                output.textContent = error;
                output.style.background = "rgb(255, 36, 36)";
                output.style.color = "white ";
                output.style.boxShadow = "10px 10px 8px  #3a3a3a";
            });
        } else {
            output.textContent = "Already authorised";
            output.style.background = "rgb(255, 36, 36)";
            output.style.color = "white ";
            output.style.boxShadow = "10px 10px 8px  #3a3a3a";
        }
    }
    else {
        var output = document.getElementById("balance");
        output.textContent = "Please check metamask";
        output.style.background = "rgba(20, 20, 20, 0.5)";
        output.style.color = "rgb(255, 223, 223)";
        output.style.boxShadow = "10px 10px 8px  #3a3a3a";

    }
}





async function RemoveAuthority() {
    if (window.ethereum) {
        var accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        var authority = document.getElementById("cert_id").value;
        var output = document.getElementById("balance");
        var web3 = new Web3(window.ethereum);
        var contract = new web3.eth.Contract(abi, address);
        var status = false;
        await contract.methods.verifyAuthority(authority).call().then(function (result) {
            status = result;
        });
        console.log(status)
        if (status == true) {
            await contract.methods.addCertificate(authority, false).send({ from: accounts[0] }).then(function () {
                output.textContent = "Authority Removed";
                output.style.background = "rgba(136, 255, 0, 0.5)";
                output.style.color = "rgb(33, 33, 33) ";
                output.style.boxShadow = "10px 10px 8px  #3a3a3a";
            }).catch(function (error) {
                output.textContent = error;
                output.style.background = "rgb(255, 36, 36)";
                output.style.color = "white ";
                output.style.boxShadow = "10px 10px 8px  #3a3a3a";
            });
        } else {
            output.textContent = "Given Address has no Authority";
            output.style.background = "rgb(255, 36, 36)";
            output.style.color = "white ";
            output.style.boxShadow = "10px 10px 8px  #3a3a3a";
        }
    }
    else {
        var output = document.getElementById("balance");
        output.textContent = "Please check metamask";
        output.style.background = "rgba(20, 20, 20, 0.5)";
        output.style.color = "rgb(255, 223, 223)";
        output.style.boxShadow = "10px 10px 8px  #3a3a3a";

    }
}