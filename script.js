let text = window.document.getElementById("text")
let leaf = window.document.getElementById("leaf")
let hill1 = window.document.getElementById("hill1")
let hill4 = window.document.getElementById("hill4")
let hill5 = window.document.getElementById("hill5")
let tree = window.document.getElementById("tree")
let plant = window.document.getElementById("plant")
window.addEventListener("scroll", () => {
    let value = window.scrollY
    text.style.marginTop = value * 2.5 + 'px'
    leaf.style.top = value * -1.5 + 'px'
    leaf.style.left = value * 1.5 + 'px'
    hill5.style.left = value * 1.5 + 'px'
    hill4.style.left = value * -1.5 + 'px'
    tree.style.top = value * 1.5 + 'px'
})