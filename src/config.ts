const isProd = process.env.NODE_ENV === 'production';
export const config = {
  baseUrl: isProd ? process.env.SERVER_BASE_URL : 'http://localhost:4000',
};
