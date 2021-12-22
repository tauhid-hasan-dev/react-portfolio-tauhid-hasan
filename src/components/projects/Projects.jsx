import "./projects.scss";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useState } from "react";
import App3 from "../../images/App3.png";
import App4 from "../../images/App4.png";
import App5 from "../../images/App5.png";
import Slide from "../../images/arrow.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WebIcon from '@mui/icons-material/Web';


export default function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [{
        id:"1",
        icon: <WebIcon/>,
        title:"Web Design",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dicta?",
        img: <App3/>,      
    },
    {
        id:"2",
        icon: <PhoneIphoneIcon/>,
        title:"Web App",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dicta?",
        img: <App3/>,      
    },
    {
        id:"3",
        icon: <PhoneIphoneIcon/>,
        title:"UI Design",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dicta?",
        img: <App3/>,      
    }
    ]

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide (currentSlide > 0 ? currentSlide-1: 2) :
            setCurrentSlide (currentSlide < data.length -1 ? currentSlide +1 : 0);
        }
    return (
        <div className= "projects" id = "projects">
            <div className="slider" style={{transform:`translateX (-${ currentSlide * 100}vw)`, left:`-${ currentSlide * 100}vw`}}>
                {data.map(d =>  (    
                <div className="container" key={d.title}>
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <div className="icon">{d.icon}</div>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc} </p>
                                {/* <span>Porjects</span> */}   
                            </div>
                        </div>
                        <div className="right">
                            <img src={App3} alt="" />
                        </div>
                    </div> 
                </div>))}
                
            </div>
            <ArrowForwardIosIcon  src={Slide} alt= "" className="arrow left" onClick ={()=>handleClick("left")}/>
            <ArrowForwardIosIcon  src={Slide} alt= "" className="arrow right" onClick ={()=>handleClick()}/>
        </div>
    )
}
