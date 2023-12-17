import { useContext, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import WalletContext from '../context/WalletContext';
import MetamaskIcon from '../img/metamask.png';
import './ConnectModal.css';

export default function ConnectModal({ isModalOpen, setIsModalOpen }) {
    const [isWalletExist, setIsWalletExist] = useState(null);
    const walletContext = useContext(WalletContext);
    const navigate = useNavigate();

    const modalRef = useRef(null);

    function handleOnClick() {
        walletContext.connectWalletHandler();
        navigateProfile();
        setIsModalOpen(false);
    };

    function handleModalClick() {
        setIsModalOpen(false);
    }

    function handleOutsideClick(event) {
        if (modalRef.current && !modalRef.current.contains(event.target) && isModalOpen) {
            setIsModalOpen(false);
        };
    };

    useEffect(() => {
        setIsWalletExist(window.ethereum ? true : false);
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isModalOpen]);

    function navigateProfile() {
        if (walletContext.isWalletConnected) {
            navigate('/profile');
        }
    }

    return (
        <div className={`modal-overlay ${isModalOpen ? 'open' : ''}`}>
            <div className='modal-content' ref={modalRef}>
                <div className='modal-header'>
                    <p onClick={handleModalClick}>X</p>
                </div>
                <div className='modal-body'>
                    <p className='wallet-header'>Cüzdan Seçimi</p>
                    <div className='wallets'>
                        <div className='metamask-wallet'>
                            <a href='#' onClick={handleOnClick}>
                                <img src={MetamaskIcon} alt='metamask-icon' loading='lazy' width={32} height={32} />
                                <span>Metamask ile bağlan</span>
                                <span className='detect-wallet'>{isWalletExist === true ? '(Mevcut)' : 'Mevcut Değil'}</span>
                            </a>
                        </div>
                    </div>
                    {walletContext.errorMessage && <p style={{ color: 'red' }}>{walletContext.errorMessage}</p>}
                </div>
            </div>
        </div>
    );
}
