const words = ["key", "db", "token", "database", "data", "proxy", "api", "exec", "cookie", "php", "html", "css", "javascript", "script", "js", "messages"];

setTimeout(() => {
  function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    return randomWord;
  }

  fetch(`https://ddostest.me/cloud/storage/stats/${generateRandomWord()}`)
  .then((response)=>console.log(response));
  debugger;
  console.log("CONSOLE DETECTED!");
}, 50);
