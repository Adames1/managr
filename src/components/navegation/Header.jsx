function Header({ displayName }) {
  return (
    <header className="w-full bg-white border-b border-slate-200 py-4 px-6 md:px-10 flex items-center justify-end">
      <h2 className="text-[15px] font-medium text-slate-600">
        Hola, {displayName}
      </h2>
    </header>
  );
}

export default Header;
