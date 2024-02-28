
async function Check() {
        var output = document.getElementById("balance");
        
        var id = document.getElementById("userid").value;
        var pass = document.getElementById("pass").value;
        if(id=="admin" && pass == "admin"){
            if (window.ethereum) {
                // var accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                // var web3 = new Web3(window.ethereum);
                // var contract = new web3.eth.Contract(abi, address);
                // var status = false;
                // await contract.methods.verifyAuthority(accounts[0]).call().then(function (result) {
                //     status = result;
                // });
				// console.log(status);
                // if (status == false) {
                //     window.location.href = "/InvalidUser.html"; 
                // } else {
                    window.location.href = "/admin.html"; 
                // }
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
