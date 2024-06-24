import './style.css'
import profile from '../assets/profile.jpeg'
import logo from '../assets/logo.svg'

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo cubos play" />
            </div>

            <div className='profile'>
                <img className='user' src={profile} alt='user data' />
                <span>Bem vindo, Antônio. </span>
            </div>
        </div>
    )
}