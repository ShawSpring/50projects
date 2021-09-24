const boxes = document.querySelectorAll('.box')

// window.addEventListener('scroll', function () {
//     triggerTop = window.innerHeight * 0.8
//     // debounce(showTop,5000)()
//     boxes.forEach(function (box) {

//         boxTop = box.getBoundingClientRect().top

//         if (boxTop < triggerTop && getScrollTop() + getWindowHeight() < getScrollHeight() * 0.8) {
//             box.classList.remove('disappear')
//         }
//         // 滚动条滚动到下边1/5时 所有box都要显示， 不管boxTop有没有越界
//         else if (getScrollTop() + getWindowHeight() > getScrollHeight() * 0.8) {
//             box.classList.remove('disappear')
//         } else {
//             box.classList.add('disappear')
//         }
//     })
// })

// 加入防抖之后的代码
triggerTop = window.innerHeight * 0.7

// window.addEventListener('scroll',debounce(handleBoxes,500)())
window.onscroll = throttle2(handleBoxes,300);

function handleBoxes(){
    boxes.forEach(function (box) {

        boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerTop && getScrollTop() + getWindowHeight() < getScrollHeight() * 0.7) {
            box.classList.remove('disappear')
        }
        // 滚动条滚动到下边1/5时 所有box都要显示， 不管boxTop有没有越界
        else if (getScrollTop() + getWindowHeight() > getScrollHeight() * 0.7) {
            box.classList.remove('disappear')
        } else {
            box.classList.add('disappear')
        }
    })
}

// 防抖  当重复触发某一个行为（事件时），只执行最后一次触发。

function debounce(fn, wait) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(fn, wait)
    }
}

// 节流  限定在单位时间内只执行一次 
function throttle(fn,duration){
    var t = null;
    return function(){
        if(t){
            // 上个计时器还存在 下个计时器 先别动
            return
        }
         t = setTimeout(function(){
            fn.call(this,t);
            t = null;
         },duration);
    }
}

//利用时间戳 做出的 节流   推荐 更好
function throttle2(cb, wait=300){
    let last = 0;
    return function(){
        var now = new Date().getTime();;
        if (now - last > wait) {
            cb.call(this);
            last = new Date().getTime();;
        }
    }
}

function showTop() {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log('滚动条位置：' + scrollTop);
}



// ---------------------------------一下是滚动条 位置判断的3个函数-----------------------------------------
// 浏览器不同  滚动条位置可能是 body/html的scrollTop  

//滚动条在Y轴上的滚动距离

function getScrollTop() {
    var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}

//文档的总高度

function getScrollHeight() {
    var scrollHeight = 0,
        bodyScrollHeight = 0,
        documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}

//浏览器视口的高度

function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

// window.addEventListener('scroll',()=>{

//     if (getScrollTop() + getWindowHeight() == getScrollHeight()) {
//         alert("已经到最底部了！!");
//     }
// })