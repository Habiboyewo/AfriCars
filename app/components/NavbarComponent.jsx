"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow">
            <div className="max-w-6xl mx-auto flex items-center px-4 py-4">

                <button
                    className="p-2  lg:hidden "
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>


                <Link href="/" className="flex items-center ml-2">
                    <Image
                        src="/africars-logo.svg"
                        alt="AfriCars Logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <span className="ml-2 font-bold text-lg text-gray-900">AfriCars</span>
                </Link>


                <nav className="hidden lg:flex  flex-1 justify-center gap-4">

                    <Link href="#book" className="border border-gray-300 rounded-xl px-4 py-1 font-semibold">Book</Link>
                    <Link href="#pricing" className="border border-gray-300 rounded-xl px-4 py-1 font-semibold">Pricing</Link>
                    <Link href="#trust" className="border border-gray-300 rounded-xl px-4 py-1 font-semibold">Trust</Link>
                    <Link href="#contact" className="border border-gray-300 rounded-xl px-4 py-1 font-semibold">Contact</Link>
                    <Link href="https://www.instagram.com/myafricars" className="border border-gray-300 rounded-xl px-4 py-1 font-semibold">Instagram</Link>
                    <button className="border border-gray-300 rounded-xl px-4 py-1 font-semibold">Theme</button>
                    <Link href="tel:+2347013502404" className="border border-gray-300 rounded-xl px-4 py-1 font-semibold text-[#2bd889]">Call</Link>
                    <Link href="https://wa.me/2347013502404" className="border border-gray-300 rounded-xl px-4 py-1 font-semibold text-[#2bd889]">Whatsapp</Link>
                </nav>
            </div>


            {open && (
                <div className="lg:hidden bg-white shadow px-4 py-3 space-y-2 pl-8">
                    <Link href="#book" onClick={() => setOpen(false)}  className=" font-semibold block mb-4">Book</Link>
                    <Link href="#pricing" onClick={() => setOpen(false)}  className=" font-semibold block mb-4">Pricing</Link>
                    <Link href="#trust" onClick={() => setOpen(false)}  className=" font-semibold block mb-4">Trust</Link>
                    <Link href="#contact" onClick={() => setOpen(false)}  className=" font-semibold block mb-4">Contact</Link>
                    <Link href="https://www.instagram.com/myafricars" onClick={() => setOpen(false)}  className=" mb-4 font-semibold block">Instagram</Link>
                    <button onClick={() => setOpen(false)}  className=" font-semibold mb-4">Theme</button>
                    <Link href="tel:+2347013502404" onClick={() => setOpen(false)}  className=" mb-4 font-semibold text-[#2bd889] block">Call</Link>
                    <Link href="https://wa.me/2347013502404" onClick={() => setOpen(false)}  className=" mb-4 font-semibold text-[#2bd889] block">Whatsapp</Link>
                    
                </div>
            )}
        </header>
    );
}
