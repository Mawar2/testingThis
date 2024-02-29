import React from 'react'
import { FC } from 'react'
import type { RootState } from '../store/store'
import { useSelector } from 'react-redux'
import { parseISO, format, isBefore, getMonth } from 'date-fns'
import { Link } from 'react-router-dom'

interface AppointmentProps {
  id: string
  date: string // what format should this be?
  time: string // Ex: '10:00 AM'
  timezone: string // Timezone string ex: 'America/New_York'
  title: string
  location: string
  details: string
}

const Appointment: FC<AppointmentProps> = ({ id, date, time, timezone, title, location, details }) => {
  return (
    <div className='vads-l-row' key={`appointments-list-item-${id}`}>
      <div className='vads-l-col-col--1'>
        <span className='vads-u-font-size--h2 vads-u-font-weight--bold'>{format(date, 'd')}</span>
      </div>
      <div className='vads-l-col--1 vads-u-padding--1p5'>
        <span className=''>{format(date, 'EEE')}</span>
      </div>
      <div className='vads-l-col--2'>
        <p>
          {time} {timezone}
        </p>
      </div>
      <div className='vads-l-col--4'>
        <p>{title}</p>
      </div>

      <div className='vads-l-col--3'>
        <p>{location}</p>
      </div>
      <div className='vads-l-col--1'>
        <p>
          <Link to='/'>{details}</Link>
        </p>
      </div>
    </div>
  )
}

export function Appointments() {
  const appointments = useSelector((state: RootState) => state.appointments.data)

  const sortedAppointments = [...appointments].sort((a, b) => {
    return isBefore(parseISO(a.date), parseISO(b.date)) ? -1 : 1
  })

  let currentMonth: number | null = null

  const appointmentsWithHeaders = sortedAppointments
    .map((appointment) => {
      const appointmentMonth = getMonth(appointment.date)

      if (appointmentMonth !== currentMonth) {
        currentMonth = appointmentMonth
        return [<h2 key={`header-${appointmentMonth}`}> {format(appointment.date, 'MMMM yyyy')}</h2>, <Appointment key={appointment.id} {...appointment} />]
      } else {
        return <Appointment key={appointment.id} {...appointment} />
      }
    })
    .flat()

  return (
    <div>
      <h1>VA Appointments</h1>
      <p>Need to be seen by a VA physician? Schedule your appointment below or look up your local VA facility’s phone number.</p>
      <div className='vads-l-grid-container'>
        {appointmentsWithHeaders}
        <Link to='select-type-of-care'>
          <button>Schdule an appointment</button>
        </Link>
      </div>
    </div>
  )
}
