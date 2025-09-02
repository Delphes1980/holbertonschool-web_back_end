const express = require('express');

const app = express();
const routes = require('./routes/index');

app.get('/', routes);

app.listen(1245);

export default app;
