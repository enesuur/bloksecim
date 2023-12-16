

import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import WalletContext from '../context/WalletContext';
import ConnectModal from '../modals/ConnectModal';
import './Navbar.css';
import { useEffect } from 'react';
export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const walletContext = useContext(WalletContext);

    function handleModalClick(event) {
        event.preventDefault();
        setIsModalOpen(!isModalOpen);
        setIsMobileMenuOpen(!isMobileMenuOpen);

    };

    function handleMobileMenuClick() {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }


    return (
        <nav className='container'>
            <div className='nav-header'>
                <Link to={'/'} className='nav-banner'>
                    BlockSeçim ₿
                </Link>
                <div className='hamburger-icon' onClick={handleMobileMenuClick}>
                    &#9776;
                </div>
            </div>
            <ul className={`nav-links ${isMobileMenuOpen ? 'show-menu' : ''}`}>
                <li onClick={handleMobileMenuClick}>
                    <NavLink to={'/tokenomics'}>Token Al</NavLink>
                </li>

                <li onClick={handleMobileMenuClick}>
                    <NavLink to={'/votes'}>Oylamalar</NavLink>
                </li>

                <li onClick={handleMobileMenuClick}>
                    <NavLink to={'/getpin'}>Pin Al</NavLink>
                </li>
                <li onClick={handleMobileMenuClick}>
                    <NavLink to={'/profile'}>Profilim</NavLink>
                </li>
                <button className='connect-wallet' onClick={handleModalClick}>
                    <NavLink to={`${walletContext.defaultAccount !== null ? '/profile' : '#'}`}>
                        {walletContext.defaultAccount !== null ? walletContext.conBtnText : 'Cüzdan Bağla'}
                    </NavLink>
                </button>
            </ul>
            {isModalOpen && (<ConnectModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />)}
        </nav>

    )
};