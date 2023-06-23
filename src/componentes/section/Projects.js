import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../Image/projects/lpdnc.svg'
import portfolio from '../../Image//projects/portfolio.svg'

function Projects (){
    return (
        <div className={styles.projects} id='Projects'>
            <h1> Projetos </h1>
            <Card
                img={lpdnc} 
                title=" LP - DNC" 
                tech="HTML, CSS e JS" 
                description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia" 
                repo="https://github.com/juanreism/lp-dnc" 
                site="https://stupendous-sable-3c4746.netlify.app/"
                />
            <Card
                img={portfolio} 
                title="Portfolio React" 
                tech="React" 
                description="..." 
                repo="https://github.com/juanreism/lp-dnc" 
                site="https://stupendous-sable-3c4746.netlify.app/"
                />
            <ButtonB text='Acesse meu repositório' link='https://github.com/juanreism?tab=repositories'/>
        </div>
    )
}

export default Projects