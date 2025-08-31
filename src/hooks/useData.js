import { useContext } from "react";
import { CrudContext } from "../contexts/CrudContext";

export const useData = () => {
  const context = useContext(CrudContext);
  if (!context) {
    throw new Error("useData debe usarse dentro de CrudProvider");
  }
  return context;
};
