import '@department-of-veterans-affairs/component-library/dist/main.css'
import '@department-of-veterans-affairs/formation/dist/formation.min.css'
import { Outlet, Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'

import '@department-of-veterans-affairs/web-components/dist/component-library/component-library.css'

//@ts-ignore
import { defineCustomElements } from '@department-of-veterans-affairs/component-library'

import AppLanding from './pages/AppLanding'
import SelectTypeOfCarePage from 'pages/SelectTypeOfCarePage'

defineCustomElements()

function Layout() {
  return (
    <div className={'app-container'}>
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<AppLanding />} />
          <Route path='/select-type-of-care' element={<SelectTypeOfCarePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
