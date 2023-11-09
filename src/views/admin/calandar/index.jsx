import React from 'react'
import { useState, useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useReclamationsContext } from 'views/admin/Reclamation/hooks/useRecsContext';
import { useAuthContext } from 'views/auth/hooks/useAuthContext';

const CalendarComponent = () => {
  const reclamationtStyleGetter = (reclamation, createdAt) => {
    let style = {
      backgroundColor: reclamation.color,
      borderRadius: '10px',
      opacity: 0.8,
      border: 'none',
      display: 'block',
      height:'50px',
      fontSize:'22px',
    };
    return {
      style: style
    };
  };
  const { reclamations, dispatch } = useReclamationsContext()
  const localizer = momentLocalizer(moment)
  const { user } = useAuthContext()

  useEffect(() => {
    let isMounted = true

    const fetchRecalamations = async () => {
      const response = await fetch('/api/rec/',{
        headers : {
          'Content-type': 'application/json', 
          Authorization: `Bearer ${user.token}`

                }
      })
      const json = await response.json()

      if (response.ok && isMounted) {
        dispatch({ type: 'SET_REC', payload: json.map(reclamation => ({...reclamation, type: reclamation.type, Date: new Date(reclamation.createdAt)})) })
      }
    }
    fetchRecalamations()
    return () => {
      isMounted = false
    }
  }, [dispatch])

  return (
    <div className='mt-6'>
   <Calendar
  localizer={localizer}
  events={reclamations.map(reclamation => ({
    title: reclamation.type,
    start: new Date(reclamation.createdAt),
    end: new Date(reclamation.createdAt),
  }))}
  eventPropGetter={reclamationtStyleGetter}
  style={{ 
    height: 700, 
  }}
/>

    </div>
  )
}

export default CalendarComponent
