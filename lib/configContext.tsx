'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface AppConfig {
  API_URL: string;
  PROFILE_IMAGE: string;
  PORTPORT_FRONT_SRC_URL: string,
  PORTPORT_BACK_SRC_URL: string,
  PROJECT_NORDIC_SRC_URL: string
  PROJECT_STM32_SRC_URL: string
}

const ConfigContext = createContext<AppConfig | null>(null);

export function ConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<AppConfig | null>(null);

  useEffect(() => {
    fetch('/api/config')
      .then((res) => res.json())
      .then((data) => setConfig(data))
      .catch((err) => console.error("Failed to load config", err));
  }, []);

  return (
    <ConfigContext.Provider value={config}>
      {config ? children : <div>Loading...</div>}
    </ConfigContext.Provider>
  );
}

export const useConfig = () => {
  const context = useContext(ConfigContext);

  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};