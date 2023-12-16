
import Question from '../components/faq/Question';
import { useState } from 'react';
import './About.css';
export default function About() {

    const [formData, setFormData] = useState({
        email: '',
        name: '',
    });

    const sillyData = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit?',
            answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus commodi laboriosam debitis nam ipsam ducimus autem beatae nihil veritatis tempore!'
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit?',
            answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus commodi laboriosam debitis nam ipsam ducimus autem beatae nihil veritatis tempore!'
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit?',
            answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus commodi laboriosam debitis nam ipsam ducimus autem beatae nihil veritatis tempore!'
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit?',
            answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus commodi laboriosam debitis nam ipsam ducimus autem beatae nihil veritatis tempore!'
        },
        {
            id: 5,
            title: 'Lorem ipsum dolor sit?',
            answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus commodi laboriosam debitis nam ipsam ducimus autem beatae nihil veritatis tempore!'
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/;

        if (!emailRegex.test(formData.email)) {
            alert('Invalid email address');
            return;
        }

        if (!nameRegex.test(formData.name)) {
            alert('Invalid name/surname format');
            return;
        }

        console.log('Form submitted:', formData);
    };
    return (
        <>
            <section>
                <div className='about container'>
                    <article>
                        <h2 className='about-title'>Hakkımızda 👋</h2>
                        <p>Bu proje Decentralized Systems and Applications dersinin final projesidir.</p>
                        <p>Sistemin kullanılımının aşağıdaki sık sorulan sorular kısmından öğrenebilirsiniz. 🚀</p>
                        <p>Geliştiriciler 👨‍💻</p>
                        <p>Enes Uğur</p>
                        <p>Erden Pınarözü</p>
                    </article>
                </div>

            </section>
            <section>
                <div className='questions container'>
                    <h2 className='faq-title'>Sık Sorulan Sorular</h2>
                    <div>
                        {sillyData.map(item => (
                            <Question key={item.id} title={item.title} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className='contact container'>
                    <h2 className='contact-title'>Bizimle İletişime geç 📧</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Email
                            <input
                                type='email'
                                name='email'
                                placeholder='Email Address'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Name and Surname
                            <input
                                type='text'
                                name='name'
                                placeholder='Name and Surname'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Message
                            <textarea
                                name='message'
                                placeholder='Your message...'
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </label>
                        <button type='submit' className='btn-primary'>
                            Gönder
                            <svg width='16' height='16' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'>
                                <path d='M22 2 11 13'></path>
                                <path d='m22 2-7 20-4-9-9-4 20-7z'></path>
                                </svg>
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
};