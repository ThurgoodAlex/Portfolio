fetch('header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
})
.catch(error => console.log('Error loading header:', error));

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
    if (!sessionStorage.getItem('typedAnimationShown')){
        await typeWriter("first", 225);
        await typeWriter("last", 225)
        sessionStorage.setItem('typedAnimationShown', 'true')
    } 
    else{
        document.getElementById("first").style.visibility = 'visible';
        document.getElementById("last").style.visibility = 'visible';
        sessionStorage.removeItem('typedAnimationShown');        
    }
};


const projects = [
    {
        title: "Chat Room",
        description: "This was built for my CS4550(Web Development 2) class, using a combination of Python for the back end and React for the front end",
        image: "project1.jpg", // replace with the actual image path or URL
        githubLink: "https://github.com/ThurgoodAlex/Chatroom"
    },
   
   /* {
        title: "Project 2",
        description: "This is a description of Project 2, a machine learning model in Python.",
        image: "project2.jpg", // replace with the actual image path or URL
        githubLink: "https://github.com/alex-thurgood/project2"
    },
    {
        title: "Project 3",
        description: "This is a description of Project 3, a mobile app built with Flutter.",
        image: "project3.jpg", // replace with the actual image path or URL
        githubLink: "https://github.com/alex-thurgood/project3"
    }
        */
];

const tileContainer = document.getElementById('tileContainer');

// Create tiles for each project
projects.forEach(project => {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    
    tile.innerHTML = `
        <a href="${project.githubLink}" target="_blank">
            <img src="${project.image}" alt="${project.title}">
        </a>
        <div class="content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.githubLink}" target="_blank">View on GitHub</a>
        </div>
    `;
    
    tileContainer.appendChild(tile);
});
