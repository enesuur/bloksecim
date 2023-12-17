import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Token.css';
export default function Token() {
    const [formAction, setFormAction] = useState(null);
    const [message, setMessage] = useState(true);
    const [showFeedback, setShowFeedback] = useState(false);
    const [testState, setTestState] = useState(false);
    const location = useLocation();
    const path = location.pathname.split('/').filter((path) => path !== '');

    function handlePinVerify(event) {
        event.preventDefault();
        // This part of code will check wheter the PIN is correct from API endpoint.
        setShowFeedback(true);
    };

    function handleTokenRequest(event) {
        event.preventDefault();
        // This code block will interact with blockchain for token request
        setTestState(true);
    };

    return (
        <>
            <section>
                <div className='token container'>
                    <h2 className='token-header'>
                        {path[1] === 'xyz' && (
                            'XYZ Game Company Allocation'
                        )}
                        {path[1] === 'martians' && (
                            'Martian Citizen Allocation'
                        )}
                    </h2>
                    <form action='#'>
                        <input
                            type='text'
                            placeholder='Insert your PIN for token allocation.'
                        />
                        <button className='btn-primary' onClick={handlePinVerify}>Gönder</button>
                    </form>
                    <div className={`feedback-token-request ${showFeedback ? 'display-block' : ''}`}>
                        {message === true && (
                            <>
                                <p className='text-succes' style={{ color: 'green' }}>Pin Doğrulandı!</p>
                                <button 
                                onClick={handleTokenRequest}
                                >Tokenlerini al.</button>
                                { testState && (
                                    <p className='text-succes'>Token Gönderimi yapıldı.Lütfen cüzdanınızı kontrol ediniz.</p>
                                )}
                            </>
                        )}
                        {message === false && (
                            <>
                                <p className='text-fail' style={{ color: 'orangered' }}>Hatalı veya eksik pin.Lütfen tekrar deneyiniz!</p>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
};