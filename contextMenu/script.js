window.onload = () => {
    const menu = document.getElementById("menu")
    const menuHeight = menu.offsetHeight
    window.oncontextmenu = (e) => {
        menu.style.top = `${e.offsetY + 5}px`
        menu.style.left = `${e.offsetX}px`
        menu.style.visibility = "visible"
        menu.style.height = `${menuHeight}px`
        // 以下两句都可以阻止默认的行为
        e.preventDefault()
        return false
    }
    window.onclick = (e) => {
        menu.style.height = `${0}px`
        menu.style.visibility = "hidden"
        return true
    }

    item = document.querySelector("#menu li:first-child")
    item.addEventListener("click", () => {
        window.alert("clicked me!")
    })
}
