function Button({ type, children, disabled }) {
  return (
    <button type={type} className="button" disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
