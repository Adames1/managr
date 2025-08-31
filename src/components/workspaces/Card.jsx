import { Link } from "react-router-dom";
import { format } from "date-fns";

function Card({ workspaces }) {
  const formatDate =
    workspaces?.createdAt &&
    format(workspaces.createdAt.toDate(), "MMM dd, yyyy hh:mm a");

  return (
    <Link
      to={`/workspaces/${workspaces.id}`}
      className="w-full bg-white rounded-md shadow-sm p-4 md:px-6 flex flex-col text-sm gap-4 border border-slate-300"
    >
      <div className="">
        <h2 className="">{workspaces.name}</h2>
        <span className="">{`Creado en ${formatDate}`}</span>
      </div>
      <p className="">{workspaces.description}</p>
      <p className="">Da click para ver detalles y proyectos</p>
    </Link>
  );
}

export default Card;
