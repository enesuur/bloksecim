
import { useEffect, useState } from 'react';
import erc20abi from '../ABI/TokenABI.json';
import Web3 from "web3";
import './Token.css';

export default function Token() {
    const [message, setMessage] = useState(true);
    const [showFeedback, setShowFeedback] = useState(false);
    const [requestState, setRequestState] = useState(false);
    const [verifyPinStatus, setVerifyPinStatus] = useState(false);
    const [inpPin, setInPin] = useState('');
    const [warningMessage, setWarningMessage] = useState(null);
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        async function initWeb3() {
            if (window.ethereum) {
                try {
                    await window.ethereum.enable();
                    const web3Instance = new Web3(window.ethereum);
                    setWeb3(web3Instance);
                    const accounts = await web3Instance.eth.getAccounts();
                    setAccount(accounts[0]);

                    const contractAddress = '0xdb506e57d4CdeC2A805DA56fc81d8750e635e0A4';
                    const contractAbi = erc20abi;

                    const tokenContract = new web3Instance.eth.Contract(contractAbi, contractAddress);
                    setContract(tokenContract);
                } catch (error) {
                    console.error("Kullanıcı izin vermedi: ", error);
                }
            }
        };
        initWeb3();
    }, []);

    async function handleTokenRequest(event) {
        event.preventDefault();
        setRequestState(true);
        try {
            const recipientAddress = `${account}`;
            const amount = web3.utils.toWei('100', 'ether');
            await contract.methods.mint(account, amount).send({ from: account });
            console.log('Transfer başarılı');
        } catch (error) {
            console.error('Transfer hatası:', error);
        }
    };

    const testPins = [
        {
            pin: 'a7P5oxL7',
            organization: 'Martian Goverment'
        },
        {
            pin: 'buwbkBy1',
            organization: 'Martian Goverment'
        },
        {
            pin: 'a7P5oxL7',
            organization: 'Martian Goverment'
        },
        {
            pin: 'buwbkBy1',
            organization: 'Martian Goverment'
        }
    ];

    function verifyPin(event) {
        event.preventDefault();
        const isPinCorrect = testPins.some(testPin => testPin.pin === inpPin);
        setVerifyPinStatus(isPinCorrect);
        if (!isPinCorrect) {
            setWarningMessage('Hatalı veya eksik Pin kodu!')
        } else {
            setWarningMessage(null);
        }
    };

    return (
        <>
            <section>
                <div className='token container'>
                    <h2 className='token-header'>Token Talebi için lütfen pininizi girin.</h2>
                    <form action='#'>
                        <input
                            type='text'
                            placeholder='Insert your PIN for token allocation.'
                            value={inpPin}
                            onChange={(e) => setInPin(e.target.value)}
                        />
                        <button className='btn-primary' onClick={verifyPin}>Gönder</button>
                    </form>
                    <div className={`feedback-token-request ${showFeedback ? 'display-block' : ''}`}>
                        {verifyPinStatus === true && (
                            <>
                                <p className='text-succes' style={{ color: 'green' }}>
                                    Pin Doğrulandı!
                                </p>
                                <button
                                    onClick={handleTokenRequest}
                                >Tokenlerini al.</button>
                                {requestState && (
                                    <p className='text-succes'>Token Gönderimi yapıldı. Lütfen cüzdanınızı kontrol ediniz.</p>
                                )}
                            </>
                        )}
                        {!verifyPinStatus && (
                            <>
                                <p className='text-fail' style={{ color: 'orangered' }}>{warningMessage}</p>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
