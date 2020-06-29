import React from 'react';
import AdminClient from './AdminClient';
import AdminShop from './AdminShop';
import ButtonLogout from '../../style/ButtonLogout';

const ClientArea = ({match}) => {
    const { user } = match.params;
    return (
        <div className='connexion'>
            <div className='profile-title'>
                <h2>ESPACE {user}</h2>
                <ButtonLogout />
            </div>
            {user === 'client' ? <AdminClient /> : <AdminShop />}
        </div>
    )
};

export default ClientArea;