import React, { useEffect, useState } from 'react';
import erc20abi from '../ABI/TokenABI.json';
import daoabi from '../ABI/DaoABI.json';
import Web3 from 'web3';
import './XyzProposals.css';

export default function XyzProposals() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [verifyPinStatus, setVerifyPinStatus] = useState(false);
  const [inpPin, setInPin] = useState('');
  const [warningMessage, setWarningMessage] = useState(null);
  const [account, setAccount] = useState(null);
  const [burnAmount, setBurnAmount] = useState(10);
  const [web3, setWeb3] = useState(null);
  const [tokenContract, setTokenContract] = useState(null);
  const [daoContract, setDaoContract] = useState(null);
  const TOKEN_CONTRACT = '0xdb506e57d4cdec2a805da56fc81d8750e635e0a4';
  const DAO_CONTRACT = '0x2f2d19c6aa5db4b456a6bbd8068021287816f8cb';

  async function initializeWeb3() {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
      const tokenContractProvider = new web3.eth.Contract(erc20abi, TOKEN_CONTRACT);
      const daoContractProvider = new web3.eth.Contract(daoabi, DAO_CONTRACT);
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      setTokenContract(tokenContractProvider);
      setDaoContract(daoContractProvider);
    } else {
      console.error('Ethereum tarayıcı uzantısı bulunamadı!');
    }
  };

  async function burnFromTokens() {
    if (!tokenContract || !web3) {
      console.error('Contract veya Web3 başlatılmamış!');
      return;
    }

    try {
      await tokenContract.methods.burn(web3.utils.toWei(burnAmount, 'ether')).send({ from: account });
      console.log(`${burnAmount} tokens burned from ${account}`);
    } catch (error) {
      console.error('Bir hata oluştu: ', error);
    }
  };

  async function handleVoting(){
    // Bu kısmımda proposalın description option falan fetch edilecek.
    // farklı bir sayfada create proposal hallet
    try {
      await daoContract.methods.burn(web3.utils.toWei(burnAmount, 'ether')).send({ from: account });
      console.log(`${burnAmount} tokens burned from ${account}`);
    } catch (error) {
      console.error('Bir hata oluştu: ', error);
    }
  };

  function handleVotingRequest(event){
    event.preventDefault();
    burnFromTokens();

    console.log('xx')
  };

  function handleFormSubmit(event){
    event.preventDefault();
  }

  useEffect(() => {
    initializeWeb3();
  }, []);

  function handleOptionChange(event) {
    const optionValue = event.target.value;
    setSelectedOption(optionValue);
    console.log('Seçilen değer:', optionValue);
  };

  const testPins = [
    {
      pin: 'JhrRCS4e',
      organization: 'XYZ Game Company'
    },
    {
      pin: 'OZyS420E',
      organization: 'XYZ Game Company'
    }
  ];


  function verifyPin() {
    const isPinCorrect = testPins.some(testPin => testPin.pin === inpPin);
    setVerifyPinStatus(isPinCorrect);
    console.log(verifyPinStatus);
    if (!isPinCorrect) {
      setWarningMessage('Hatalı veya eksik Pin kodu!')
    } else {
      setWarningMessage(null);
    }
  };

  return (
    <>
      <section>
        <div className='xyz container'>
          {!verifyPinStatus && (
            <>
              <h2 className='check-pin-title'>Pini Kontrol Et.</h2>
              <div className='pin-box'>
                <input
                  type='text'
                  placeholder='Pin Kodunu Giriniz.'
                  value={inpPin}
                  onChange={(e) => setInPin(e.target.value)}
                />
                <button className='btn-primary' onClick={verifyPin}>
                  Pini Kontrol Et
                </button>
              </div>
              {warningMessage && (
                <span className='warning-msg'>{warningMessage}</span>
              )}
            </>
          )}

          {verifyPinStatus && (
            <>
              <h2 className='xyz-proposal-title'>Xyz Game Company Önergeler</h2>
              <form className='xyz-form' onSubmit={handleFormSubmit}>
                <article className='proposal-card'>
                  <h2>Önerge: 1</h2>
                  <p>Sallama önerge metni Sallama önerge metni
                    Sallama önerge metni Sallama önerge metni
                    Sallama önerge metni Sallama önerge metni
                    Sallama önerge metni Sallama önerge metni
                    Sallama önerge metni Sallama önerge metni...</p>
                  <label>
                    <input
                      type='radio'
                      name='option'
                      value='1'
                      onChange={handleOptionChange}
                    />
                    1. Seçenek
                  </label>
                  <label>
                    <input
                      type='radio'
                      name='option'
                      value='2'
                      onChange={handleOptionChange}
                    />
                    2. Seçenek
                  </label>
                  <label>
                    <input
                      type='radio'
                      name='option'
                      value='3'
                      onChange={handleOptionChange}
                    />
                    3. Seçenek

                  </label>
                  <label>
                    <input
                      type='radio'
                      name='option'
                      value='4'
                      onChange={handleOptionChange}
                    />
                    4. Seçenek
                  </label>
                  <button className='btn-primary' onClick={handleVotingRequest}>Oyu gönder</button>

                </article>
              </form>

              <form>
                <article className='proposal-card'>
                  <h2>Önerge: 1</h2>
                  <p>Sallama önerge metni Sallama önerge metni
                    Sallama önerge metni Sallama önerge metni
                    Sallama önerge metni Sallama önerge metni
                    Sallama önerge metni Sallama önerge metni
                    Sallama önerge metni Sallama önerge metni...</p>
                  <label>
                    <input
                      type='radio'
                      name='option'
                      value='1'
                      onChange={handleOptionChange}
                    />
                    1. Seçenek
                  </label>
                  <label>
                    <input
                      type='radio'
                      name='option'
                      value='2'
                      onChange={handleOptionChange}
                    />
                    2. Seçenek
                  </label>
                  <label>
                    <input
                      type='radio'
                      name='option'
                      value='3'
                      onChange={handleOptionChange}
                    />
                    3. Seçenek
                  </label>
                  <label>
                    <input
                      type='radio'
                      name='option'
                      value='4'
                      onChange={handleOptionChange}
                    />
                    4. Seçenek
                  </label>
                  <button className='btn-primary' onClick={handleVotingRequest}>Oyu gönder</button>
                </article>
              </form>
            </>
          )}

        </div>
      </section>
    </>
  );
}
