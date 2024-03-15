// const abi = [
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "certificate",
//         type: "string",
//       },
//     ],
//     name: "addCertificate",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "name",
//         type: "string",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "authorizedAddress",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "bool",
//         name: "isAuthorized",
//         type: "bool",
//       },
//     ],
//     name: "AuthorizationChanged",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "issuer",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "bytes32",
//         name: "certificateHash",
//         type: "bytes32",
//       },
//     ],
//     name: "CertificateAdded",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "authorizedAddress",
//         type: "address",
//       },
//       {
//         internalType: "bool",
//         name: "isAuthorized",
//         type: "bool",
//       },
//       {
//         internalType: "string",
//         name: "name",
//         type: "string",
//       },
//     ],
//     name: "changeAuthorization",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "a",
//         type: "address",
//       },
//       {
//         internalType: "string",
//         name: "n",
//         type: "string",
//       },
//     ],
//     name: "ininElection",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "bool",
//         name: "x",
//         type: "bool",
//       },
//     ],
//     name: "Vote",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getAddress",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "a",
//         type: "address",
//       },
//     ],
//     name: "getAuthorisedStatus",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getCertificates",
//     outputs: [
//       {
//         internalType: "bytes32[]",
//         name: "isrc",
//         type: "bytes32[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getKeys",
//     outputs: [
//       {
//         internalType: "address[]",
//         name: "",
//         type: "address[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getName",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "a",
//         type: "address",
//       },
//     ],
//     name: "getNamee",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getVotingStatus",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "auth",
//         type: "address",
//       },
//     ],
//     name: "verifyAuthority",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "certificate",
//         type: "string",
//       },
//     ],
//     name: "verifyCertificate",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
// ];
// const address = "0x925D1D8281Cd588C9e04dD638715Fe0C28EAF6Ec";
let web3 = null;
let contract = null;
async function Verify() {
  if (!window.ethereum) {
    console.log("mm");
    return; // Early exit if no Ethereum provider
  }
  if (!web3) {
    web3 = new Web3(window.ethereum);
  }
  if (!contract) {
    contract = new web3.eth.Contract(abi, address);
  }
  try {
    // Define certificate (modify as needed)
    const certificate = "11111111";

    // Call verifyCertificate method using async/await for sequential execution
    const result = await contract.methods.verifyCertificate(certificate).call();

    // Log result
    console.log(result ? "V" : "NV"); // Concise output based on truthy/falsy value
  } catch (tx) {
    // Handle potential errors during verification
    console.log("tx:", tx); // Log the error object for debugging
  }
  return 1;

}

async function runBenchmark(x) {
  const startTime = performance.now();

  // Run your function multiple times to get a better measurement
  for (let i = 0; i < x; i++) {
     await Verify();
  }
  const endTime = performance.now();
  const executionTime = endTime - startTime;
  console.log("Execution time:", executionTime, "milliseconds");
}

