import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import {useEffect, useState} from  'react'


function Presentation (){
    const [text, setText] = useState('');
    const toRotate = ['Juan Reis!', 'Desenvolvedor Front End', 'Product Manager'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)
    

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () =>{
       let i = loop % toRotate.length;
       let fullText = toRotate[i]
       let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

       setText(updatedText);

       if(!isDeleting && updatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
       }else if (isDeleting && updatedText === ''){
        setIsDeleting(false);
        setDelta(period);
        setLoop(loop+1);
       }

    }

    return (
        <div className={styles.presentation} id='Presentation'>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text} </h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras. <br/>
                Como Product Manager, eu tenho o compromisso de resolver problemas<br/>
                complexos e trazer resultados excepcionais para os negócios.<br/>
                Meus projetos já geraram milhões de reais em receita anual<br/>
                estou sempre em busca de novos desafios para superar.
            </p>
            <ButtonA link='https://github.com/juanreism' text='Conecte-se comigo!'/>

        </div>
    )
}

export default Presentation 