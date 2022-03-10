const containerSlideBar = document.querySelector(".container"); // contenedor
const contenedorLineas = document.querySelector(".aside-menu-boton"); // container de lineas svg

contenedorLineas.addEventListener("click", (e) => {
    console.log(e.target);
    containerSlideBar.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector("#menunav").children;
    const showoptions = (opcion) => {
        opcion.children[1].classList.toggle("aside-menu-ul");
        opcion.children[1].classList.toggle("child_menu");
        // console.log(opcion.children)
    };

    for (let i = 0; i < menu.length; i++) {
        const opcion = menu[i];
        console.log(opcion);
        opcion.addEventListener("click", () => {
            // console.log("click en opcion");
            showoptions(opcion);
        });
    }

    // fin de documento
});