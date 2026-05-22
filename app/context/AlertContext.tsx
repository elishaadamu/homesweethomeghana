"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type AlertType = "success" | "error" | "info";

interface AlertContextType {
  showAlert: (message: string, type?: AlertType) => void;
  alert: { message: string; type: AlertType } | null;
  clearAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export function AlertProvider({ children }: { children: ReactNode }) {
  const [alert, setAlert] = useState<{ message: string; type: AlertType } | null>(null);

  const showAlert = (message: string, type: AlertType = "info") => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 5000); // Auto-hide after 5 seconds
  };

  const clearAlert = () => setAlert(null);

  return (
    <AlertContext.Provider value={{ showAlert, alert, clearAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
