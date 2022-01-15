import { Router } from 'express';
import usersRoutes from './api/users.routes';

const routes = Router();

routes.use('/users', usersRoutes);

export default routes;
