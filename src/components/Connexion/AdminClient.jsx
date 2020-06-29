import React, { useState } from 'react';
import ButtonModify from '../../style/ButtonModify';
import AdminClientInfo from './AdminClienInfo';

const AdminClient = () => {
    const [onglets, setOnglets] = useState(1);
    const goInfo = () => {setOnglets(1)};
    const goOrder = () => {setOnglets(2)};
    const goHistory = () => {setOnglets(3)};

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
                onClick={goOrder}
                className={`onglets round ${onglets === 2 ? "active" : ""}`}
                >
                COMMANDES 
                </button>
                <button
                onClick={goHistory}
                className={`onglets round ${onglets === 3 ? "active" : ""}`}
                >
                HISTORIQUE 
                </button>
            </div>
            <>
                {onglets === 1 ? 
                    <>
                        <ButtonModify />
                        <AdminClientInfo />
                    </> 
                : <>{onglets === 2 ? <p>Vous n'avez pas de commandes</p>:<p>Vous n'avez pas de commandes</p>}</>
                }
            </>
            
        </div>
    )
};

export default AdminClient;