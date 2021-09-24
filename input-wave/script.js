const labels = document.querySelectorAll('.container label')
const inputs = document.querySelectorAll('.container input')

labels.forEach(label => {
    label.innerHTML = label.innerText.split('')
    .map((letter,index) => {return `<span style='transition-delay:${index * 50}ms;'>${letter}</span>`})
    .join('')
})


// focus and blur&&input.value is not empty   
inputs.forEach(input => {
    //input.nextElementSibling.children  这是一个htmlcollection 而不是一个数组 可用for但不可以forEach遍历
    var spans = Array.from(input.nextElementSibling.children)
    // 必须加var  表局部变量

    input.addEventListener('focus',()=>{
        spans.forEach(span=>{
            span.style.transform='translateY(-40px)'
        })
    })
    input.addEventListener('blur',()=>{
        if(input.value){
            spans.forEach(span=>{
                span.style.transform='translateY(-40px)'
            })
        }else{
            spans.forEach(span=>{
                span.style.transform='translateY(0px)'
            })
        }
    })
})