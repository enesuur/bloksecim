import { Navigate, useNavigate } from 'react-router-dom';
import TokenomicsBanner from '../img/tokenomics-banner.jpg';
import './Tokenomics.css';
export default function Tokenomics() {
    const navigate = useNavigate();
    
    function handleAllocMartians(){
        navigate('/token/martians');
    };

    function handleAllocXyz(){
        navigate('/token/xyz');
    };
    
    return (
        <>
            <section>
                <div className='tokenomics-hero container'>
                    <article>
                        <h2 className='tokenomics-banner-header'>Tokenomics</h2>
                        <p>Tokenomics, bir kripto varlığın ekonomik modelini ve kullanımını anlamak için kullanılan bir terimdir. Bu model, bir projenin tokenleriyle ilgili ekonomik süreçleri, tokenlerin dolaşımda nasıl kullanılacağını, topluluğa nasıl dağıtılacağını ve projenin sürdürülebilirliğini sağlamak için benimsenen stratejileri kapsar.</p>
                        <p>Bir tokenomics modeli, projenin amacına, kullanım durumlarına, topluluk yönetimine ve diğer faktörlere bağlı olarak değişebilir. Tokenomics, bir projenin başarısını etkileyen önemli bir faktör olup, yatırımcılar ve kullanıcılar için projenin değerini belirlemede önemli bir rol oynar.</p>
                    </article>
                    <figure>
                        <picture>
                            <img src={TokenomicsBanner} alt='tokenomics-banner' loading='lazy' />
                        </picture>
                    </figure>
                </div>
            </section>
            <hr className='container' />
            <section>
                <div className='tokenomics-table container' id={'tokenomics-table'}>
                    <h2 className='tokenomics-allocation-header'>Token Allokasyon Planı</h2>
                    <table className='token-allocation-table'>
                        <thead>
                            <tr>
                                <th>Ortak Adı</th>
                                <th>Airdrop</th>
                                <th>Token</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mars Ülkesi</td>
                                <td>100%</td>
                                <td>
                                    <button className='btn-secondary' onClick={handleAllocMartians}>Token Tahsis Et</button>
                                </td>
                            </tr>
                            <tr>
                                <td>XYZ Oyun Şirketi</td>
                                <td>100%</td>
                                <td>
                                    <button className='btn-secondary' onClick={handleAllocXyz}>Token Tahsis Et</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <div className='tokenomics-allocation container'>

                </div>
            </section>
        </>
    )
};