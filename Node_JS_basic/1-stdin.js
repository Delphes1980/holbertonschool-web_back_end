process.stdin.setEncoding('utf-8');

// Welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Read data from stdin
process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) {
    process.stdout.write(`Your name is: ${input}`);
  }
});

// Close the program
process.on('beforeExit', () => {
  process.stdout.write('This important software is now closing\n');
});
