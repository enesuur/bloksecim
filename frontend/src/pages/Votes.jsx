

import './Votes.css';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import GameCompanyImg from '../img/gamecompany.jpg';
import { Link, useLocation } from 'react-router-dom';
export default function Votes() {
    const location = useLocation();
    const paths = location.pathname.split('/').filter((path) => path !== '');
    return (
        <>
            <section>
                <div className='votes container'>
                    <h2 className='votes-title'>
                        Oylama Panosu
                    </h2>

                    <div className='vote-card-container'>
                        <a className='vote-card'>
                            <figure>
                                <picture>
                                    <img src={GameCompanyImg} alt='game-company-banner'></img>
                                </picture>
                            </figure>
                            <article>
                                <h2 className='vote-card-title'>A şirketindeki B üründe güncelleştirmeye gidilecek</h2>
                                <p className='vote-card-info'>
                                    . The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                </p>
                                <p className='vote-card-footer'>
                                    <span className='vote-duration'>
                                        <svg width={24} height={24} fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'>
                                            <rect width='18' height='18' x='3' y='4' rx='2' ry='2'></rect>
                                            <path d='M16 2v4'></path><path d='M8 2v4'></path><path d='M3 10h18'></path>
                                        </svg>
                                        <span>
                                            9/12/2023 - 27/12/2023
                                        </span>
                                    </span>
                                    <button className='btn-primary'>Oyla</button>
                                </p>
                            </article>
                        </a>

                        <a className='vote-card'>
                            <figure>
                                <picture>
                                    <img src={GameCompanyImg} alt='game-company-banner'></img>
                                </picture>
                            </figure>
                            <article>
                                <h2 className='vote-card-title'>A şirketindeki B üründe güncelleştirmeye gidilecek</h2>
                                <p className='vote-card-info'>
                                    . The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                </p>
                                <p className='vote-card-footer'>
                                    <span className='vote-duration'>
                                        <svg width={24} height={24} fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'>
                                            <rect width='18' height='18' x='3' y='4' rx='2' ry='2'></rect>
                                            <path d='M16 2v4'></path><path d='M8 2v4'></path><path d='M3 10h18'></path>
                                        </svg>
                                        <span>
                                            9/12/2023 - 27/12/2023
                                        </span>
                                    </span>
                                    <button className='btn-primary'>Oyla</button>
                                </p>
                            </article>
                        </a>

                    </div>

                    <div></div>
                </div>
            </section>
        </>
    )
};