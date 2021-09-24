let inputs = document.querySelectorAll('.container input');
let labels = document.querySelectorAll('.container label');

//  修改label的innerText  为 <span>{letter}</span>的形式
labels.forEach(function (label) {
    label.innerHTML = label.innerText.split('').map(function (letter,index) {
        return `<span style="transition-delay:${50*index}ms;">${letter}</span>`;
    }).join('');
})


// 在获得焦点 || 失去焦点但填有内容的时候 上移
inputs.forEach(function (input) {
    input.addEventListener('blur', () => {
        spans = input.nextElementSibling.children
        if (input.value) {
            for (let i = 0; i < spans.length; i++) {
                spans[i].style.transform = 'translateY(-40px)';
            }
        } else {
            for (let i = 0; i < spans.length; i++) {
                spans[i].style.transform = 'translateY(0px)';
            }
        }
    })
    input.addEventListener('focus', () => {
        spans = input.nextElementSibling.children
        for (let i = 0; i < spans.length; i++) {
            spans[i].style.transform = 'translateY(-40px)';
        }

    })
})