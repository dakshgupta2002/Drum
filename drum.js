window.addEventListener('keypress',  function(event){
    const audio = document.getElementById(event.code);
    console.log(audio);
    audio.play()
})


var audio = document.querySelectorAll("audio");

for (let i=0; i<8; i++){
    let btn  = document.getElementById(i);
    
    btn.addEventListener('click',
    function(){
        console.log(audio[i])
        audio[i].play()
        
    })
}

