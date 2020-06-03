let divTyping = document.getElementById('typing-text')
let i = 0
let timer = 0
let str = "I'm Shuting Zhang"

function typing () {

  if (i <= str.length) {
    divTyping.innerHTML = str.slice(0, i++) + '_';
    timer = setTimeout(typing, 200);
  }
  else {
    divTyping.innerHTML = str;
    clearTimeout(timer);
  }
}

typing();
