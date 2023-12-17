import { useContext } from 'react';
import WalletContext from '../context/WalletContext';
import './Profile.css';
export default function Profile() {
    const walletContext = useContext(WalletContext);

    function handleSignout(event){
        event.preventDefault();
        walletContext.disconnectWalletHandler();
    };
    return (
        <section>
            <div className='profile container'>
                {(walletContext.defaultAccount === null) && (
                    <h2 className='wallet-connection-error'>⚠️ Bağlı cüzdan bulunamadı.Lütfen cüzdanını bağlayın!</h2>
                )}
                {(walletContext.defaultAccount !== null) && (
                    <>
                        <h2 className='profile-header'>Profil</h2>
                        <hr />
                        <p>
                            <svg width='24' height='24' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' viewBox='0 0 24 24'>
                                <path d='M19 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2Z'></path>
                                <path d='M16.5 14a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Z' fill='currentColor'></path>
                                <path d='M18 7V5.602a2 2 0 0 0-2.515-1.933l-11 2.934A2 2 0 0 0 3 8.536v.463'></path>
                            </svg>
                            <span>Wallet Address: {walletContext.defaultAccount}</span>
                        </p>
                        <p>
                            <svg width='24' height='24' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24'>
                                <path d='M12 1v22'></path>
                                <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'></path>
                            </svg>
                            <span>Balance: {walletContext.accountBalance}</span>
                        </p>
                        <button className='btn-warning' onClick={handleSignout}>Cüzdandan Çıkış yap</button>
                    </>
                )}
            </div>
        </section>
    )
}