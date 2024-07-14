let dropdown = document.getElementById("dropdown");
let h1 = document.querySelectorAll("h1")
document.body.style.backgroundColor = "white"
dropdown.addEventListener("change", () => {
    let selectedOption = dropdown.options[dropdown.selectedIndex];
    console.log(selectedOption.value);
    if (selectedOption.value === "pink") {
        document.documentElement.style.setProperty("--color", "#D2649A")
        document.documentElement.style.setProperty("--bg-color", "#FFD4D4")
    } else if (selectedOption.value === "orange") {
        document.documentElement.style.setProperty("--color", "#EBB02D")
        document.documentElement.style.setProperty("--bg-color", "#F7DB6A")
    } else if (selectedOption.value === "red") {
        document.documentElement.style.setProperty("--color", "#FF0000")
        document.documentElement.style.setProperty("--bg-color", "#FF6969")
    } else if (selectedOption.value === "black") {
        document.documentElement.style.setProperty("--color", "#151515")
        document.documentElement.style.setProperty("--bg-color", "#444444")
    } else if (selectedOption.value === "blue") {
        document.documentElement.style.setProperty("--color", "#34B3F1")
        document.documentElement.style.setProperty("--bg-color", "#88E1F2")
    } else {
        document.documentElement.style.setProperty("--color", "#06D001")
        document.documentElement.style.setProperty("--bg-color", "#C5FF95")
    }
});
// For Navbar
let btn = document.querySelector("#btn")
let sidebar = document.querySelector(".sidebar")
let span1 = document.querySelector("#span1")
let span2 = document.querySelector("#span2")
let span3 = document.querySelector("#span3")
btn.addEventListener("click", () => {
    sidebar.style.display = "none"
    if (sidebar.style.display = "none") {
        sidebar.style.display = "block"
    } else {
        sidebar.style.display = "none"
    }
})
// Sidebar toggle css
let close = document.querySelector(".close")
close.addEventListener("click", () => {
    sidebar.style.display = "none"
})
