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
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
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
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
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
				"name": "a",
				"type": "address"
			}
		],
		"name": "getAuthorisedStatus",
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
		"name": "getKeys",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "a",
				"type": "address"
			}
		],
		"name": "getName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "auth",
				"type": "address"
			}
		],
		"name": "verifyAuthority",
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
var address = '0x788Ef623CB2490860a76F8f58CE7cD5a9B294f74';

async function Check() {
        var output = document.getElementById("balance");
        
        var id = document.getElementById("userid").value;
        var pass = document.getElementById("pass").value;
        if(id=="admin" && pass == "admin"){
            if (window.ethereum) {
                var accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                var web3 = new Web3(window.ethereum);
                var contract = new web3.eth.Contract(abi, address);
                var status = false;
                await contract.methods.verifyAuthority(accounts[0]).call().then(function (result) {
                    status = result;
                });
                if (status == false) {
                    window.location.href = "/InvalidUser.html"; 
                } else {
                    window.location.href = "/admin.html"; 
                }
            }
            else {
                output.textContent = "No accounts Detected";
            	output.style.background = "rgb(255, 36, 36)";
            	output.style.color = "white ";
            	output.style.boxShadow = "10px 10px 8px  #3a3a3a"; 
            }
            
        } else {
            output.textContent = "Invalid UserId or Password";
            output.style.background = "rgb(255, 36, 36)";
            output.style.color = "white ";
            output.style.boxShadow = "10px 10px 8px  #3a3a3a";
        }
}
