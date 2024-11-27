'use client'
import { useState } from "react";
import Link from "next/link";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-gray-800 p-4 mb-[20rem]">
            {/* Burger Menu Icon */}
            <div className="sm:hidden flex justify-between items-center">
                <h1 className="text-white text-xl">Travel Manager</h1>
                <button
                    className="text-white text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Menu Items */}
            <ul
                className={`${
                    isOpen ? "block" : "hidden"
                } sm:flex w-full justify-center text-white gap-10 mt-4 text-xl`}
            >
                <li className="hover:text-yellow-500">
                    <Link href="/hotel">Hotels</Link>
                </li>
                <li className="hover:text-yellow-500">
                    <Link href="/bus">Bus</Link>
                </li>
                <li className="hover:text-yellow-500">
                    <Link href="/flight">Flight</Link>
                </li>
                <li className="hover:text-yellow-500">
                    <Link href="/train">Train</Link>
                </li>
            </ul>
        </nav>
    );
};
