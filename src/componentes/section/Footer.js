import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer (){
    return (
        <div className={styles.footer}>
           <ul>
                <li><a href='https://www.instagram.com/juanreism/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/jrmendes/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/juanreism'><FaGithub size={30}/></a></li>
            </ul>
            <p>juan.reis@escoladnc.com.br</p>
            <p> Juan Reis © 2023 </p>
        </div>
    )
}

export default Footer