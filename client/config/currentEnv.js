const dev = process.env.NODE_ENV !== 'production';
// console.log(dev);

export const currentEnv = dev ? 'http://localhost:3000' : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
