const jokeDisplay = document.getElementById("jokeDisplay");
const nextBtn = document.getElementById("nextBtn");


async function fetchData() {
   
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: { 'Accept': 'application/json' }
    });
    
    
    const data = await response.json();
    jokeDisplay.textContent = data.joke;  
}

nextBtn.addEventListener('click', fetchData);


fetchData();