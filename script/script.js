const links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}
// alert(1111);
