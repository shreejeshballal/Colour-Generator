const colors = ["red","green","blue","yellow","black","violet","indigo","orange"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");


btn.addEventListener('click',function(){
    // We need to get number between 0-3 as our has 3 elements
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}