import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import wardrobeLogo from '../assets/wardrobe-svgrepo-com.svg';

export const Navbar = () => {
    return (
        <nav>
            <Link to='/'>
                <img src={wardrobeLogo} alt='Wardrobe Logo' />
            </Link>
            <Link to='projects'>Projects</Link>
            <Link to='about'>About</Link>
            <Link to='customer-reviews'>Reviews</Link>
            <Link to='contact'>Contact</Link>
        </nav>
    );
};
