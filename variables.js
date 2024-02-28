// export var address = "0x788Ef623CB2490860a76F8f58CE7cD5a9B294f74";
// export var abi = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "certificate",
// 				"type": "string"
// 			}
// 		],
// 		"name": "addCertificate",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "name",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "authorizedAddress",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "bool",
// 				"name": "isAuthorized",
// 				"type": "bool"
// 			}
// 		],
// 		"name": "AuthorizationChanged",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "issuer",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "bytes32",
// 				"name": "certificateHash",
// 				"type": "bytes32"
// 			}
// 		],
// 		"name": "CertificateAdded",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "authorizedAddress",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "isAuthorized",
// 				"type": "bool"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "name",
// 				"type": "string"
// 			}
// 		],
// 		"name": "changeAuthorization",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "a",
// 				"type": "address"
// 			}
// 		],
// 		"name": "getAuthorisedStatus",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getKeys",
// 		"outputs": [
// 			{
// 				"internalType": "address[]",
// 				"name": "",
// 				"type": "address[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "a",
// 				"type": "address"
// 			}
// 		],
// 		"name": "getName",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "auth",
// 				"type": "address"
// 			}
// 		],
// 		"name": "verifyAuthority",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "certificate",
// 				"type": "string"
// 			}
// 		],
// 		"name": "verifyCertificate",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ];