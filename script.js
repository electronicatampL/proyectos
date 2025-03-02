// Función que filtra los proyectos según lo que se ingrese en la barra de búsqueda
function searchProjects() {
    // Obtener el valor del campo de búsqueda
    var input = document.getElementById("searchInput").value.toLowerCase();
    
    // Obtener todos los proyectos
    var projects = document.getElementsByClassName("project-container");
    
    // Recorrer todos los proyectos y ocultar los que no coincidan con la búsqueda
    for (var i = 0; i < projects.length; i++) {
        var title = projects[i].getElementsByTagName("h1")[0].innerText.toLowerCase();
        if (title.includes(input)) {
            projects[i].style.display = "block"; // Mostrar proyectos que coincidan
        } else {
            projects[i].style.display = "none"; // Ocultar proyectos que no coincidan
        }
    }
}
