// Express app setup
import express from 'express';
import invoiceRoutes from './routes/invoiceRoutes';
import authRoutes from './routes/authRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());

app.use('/api/invoices', invoiceRoutes);
app.use('/api/auth', authRoutes);

app.use(errorHandler);

export default app;
