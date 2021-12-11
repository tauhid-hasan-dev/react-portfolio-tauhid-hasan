import "./topbar.scss"
import { PersonOutline, MailOutline } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className= {"topbar "+ (menuOpen && "active")}>
            <div className="wrapper" >
                <div className="left">
                    <a href="#projects" className="logo">tasan.</a>
                    <div className="itemContainer">
                        <PersonOutline className="icon" />
                        <span>+905076260228</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutline className="icon" />
                        <span>tauhidhasan11@gmail.com</span>
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
