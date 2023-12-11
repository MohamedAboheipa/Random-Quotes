var quotes = [
  "“Be yourself; everyone else is already taken.”",
  "“So many books, so little time.”",
  "“A room without books is like a body without a soul.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“Be the change that you wish to see in the world.”",
  "“If you tell the truth, you don't have to remember anything.”",
];
var author = [
  "Oscar Wilde",
  "Frank Zappa",
  "Marcus Tullius Cicero",
  "Mae West",
  "Mahatma Gandhi",
  "Mark Twain",
];
function generateQuote() {
  var random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[random];
  document.getElementById("author").innerHTML = `-- ${author[random]}`;
}
// generateQuote();
