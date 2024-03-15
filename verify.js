async function sha256(message) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message);                    

  // hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string                  
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

async function Verifyyy() {
  var output = document.getElementById("balance");
  output.style.display = "none";

  var load = document.getElementById("loading");
  load.style.display = "flex";
  // if (window.ethereum) {
  //var certificate = document.getElementById("cert_id").value;
  // var certificate = ((Math.random() * 100000).toString() + "xxxx");
  var certificate = (11111111).toString()
  var sizeoffilter = 1000000;
  var x = await sha256(certificate);
  var x = "0x" + x;
  // console.log(x);
  // console.log(BigInt(x) % BigInt(sizeoffilter));
  var remaining = Number(BigInt(x) % BigInt(sizeoffilter));
  var valid = localStorage.getItem(remaining);
  if (!valid) {
    load.style.display = "none";
    output.style.display = "flex";
    output.textContent = "The document is not Verified (Request Filtered) ";
    output.style.background = "rgb(255, 36, 36)";
    output.style.color = "white ";
    output.style.boxShadow = "10px 10px 8px  #3a3a3a";
  } else {
    
    //   var web3 = new Web3(window.ethereum);
    const web3 = new Web3(
      "https://sepolia.infura.io/v3/efc3e3e727fe491798d7f7e58776600f"
    );

    var contract = new web3.eth.Contract(abi, address);

    // Example: Call a View/Pure Function
    contract.methods.verifyCertificate(certificate).call((error, result) => {
      // console.log("something");
      if (!error) {
        console.log("yes");
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
  }
}



function runBenchmark(x) {
  const startTime = performance.now();

  // Run your function multiple times to get a better measurement
  for (let i = 0; i < x; i++) {
      Verifyyy();
  }

  const endTime = performance.now();
  const executionTime = endTime - startTime;

  console.log("Execution time:", executionTime, "milliseconds");
}
