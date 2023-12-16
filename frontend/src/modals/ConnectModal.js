import { ethers } from 'ethers';
import { useContext, useState, useEffect} from 'react';
import WalletContext from '../context/WalletContext';
import { useNavigate } from 'react-router-dom';
import MetamaskIcon from '../img/metamask.png';
import './ConnectModal.css';
export default function ConnectModal({ isModalOpen, setIsModalOpen }) {
    const [isWalletExist, setIsWalletExist] = useState(null);
    const walletContext = useContext(WalletContext);
    const navigate = useNavigate();


    function handleOnClick(){
        walletContext.connectWalletHandler();
        navigateProfile();
        setIsModalOpen(false);
    }
    function handleModalClick() {
        setIsModalOpen(false);
    };

    useEffect(() => {
        setIsWalletExist(window.ethereum ? true : false);
    }, []);

    function navigateProfile() {
        if(walletContext.isWalletConnected) {
            navigate('/profile');
        };
    };
    return (
        <div className={`modal-overlay ${isModalOpen ? 'open' : ''}`}>
            <div className='modal-content'>
                <div className='modal-header'>
                    <p onClick={handleModalClick}>X</p>
                </div>
                <div className='modal-body'>
                    <p className='wallet-header'>Cüzdan Seçimi</p>
                    <div className='wallets'>
                        <div className='metamask-wallet'>
                            <a href='#' onClick={handleOnClick}>
                                <img src={MetamaskIcon} alt='metamask-icon' loading='lazy' width={32} height={32} />
                                <span>Connect via Metamask </span>
                                <span className='detect-wallet'>{isWalletExist === true ? '(Mevcut)' : 'Mevcut Değil'}</span>
                            </a>
                        </div>
                    </div>
                    {useContext.errorMessage && <p style={{ color: 'red' }}>{useContext.errorMessage}</p>}
                </div>
            </div>
        </div>
    );
}
