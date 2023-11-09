import { useState, Link } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
//import { useAuthContext } from 'views/auth/hooks/useAuthContext';
import { useEquipementsContext } from '../hooks/useEquiContext';
import ModifierEqui from './modifierEquipement';
const { format } = require('date-fns');

const EquipementDetails = ({ equipement }) => {
  const [selectedEqui, setSelectedEqui] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };
      const handleOpenModal = (equipement) => {
        setIsModalOpen(true);
        setSelectedEqui(equipement);
      };
  const { dispatch } = useEquipementsContext();
  const handleClick = async () => {
    /*if(!user) {
      return
    }*/
    const response = await fetch('/api/equi/' + equipement._id, {
      method: 'DELETE',
      headers: {
        //'Authorization' :`Bearer ${user.token}`
      }
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: 'DELETE_EQUI', payload: json });
    }
  };
  return (
    <div className='event-details p-5 rounded-2xl relative shadow-[2px_2px_5px_rgba(0,0,0,0.05)] mx-auto my-5 bg-white'>
      <div className='flex'>
        <div className="ml-4">
          <p className="mb-1"><strong>Code bureau :</strong>{equipement.code_bureau} </p>
          <p className="mb-1"><strong>Bureau :</strong>{equipement.bureau} </p>
        <p className="mb-1"><strong>Date visite préliminaire :</strong> {format(new Date(equipement.date_visite_pre), 'yy:MM:dd HH:mm')}</p>
         <p className="mb-1"><strong>Date formation:</strong>{format(new Date(equipement.date_formation), 'yy:MM:dd HH:mm')}</p>
{   /*       <p className="mb-1"><strong>Date livraison:</strong>{format(new Date(equipement.date_liv), 'yy:MM:dd HH:mm')}</p>
*/}          <p className="mb-1"><strong>Telephone:</strong>{equipement.telephone} </p>
          <p className="mb-1"><strong>Modéle Pc:</strong>{equipement.modele_pc} </p>
          <p className="mb-1"><strong>Modéle écran:</strong>{equipement.modele_ecran} </p>
          <p className="mb-1"><strong>Systéme d'exploitation:</strong>{equipement.os} </p>
          <p className="mb-1"><strong>Paramétre réseau:</strong>{equipement.para_reseau} </p>
          <p className="mb-1"><strong>Technicien</strong>{equipement.technicien} </p>
          <p className="mb-1"><strong>Fiche:</strong>{equipement.fiche} </p>

          <p className="mb-1">{formatDistanceToNow(new Date(equipement.createdAt), { addSuffix: true })}</p>
          <button onClick={handleClick} className='bg-transparent hover:bg-red-400 text-red-400  hover:text-white py-1 px-2 border border-red-400 hover:border-transparent rounded'>Supprimer</button>
          <button className='bg-transparent ml-2 hover:bg-green-400 text-green-400  hover:text-white py-1 px-2 border border-green-400 hover:border-transparent rounded' onClick={() => handleOpenModal(equipement)}>
            Modifier</button>
            {/*<button className='bg-transparent ml-2 hover:bg-blue-500 text-blue-500  hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded' onClick={() => handleOpenModal(equipement)}>
            Plus de détails</button>*/}
        </div>
      </div>
     {isModalOpen && (
      <div className='modal'>
        <div className='modal-content border-x-violet-800	'>
          <span className='close' onClick={() => setIsModalOpen(false)}>
            &times;
          </span>
          {isModalOpen && <ModifierEqui handleClose={handleCloseModal} equipement={selectedEqui} />
}
        </div>
      </div>
    )}

    </div>
    
  );
};

export default EquipementDetails;
