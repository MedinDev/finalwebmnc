import React from 'react';

const Moq = () => {
    return (
        <div className=" justify-center items-center  bg-white">
            <div className="container mx-auto my-4 px-4 lg:px-20">

                <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                    <div className="flex">
                        <h1 className="font-bold uppercase text-5xl">à vous <br/> de jouer</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium">Devise</label>
                            <input id="firstName" name="firstName" type="text" required
                                   className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium">Montant (Unité)</label>
                            <input id="lastName" name="lastName" type="text" required
                                   className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">Quantité</label>
                            <input id="email" name="email" type="email" required
                                   className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium">Commission</label>
                            <input id="phone" name="phone" type="tel" required
                                   className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">Montant Final</label>
                            <input id="email" name="email" type="email" required
                                   className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium">Status de la commande</label>
                            <input id="phone" name="phone" type="tel" required
                                   className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"/>
                        </div>
                    </div>
                    <div className="my-4">
                        <label htmlFor="message" className="block text-sm font-medium">Information sur
                            l'opertion</label>
                        <textarea id="message" name="message" required
                                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="my-2 w-1/2 lg:w-1/4">
                        <button type="submit" className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full
                      focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </div>

                <div
                    className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
                    <div className="flex flex-col text-white">
                        <h1 className="font-bold uppercase text-4xl my-4">Drop in our office</h1>
                        <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            tincidunt arcu diam,
                            eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque
                            ex.
                        </p>

                        <div className="flex my-4 w-2/3 lg:w-1/2">
                            <div className="flex flex-col">
                                <i className="fas fa-map-marker-alt pt-2 pr-2"/>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl">Main Office</h2>
                                <p className="text-gray-400">5555 Tailwind RD, Pleasant Grove, UT 73533</p>
                            </div>
                        </div>

                        <div className="flex my-4 w-2/3 lg:w-1/2">
                            <div className="flex flex-col">
                                <i className="fas fa-phone-alt pt-2 pr-2"/>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl">Call Us</h2>
                                <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                                <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
                            </div>
                        </div>

                        <div className="flex my-4 w-2/3 lg:w-1/2">
                            <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank"
                               rel="noopener noreferrer"
                               className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                                <i className="fab fa-facebook-f text-blue-900"/>
                            </a>
                            <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank"
                               rel="noopener noreferrer"
                               className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                                <i className="fab fa-linkedin-in text-blue-900"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Moq;
