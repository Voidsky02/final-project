import { Outlet } from 'react-router-dom'; // enables me to persistently render Header and Footer or whatever regardless of current route
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

function Layout() {
    return (
    <>
        <Header />
        <Outlet /> {/* This is what displays the child routes */}
        <Footer />
    </>
    );
}

export default Layout;