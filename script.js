const loginOpenBtn = document.querySelector("#loginOpen"),
    signupBtn = document.querySelector("#signupViewBtn"),
    loginBtn = document.querySelector("#loginViewBtn"),
    homeAccess = document.querySelector(".home"),
    box = document.querySelector(".form_box"),
    pwUnhide = document.querySelectorAll(".hidden");

loginOpenBtn.addEventListener("click", () => homeAccess.classList.add("show"));


pwUnhide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPass = icon.parentElement.querySelector("Input");
        if(getPass.type === "password"){
            getPass.type = "text";
            icon.classList.replace("fa-eye-slash" , "fa-eye");
        }else{
            getPass.type = "password";
            icon.classList.replace("fa-eye" , "fa-eye-slash");
        }
    })
})


signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    box.classList.add("activated");

});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    box.classList.remove("activated");
});