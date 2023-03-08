import Queue from 'bull';
import imageThumbnail from 'image-thumbnail';

import writeFile from './utils/write';

const fileQueue = new Queue('image transcoding');
fileQueue.process(async ({ data }, done) => {
  const { _id, userId } = data;
  let { path } = data;

  path = path.slice(19);

  if (!userId) done(Error('Missing userId'));
  if (!_id) done(Error('Missing fileId'));

  const thumbNail100 = await imageThumbnail(data.data, { width: 100 });
  const thumbNail250 = await imageThumbnail(data.data, { width: 250 });
  const thumbNail500 = await imageThumbnail(data.data, { width: 500 });

  await writeFile(`${path}_100`, 'image', thumbNail100);
  await writeFile(`${path}_250`, 'image', thumbNail250);
  await writeFile(`${path}_500`, 'image', thumbNail500);
});

export default fileQueue;
