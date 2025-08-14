function Header() {
  return (
    <header className="w-full h-24 px-4 flex flex-col gap-1 md:gap-2 justify-center">
      <h1 className="text-2xl md:text-4xl font-bold text-blue-500">Managr</h1>
      <p className="text-sm">
        Bienvenido a <strong className="text-blue-500">Managr</strong>, tu
        aplicación de gestión para tus proyectos.
      </p>
    </header>
  );
}

export default Header;
