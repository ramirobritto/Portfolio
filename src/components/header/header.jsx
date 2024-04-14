import {StyledHeader} from '../header/styledHeader'
import {FaLinkedinIn, FaInstagram, FaGithub, FaWhatsapp} from 'react-icons/fa'


export default function Header(){
    return(
        <StyledHeader>
            <div className='containerHeader'>
                <div className='logo'>
                        Dev
                    </div>
                    <nav className='navBar'>
                        <ul className='pagesLinks'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Skill</li>
                            <li>Portfolio</li>
                            <li>Contact</li>
                        </ul>
                        <ul className='socialLinks'>
                            <li><FaLinkedinIn/></li>
                            <li><FaGithub/></li>
                            <li><FaInstagram/></li>
                            <li><FaWhatsapp/></li>
                            
                        </ul>
                        
                    </nav>
            </div>        
        </StyledHeader>
    )
}