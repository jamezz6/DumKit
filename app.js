//  function A() {
//    let myDiv = document.getElementById("gfg");
//   let button = document.createElement(`button`);
//    let text = document.createTextNode("A");

//    button.appendChild(text);
//    myDiv.appendChild(button);;
//}

// const button = document.createElement(`button`);

const sound = new Audio("boom.wav");
const sound2 = new Audio ("clap.wav");
const sound3 = new Audio ("hihat.wav");
const sound4 = new Audio ("kick.wav");
const sound5 = new Audio ("openhat.wav");
const sound6 = new Audio ("ride.wav");
const sound7 = new Audio ("snare.wav");
const sound8 = new Audio ("tink.wav");
const sound9 = new Audio ("tom.wav");
const sound10 = new Audio ("boom.wav");
const buttons = document.querySelectorAll("button1");
const buttons2 = document.querySelectorAll("button2");
const buttons3 = document.querySelectorAll("button3");
const buttons4 = document.querySelectorAll("button4");
const buttons5 = document.querySelectorAll("button5");
const buttons6 = document.querySelectorAll("button6");
const buttons7 = document.querySelectorAll("button7");
const buttons8 = document.querySelectorAll("button8");
const buttons9 = document.querySelectorAll("button9");
const buttons10 = document.querySelectorAll("btn1");

buttons.forEach(button1 => {
    button1.addEventListener("click", () => {
        sound2.pause();
        sound3.pause();
        sound4.pause();
        sound5.pause();
        sound6.pause();
        sound7.pause();
        sound8.pause();
        sound9.pause();
        sound.currentTime = 0;
        sound.play();
    });
});

buttons2.forEach(button2 => {
    button2.addEventListener("click", () => {
        sound.pause();
        sound3.pause();
        sound4.pause();
        sound5.pause();
        sound6.pause();
        sound7.pause();
        sound8.pause();
        sound9.pause();
        sound2.currentTime = 0;
        sound2.play();
    });
});

buttons3.forEach(button3 => {
    button3.addEventListener("click", () => {
        sound.pause();
        sound2.pause();
        sound4.pause();
        sound5.pause();
        sound6.pause();
        sound7.pause();
        sound8.pause();
        sound9.pause();
        sound3.currentTime = 0;
        sound3.play();
    });
});buttons4.forEach(button4 => {
    button4.addEventListener("click", () => {
        sound.pause();
        sound2.pause();
        sound3.pause();
        sound5.pause();
        sound6.pause();
        sound7.pause();
        sound8.pause();
        sound9.pause();
        sound4.currentTime = 0;
        sound4.play();
    });
});buttons5.forEach(button5 => {
    button5.addEventListener("click", () => {
        sound.pause();
        sound2.pause();
        sound3.pause();
        sound4.pause();
        sound6.pause();
        sound7.pause();
        sound8.pause();
        sound9.pause();
        sound5.currentTime = 0;
        sound5.play();
    });
});buttons6.forEach(button6 => {
    button6.addEventListener("click", () => {
        sound.pause();
        sound2.pause();
        sound3.pause();
        sound4.pause();
        sound5.pause();
        sound7.pause();
        sound8.pause();
        sound9.pause();
        sound6.currentTime = 0;
        sound6.play();
    });
});buttons7.forEach(button7 => {
    button7.addEventListener("click", () => {
        sound.pause();
        sound2.pause();
        sound3.pause();
        sound4.pause();
        sound5.pause();
        sound6.pause();
        sound8.pause();
        sound9.pause();
        sound7.currentTime = 0;
        sound7.play();
    });
});buttons8.forEach(button8 => {
    button8.addEventListener("click", () => {
        sound.pause();
        sound2.pause();
        sound3.pause();
        sound4.pause();
        sound5.pause();
        sound6.pause();
        sound7.pause();
        sound9.pause();
        sound8.currentTime = 0;
        sound8.play();
    });
});buttons9.forEach(button9 => {
    button9.addEventListener("click", () => {
        sound.pause();
        sound2.pause();
        sound3.pause();
        sound4.pause();
        sound5.pause();
        sound6.pause();
        sound7.pause();
        sound8.pause();
        sound9.currentTime = 0;
        sound9.play();
    });
});

buttons10.forEach(btn1 => {
    btn1.addEventListener("click", () => {
        sound.currentTime = 0;
        sound.play();
    })
})

var btns = document.getElementsByTagName('button');
for(var i=0;i<btns.length;i++){
    btns[i].addEventListener('click', function(){
        disableButtons(true);
        setTimeout(function(){disableButtons(false);}, 0);
    });    
}
function disableButtons(state){
    for(var i=0;i<btns.length;i++){
        btns[i].disabled = !!state;    
    }
}

document.addEventListener("keydown", (event) => {
    console.log(event);
});

{

const playSound = e => {
    const keyCode = e.keyCode,
    keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

    if(!keyElement) return;

    const audioElement =
    document.querySelector(`audio[data-key="${keyCode}"]`);
    audioElement.currentTime = 0;
    audioElement.play();
}

window.addEventListener(`keydown`, playSound);
}