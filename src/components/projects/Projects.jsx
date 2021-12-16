import "./projects.scss";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import App3 from "../../images/App3.png";


export default function Projects() {
    return (
        <div className= "projects" id = "projects">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <PhoneIphoneIcon className="icon"/>
                                </div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quas hic quisquam tenetur corrupti recusandae id illo, minima aliquam porro culpa consectetur itaque harum suscipit explicabo, omnis amet sit ullam?</p>
                                <span>Porjects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={App3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <ChevronRightIcon className="arrow left"/>
            <ChevronRightIcon className="arrow right"/>
        </div>
    )
}
