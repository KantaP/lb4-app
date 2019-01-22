import {Lb4MyAppApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {Lb4MyAppApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new Lb4MyAppApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);

  return app;
}
