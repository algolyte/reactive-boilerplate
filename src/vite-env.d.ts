/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV_FILE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
