import { useEffect, useState } from "react";
import { useData } from "../../hooks/useData";
import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Button from "../../components/common/Button";
import EmptyComponent from "../../components/common/EmptyComponent";
import Form from "../../components/projects/Form";
import Card from "../../components/projects/Card";

function WorkspacesDetails() {
  const { id } = useParams();
  const { workspaces, loading, projects, setWorkspaceId } = useData();
  const [showForm, setShowForm] = useState(false);

  const workskpaceId = workspaces.find((item) => item.id === id);

  useEffect(() => {
    setWorkspaceId(workskpaceId?.id);
  }, [workspaces]);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <MainLayout>
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold text-slate-600 md:text-xl">
            {workskpaceId?.name}
          </h2>
          <p className="text-[12px] text-slate-500">
            {workskpaceId?.description}
          </p>
        </div>
        <Button
          onClick={handleShowForm}
          type="button"
          className="w-9 h-9 md:w-max md:h-11 flex items-center justify-center gap-2 bg-[#326aeb] text-white text-sm font-semibold rounded-full px-4 cursor-pointer hover:bg-[#2661ea]"
        >
          <span className="text-xl">+</span>
          <span className="sr-only md:not-sr-only">Nuevo proyecto</span>
        </Button>
      </div>

      <div className="mt-4">
        <h1 className="text-lg font-semibold text-slate-600 md:text-xl">
          Proyectos
        </h1>

        <div
          className={`mt-4 ${
            projects.length === 0
              ? "min-h-80 flex items-center justify-between"
              : "min-h-0 w-full grid grid-cols-[repeat(auto-fit,minmax(250px,max-content))] gap-6"
          }`}
        >
          {projects.length === 0 ? (
            <EmptyComponent>
              <h2 className="font-medium">No existen proyetos creados</h2>
              <p className="text-slate-500">
                Presionar crear proyecto para empezar.
              </p>
              <Button
                onClick={handleShowForm}
                type="button"
                className="w-9 h-9 md:w-max md:h-11 flex items-center justify-center gap-2 bg-[#326aeb] text-white text-sm font-semibold rounded-full px-4 cursor-pointer hover:bg-[#2661ea]"
              >
                <span className="text-xl">+</span>
                <span className="sr-only md:not-sr-only">Crear proyecto</span>
              </Button>
            </EmptyComponent>
          ) : (
            projects.map((items, index) => (
              <Card key={index} projects={items} workskpaceId={workskpaceId} />
            ))
          )}

          {showForm && <Form onSet={setShowForm} workskpaceId={workskpaceId} />}
        </div>
      </div>
    </MainLayout>
  );
}

export default WorkspacesDetails;
