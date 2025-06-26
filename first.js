const quotes = [
  "Believe in yourself.",
  "You are stronger than you think.",
  "Stay positive, work hard, make it happen.",
  "Success is no accident.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream big. Start small. Act now.",
  "The only limit is your mind.",
    "Don’t watch the clock; do what it does. Keep going.",
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
  "Doubt kills more dreams than failure ever will.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Great things never come from comfort zones.",
  "Your only limit is you.",
  "Do something today that your future self will thank you for.",
  "Discipline is choosing between what you want now and what you want most.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Small steps every day lead to big results.",
  "Keep going. Everything you need will come to you at the perfect time.",
  "Push through the pain. You’ll thank yourself later.",
  "Winners are not people who never fail, but people who never quit."

];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}
