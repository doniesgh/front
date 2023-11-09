// Create a context for managing reclamation operations
import React, { createContext, useContext, useState } from 'react';

const TechReclamationContext = createContext();

const TechReclamationProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <TechReclamationContext.Provider value={{ loading, setLoading }}>
      {children}
    </TechReclamationContext.Provider>
  );
};

const useTechReclamationContext = () => {
  const context = useContext(TechReclamationContext);
  if (!context) {
    throw new Error('useTechReclamationContext must be used within a TechReclamationProvider');
  }
  return context;
};

export { TechReclamationProvider, useTechReclamationContext, TechReclamationContext }; // Add `TechReclamationContext` to exports
