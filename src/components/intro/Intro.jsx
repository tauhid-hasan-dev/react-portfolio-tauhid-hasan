import "./intro.scss"
import Photo from "../../images/photo.png"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';





export default function Intro() {
    return (
        <div className= "intro" id = "intro">
            <div className="left">
                 <div className="imageContainer">
                    <img src={Photo} alt= ""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2> Hello There, I'm </h2>
                    <h1>Tauhid Hasan</h1>
                    <h3>Freelance <span>Frontend Developer</span></h3>     
                </div>
                 <a href="#portfolio">
                     <ExpandMoreIcon fontSize="large" className="icon"/>
                 </a>
            </div>
        </div>
    )
}
