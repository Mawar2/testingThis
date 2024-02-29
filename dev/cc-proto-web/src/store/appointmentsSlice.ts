import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Appointment {
  id: string
  date: string // what format should this be?
  time: string // Ex: '10:00'
  timezone: string // Timezone string ex: 'America/New_York'
  title: string
  location: string
  details: string
}

export interface AppointmentsState {
  data: Appointment[]
}

const initialState: AppointmentsState = {
  data: [
    {
      id: '1',
      date: '2024-01-02',
      time: '08:00 AM',
      timezone: 'PT',
      title: 'VA Appointment with Anna Leigh',
      location: 'Portland VA Medical Center',
      details: 'Details 1',
    },
    {
      id: '2',
      date: '2024-01-02',
      time: '10:00 AM',
      timezone: 'PT',
      title: 'Appointment 2',
      location: 'Portland VA Medical Center',
      details: 'Details 2',
    },
    {
      id: '3',
      date: '2024-03-05',
      time: '12:00 PM',
      timezone: 'PT',
      title: 'Appointment 3',
      location: 'Portland VA Medical Center',
      details: 'Details 3',
    },
    {
      id: '4',
      date: '2024-03-02',
      time: '12:00 PM',
      timezone: 'PT',
      title: 'Appointment 4',
      location: 'Portland VA Medical Center',
      details: 'Details 3',
    },
  ],
}

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.data.push(action.payload)
    },
    removeAppointment: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((appointment) => appointment.id !== action.payload)
    },
  },
})

export const { addAppointment, removeAppointment } = appointmentsSlice.actions

export default appointmentsSlice.reducer
