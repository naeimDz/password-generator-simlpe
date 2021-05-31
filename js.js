function getPassword(){
    var chars ="0123456789acdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQSTUVWXYZ(?=.*[@$!%*#?&])"
    var PasswordLength = [8,16,24];
    var password ="";
    for (var i=0;i<PasswordLength[Math.floor(Math.random()*3)];i++) {
        var randomNumber= Math.floor(Math.random()*chars.length)
        password =password.concat(chars[randomNumber]);
    }
document.getElementById("password").value=password; 

}


function copyContent(){
    const btnCopy = document.getElementById("copy");
    const textarea = document.getElementById("password");
    textarea.select();
    document.execCommand("copy");
    btnCopy.classList.remove("fa-copy","copy");
    btnCopy.classList.add("fa-check","check");
    btnCopy.id="check";
      
    setTimeout(function(){
        document.getSelection().removeAllRanges();
        btnCopy.classList.remove("fa-check","check");
        btnCopy.classList.add("fa-copy","copy");
        btnCopy.id="copy";
    },800);
}
