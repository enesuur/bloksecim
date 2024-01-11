import { useState } from 'react';
import './MartianProposals.css';

export default function MartianProposals() {
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
      pin: 'a7P5oxL7',
      organization: 'Martian Goverment'
    },
    {
      pin: 'buwbkBy1',
      organization: 'Martian Goverment'
    }
  ];

  function verifyPin() {
    const isPinCorrect = testPins.some(testPin => testPin.pin === inpPin);
    setVerifyPinStatus(isPinCorrect);
    if (!isPinCorrect) {
      setWarningMessage('Hatalı veya eksik Pin kodu!')
    } else {
      setWarningMessage(null);
    }
  };

  function handleVoting() {
    //
  }

  return (
    <>
      <section>
        <div className='martians container'>
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
              <h2 className='martians-proposal-title'>Martians Goverment Önergeler</h2>
              <form className='martian-form' onSubmit={'#'}>
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

              <form onSubmit={'#'}>
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
