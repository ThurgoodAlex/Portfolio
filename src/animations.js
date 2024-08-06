//https://developer.mozilla.org/en-US/docs/Web/API/setInterval
function typeWriter(elementId, speed) {
    const element = document.getElementById(elementId);
    const text = element.innerHTML;
    let i = 0;
    element.innerHTML = ''; // Clear existing content

    const typing = setInterval(() =>{
        if (i < text.length){
            element.innerHTML += text.charAt(i);
            i++
        }
        else{
            clearInterval(typing)
        }

    }, speed)
}

  window.onload = function(){
    typeWriter("name", 225);

  };