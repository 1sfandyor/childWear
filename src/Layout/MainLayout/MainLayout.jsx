import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"

const MainLayout = () => {
    return (
        <>
            <header className="lg:container">
                <Navbar/>
            </header>
            <main className="lg:container">
                <Outlet/>
            </main>
            <footer className="text-center container">
                <h4>FOOTER</h4>
            </footer>
        </>
    )
}

export default MainLayout