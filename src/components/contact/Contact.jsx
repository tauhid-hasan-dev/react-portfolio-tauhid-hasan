import "./contact.scss"
import { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import ArticleIcon from '@mui/icons-material/Article';


export default function Contact() {
    const [messege, setMessege] = useState(false)
    const handleSubmit = (e) => {
         e.preventDefault();
         setMessege(true)
    }
     return (
        <div className= "contact" id = "contact">
            <div className="left">
            <h2>Contact Info</h2>
                <div className="wrapper">
                <div className="item">
                        <EmailIcon className="icon"/>
                        <h3>  </h3>
                        <p>tauhidhasan11@gmail.com</p>
                    </div>
                    <div className="item">
                        <GitHubIcon className="icon"/>
                        <h3>GitHub:</h3>
                        <h3> <a href="https://github.com/tauhid-hasan-dev">tauhid-hasan-dev</a></h3>
                        
                    </div>
                    <div className="item">
                        <LinkedInIcon className="icon" />
                        <h3>LinkedIN: </h3>
                        <h3><a href="https://www.linkedin.com/in/tauhid-hasan/">tauhid-hasan</a></h3>      
                    </div>  
                    <div className="item">
                        <CallIcon className="icon" />
                        <h3>+905076260228</h3>
                        
                    </div> 
                    <div className="item">
                        <ArticleIcon className="icon"/>
                        <h3> Medium:</h3>
                        <h3> <a href="https://www.linkedin.com/in/tauhid-hasan/">tauhid-hasan</a></h3>
                        
                    </div> 
                </div>  
            </div>
            <div className="right">
                <h2>Send me a messege!</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="input-name" placeholder="Name" />
                    <input type="email" id="input-email" placeholder="Email Adress" />
                    <input type="text" id="input-subject" placeholder="Subject"></input>                                                                               
                    <textarea placeholder="messege"></textarea>
                    <button type="submit" className="">Send</button>
                    {messege && <span>Successfully Send!</span>}
                    
                </form>
            </div>
        </div>
    )
}
