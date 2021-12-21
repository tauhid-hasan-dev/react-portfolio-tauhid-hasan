import "./contact.scss"
import { useState } from "react";
import Contact1 from "../../images/contact.jpg";

export default function Contact() {
    const [messege, setMessege] = useState(false)
    const handleSubmit = (e) => {
         e.preventDefault();
         setMessege(true)
    }
     return (
        <div className= "contact" id = "contact">
            <div className="left">
                <img src={Contact1} alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
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
