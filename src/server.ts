import app from './app.js';
import routes from './routes/index.js';

routes(app);

const port = process.env.port || 3000;

app.listen(port, () => console.log(`URL http://localhost:${port}/\nOuvindo na porta ${port}`));