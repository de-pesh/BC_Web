function get_data() {
    $(document).ready(function() {

        var output = $('#balance');
        web3 = new Web3(web3.currentProvider);
    
        var contract;
        var address = "0x29E244EA1846704B2796bc6FE02BD7EE79DB0f5B";
        var abi = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "cert",
                    "type": "string"
                }
            ],
            "name": "insertCertificate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getCertificate",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
        ];
    
        contract = new web3.eth.Contract(abi, address);
        contract.methods.getCertificate().call().then(function(bal){
            output.text("The document is : " + bal)
        });
    });
}

function clean_up() {
    var element = document.getElementById("balance");
    element.textContent = "newText";

}

document.getElementById('myfileArea').addEventListener('change', () => {
    $('#text_cert_upload').html('UPLOADED');
});