// NOT USE, MANY PROBLEMS: var nome = "Késsia";

// NOT VARIABLE: const nome = "Késsia";

// VARIABLE: let nome = "Késsia"; //

// console.log(nome);

// nome = "Gustavo";
// console.log(nome);

const passwordCamp = document.getElementById("password"); // By ID
const passwordBtn = document.querySelector("#show-password"); // By ID or CLASS

console.log(passwordBtn.type);

passwordBtn.addEventListener("click", function() {
    // if(passwordCamp.type == "password") {
    //     passwordCamp.type = "text"
    // }

    // else {
    //     passwordCamp.type = "password"
    // }

    passwordCamp.type = passwordCamp.type == "password" ? "text" : "password";
})
