import { Outlet } from 'react-router-dom'
import Aside from '../components/shared/Aside'
import Header from '../components/Header'

const RootLayout = () => {
  return (
    <>
      <Header />
      <Aside />
      <main className="fixed w-[calc(100%-13vw)] h-[calc(100%-80px)] ml-[13vw] mt-20 overflow-y-scroll p-5">
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
