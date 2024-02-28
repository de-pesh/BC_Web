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
var address = '0xF8068d84C549861e207f0680A2D79EF41C468C97';


function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}



async function AuthorityList() {
  
    var output = document.getElementById("balance");
        output.style.display = "none";

    if (window.ethereum) {
        var accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        var web3 = new Web3(window.ethereum);
        var contract = new web3.eth.Contract(abi, address);
        var status;
        await contract.methods.getKeys().call().then(function (result) {
            status = result;
        });
        status = removeDuplicates(status);
		console.log(status);
        var names = [];
        for(i in status){
            await contract.methods.getName(status[i]).call().then(function (result) {
                names.push(result);
            });
        }
        for(n in names){
            console.log(names[n]);
        }
        

        
        let myDiv = document.getElementById("auth_area");
        for(i in status){
 
            let button = document.createElement('BUTTON');
            let button2 = document.createElement('BUTTON');
 
            let text = document.createTextNode("ADDRESS: " +status[i]);
            let text2 = document.createTextNode("NAME: " +names[i]);

            button.style.width = "100%";
            button.style.marginBottom = "50px";
            button.style.fontSize = "large";

            button2.style.marginBottom = "10px";
            button2.style.fontSize = "large";
            button2.style.background = "#aff2ff";
            button2.style.width = "100%";

            
            // appending text to button
            button.appendChild(text);
            button2.appendChild(text2);
            // appending button to div
            myDiv.appendChild(button2);
            myDiv.appendChild(button);;
        }
    }
    else {
        output.style.display = "flex";
        output.textContent = "Please check metamask";
        output.style.background = "rgba(20, 20, 20, 0.5)";
        output.style.color = "rgb(255, 223, 223)";
        output.style.boxShadow = "10px 10px 8px  #3a3a3a";

    }
}

