import React, { useState } from 'react';
import axios from 'axios';

export default function AddProduct() {
    const [nom, setNom] = useState('');
    const [categorie, setCategorie] = useState('');
    const [prix, setPrix] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const ajouterProduct = async () => {
        if (!nom || !categorie || !prix || !image) {
            setMessage('Veuillez remplir tous les champs.');
            return;
        }

        const formData = new FormData();
        formData.append('n', nom);
        formData.append('p', prix);
        formData.append('c', categorie);
        formData.append('image', image);

        try {
            const res = await axios.post(
                'https://my-niche.vercel.app/api/products',
                formData
            );

            setMessage(res.data.message);
            setNom('');
            setCategorie('');
            setPrix('');
            setImage(null);

        } catch (err) {
            console.error(err);
            setMessage('Erreur lors de l’ajout');
        }
    };

    return (
        <div className="mx-auto max-w-md p-6 bg-white rounded-lg shadow">
            <h1 className="text-2xl font-semibold mb-4">Ajouter un produit</h1>

            <input
                className="w-full px-3 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={e => setNom(e.target.value)}
            />

            <input
                className="w-full px-3 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
                type="text"
                placeholder="Prix"
                value={prix}
                onChange={e => setPrix(e.target.value)}
            />

            <input
                className="w-full px-3 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
                type="text"
                placeholder="Catégorie"
                value={categorie}
                onChange={e => setCategorie(e.target.value)}
            />

            <input
                className="block w-full text-sm text-gray-600 mb-4"
                type="file"
                onChange={e => setImage(e.target.files[0])}
            />

            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={ajouterProduct}
            >
                Ajouter
            </button>

            {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
        </div>
    );
}
