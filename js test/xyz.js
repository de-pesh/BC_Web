function handleFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        readFileAndHash(file);
    } else {
        alert('Please select a file.');
    }
}

function readFileAndHash(file) {
    const reader = new FileReader();

    reader.onload = function (event) {
        const content = event.target.result;
        hashString(content).then(function(hash) {
            document.getElementById('hashResult').innerText = 'Hash: ' + hash;
        });
    };

    reader.readAsArrayBuffer(file);
}

function hashString(content) {
    const encoder = new TextEncoder();
    const data = encoder.encode(content);
    return crypto.subtle.digest('SHA-256', data).then(bufferToHex);
}

function bufferToHex(buffer) {
    const view = new DataView(buffer);
    let hex = '';
    for (let i = 0; i < view.byteLength; i++) {
        hex += view.getUint8(i).toString(16).padStart(2, '0');
    }
    return hex;
}
