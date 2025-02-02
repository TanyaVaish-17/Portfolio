// Scroll-to-Top Button
let scrollButton = document.createElement('button');
scrollButton.textContent = 'Scroll to Top';
scrollButton.style.position = 'fixed';
scrollButton.style.bottom = '20px';
scrollButton.style.right = '20px';
scrollButton.style.padding = '10px 20px';
scrollButton.style.fontSize = '16px';
scrollButton.style.border = 'none';
scrollButton.style.backgroundColor = '#6200ea';
scrollButton.style.color = '#fff';
scrollButton.style.cursor = 'pointer';
scrollButton.style.borderRadius = '5px';
scrollButton.style.display = 'none'; // Hidden by default
document.body.appendChild(scrollButton);

// Show the button when the user scrolls down 100px
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
};

// Scroll to the top when the button is clicked
scrollButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Dynamic Greeting based on time of day
let greeting = document.createElement('h3');
document.body.insertBefore(greeting, document.body.firstChild);

function setGreeting() {
    const currentHour = new Date().getHours();
    let greetingMessage = '';
    
    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = 'Good Morning!';
    } else if (currentHour >= 12 && currentHour < 17) {
        greetingMessage = 'Good Afternoon!';
    } else if (currentHour >= 17 && currentHour < 21) {
        greetingMessage = 'Good Evening!';
    } else {
        greetingMessage = 'Good Night!';
    }

    greeting.textContent = greetingMessage + ' Welcome to my Resume Page!';
}

// Call the setGreeting function
setGreeting();
