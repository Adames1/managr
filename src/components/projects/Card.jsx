import { Link } from "react-router-dom";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";

function Card({ projects, workskpaceId }) {
  const formatDate =
    projects?.createdAt &&
    format(projects.createdAt.toDate(), "MMM dd, yyyy hh:mm a");
  return (
    <Link
      to={`/workspaces/${workskpaceId.id}/projects/${projects.id}`}
      className="w-full bg-white rounded-md shadow-sm p-4 md:px-6 flex flex-col text-sm gap-4 border border-slate-300"
    >
      <div className="">
        <div className="">
          <h2 className="">{projects.name}</h2>
          <p className="">{projects.description}</p>
        </div>
        <span className="">Planning</span>
      </div>
      <div className="">
        <span className="">0 Tareas</span>
        <span className="flex items-center gap-1">
          <CalendarDays size={16} /> {`Pendiente: ${formatDate}`}
        </span>
      </div>
    </Link>
  );
}

export default Card;
