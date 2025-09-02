import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { createWorkspace } from "../../services/data";
import toast from "react-hot-toast";
import { useData } from "../../hooks/useData";

function Form({ onSet }) {
  const { loading } = useData();
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateWorkspace = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedDescription = description.trim();

    if (!trimmedName || !trimmedDescription) {
      toast.error("Ambos campos son obligatorios");
      return;
    }

    try {
      await createWorkspace(user.uid, trimmedName, trimmedDescription);
      toast.success("¡Workspace creado con éxito!");
      onSet(false);
    } catch (error) {
      toast.error("Hubo un error al crear el workspace");
      console.error(error);
    }
  };

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white py-4 px-6 rounded-md flex flex-col gap-2 w-full max-w-md">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-semibold">Crear nuevo workspace</h2>
          <button
            onClick={() => onSet(false)}
            type="button"
            className="text-lg"
          >
            x
          </button>
        </div>
        <form
          onSubmit={handleCreateWorkspace}
          className="w-full flex flex-col gap-4 text-sm"
        >
          <div className="w-full">
            <label htmlFor="input-name" className="font-medium">
              Nombre Workspace
            </label>
            <input
              type="text"
              id="input-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nombre Workspace"
              className="w-full border border-slate-500 rounded-md p-2.5"
            />
          </div>
          <div className="w-full">
            <label htmlFor="input-des" className="font-medium">
              Descripcion Workspace
            </label>
            <textarea
              id="input-des"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              cols="30"
              placeholder="Descripcion Workspace"
              className="w-full border border-slate-500 rounded-md p-2.5"
            />
          </div>
          <div className="w-full flex items-center justify-center gap-3 md:max-w-max md:ml-auto">
            <button
              onClick={() => onSet(false)}
              type="button"
              className="w-22 py-2 font-medium bg-white border border-slate-500 rounded-md cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-22 py-2 font-medium bg-blue-500 text-white border border-slate-500 rounded-md cursor-pointer"
            >
              {loading ? "Creando..." : "Crear"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
