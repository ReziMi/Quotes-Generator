// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill" },
    { quote: "In the middle of every difficulty lies opportunity.", person: "Albert Einstein" },
    { quote: "You miss 100% of the shots you don't take.", person: "Wayne Gretzky" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", person: "Franklin D. Roosevelt" },
    { quote: "Don't watch the clock; do what it does. Keep going.", person: "Sam Levenson" },
    { quote: "Believe you can and you're halfway there.", person: "Theodore Roosevelt" },
    { quote: "The only person you are destined to become is the person you decide to be.", person: "Ralph Waldo Emerson" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt" },
    { quote: "You are never too old to set another goal or to dream a new dream.", person: "C.S. Lewis" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.", person: "Charles R. Swindoll" },
    { quote: "The journey of a thousand miles begins with one step.", person: "Lao Tzu" }
  ];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})