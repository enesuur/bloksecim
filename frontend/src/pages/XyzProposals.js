import React, { useState } from 'react';
import './XyzProposals.css';

export default function XyzProposals() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [verifyPinStatus, setVerifyPinStatus] = useState(false);
  const [inpPin, setInPin] = useState('');
  const [warningMessage, setWarningMessage] = useState(null);

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
              <form className='xyz-form' onSubmit={'#'}>
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
                  <button className='btn-primary'>Oyu gönder</button>

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
                  <button className='btn-primary'>Oyu gönder</button>
                </article>
              </form>
            </>
          )}

        </div>
      </section>
    </>
  );
}
