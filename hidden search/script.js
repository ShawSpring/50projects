const btn = document.querySelector('.search .btn-search')
const search = document.querySelector('.search')
const input = document.querySelector('.search .input-search')
btn.onclick = ()=>{
    search.classList.toggle('active')
    input.focus()
}