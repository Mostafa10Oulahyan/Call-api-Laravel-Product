import { useEffect, useState } from "react";
import axios from "axios";

export default function FiltreProduct() {
    const [prodwy, setProdwy] = useState("");
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        axios
            .get("https://my-niche.vercel.app/api/filtrer", {
                params: { prodwy }, 
            })
            .then((response) => {
                setProduits(response.data);
            })
            .catch(() => {
                setProduits([]);
            });
    }, [prodwy]);

    return (
        <div className="mx-auto max-w-3xl p-6">
            <h1 className="text-2xl font-semibold mb-2">React App Calling Laravel API</h1>
            <h2 className="text-lg text-gray-600 mb-4">Recherche produits</h2>

            <input
                className="w-full px-3 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
                type="text"
                value={prodwy}
                onChange={(e) => setProdwy(e.target.value)}
                placeholder="Rechercher..."
            />

            <table className="w-full table-auto border-collapse" border="1" cellPadding="5">
                <thead>
                    <tr className="bg-gray-50">
                        <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">ID</th>
                        <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Image</th>
                        <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Nom</th>
                        <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Prix</th>
                        <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">Catégorie</th>
                    </tr>
                </thead>

                <tbody>
                    {produits.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="px-3 py-2">Aucun produit</td>
                        </tr>
                    ) : (
                        produits.map((prod) => (
                            <tr key={prod.id} className="odd:bg-white even:bg-gray-50">
                                <td className="px-3 py-2 align-top">{prod.id}</td>

                                <td className="px-3 py-2 align-top">
                                    <img className="h-20 w-20 object-cover" src={prod.image} alt={prod.nom} />
                                </td>

                                <td className="px-3 py-2 align-top">{prod.nom}</td>
                                <td className="px-3 py-2 align-top">{prod.prix}</td>
                                <td className="px-3 py-2 align-top">{prod.categorie}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}