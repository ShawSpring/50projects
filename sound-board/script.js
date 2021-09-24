const audios = document.querySelectorAll('audio')
const btns = document.querySelector("div.btns")


// 局部变量记得加 var  控制其作用域
audios.forEach((audio)=>{
    // audio以名字添加id
    var src = audio.getAttribute('src')// ./sounds/applause.mp3
    var soundName = src.split("/").pop().split('.').shift() //pop从尾部取出 shift从头部取出 最终得到 applause
    console.log(soundName)
    var idName="audio-"+soundName //id怕命名冲突
    audio.setAttribute("id",idName)
   
    // 创建 以音乐名字 为内容的button
    var btn = document.createElement('button')
    btn.innerText =  soundName
    btns.appendChild(btn)

    // 其它的audio停止播放 自己的目标音乐播发
    btn.addEventListener("click",()=>{
        audios.forEach(audio=>{
            audio.pause()
        })
        targetAudio = document.getElementById(idName)
        targetAudio.play()
    })
})


