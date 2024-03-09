import React, {useState} from "react";

const Pay = () => {
    const [type, setType] = useState("Western Union");
    const [showDetails, setShowDetails] = useState(false);

    const handleTypeChange = (event) => {
        setType(event.target.value);
        setShowDetails(true);
    };

    return (
        <section>
            <div className="max-w-md mx-auto px-6 py-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl uppercase font-bold text-gray-800 mb-4">
                        Payment
                    </h2>


                    <form className="mt-4">
                        <div className="mb-4">
                            <label
                                htmlFor="payment-method"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Veuillez sélectionner votre méthode de paiement préférée parmi nos diverses options
                                disponibles.
                            </label>
                            <select
                                id="payment-method"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={type}
                                onChange={handleTypeChange}
                            >
                                <option value="Western Union">Western Union</option>
                                <option value="MoneyGram">MoneyGram</option>
                                <option value="Express">Express 24h/7j</option>
                                <option value="Airtel Money">Airtel Money</option>
                                <option value="Moov Money">Moov Money</option>
                                <option value="Orange Money">Orange Money</option>
                                <option value="Visa">Visa/Bank</option>
                                <option value="Paypal">Paypal</option>
                                <option value="Autres">Autres</option>
                            </select>
                        </div>

                        {showDetails && (
                            <div>
                                <label
                                    htmlFor="currency"
                                    className="block text-sm text-red-700"
                                >
                                    Merci de nous faire savoir votre mode de paiement
                                    lorsque vous effectuez votre choix. Merci !
                                </label>
                                <div
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    {type === "Western Union" && (
                                        <div>
                                            <label
                                                htmlFor="currency"
                                                className="block text-lg font-bold text-gray-700"
                                            >
                                                Pays/ville
                                            </label>
                                            <div
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <p className="dark:text-gray-400">Pays: CHINE</p>
                                                <p className="dark:text-gray-400"> Ville: Sanming </p>
                                                <p className="dark:text-gray-400"> Province: Fujian </p>
                                            </div>
                                            <label
                                                htmlFor="currency"
                                                className="block text-lg font-bold text-gray-700"
                                            >
                                                Devise
                                            </label>
                                            <div
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <p>Dollar US</p>
                                                <p>Euro</p>
                                            </div>
                                            <label
                                                htmlFor="currency"
                                                className="block text-lg font-bold text-gray-700 "
                                            >
                                                Telephone
                                            </label>
                                            <div
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <p>+86 13860555031</p>
                                                <p>+86 15678941530</p>
                                            </div>

                                            <span
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        Plus d'infos pour le transfert{" "}
                                                <a
                                                    className="text-green-700"
                                                    href="https://wa.me/message/HKKNJXX6OIIBH1
                      "
                                                    alt="#"
                                                >
                          Whatsapp
                        </a>
                        .
                      </span>
                                        </div>
                                    )}
                                    {type === "MoneyGram" && (
                                        <div>
                                            <label
                                                htmlFor="currency"
                                                className="block text-lg font-bold text-gray-700"
                                            >
                                                Pays/ville
                                            </label>
                                            <div
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <p className="dark:text-gray-400">Pays: CHINE</p>
                                                <p className="dark:text-gray-400"> Ville: Sanming </p>
                                                <p className="dark:text-gray-400"> Province: Fujian </p>
                                            </div>
                                            <label
                                                htmlFor="currency"
                                                className="block text-lg font-bold text-gray-700"
                                            >
                                                Devise
                                            </label>
                                            <div
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <p>Dollar US</p>
                                                <p>Euro</p>
                                            </div>
                                            <label
                                                htmlFor="currency"
                                                className="block text-lg font-bold text-gray-700 "
                                            >
                                                Telephone
                                            </label>
                                            <div
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <p>+86 13860555031</p>
                                                <p>+86 15678941530</p>
                                            </div>

                                            <span
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        Plus d'infos pour le transfert{" "}
                                                <a
                                                    className="text-green-700"
                                                    href="https://wa.me/message/HKKNJXX6OIIBH1
                    "
                                                    alt=""
                                                >
                          Whatsapp
                        </a>
                        .
                      </span>
                                        </div>
                                    )}
                                    {type === "Airtel Money" && (
                                        <div>
                                            <label
                                                htmlFor="currency"
                                                className="block text-sm font-bold text-gray-700"
                                            >
                                                Num 01
                                            </label>
                                            <div
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <p>074755759</p>
                                                <p className="dark:text-gray-400">Missang</p>
                                            </div>
                                            <label
                                                htmlFor="currency"
                                                className="block text-sm font-bold text-gray-700"
                                            >
                                                Num 02
                                            </label>
                                            <div
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <p>07264490</p>
                                                <p className="dark:text-gray-400">RhodeAshley</p>
                                            </div>
                                            <div>
                                                <p className="dark:text-gray-400 text-xs text-center">
                                                    Veuillez effectuer une capture d'écran <br/> et nous
                                                    la transmettre.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {type === "Moov Money" && (
                                        <div>
                                            <label
                                                htmlFor="currency"
                                                className="block text-sm font-bold text-gray-700"
                                            >
                                                Num 01
                                            </label>
                                            <div
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <p>065697318</p>
                                                <p className="dark:text-gray-400">Missang</p>
                                            </div>
                                            <p className="dark:text-gray-400 text-xs text-center">
                                                Veuillez effectuer une capture d'écran <br/> et nous la
                                                transmettre.
                                            </p>
                                            {/* <label
                  htmlFor="currency"
                  className="block text-sm font-medium text-gray-700"
                >
                  Num 02
                </label>
                <div className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <p>07264490</p>
                  <p className="dark:text-gray-400">RhodeAshley</p>
                </div> */}
                                        </div>
                                    )}
                                    {type === "Orange Money" && (
                                        <div>
                                            <div
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <p>
                                                    Nous travaillons avec plusieurs <br/> agences pour ce
                                                    moyen de payment.
                                                </p>
                                                <p className="dark:text-gray-400 text-xs">
                                                    Contactez-nous pour les numeros.
                                                </p>
                                            </div>

                                            <span
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        Plus d'infos pour le transfert{" "}
                                                <a
                                                    className="text-green-700"
                                                    href="https://wa.me/message/HKKNJXX6OIIBH1
                  "
                                                    alt=""
                                                >
                          Whatsapp
                        </a>
                        .
                      </span>
                                        </div>
                                    )}
                                    {type === "Express" && (
                                        <div>
                                            <div
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <p>
                                                    Nous travaillons avec plusieurs <br/> agences pour ce
                                                    moyen de payment.
                                                </p>
                                                <ul className="list-disc list-inside text-gray-700">
                                                    <li>Express Pay</li>
                                                    <li>Urus Pay</li>
                                                    <li>Autre</li>
                                                </ul>
                                                <p className="dark:text-gray-400 text-xs">
                                                    Contactez-nous pour les numeros.
                                                </p>
                                            </div>

                                            <span
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        Plus d'infos pour le transfert{" "}
                                                <a
                                                    className="text-green-700"
                                                    href="https://wa.me/message/HKKNJXX6OIIBH1
                  "
                                                    alt=""
                                                >
                          Whatsapp
                        </a>
                        .
                      </span>
                                        </div>
                                    )}
                                    {type === "Visa" && (
                                        <div>
                                            <div
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <ul className="list-disc list-inside text-gray-700 ">
                                                    <li>Transfert (Banque)</li>
                                                    <li>Virement (Banque)</li>
                                                    <li>Dépôts (Banque)</li>
                                                    <li>Dépôts (Carte Prépayée Gabon)</li>
                                                    <li>Autre</li>
                                                </ul>
                                                <p className="dark:text-gray-400 text-xs">
                                                    Contactez-nous pour les numeros.
                                                </p>
                                            </div>

                                            <span
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        Plus d'infos pour le transfert{" "}
                                                <a
                                                    className="text-green-700"
                                                    href="https://wa.me/message/HKKNJXX6OIIBH1
                  "
                                                    alt=""
                                                >
                          Whatsapp
                        </a>
                        .
                      </span>
                                        </div>
                                    )}
                                    {type === "Paypal" && (
                                        <div>
                                            <div
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <p className="font-bold">
                                                    Compte:{" "}
                                                    <span className="font-medium">
                            Medymissang@gmail.com
                          </span>
                                                </p>
                                                <p className="dark:text-gray-400 text-xs">
                                                    Veuillez effectuer une capture d'écran <br/> et nous
                                                    la transmettre.
                                                </p>
                                            </div>

                                            <span
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        Plus d'infos pour le transfert{" "}
                                                <a
                                                    className="text-green-700"
                                                    href="https://wa.me/message/HKKNJXX6OIIBH1
                  "
                                                    alt=""
                                                >
                          Whatsapp
                        </a>
                        .
                      </span>
                                        </div>
                                    )}
                                    {type === "Autres" && (
                                        <div>
                                            <label
                                                htmlFor="currency"
                                                className="block text-sm font-medium text-gray-700 text-center"
                                            >
                                                Nos informations
                                            </label>
                                            <div
                                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <ul className="list-disc list-inside text-gray-700  ">
                                                    <li>
                                                        {" "}
                                                        Email:
                                                        <a href="mailto:vertexshop241@gmail.com">
                                                            vertexshop241@gmail.com
                                                        </a>{" "}
                                                    </li>
                                                    <li>
                                                        Tel:
                                                        <a href="tel:+8613860555031">
                                                            +86 138 6055 5031
                                                        </a>
                                                    </li>

                                                </ul>
                                                <p className="dark:text-gray-400 text-xs text-center">
                                                    Veuillez nous contacter Merci.
                                                </p>
                                            </div>
                                        </div>
                                    )}{" "}
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Pay;
