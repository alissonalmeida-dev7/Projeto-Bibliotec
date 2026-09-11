const menu = document.getElementById("menu"); // Pegando o elemento pelo ID

// Estamos pegando o elemento de forma generica
// pode ser classe (precisa trazer o .) 
// ou pode ser ID (precisa trazer a #)
const navMenu = document.querySelector(".navigation");

menu.addEventListener("click", function() {
    navMenu.className = navMenu.className == "navigation" ? "navigation ativo" : "navigation";
})

// ARROW FUNCTION
// menu.addEventListener("click",() => {}) 