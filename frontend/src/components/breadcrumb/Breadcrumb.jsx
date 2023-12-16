import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';
export default function Breadcrumb({ paths }) {
    const currentCrumb = {
        color: '#800020'
    };
    const location = useLocation();
    const currentPath = location.pathname.split('/');
    return (
        <>
            <h3 className='sitemap-header'>Site haritası</h3>
            <div className='breadcrumb container'>
                <Link to={'/'} className='breadcrumb-seperator'>Home /</Link>
                {paths.map((path, idx) => (
                    <div key={idx} className='breadcrumb-item'>
                        {currentPath[currentPath.length - 1] === path && (<Link to={`/${path}`} style={currentCrumb} >{path}</Link>)}
                        {currentPath[currentPath.length - 1] !== path && (<Link to={`/${path}`}>{path}</Link>)}
                        {idx !== paths.length - 1 && (<span className='breadcrumb-seperator'>/</span>)}
                    </div>
                ))}
            </div>
        </>
    )
}