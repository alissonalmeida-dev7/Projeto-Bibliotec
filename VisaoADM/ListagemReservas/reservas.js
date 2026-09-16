const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const statusRetirada = document.querySelectorAll(".status");

checkboxes.forEach((caixinha, indice, lista) => {

    // console.log("caixinha: ", caixinha);
    // console.log("indice: ", indice);
    // console.log("lista: ", lista);

    caixinha.addEventListener("change", () => {

        if (caixinha.checked) { // == true
            statusRetirada[indice].classList.remove("loading-status");
            statusRetirada[indice].classList.add("removed-status");
            // statusRetirada[indice].classList.replace("loading-status", "removed-status");
            statusRetirada[indice].textContent = "Retirado";
        }

        else {
            statusRetirada[indice].classList.remove("removed-status");
            statusRetirada[indice].classList.add("loading-status");
            // statusRetirada[indice].classList.replace("removed-status", "loading-status");
            statusRetirada[indice].textContent = "Aguardando retirado";            
        }
    })
})