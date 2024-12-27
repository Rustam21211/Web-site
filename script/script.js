const links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}
// alert(1111);


window.onload = function() {
    // Получаем ширину области просмотра
    const viewportWidth = window.innerWidth;

    // Находим элемент на странице, куда будем выводить ширину
    const widthDisplay = document.getElementById('screenWidth');
    widthDisplay.textContent = "Ширина области просмотра: " + viewportWidth + " пикселей";
};
