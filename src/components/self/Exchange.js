import React, {useState} from 'react';
import {Moq, Fact, Pay} from "../../components";

const Exchange = () => {
    const [activeButton, setActiveButton] = useState("moq");

    const handleClick = (button) => {
        setActiveButton(button);
    }

    return (
        <div>
            <div>
                <div className="text-center ">
                    <div className="h-1/3 flex justify-center py-6">
                        <div className="flex">
                            <div>
                                <button
                                    className={`flex items-center justify-center h-20 w-20 rounded-full bg-white drop-shadow-xl ${
                                        activeButton === "moq"
                                            ? "text-second-600 font-bold uppercase "
                                            : "font-bold  text-first-900"
                                    }`}
                                    onClick={() => handleClick("moq")}
                                >
                                    moq
                                </button>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <button
                                    className={`flex  items-center justify-center h-20 w-20 rounded-full bg-white drop-shadow-xl ${
                                        activeButton === "factures"
                                            ? "text-second-600 font-bold uppercase "
                                            : "font-bold  text-first-900"
                                    }`}
                                    onClick={() => handleClick("factures")}
                                >
                                    facture
                                </button>
                            </div>
                            <div>
                                <button
                                    className={`flex items-center justify-center h-20 w-20 rounded-full bg-white drop-shadow-xl ${
                                        activeButton === "pays"
                                            ? "text-second-600 font-bold uppercase "
                                            : "font-bold  text-first-900"
                                    }`}
                                    onClick={() => handleClick("pays")}
                                >
                                    Pay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {activeButton === "moq" && <Moq/>}
                {activeButton === "factures" && <Fact/>}
                {activeButton === "pays" && <Pay/>}
            </div>
        </div>
    );
};

export default Exchange;
