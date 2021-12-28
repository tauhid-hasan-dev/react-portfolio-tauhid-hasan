import "./intro.scss";
import Photo from "../../images/photo.png";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { init } from 'ityped';
import { useEffect, useRef } from "react";


export default function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { showCursor: true, typeSpeed: 50, backSpeed: 60, backDelay: 1500, strings: ["Frontend Developer", "UI Designer"] })
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src={Photo} alt="" />
                </div>
            </div>
            <div className="right">
                    <div className="wrapper">
                        <h2> Hello There, I'm </h2>
                        <h1> Tauhid Hasan </h1>
                        <h3> <span ref={textRef}></span></h3>

                        <p>I design and develop services for customers of all sizes.<br />
                          Specializing in create stylish, modern websites,<br />  
                          web sevices and online stores. <br /> 
                        </p>
                    </div>
                <a href="#portfolio">
                    <ExpandMoreIcon fontSize="large" className="icon" />
                </a>
            </div>
        </div>
    )
}
