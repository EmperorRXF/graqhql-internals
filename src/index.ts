import 'reflect-metadata';

import * as express from 'express';
import helmet = require('helmet');

import { config } from './common';
import { getLogger } from './common/logger';
import { executeBasicQuery } from './modules/basic';
import { ormStartup } from './modules/orm';

const logger = getLogger('bootstrap');

async function bootstrap(): Promise<void> {
  // executeBasicQuery();

  const app = express().use(helmet());
  ormStartup(app);

  app.listen(config.port, () => {
    if (config.isDev()) {
      logger.info('GraphQL Server Running', {
        url: `http://localhost:${config.port}/graphql`,
      });
    }
  });
}

bootstrap().catch((error) => {
  logger.error('An unhandled exception occured', {
    error,
  });
  process.exit();
});
