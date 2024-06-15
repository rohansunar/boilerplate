declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "production" | "develop" | "test";
      DATABASE: string;
      SESSION_SECRET: string;
      PORT: string;
      TIMEZONE: string;
    }
  }
}
export {};
