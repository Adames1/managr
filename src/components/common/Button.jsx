function Button({ type, className, onClick, children }) {
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
}

export default Button;
