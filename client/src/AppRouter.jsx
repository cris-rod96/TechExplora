import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home/Home'
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
