// NOT USE, MANY PROBLEMS: var nome = "Késsia";

// NOT VARIABLE: const nome = "Késsia";

let nome = "Késsia"; // VARIABLE
console.log(nome);

nome = "Gustavo";
console.log(nome);

const passwordCamp = document.getElementById("password"); // By ID
const passwordBtn = document.querySelector("#show-password"); // By ID or CLASS

passwordBtn.addEventListener("click", function() {
    alert("Cliquei no botão!");
})

console.log(passwordCamp);
console.log(passwordBtn);
