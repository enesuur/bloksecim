

import './Proposals.css';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import GameCompanyImg from '../img/gamecompany.jpg';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
export default function Proposals() {
    const location = useLocation();
    const paths = location.pathname.split('/').filter((path) => path !== '');
    const navigate = useNavigate();

    function handleVoteMartians(){
        navigate('/proposals/martians')
    };

    function handleVoteXyz(){
        navigate('/proposals/xyz')
    };
    return (
        <>
            <section>
                <div className='proposals container'>
                    <h2 className='proposals-title'>
                        Önergeler Panosu
                    </h2>

                    <div className='proposal-card-container'>
                        <a className='proposal-card'>
                            <figure>
                                <picture>
                                    <img src={GameCompanyImg} alt='game-company-banner'></img>
                                </picture>
                            </figure>
                            <article>
                                <h2 className='proposal-card-title'>Xyz</h2>
                                <p className='proposal-card-info'>
                                    . The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                </p>
                                <p className='proposal-card-footer'>
                                    <span className='proposal-duration'>
                                        <svg width={24} height={24} fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24'>
                                            <rect width='18' height='18' x='3' y='4' rx='2' ry='2'></rect>
                                            <path d='M16 2v4'></path><path d='M8 2v4'></path><path d='M3 10h18'></path>
                                        </svg>
                                        <span>
                                            9/12/2023 - 27/12/2023
                                        </span>
                                    </span>
                                    <button className='btn-primary' onClick={handleVoteXyz}>Oyla</button>
                                </p>
                            </article>
                        </a>

                        <a className='proposal-card'>
                            <figure>
                                <picture>
                                    <img src={GameCompanyImg} alt='game-company-banner'></img>
                                </picture>
                            </figure>
                            <article>
                                <h2 className='proposal-card-title'>Martians</h2>
                                <p className='proposal-card-info'>
                                    . The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                </p>
                                <p className='proposal-card-footer'>
                                    <span className='proposal-duration'>
                                        <svg width={24} height={24} fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24'>
                                            <rect width='18' height='18' x='3' y='4' rx='2' ry='2'></rect>
                                            <path d='M16 2v4'></path><path d='M8 2v4'></path><path d='M3 10h18'></path>
                                        </svg>
                                        <span>
                                            9/12/2023 - 27/12/2023
                                        </span>
                                    </span>
                                    <button className='btn-primary' onClick={handleVoteMartians} >Oyla</button>
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