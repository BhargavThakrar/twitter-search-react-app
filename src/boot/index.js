/* Start the server */
import app from './bootExpress';

/* Register Express middlewares */
import expressMiddlewares from './expressMiddlewares';

/* Register APP routes */
import expressRoutes from './expressRoutes';

/* Register APP routes */
expressRoutes(expressMiddlewares(app));