function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-sky-700 text-gray-50 px-10">
      <h1 className="text-amber-800 text-3xl font-bold uppercase">Alain</h1>
      <ul className="flex gap-x-4">
        <li>About Me</li>
        <li>Projects</li>
        <li>Contact Me</li>
      </ul>
    </nav>
  )
}

export default Navbar;
