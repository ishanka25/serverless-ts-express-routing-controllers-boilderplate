import serverlessHttp from 'serverless-http';
import app from './controllers/app';

export const handler = serverlessHttp(app);
