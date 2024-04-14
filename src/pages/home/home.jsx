import { StyledHome } from "./styledHome"
import { Button } from "../../components/button/styleButton"
import Avatar from '../../assets/avatar.png'
import Header from '../../components/header/header'
export default function Home(){
    return(
        
            <StyledHome>
                <Header/>
                <div className="containerHome" >
                
                    <div className="description w50" >
                        <h1>Ramiro <span>Brito</span></h1>
                        
                        <p>Desenvolvedor Front-End</p>
                        <Button>Conecte-se</Button>
                    </div>
                    <div className="avatar w50">
                        <img src={Avatar}/>
                    </div>
                </div>
            </StyledHome>
        
        
    )
}