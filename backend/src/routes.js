/** Import Modules */
import { Router } from 'express';
import multer from 'multer';
/** Import Controllers */
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
/** Import Configs */
import multerConfig from './config/multer';
/** Import Middlwares */
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

/** Insert your routes here */
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store);
export default routes;
