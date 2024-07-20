declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_BASE_URL: string;
      JWT_SECRET: string;
    }
  }
}

export { }