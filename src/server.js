import express from 'express';
const app = express();

import userRoutes from './routes/user_routes';

routing();

//--------ROUTING---------//

function routing() {
  app.use('/api/v1/users', userRoutes);
}

app.listen(4000);
