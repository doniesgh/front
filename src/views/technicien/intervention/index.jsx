import React, { useState, useEffect } from 'react';
import { useAuthContext } from 'views/auth/hooks/useAuthContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const ListeIntervention = () => {
  const [interventions, setInterventions] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchInterventions = async () => {
      try {
        //setLoading(true);
        const response = await fetch('/api/inter/get', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${user.token}`
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Response Data:', data);

        setInterventions(data.interventions);
      } catch (error) {
        console.error('Error:', error);
      } 
    };

    const interval = setInterval(fetchInterventions, 5000);
    return () => clearInterval(interval);
  }, [user.token]);

  return (
    <div>
      <h1 className='text-[2.7em] mt-10 mb-2.5 mx-0 text-center font-semibold dark:text-gray-600'>Liste d'intervention</h1>
      <ul>
      {interventions.map(intervention => (
  <div key={intervention._id} className='p-5 rounded-2xl relative shadow-[2px_2px_5px_rgba(0,0,0,0.05)] mx-auto my-5 bg-white'>
    <div className='flex'>
      <div className="ml-4">
        <ul>
          <li>
            <strong>_id: </strong>{intervention._id}
          </li>
          <li>
            <strong>numRapport: </strong>{intervention.numRapport}
          </li>
          <li>
            <strong>type: </strong>{intervention.type}
          </li>
          <li>
            <strong>dateDebut: </strong> {new Date(intervention.dateDebut).toLocaleString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric'
                    })}
          </li>
          <li>
            <strong>dateFin: </strong>{new Date(intervention.dateFin).toLocaleString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric'
                    })}
          </li>
          <li>
            <strong>client: </strong>{intervention.client}
          </li>
          <li>
            <strong>description: </strong>{intervention.description}
          </li>
        </ul>
      </div>
    </div>
  </div>
))}

      </ul>
    </div>
  );
};

export default ListeIntervention;
