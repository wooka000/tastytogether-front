import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';
import MainHeader from './components/MainHeader';

function App() {
    const location = useLocation();
    const isMain = location.pathname === '/';
    return (
        <>
            {isMain ? <MainHeader /> : <Header />}
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
