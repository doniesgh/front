
import React, { useState } from "react";
import { useEquipementsContext } from '../hooks/useEquiContext';

const ModifierEqui = ({ handleClose, equipement }) => {
  const { dispatch } = useEquipementsContext();
  const [code_bureau, setCode_bureau] = useState(equipement?.code_bureau || "");
  const [bureau, setBureau] = useState(equipement?.bureau || "");
  const [date_formation, setDate_formation] = useState(equipement?.date_formation || "");
  const [date_visite_pre, setDate_visite_pre] = useState(equipement?.date_visite_pre || "");
  const [date_liv, setDate_liv] = useState(equipement?.date_liv || "");
  const [telephone, setTelephone] = useState(equipement?.telephone || "");
  const [modele_pc, setModele_pc] = useState(equipement?.modele_pc || "");
  const [modele_ecran, setModele_ecran] = useState(equipement?.modele_ecran || "");
  const [os, setOs] = useState(equipement?.os || "");
  const [para_reseau, setPara_reseau] = useState(equipement?.para_reseau || "");
  const [technicien, setTechnicien] = useState(equipement?.technicien || "");
  const [fiche, setFiche] = useState(equipement?.fiche || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const equipementData = {
        code_bureau : code_bureau,
        bureau: bureau,
        date_formation: date_formation,
        date_visite_pre: date_visite_pre,
        modele_pc: modele_pc,
        telephone : telephone,
        modele_ecran : modele_ecran,
        os :os,
        para_reseau:para_reseau,
        technicien:technicien,
        fiche:fiche


    };
    if (equipement && equipement._id) {
      try {
        const response = await fetch(`/api/equi/${equipement._id}`, {
          method: "PATCH",
          body: JSON.stringify(equipementData),
          headers: {
            "Content-type": "application/json",
          },
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Erreur dans la modification de l'équipement");
        }
  
        const updatedEquiData = await response.json();
        dispatch({
          type: "UPDATE_EQUI",
          payload: { _id: equipement._id, ...updatedEquiData },
        });
  
        handleClose();
      } catch (error) {
        console.error(error);
      }
    }
  }; 
  return (
    <div className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center">
      <div className="rounded-md bg-white p-8 border-2 shadow-lg border-tunisys-100">
        <h2 className="mb-4 text-xl font-semibold text-center text-tunisys-100">Modifier Réclamation</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>
            Code bureau:
            <input
              type="text"
              value={code_bureau}
              onChange={(e) => setCode_bureau(e.target.value)}
            />
          </label>
          <label>
           Bureau:
            <input
              type="text"
              value={bureau}
              onChange={(e) => setBureau(e.target.value)}
            />
          </label>
          <label>
          Date visite préliminaire:
            <input
              type="date"
              value={date_visite_pre}
              onChange={(e) => setDate_visite_pre(e.target.value)}
            />
          </label>
          <label>
          Date Livraison:
            <input
              type="date"
              value={date_liv}
              onChange={(e) => setDate_liv(e.target.value)}
            />
          </label>

          <label>
          Telephone:
            <input
              type="text"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </label>
          <label>
            Modéle pc:
            <input
              type="text"
              value={modele_pc}
              onChange={(e) => setModele_pc(e.target.value)}
            />
          </label>
          <label>
          Modéle écran:
            <input
              type="text"
              value={modele_ecran}
              onChange={(e) => setModele_ecran(e.target.value)}
            />
          </label>
          <label>
          Systéme d'exploitation :
            <input
              type="text"
              value={os}
              onChange={(e) => setOs(e.target.value)}
            />
          </label>
          <label>
          Paramétre réseau:
            <input
              type="text"
              value={para_reseau}
              onChange={(e) => setPara_reseau(e.target.value)}
            />
          </label>
          <label>
          Technicien:
            <input
              type="text"
              value={technicien}
              onChange={(e) => setTechnicien(e.target.value)}
            />
          </label>
          <label>
          Fiche:
            <input
              type="text"
              value={fiche}
              onChange={(e) => setFiche(e.target.value)}
            />
          </label>
          
          <button
            className="text-indigo-00 text-green-600 text- mt-4 rounded py-2 px-4 font-bold hover:text-green-600"
            type="submit"> Enregistrer </button>
          <button
            className="mt-2 rounded bg-gray-500 py-2 px-4 font-bold text-white hover:bg-gray-600"
            type="button"
            onClick={handleClose} >Annuler </button>
        </form>
      </div>
    </div>
  );
  
};

export default ModifierEqui;
