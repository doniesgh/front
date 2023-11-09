import { TechReclamationContext } from "../Contexts/reclamationContext"; // Make sure the path is correct
import { useContext } from "react";

export const TechReclamationsContext = () => {
  const context = useContext(TechReclamationContext);

  if(!context) {
    throw Error('TechReclamationContext must be used inside a TechreclamationsContextProvider');
  }

  return context;
}
