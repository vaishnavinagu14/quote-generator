const quotes = {
  love: [
    { text: "You are my today and all of my tomorrows.", author: "Leo Christopher" },
    { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
    { text: "Love is not only something you feel, it is something you do.", author: "David Wilkerson" },
    { text: "In all the world, there is no heart for me like yours.", author: "Maya Angelou" }
  ],
  sad: [
    { text: "Tears come from the heart and not from the brain.", author: "Leonardo da Vinci" },
    { text: "Sometimes it's okay if the only thing you did today was breathe.", author: "Yumi Sakugawa" },
    { text: "Every human walks around with a certain kind of sadness.", author: "Unknown" },
    { text: "Sadness flies away on the wings of time.", author: "Jean de La Fontaine" }
  ],
  motivation: [
    { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
    { text: "Great things never come from comfort zones.", author: "Anonymous" }
  ],
  birthday: [
    { text: "Count your age by friends, not years.", author: "John Lennon" },
    { text: "Wishing you a day filled with love and cheer.", author: "Unknown" },
    { text: "Let us celebrate the occasion with wine and sweet words.", author: "Plautus" },
    { text: "The more you praise and celebrate your life, the more there is in life to celebrate.", author: "Oprah Winfrey" }
  ],
  anniversary: [
    { text: "Forever is a long time, but I wouldn't mind spending it with you.", author: "Unknown" },
    { text: "Real love stories never have endings.", author: "Richard Bach" },
    { text: "A successful marriage requires falling in love many times, always with the same person.", author: "Mignon McLaughlin" },
    { text: "Grow old along with me, the best is yet to be.", author: "Robert Browning" }
  ]
};
let currentCategory = null;
let currentQuote = null;

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const body = document.body;

// Theme toggle
document.getElementById("themeBtn").addEventListener("click", () => {
  const root = document.documentElement;
  const current = root.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", newTheme);
  document.getElementById("themeBtn").textContent = newTheme === "dark" ? "🌞" : "🌙";
});

// Show a quote
function getQuote(category) {
  currentCategory = category;
  const categoryQuotes = quotes[category];
  const random = categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)];
  currentQuote = random;
  renderQuote(random);
}

function getNewQuote() {
  if (currentCategory) {
    getQuote(currentCategory);
  } else {
    quoteText.textContent = "Please select a category first.";
    quoteAuthor.textContent = "";
  }
}

function renderQuote(quote) {
  quoteText.textContent = `"${quote.text}"`;
  quoteAuthor.textContent = `— ${quote.author}`;
}

function copyQuote() {
  const fullQuote = `${quoteText.textContent} ${quoteAuthor.textContent}`;
  navigator.clipboard.writeText(fullQuote).then(() => {
    alert("Quote copied to clipboard!");
  });
}

// Save to localStorage
function saveFavorite() {
  if (!currentQuote) return;
  let saved = JSON.parse(localStorage.getItem("favorites")) || [];
  saved.push(currentQuote);
  localStorage.setItem("favorites", JSON.stringify(saved));
  alert("Quote saved to favorites!");
}