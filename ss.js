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

async function Verify() {
  var output = document.getElementById("balance");
  output.style.display = "none";

  var load = document.getElementById("loading");
  load.style.display = "flex";
  if (window.ethereum) {
    var certificate = document.getElementById("cert_id").value;
    var web3 = new Web3(window.ethereum);

    var contract = new web3.eth.Contract(abi, address);

    await contract.methods
      .verifyCertificate(certificate)
      .call()
      .then(function (result) {
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
      })
      .catch(function (tx) {
        load.style.display = "none";
        output.style.display = "flex";
        output.textContent = tx;
        output.style.background = "rgb(255, 36, 36)";
        output.style.color = "white ";
        output.style.boxShadow = "10px 10px 8px  #3a3a3a";
      });
  } else {
    load.style.display = "none";
    output.style.display = "flex";
    var output = document.getElementById("balance");
    output.textContent = "Please check metamask";
    output.style.background = "rgba(20, 20, 20, 0.5)";
    output.style.color = "rgb(255, 223, 223)";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  }
}

async function AddCertificate() {
  var output = document.getElementById("balance");
  output.style.display = "none";

  var load = document.getElementById("loading");
  load.style.display = "flex";
  if (window.ethereum) {
    var accounts = await ethereum.request({ method: "eth_requestAccounts" });
    var certificate = document.getElementById("cert_id").value;
    var web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(abi, address);
    var validUser = false;
    await contract.methods
      .verifyAuthority(accounts[0])
      .call()
      .then(function (result) {
        validUser = result;
      });
    if (validUser == false) {
      load.style.display = "none";
      output.style.display = "flex";
      output.textContent = "You are not authorised for this action";
      output.style.background = "rgb(255, 36, 36)";
      output.style.color = "white ";
      output.style.boxShadow = "10px 10px 8px  #3a3a3a";
    } else {
      var status = false;
      await contract.methods
        .verifyCertificate(certificate)
        .call()
        .then(function (result) {
          status = result;
        });
      console.log(status);
      if (status == false) {
        await contract.methods
          .addCertificate(certificate)
          .send({ from: accounts[0] })
          .then(function () {
            load.style.display = "none";
            output.style.display = "flex";
            output.textContent = "The document is Added";
            output.style.background = "rgba(136, 255, 0, 0.5)";
            output.style.color = "rgb(33, 33, 33) ";
            output.style.boxShadow = "10px 10px 8px  #3a3a3a";
          })
          .catch(function (error) {
            load.style.display = "none";
            output.style.display = "flex";
            output.textContent = "Transaction Failed";
            output.style.background = "rgb(255, 36, 36)";
            output.style.color = "white ";
            output.style.boxShadow = "10px 10px 8px  #3a3a3a";
          });
      } else {
        load.style.display = "none";
        output.style.display = "flex";
        output.textContent = "The document already exists";
        output.style.background = "rgb(255, 36, 36)";
        output.style.color = "white ";
        output.style.boxShadow = "10px 10px 8px  #3a3a3a";
      }
    }
  } else {
    load.style.display = "none";
    output.style.display = "flex";
    output.textContent = "Please check metamask";
    output.style.background = "rgba(20, 20, 20, 0.5)";
    output.style.color = "rgb(255, 223, 223)";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  }
}

