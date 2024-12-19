'use client'
import { useState } from "react";
import Link from "next/link";
import {NavListItem} from "@/app/_components/NavListItem";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-gray-800 p-4 mb-10">
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
                <NavListItem to='/'>Home</NavListItem>
                <NavListItem to='/hotel'>Hotels</NavListItem>
                <NavListItem to='/bus'>Bus</NavListItem>
                <NavListItem to='/flight'>Flight</NavListItem>
                <NavListItem to='/train'>Train</NavListItem>
                <NavListItem to='/places'>Places</NavListItem>

            </ul>
        </nav>
    );
};
