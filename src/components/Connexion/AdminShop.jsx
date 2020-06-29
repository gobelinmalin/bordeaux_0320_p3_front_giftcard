import React, { useState } from 'react';

const AdminShop = () => {
    const [onglets, setOnglets] = useState(1);
    const goInfo = () => {setOnglets(1)};
    const goSold = () => {setOnglets(2)};
    const goCard = () => {setOnglets(3)};
    const goAdvice = () => {setOnglets(4)};

    return (
        <div className='admin'>
            <div className="contBtn">
                <button
                onClick={goInfo}
                className={`onglets ${onglets === 1 ? "active" : ""}`}
                >
                INFORMATIONS
                </button>
                <button
                onClick={goSold}
                className={`onglets round ${onglets === 2 ? "active" : ""}`}
                >
                VENTES
                </button>
                <button
                onClick={goCard}
                className={`onglets round ${onglets === 3 ? "active" : ""}`}
                >
                CARTES 
                </button>
                <button
                onClick={goAdvice}
                className={`onglets round ${onglets === 3 ? "active" : ""}`}
                >
                AVIS 
                </button>
            </div>
            <>
                {onglets === 1 ? 
                    <p>info enseigne</p> 
                    : <>{onglets === 2 ? 
                        <p>chiffres d'affaires</p>
                        : <>{onglets === 3 ? 
                            <p>Vous n'avez pas encore de cartes à vendre</p>
                            : <p>Vous n'avez pas encore d'avis</p>}</>
                        }</>
                }
            </>
            
        </div>
    )
};

export default AdminShop;