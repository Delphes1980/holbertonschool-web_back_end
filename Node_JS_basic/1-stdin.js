// Description: Reads a line from the standard input and returns it without the trailing newline.
console.log('Welcome to Holberton School, what is your name?');

// Read data from stdin
process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) {
    console.log(`Your name is: ${input}`);
  }
});

// End of data from stdin
process.on('beforeExit', () => {
  console.log('This important software is now closing');
});
