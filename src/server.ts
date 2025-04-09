import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import deliveryRoutes from './routes/deliveryRoutes';
import { config } from './config';

const app: Application = express();
const PORT = config.port || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose.connect(config.mongoUri)
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

// Routes
app.use('/api', deliveryRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});