import { config } from 'dotenv';
config();

import { App } from './app';

new App().bootstrap();
