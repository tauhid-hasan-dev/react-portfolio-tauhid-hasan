import "./topbar.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className= {"topbar "+ (menuOpen && "active")}>
            <div className="wrapper" >
                <div className="left">
                    <a href="#intro" className="logo">tasan.</a>   
                </div>
                <div className="middle">
                        <div className="itemContainer">
                            <a href="https://github.com/tauhid-hasan-dev/"><GitHubIcon  className="icon"/></a>
                        </div>
                        <div className="itemContainer">
                            <a href="https://www.linkedin.com/in/tauhid-hasan"><LinkedInIcon className="icon1"/></a>
                        </div>
                </div>
                <div className="right">
                    <div className="humburger" onClick = {()=> setMenuOpen (!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
