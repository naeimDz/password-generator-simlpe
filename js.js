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
    btnCopy.innerHTML= "<i class='fas fa-check check' id='check'></i>";

         
    setTimeout(function(){
        document.getSelection().removeAllRanges();
        btnCopy.innerHTML= "copy";
    },800);




}
