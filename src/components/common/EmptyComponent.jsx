import Button from "./Button";

function EmptyComponent({ children }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center mx-auto text-sm">
      {children}
    </div>
  );
}

export default EmptyComponent;
