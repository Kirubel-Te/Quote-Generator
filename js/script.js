let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{quote: "the best way to find your self is to lose yourself in the service of others.", person:"Mahatama Gahndi"},{quote:"If you want to live a happy life, tie it to a goal, not to people or things.",person:"Albert Einstiein"},{quote:"At his best, man is the noblest of all animals; separated from law and justice he is the worst.",person:"Aristotle"},{quote:"Your time is limited, so dont waste it living someone else's life.",person:"Steve Jobs"},{quote:"Tell me and I forget, Teach me and I remember, Invovle me and I learn",person:"Benjamin Franklin"},{quote:"if you look at hat you have in life, you'll alays have more. if you look at hat you dont have in life, you'll never have enough",person:"Oprah winfrey"},{
    quote:"It doesn't matter how slowely you go as long as you do not stop.",
    person:"Confucius"
},{
    quote:"Our lives begin to end the day we become silent about things that matter.",
    person:"Martin Luther King Jr."
},{
    quote:"Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    person:"Dalai Lama"
},{
    quote:"The journey of a thousand miles begins with one step.",
    person:"Lao Tzu"
}];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
