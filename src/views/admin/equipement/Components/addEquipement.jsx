import { useState } from "react";
import { useEquipementsContext } from "../hooks/useEquiContext";
const EquipementForm = () => {
    const { dispatch } = useEquipementsContext(); 
    const [code_bureau, setCodeBureau] = useState('');
    const [bureau, setBureau] = useState('');
    const [date_liv, setDateLiv] = useState('');
    const [date_visite_pre, setDateVisitePre] = useState('');
    const [date_formation, setDateFormation] = useState('');
    const [telephone, setTelephone] = useState('');
    const [modele_pc, setModelePc] = useState('');
    const [modele_ecran, setModeleEcran] = useState('');
    const [os, setOs] = useState('');
    const [para_reseau, setParaReseau] = useState('');
    const [technicien, setTechnicien] = useState('');
    const [fiche, setFiche] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState("");
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const equipementData = {
            code_bureau,
            bureau,
            date_visite_pre,
            date_formation,
            telephone,
            modele_pc,
            modele_ecran,
            os,
            para_reseau,
            technicien,
            fiche
        };
        const response = await fetch('/api/equi/', {
            method: 'POST',
            body: JSON.stringify(equipementData),
            headers: {
                'Content-type': 'application/json'
            }
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        } else {
            setEmptyFields([]);
            setCodeBureau('');
            setBureau('');
            setDateVisitePre('');
            setDateFormation('');
            setTelephone('');
            setModelePc('');
            setModeleEcran('');
            setOs('');
            setParaReseau('');
            setTechnicien('');
            setFiche('');
            setError(null);
            dispatch({ type: 'CREATE_EQUI', payload: json }); // Vous devez avoir une action de création dans votre contexte
            setSuccessMessage("Équipement ajouté avec succès");
            setTimeout(() => {
                setSuccessMessage("");
            }, 5000);
        }
    }

    return (
        <form className="create block mt-6" onSubmit={handleSubmit}>
            <h1 className="text-[1.7em] mb-2.5 mx-0 text-center font-semibold dark:text-gray-600">Ajouter un équipement :</h1>

            <label className="block dark:text-gray-600 ">Code bureau:</label>
    <input className={`block w-full border rounded box-border  mb-2 p-2.5 border-solid ${emptyFields.includes('code_bureau') ? 'border-red-500' : 'border-[#ddd]'
        }`} type="text"
        onChange={(e) => setCodeBureau(e.target.value)}
        value={code_bureau}
    />
    <label className="block dark:text-gray-600 ">Bureau :</label>
    <input className={`block w-full border rounded box-border  mb-2 p-2.5 border-solid ${emptyFields.includes('bureau') ? 'border-red-500' : 'border-[#ddd]'
        }`} type="text"
        onChange={(e) => setBureau(e.target.value)}
        value={bureau}
    />
    <label className="block dark:text-gray-600 ">Date visite préliminaire</label>
    <input className={`block w-full border rounded box-border  mb-2 p-2.5 border-solid ${emptyFields.includes('date_visite_pre') ? 'border-red-500' : 'border-[#ddd]'
        }`} type="date"
        onChange={(e) => setDateVisitePre(e.target.value)}
        value={date_visite_pre}
    />
     <label className="block dark:text-gray-600 ">Date livraison </label>
    <input className={`block w-full border rounded box-border  mb-2 p-2.5 border-solid ${emptyFields.includes('date_liv') ? 'border-red-500' : 'border-[#ddd]'
        }`} type="date"
        onChange={(e) => setDateLiv(e.target.value)}
        value={date_liv}
    />
    <label className="block dark:text-gray-600 ">Date formation :</label>
    <input className={`block w-full border rounded box-border  mb-2 p-2.5 border-solid ${emptyFields.includes('date_formation') ? 'border-red-500' : 'border-[#ddd]'
        }`} type="date"
        onChange={(e) => setDateFormation(e.target.value)}
        value={date_formation}
    />
    <label className="block dark:text-gray-600 ">Telephone:</label>
    <input className={`block w-full border rounded box-border  mb-2 p-2.5 border-solid ${emptyFields.includes('telephone') ? 'border-red-500' : 'border-[#ddd]'
        }`} type="text"
        onChange={(e) => setTelephone(e.target.value)}
        value={telephone}
    />
    <label className="block dark:text-gray-600 ">Modéle pc :</label>
    <input className={`block w-full border rounded box-border  mb-2 p-2.5 border-solid ${emptyFields.includes('modele_pc') ? 'border-red-500' : 'border-[#ddd]'
        }`} type="text"
        onChange={(e) => setModelePc(e.target.value)}
        value={modele_pc}
    />
    <label className="block dark:text-gray-600 ">Modéle écran :</label>
    <input className={`block w-full border rounded box-border  mb-2 p-2.5 border-solid ${emptyFields.includes('modele_ecran') ? 'border-red-500' : 'border-[#ddd]'
        }`} type="text"
        onChange={(e) => setModeleEcran(e.target.value)}
        value={modele_ecran}
    />
    <label className="block dark:text-gray-600 ">Systéme d'exploitation :</label>
    <input className={`block w-full border rounded box-border  mb-2 p-2.5 border-solid ${emptyFields.includes('os') ? 'border-red-500' : 'border-[#ddd]'
        }`} type="text"
        onChange={(e) => setOs(e.target.value)}
        value={os}
    />
    <label className="block dark:text-gray-600 ">Paramétre réseau :</label>
    <input className={`block w-full border rounded box-border  mb-2 p-2.5 border-solid ${emptyFields.includes('para_reseau') ? 'border-red-500' : 'border-[#ddd]'
        }`} type="text"
        onChange={(e) => setParaReseau(e.target.value)}
        value={para_reseau}
    />
    <label className="block dark:text-gray-600 ">Fiche :</label>
    <input className={`block w-full border rounded box-border  mb-2 p-2.5 border-solid ${emptyFields.includes('fiche') ? 'border-red-500' : 'border-[#ddd]'
        }`} type="text"
        onChange={(e) => setFiche(e.target.value)}
        value={fiche}
    />
    <label className="block dark:text-gray-600 ">Technicien :</label>
    <input className={`block w-full border rounded box-border  mb-2 p-2.5 border-solid ${emptyFields.includes('technicien') ? 'border-red-500' : 'border-[#ddd]'
        }`} type="text"
        onChange={(e) => setTechnicien(e.target.value)}
        value={technicien}
    />
            <button className="text-white rounded cursor-pointer p-2.5 border-0 bg-tunisys-100">Valider</button>
            {error && <div className="error border rounded mx-0 my-5 p-2.5 border-solid bg-red-300">{error}</div>}
            {successMessage && <div className="success border rounded mx-0 my-5 p-2.5 border-solid bg-green-300">{successMessage}</div>}
        </form>
    )
}
export default EquipementForm;
