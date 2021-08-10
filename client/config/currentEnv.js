const dev = process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production';
// console.log(dev);

export const currentEnv = dev ? 'http://localhost:3000' : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
