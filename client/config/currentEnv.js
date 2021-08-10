const dev = process.env.NODE_ENV !== 'production';
// console.log(dev);

export const currentEnv = dev ? 'http://localhost:3000' : 'https://cryptoupdates-p8z29th9j-cryptoweb.vercel.app/';
