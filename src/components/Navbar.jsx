import { Link } from 'react-router-dom';
// import '../styles/Navbar.css';


export const Navbar = () => {

    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className = 'flex justify-between items-center max-container'>
                <a href="/">
                    <img
                        src={"WardrobeLogo.jpg"}
                        alt="Logo"
                        width={10}
                        height={1000}
                        className='m-0 w-[129px] h-[29px]'
                    />
                </a>
            <div className='flex-1 flex justify-center items-center gap-16 max-lg'>
                <div className='font-monts errat leading-normal text-lg text-slate-gray'>
                <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='about'>
                    <li>About</li>
                </Link>
                <Link to='customer-reviews'>
                    <li>Reviews</li>
                </Link>
                <Link to='projects'>
                    <li>Projects</li>
                </Link>
                <Link to='contact'>
                    <li>Contact</li>
                </Link>
                </ul>
                </div>
            </div>
            <div className='hidden max-lg:block'>
                <img
                    src={'hamburger.png'}
                    alt='hamburger'
                    width={25}
                    height={25}
                />
            </div>
            </nav>
        </header>
    );
};