async function AddAuthority() {
  var output = document.getElementById("balance");
  output.style.display = "none";
  var load = document.getElementById("loading");
  load.style.display = "flex";

  if (window.ethereum) {
    var accounts = await ethereum.request({ method: "eth_requestAccounts" });
    var authority = document.getElementById("cert_id").value;
    var name = document.getElementById("name_id").value;
    var web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(abi, address);

    var validUser = false;
    await contract.methods
      .verifyAuthority(accounts[0])
      .call()
      .then(function (result) {
        validUser = result;
      });
    if (validUser == false) {
      load.style.display = "none";
      output.style.display = "flex";
      output.textContent = "You are not authorised for this action";
      output.style.background = "rgb(255, 36, 36)";
      output.style.color = "white ";
      output.style.boxShadow = "10px 10px 8px  #3a3a3a";
    } else {
      var status = false;
      await contract.methods
        .verifyAuthority(authority)
        .call()
        .then(function (result) {
          status = result;
        });
      console.log(status);
      if (status == false) {
        await contract.methods
          .ininElection(authority, name)
          .send({ from: accounts[0] })
          .then(function () {
            load.style.display = "none";
            output.style.display = "flex";
            output.textContent = "Voting process Initiated";
            output.style.background = "rgba(136, 255, 0, 0.5)";
            output.style.color = "rgb(33, 33, 33) ";
            output.style.boxShadow = "10px 10px 8px  #3a3a3a";
          })
          .catch(function (error) {
            load.style.display = "none";
            output.style.display = "flex";
            output.textContent = error;
            output.style.background = "rgb(255, 36, 36)";
            output.style.color = "white ";
            output.style.boxShadow = "10px 10px 8px  #3a3a3a";
          });
      } else {
        load.style.display = "none";
        output.style.display = "flex";
        output.textContent = "Already authorised";
        output.style.background = "rgb(255, 36, 36)";
        output.style.color = "white ";
        output.style.boxShadow = "10px 10px 8px  #3a3a3a";
      }
    }
  } else {
    load.style.display = "none";
    output.style.display = "flex";
    output.textContent = "Please check metamask";
    output.style.background = "rgba(20, 20, 20, 0.5)";
    output.style.color = "rgb(255, 223, 223)";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  }
}

async function RemoveAuthority() {
  var output = document.getElementById("balance");
  output.style.display = "none";
  var load = document.getElementById("loading");
  load.style.display = "flex";
  if (window.ethereum) {
    var accounts = await ethereum.request({ method: "eth_requestAccounts" });
    var authority = document.getElementById("cert_id").value;
    var name = document.getElementById("name_id").value;
    var output = document.getElementById("balance");
    var web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(abi, address);
    var status = false;
    await contract.methods
      .verifyAuthority(authority)
      .call()
      .then(function (result) {
        status = result;
      });
    console.log(status);
    if (status == true) {
      await contract.methods
        .changeAuthorization(authority, false, name)
        .send({ from: accounts[0] })
        .then(function () {
          load.style.display = "none";
          output.style.display = "flex";
          output.textContent = "Authority Removed";
          output.style.background = "rgba(136, 255, 0, 0.5)";
          output.style.color = "rgb(33, 33, 33) ";
          output.style.boxShadow = "10px 10px 8px  #3a3a3a";
        })
        .catch(function (error) {
          load.style.display = "none";
          output.style.display = "flex";
          output.textContent = error;
          output.style.background = "rgb(255, 36, 36)";
          output.style.color = "white ";
          output.style.boxShadow = "10px 10px 8px  #3a3a3a";
        });
    } else {
      load.style.display = "none";
      output.style.display = "flex";
      output.textContent = "Given Address has no Authority";
      output.style.background = "rgb(255, 36, 36)";
      output.style.color = "white ";
      output.style.boxShadow = "10px 10px 8px  #3a3a3a";
    }
  } else {
    load.style.display = "none";
    output.style.display = "flex";
    output.textContent = "Please check metamask";
    output.style.background = "rgba(20, 20, 20, 0.5)";
    output.style.color = "rgb(255, 223, 223)";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  }
}

//Authority
async function Authority() {
  var output = document.getElementById("loading");
  output.style.display = "flex";
  if (window.ethereum) {
    var web3 = new Web3(window.ethereum);

    var contract = new web3.eth.Contract(abi, address);

    await contract.methods
      .getVotingStatus()
      .call()
      .then(function (result) {
        if (result == true) {
          output.style.display = "none";
          window.location.href = "vote.html";
        } else {
          output.style.display = "none";
          window.location.href = "addAuth.html";
        }
      })
      .catch(function (tx) {
        console.log("transaction issue");
      });
  } else {
    console.log("meta issue");
  }
}

