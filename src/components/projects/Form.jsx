import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useData } from "../../hooks/useData";
import { createProject } from "../../services/data";
import toast from "react-hot-toast";

function Form({ onSet, workskpaceId }) {
  const { loading } = useData();
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateProject = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedDescription = description.trim();

    if (!trimmedName || !trimmedDescription) {
      toast.error("Ambos campos son obligatorios");
      return;
    }

    try {
      await createProject(
        user.uid,
        workskpaceId?.id,
        trimmedName,
        trimmedDescription
      );
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
          <h2 className="font-semibold">Crear nuevo proyecto</h2>
          <button
            onClick={() => onSet(false)}
            type="button"
            className="text-lg"
          >
            x
          </button>
        </div>

        <form
          onSubmit={handleCreateProject}
          className="w-full flex flex-col gap-4 text-sm"
        >
          <div className="w-full">
            <label htmlFor="input-name" className="font-medium">
              Nombre Proyecto
            </label>
            <input
              type="text"
              id="input-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nombre Proyecto"
              className="w-full border border-slate-500 rounded-md p-2.5"
            />
          </div>
          <div className="w-full">
            <label htmlFor="input-des" className="font-medium">
              Descripcion Proyecto
            </label>
            <textarea
              id="input-des"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              cols="30"
              placeholder="Descripcion Proyecto"
              className="w-full border border-slate-500 rounded-md p-2.5"
            />
          </div>
          <button
            type="submit"
            className="w-max p-2 font-medium bg-blue-500 text-white border border-slate-500 rounded-md md:ml-auto cursor-pointer"
          >
            Crear proyecto
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
