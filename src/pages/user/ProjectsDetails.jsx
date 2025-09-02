import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

function ProjectsDetails() {
  return (
    <MainLayout>
      <Link
        to="#"
        className="flex items-center gap-1 bg-white border border-slate-200 px-1 w-max rounded text-sm"
      >
        <MoveLeft size={16} />
        Atras
      </Link>
      <div className="">ProjectsDetails</div>
    </MainLayout>
  );
}

export default ProjectsDetails;