async function FetchVoteData() {
  var output = document.getElementById("balance");
  output.style.display = "none";
  var load = document.getElementById("loading");
  load.style.display = "flex";

  if (window.ethereum) {
    var id = document.getElementById("text_cert_upload_data_id");
    var nm = document.getElementById("text_cert_upload_data");
    var web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(abi, address);
    //get data
    var name;
    var add;
    await contract.methods
      .getName()
      .call()
      .then(function (result) {
        name = result;
      });

    await contract.methods
      .getAddress()
      .call()
      .then(function (result) {
        add = result;
      });

    let text = document.createTextNode(name);
    let text2 = document.createTextNode(add);
    id.appendChild(text2);
    nm.appendChild(text);
    load.style.display = "none";
  } else {
    load.style.display = "none";
    output.style.display = "flex";
    output.textContent = "Please check metamask";
    output.style.background = "rgba(20, 20, 20, 0.5)";
    output.style.color = "rgb(255, 223, 223)";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  }
}

async function Vote(v) {
  var output = document.getElementById("balance");
  output.style.display = "none";
  var load = document.getElementById("loading");
  load.style.display = "flex";

  if (window.ethereum) {
    var accounts = await ethereum.request({ method: "eth_requestAccounts" });
    var web3 = new Web3(window.ethereum);
    var contract = new web3.eth.Contract(abi, address);

    var validUser = false;
    await contract.methods
      .verifyAuthority(accounts[0])
      .call()
      .then(function (result) {
        validUser = result;
      });
    if (validUser == false) {
      load.style.display = "none";
      output.style.display = "flex";
      output.textContent = "You are not authorised to Vote";
      output.style.background = "rgb(255, 36, 36)";
      output.style.color = "white ";
      output.style.boxShadow = "10px 10px 8px  #3a3a3a";
    } else {
      var status;
      await contract.methods
        .Vote(v)
        .send({ from: accounts[0] })
        .then(function (result) {
          status = result;
        });
      console.log(status);
      // console.log(typeof status);
      if (!v) {
        load.style.display = "none";
        output.style.display = "flex";
        output.textContent = "Voting ends, Institute is not trusted by all";
        output.style.background = "rgb(255, 36, 36)";
        output.style.color = "white";
        output.style.boxShadow = "10px 10px 8px  #3a3a3a";
      } else {
            await contract.methods
          .getVotingStatus()
          .call()
          .then(function (result) {
            if (result == true) {
              load.style.display = "none";
              output.style.display = "flex";
              output.textContent = "Thanks for voting, Wait for other members";
              output.style.background = "rgba(136, 255, 0, 0.5)";
              output.style.color = "rgb(33, 33, 33) ";
              output.style.boxShadow = "10px 10px 8px  #3a3a3a";
            } else {
              load.style.display = "none";
              output.style.display = "flex";
              output.textContent = "Voting ends, Institute is trusted by All";
              output.style.background = "rgba(136, 255, 0, 0.5)";
              output.style.color = "rgb(33, 33, 33) ";
              output.style.boxShadow = "10px 10px 8px  #3a3a3a";
            }
          })
          .catch(function (tx) {
            console.log("transaction issue");
          });

        
      }
    }
  } else {
    load.style.display = "none";
    output.style.display = "flex";
    output.textContent = "Please check metamask";
    output.style.background = "rgba(20, 20, 20, 0.5)";
    output.style.color = "rgb(255, 223, 223)";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  }
}

async function GetName() {
  console.log("function called");
  var ins = document.getElementById("data");
  var but = document.getElementById("some_but");

  var load = document.getElementById("loading");
  load.style.display = "flex";

  if (window.ethereum) {
    var accounts = await ethereum.request({ method: "eth_requestAccounts" });
    var web3 = new Web3(window.ethereum);
    console.log(accounts[0]);
    var contract = new web3.eth.Contract(abi, address);
    var name;

    await contract.methods
      .getVotingStatus()
      .call()
      .then(function (result) {
        if (result == true) {
          let text = document.createTextNode("Vote for new Institute");
          but.appendChild(text);
        } else {
          let text = document.createTextNode("Add new Institute");
          but.appendChild(text);
        }
      })
      .catch(function (tx) {
        console.log("transaction issue");
      });

    await contract.methods
      .getNamee(accounts[0])
      .call()
      .then(function (result) {
        console.log(result);
        let text = document.createTextNode(result);
        ins.appendChild(text);
      })
      .catch(function (tx) {
        console.log("transaction issue");
      });

    load.style.display = "none";
  } else {
    load.style.display = "none";
    console.log("meta error");
  }
}
