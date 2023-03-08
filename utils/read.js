import fs from 'fs';

export default async (path, type) => {
  let fileData = fs.readFileSync(path, type === 'image' ? 'base64' : 'utf8');

  if (type === 'image') {
    fileData = Buffer.from(fileData, 'binary').toString('base64');
  }
  return fileData;
};
