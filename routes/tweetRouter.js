import { Router } from 'express';
import tweetController from '../controllers/tweetController.js';

const tweetRouter = Router();

tweetRouter.post('/tweets', tweetController.create);
tweetRouter.get('/tweets', tweetController.getAll);
tweetRouter.get('/tweets/:username', tweetController.getByUser);

export default tweetRouter;
