import styles from './Skills.module.css'
import javascript from '../../Image/skills/javascript.svg'
import html from '../../Image/skills/html.svg'
import css from '../../Image/skills/css.svg'
import typescript from '../../Image/skills/typescript.svg'
import react from '../../Image/skills/react.svg'

function Skills (){
    return (
        <div className={styles.skill} id='Skills'>
            <h1> Habilidades </h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={typescript}/>
                <img src={react}/>
            </div>
        </div>
    )
}

export default Skills