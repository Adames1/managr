import { Link } from "react-router-dom";

function LinkPageForm({ title, link, linkTitle }) {
  return (
    <p className="text-[14px] flex gap-1 text-slate-500">
      {title}
      <Link to={link} className="underline text-[#326AEB]">
        {linkTitle}
      </Link>
    </p>
  );
}

export default LinkPageForm;
