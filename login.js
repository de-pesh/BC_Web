function Check() {
        var output = document.getElementById("balance");
        
        var id = document.getElementById("userid").value;
        var pass = document.getElementById("pass").value;
        if(id=="admin" && pass == "admin"){
            window.location.href = "/admin.html"; 
        } else {
            output.textContent = "Invalid UserId or Password";
            output.style.background = "rgb(255, 36, 36)";
            output.style.color = "white ";
            output.style.boxShadow = "10px 10px 8px  #3a3a3a";
        }
}
