import { useEffect, useState } from "react";

export default function Navbar() {
  const avatarUrl = "/images/avatar.gif"; // Pad naar je opgeslagen afbeelding in de public-map

  return (
    <nav className="w-full bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt="Discord Avatar"
              className="w-10 h-10 rounded-full"
            />
          )}
          <h1 className="text-xl font-bold">Fietsendief</h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Projecten
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
