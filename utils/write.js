import fs from 'fs';

export default async (name, data, type) => {
  const path = `/tmp/files_manager/${name}`;
  let clear = Buffer.from(data, 'base64');

  if (type !== 'image') clear = clear.toString('utf8');

  fs.writeFile(path, clear, { flag: 'w' }, (err) => { if (err) throw err; });

  return path;
};
