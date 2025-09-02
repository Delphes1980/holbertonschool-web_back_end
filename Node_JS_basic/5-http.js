const http = require('node:http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = http.createServer(async (request, response) => {
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.statusCode = 200;
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    response.statusCode = 200;
    response.write('This is the list of our students\n');

    // Sauvegarder la fonction console.log originale
    const originalLog = console.log;
    let capturedOutput = '';

    // Définir une fonction temporaire pour capturer la sortie
    console.log = (message) => {
      capturedOutput += `${message}\n`;
    };

    try {
      // Appeler la fonction countStudents et attendre qu'elle termine
      // Toutes les sorties de console.log() de cette fonction seront capturées
      await countStudents(databasePath);

      // Renvoyer la sortie capturée au client HTTP
      response.end(capturedOutput);
    } catch (error) {
      // Gérer l'erreur si le fichier n'est pas trouvé
      response.end(error.message);
    } finally {
      // Restaurer la fonction console.log originale, peu importe le résultat
      console.log = originalLog;
    }
  } else {
    response.statusCode = 404;
    response.end('Not found');
  }
});

app.listen(1245);
module.exports = app;
