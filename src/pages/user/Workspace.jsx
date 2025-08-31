import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Button from "../../components/common/Button";
import EmptyComponent from "../../components/common/EmptyComponent";
import Form from "../../components/common/Form";
import { useData } from "../../hooks/useData";
import Card from "../../components/workspaces/Card";

function Workspace() {
  const { workspaces, loading } = useData();
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <MainLayout>
      <div className="w-full flex items-center justify-between">
        <h1 className="text-lg font-semibold text-slate-600 md:text-xl">
          Workspace
        </h1>
        <Button
          onClick={handleShowForm}
          type="button"
          className="w-9 h-9 md:w-max md:h-11 flex items-center justify-center gap-2 bg-[#326aeb] text-white text-sm font-semibold rounded-full px-4 cursor-pointer hover:bg-[#2661ea]"
        >
          <span className="text-xl">+</span>
          <span className="sr-only md:not-sr-only">Crear workspace</span>
        </Button>
      </div>

      <div
        className={`mt-4 ${
          workspaces.length === 0
            ? "min-h-80 flex items-center justify-between"
            : "min-h-0 w-full grid grid-cols-[repeat(auto-fit,minmax(250px,max-content))] gap-6"
        }`}
      >
        {workspaces.length === 0 ? (
          <EmptyComponent onClik={handleShowForm}>
            <h2 className="font-medium">No existen workspaces creados</h2>
            <p className="text-slate-500">
              Presionar crear workspace para empezar.
            </p>
            <Button
              onClick={handleShowForm}
              type="button"
              className="w-9 h-9 md:w-max md:h-11 flex items-center justify-center gap-2 bg-[#326aeb] text-white text-sm font-semibold rounded-full px-4 cursor-pointer hover:bg-[#2661ea]"
            >
              <span className="text-xl">+</span>
              <span className="sr-only md:not-sr-only">Crear workspace</span>
            </Button>
          </EmptyComponent>
        ) : (
          workspaces.map((items, index) => (
            <Card key={index} workspaces={items} />
          ))
        )}
        {showForm && <Form onSet={setShowForm} />}
      </div>
    </MainLayout>
  );
}

export default Workspace;
