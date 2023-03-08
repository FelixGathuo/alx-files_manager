import dbClient from './utils/db';

(async () => {
  setTimeout(async () => {
    console.log(dbClient.isAlive());
    console.log(await dbClient.nbUsers());
    console.log(await dbClient.nbFiles());
  }, 2000);
})();
