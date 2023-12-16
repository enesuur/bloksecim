import HeroImg from '../img/hero.jpg';
import DecentralizedImg from '../img/decentralized.jpg';
import DemocracyImg from '../img/democracy.jpg';
import ProposalImg from '../img/proposal.jpg';
import './Home.css';
import { useContext } from 'react';
import WalletContext from '../context/WalletContext';

export default function Home() {
    const deneme = useContext(WalletContext);


    return (
        <>
            <section>
                <div className='hero container'>
                    <article>
                        <h1>BlokSeçim</h1>
                        <h2>Merkeziyetsiz,anonim,yön verici!</h2>
                        <p>
                            Kurumlar insanların düşüncelerini öngörmek için topladıkları verilerden grafikler, tablolar oluşturmaya ve analiz yapmaya çalışıyor yada temsilciler ile ulaşılmaya çalışılıyor. Oysaki karar alma süreçlerine daha geniş bir toplumsal katılım ve mevcut sistemlerdeki eksiklikleri gidererek, karar alma süreçlerinde toplumun daha etkin bir rol almasını sağlayabilir. Projemiz, bir çevrimiçi platform geliştirme ve işlevsel hale getirme üzerine odaklanmaktadır. Bu platform, hükümetlerin veya şirketlerin duyurduğu kararları ve seçenekleri yayınlayacak ve halkın katılımını sağlayacak bir oylama mekanizması içerecektir. Projenin yönetimi, platformun teknik altyapısının geliştirilmesi, kullanıcı arayüzünün oluşturulması ve güvenliği gibi temel unsurları içerecektir. Ayrıca, toplumun geniş kesimlerini projeye dahil etmek ve yönlendirmek için etkili bir yönetim planı oluşturulacaktır. Karar alma süreçlerinde toplumun daha fazla sesini duyurmasını sağlayarak, kurumların politika oluşturma ve ürün geliştirme süreçlerinde daha şeffaf ve katılımcı olmasına yardımcı olacaktır.
                        </p>
                    </article>
                    <figure >
                        <picture>
                            <img src={DemocracyImg} alt='hero-img' loading='lazy' />
                        </picture>
                    </figure>
                </div>
            </section>

            <hr className='container' / >

            <section>
                <div className='features container'>
                    <h2 className='features-header'>
                        Neden BlockSeçim ?
                    </h2>
                    <div className='card-container'>
                        <div className='card-item'>
                            <figure>
                                <picture>
                                    <img src={DecentralizedImg} alt='' />
                                </picture>
                            </figure>
                            <article>
                                <h2>Merkeziyetsizlik</h2>
                                <p>Kurumlar insanların düşüncelerini öngörmek için topladıkları verilerden grafikler, tablolar oluşturmaya ve analiz yapmaya çalışıyor</p>
                            </article>
                        </div>

                        <div className='card-item'>
                            <figure>
                                <picture>
                                    <img src={ProposalImg} alt='' />
                                </picture>
                            </figure>
                            <article>
                                <h2>Önergeler</h2>
                                <p>Kurumlar insanların düşüncelerini öngörmek için topladıkları verilerden grafikler, tablolar oluşturmaya ve analiz yapmaya çalışıyor</p>
                            </article>
                        </div>

                        <div className='card-item'>
                            <figure>
                                <picture>
                                    <img src={DemocracyImg} alt='' />
                                </picture>
                            </figure>
                            <article>
                                <h2>Demokrasi</h2>
                                <p>Kurumlar insanların düşüncelerini öngörmek için topladıkları verilerden grafikler, tablolar oluşturmaya ve analiz yapmaya çalışıyor</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=' container'></div>
            </section>

        </>
    );
};