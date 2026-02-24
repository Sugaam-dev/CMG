import logo from "./assets/logo.png";

export default function Navbar() {
  return (
    <header className="w-full bg-gray-200 shadow-sm px-6 py-3 flex justify-between items-center">

      {/* Logo */}
      <img
        src={logo}
        alt="Oceanic Assurance"
        className="h-12 object-contain"
      />

      {/* User */}
      <button className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400">
        Dhurjoti ▼
      </button>

    </header>
  );
}
