import React, {useState} from 'react';
import {Fly, Boat} from "../../components";

const Swap = () => {
    const [activeButton, setActiveButton] = useState("fly");

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
                                    onClick={() => handleClick("fly")}
                                >
                                    Avion
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
                                    onClick={() => handleClick("boat")}
                                >
                                    Bateau
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {activeButton === "fly" && <Fly/>}
                {activeButton === "boat" && <Boat/>}

            </div>
        </div>
    );
};

export default Swap;
