import React from 'react';
import products from "../../Data/paysliste"; // Make sure to import your products data

const Pays = () => {
    return (
        <section className="container mx-auto p-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                            <th className="px-4 py-3">Drapeau</th>
                            <th className="px-4 py-3">Pays</th>

                            <th className="px-4 py-3">Ville 1</th>
                            <th className="px-4 py-3">Ville 2</th>
                            <th className="px-4 py-3">FCFA</th>
                            <th className="px-4 py-3">Dollars US</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                        {products.map(product => (
                            <tr key={product._id} className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    <img src={product.flag} alt={product.country} className="h-8 w-auto"/>
                                </td>
                                <td className="px-4 py-3 border">{product.country}</td>
                                <td className="px-4 py-3 border">{product.City1}</td>
                                <td className="px-4 py-3 border">{product.City2}</td>
                                <td className="px-4 py-3 border">{product.XAF}</td>
                                <td className="px-4 py-3 border">{product.USD}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Pays;
