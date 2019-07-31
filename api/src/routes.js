import { Router } from 'express';
import UserController from './app/controllers/UserController';
import UserMiddlewares from './app/middlewares/UserMiddlewares';
import AuthController from './app/controllers/AuthController';
import AuthMiddlewares from './app/middlewares/AuthMiddlewares';

const routes = new Router();

// routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));

routes.post('/register', UserMiddlewares, UserController.store);
routes.post('/auth/login', AuthMiddlewares, AuthController.store);
routes.get('/users', UserController.index);

export default routes;
