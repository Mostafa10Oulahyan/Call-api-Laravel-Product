import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Menu() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    // close mobile menu on route change
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    return (
        <header className="bg-white shadow">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-3">
                        <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">N</div>
                        <div>
                            <Link to="/" className="text-lg font-semibold text-gray-800">Myniche</Link>
                            <div className="text-xs text-gray-500">Produits API</div>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center">
                        <Link to="/add" className="text-gray-700 hover:text-blue-600 font-medium">Ajouter</Link>
                    </nav>

                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                            aria-expanded={open}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile panel */}
            {open && (
                <div className="md:hidden border-t bg-white">
                    <div className="px-4 py-3 space-y-2">
                        <Link to="/add" onClick={() => setOpen(false)} className="block text-gray-700">Ajouter</Link>
                    </div>
                </div>
            )}
        </header>
    );
}
