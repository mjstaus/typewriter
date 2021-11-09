const sentence = "Hello! I am a typewriter!";

const typewriter = (sentence) => {
  let delay = 0;
  for (let char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
  setTimeout(() => {
    console.log("");
  },(delay));
}

typewriter(sentence);