const dev = process.env.NODE_ENV !== 'production';
// console.log(dev);

export const currentEnv = dev ? 'http://localhost:3000' : 'https://cryptoupdates-86bu7rvg9-cryptomembers.vercel.app';
