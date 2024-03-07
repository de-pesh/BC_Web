var abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "certificate",
        type: "string",
      },
    ],
    name: "addCertificate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authorizedAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isAuthorized",
        type: "bool",
      },
    ],
    name: "AuthorizationChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "issuer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "certificateHash",
        type: "bytes32",
      },
    ],
    name: "CertificateAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "authorizedAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isAuthorized",
        type: "bool",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "changeAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
      {
        internalType: "string",
        name: "n",
        type: "string",
      },
    ],
    name: "ininElection",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "x",
        type: "bool",
      },
    ],
    name: "Vote",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "getAuthorisedStatus",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getKeys",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "getNamee",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVotingStatus",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "auth",
        type: "address",
      },
    ],
    name: "verifyAuthority",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "certificate",
        type: "string",
      },
    ],
    name: "verifyCertificate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
var address = "0x29E244EA1846704B2796bc6FE02BD7EE79DB0f5B";

async function Verifyyy() {
  var output = document.getElementById("balance");
  output.style.display = "none";

  var load = document.getElementById("loading");
  load.style.display = "flex";
  // if (window.ethereum) {
    var certificate = document.getElementById("cert_id").value;
    //   var web3 = new Web3(window.ethereum);
    const web3 = new Web3(
      "https://sepolia.infura.io/v3/efc3e3e727fe491798d7f7e58776600f"
    );

    var contract = new web3.eth.Contract(abi, address);

    // Example: Call a View/Pure Function
    contract.methods.verifyCertificate(certificate).call((error, result) => {
      console.log("something");
        if (!error) {
          if (result == true) {
            load.style.display = "none";
            output.style.display = "flex";
            output.textContent = "The document is Verified";
            output.style.background = "rgba(136, 255, 0, 0.5)";
            output.style.color = "rgb(33, 33, 33) ";
            output.style.boxShadow = "10px 10px 8px  #3a3a3a";
          } else {
            load.style.display = "none";
            output.style.display = "flex";
            output.textContent = "The document is not Verified";
            output.style.background = "rgb(255, 36, 36)";
            output.style.color = "white ";
            output.style.boxShadow = "10px 10px 8px  #3a3a3a";
          }
        } else {
            console.error(error);
        }
    });
  

    // Example: Send a Transaction
    // const txObject = contract.methods.verifyCertificate(certificate);
    

  //   await contract.methods
  //     .verifyCertificate(certificate)
  //     .call()
  //     .then(function (result) {
        
  //     })
  //     .catch(function (tx) {
  //       load.style.display = "none";
  //       output.style.display = "flex";
  //       output.textContent = tx;
  //       output.style.background = "rgb(255, 36, 36)";
  //       output.style.color = "white ";
  //       output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  //     });
  // } else {
  //   load.style.display = "none";
  //   output.style.display = "flex";
  //   var output = document.getElementById("balance");
  //   output.textContent = "Please check metamask";
  //   output.style.background = "rgba(20, 20, 20, 0.5)";
  //   output.style.color = "rgb(255, 223, 223)";
  //   output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  // }
}
