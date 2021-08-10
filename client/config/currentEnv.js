const dev = process.env.NODE_ENV !== 'production';
// console.log(dev);

export const currentEnv = dev ? 'http://localhost:3000' : 'https://cryptoupdates-76v9rfsnl-cryptoweb.vercel.app';
