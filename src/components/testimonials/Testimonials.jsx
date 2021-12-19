import "./testimonials.scss";
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Man from "../../images/man.png";
import Man2 from "../../images/man2.jpeg";
import Man3 from "../../images/man3.jpeg";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Testimonials() {
    const data = [{
        id:"1",
        name:"Muaz Hasan",
        title:"Senior Developer",
        img: <AccountBoxIcon />,
        icon: <YouTubeIcon />,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, molestiae vitae tempora consequuntur debitis explicabo.",
                    
    },
    {
        id:"2",
        name:"Adam Json",
        title:"CEO of Tasan",
        img: <AccountBoxIcon />,
        icon: <TwitterIcon />,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, molestiae vitae tempora consequuntur debitis explicabo.",
        featured: true,       
    },
    {
        id:"3",
        name:"Falcon Crud",
        title:"CEO of sabana",
        img: <AccountBoxIcon />,
        icon: <LinkedInIcon />,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, molestiae vitae tempora consequuntur debitis explicabo.",
            
    }
    ]
    
    return (
        <div className= "testimonials" id = "testimonials">
        <h1>Testimonials</h1>
            <div className="container">
            {data.map(d=>(
                <div className={d.featured ? "card featured": "card"}>
                    <div className="top">
                        <SubdirectoryArrowRightIcon className="image left"/>
                         <img src={Man} className="image user" alt="" /> 
                         <div className="image right">{d.icon}</div>                              
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>))}
            </div>
        </div>
    )
}
