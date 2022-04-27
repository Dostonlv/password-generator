function  getPassword(){
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+<>?/{}[]|";
    let passwordLength = 16;
    let password = "";

    for(let i=0; i < passwordLength; i++){
        let random = Math.floor(Math.random() * chars.length);
        password += chars.substring(random, random + 1);
    }
    document.getElementById("password").value = password;
}

let btn = document.getElementById("btn");
btn.addEventListener("click", getPassword);

