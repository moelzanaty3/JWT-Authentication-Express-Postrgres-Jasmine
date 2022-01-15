import { Router } from 'express';
import * as controllers from '../../controllers/users.controllers';

const routes = Router();
// api/users
routes.route('/').get(controllers.getMany).post(controllers.create);
routes
  .route('/:id')
  .get(controllers.getOne)
  .patch(controllers.updateOne)
  .delete(controllers.deleteOne);

export default routes;
