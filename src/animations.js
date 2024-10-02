//https://developer.mozilla.org/en-US/docs/Web/API/setInterval
// used the above resource and had to make it a async function
function typeWriter(elementId, speed) {
    
    return new Promise((resolve) => {
        const element = document.getElementById(elementId);
        const text = element.innerHTML; // Get the initial text
        let i = 0;
        element.innerHTML = ''; // Clear existing content
        element.style.visibility = 'visible';

        const typing = setInterval(() => {
            if (i < text.length) {
                const char = text.charAt(i);
                element.innerHTML += char; // Append next character
                i++;
            } else {
                clearInterval(typing); // Stop the typing effect
                resolve(); // Resolve the Promise when done
            }
        }, speed);
    });
}



window.onload = async function() {
    await typeWriter("first", 225);
    await typeWriter("last", 225)
};
