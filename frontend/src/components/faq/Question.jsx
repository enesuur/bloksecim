import { useState } from 'react'
import './Question.css';
const Question = ({key,title,answer}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleAnswer = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className='question' key={key}>
            <div className='question-info' onClick={toggleAnswer}>
                <span className='question-title'>{title}</span>
                <span>
                    <svg width='36' height='36' fill='currentColor' viewBox='0 0 24 24' className={`${isExpanded ? 'rotate-icon' : ''}`} >
                        <path d='m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8Z'>
                        </path>
                    </svg>
                </span>
            </div>
            {isExpanded && (
                <div className='question-answer'>
                    <p>{answer}</p>
                </div>
            )}
        </div>
    )
}

export default Question