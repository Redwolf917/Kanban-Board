import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from './db.js';
import routes from './routes/index.js';
const app = express();
const PORT = process.env.PORT || 3001;
// Serve static files in the client's dist folder
app.use(express.static('../client/dist'));
app.use(express.json());
app.use(routes);
mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});
