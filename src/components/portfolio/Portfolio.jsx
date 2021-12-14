import "./portfolio.scss"
import App2 from "../../images/app2.jpg";
import PortfolioList from "../../components/portfolioList/PorfolioList"
import React, {useState } from "react";


export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title:"Web App",
        },
        {
            id: "mobile ",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content  ",
        },
    ]

    return (
        <div className= "portfolio" id = "portfolio">
            <h1>Porfolio</h1>
            <ul>
              {list.map(item => (
                  <PortfolioList 
                        title= {item.title} 
                        active ={selected === item.id} 
                        setSelected= {setSelected}
                        id= {item.id} 
                  />
                  ))}            
            </ul>
            <div className="container">
                <div className="item">
                    <img src={App2} alt="" />
                    <h3>Educational App</h3>
                </div>
                <div className="item">
                    <img src={App2} alt="" />
                    <h3>Educational App</h3>
                </div>
                <div className="item">
                    <img src={App2} alt="" />
                    <h3>Educational App</h3>
                </div>
                <div className="item">
                    <img src={App2} alt="" />
                    <h3>Educational App</h3>
                </div>
                <div className="item">
                    <img src={App2} alt="" />
                    <h3>Educational App</h3>
                </div>
                <div className="item">
                    <img src={App2} alt="" />
                    <h3>Educational App</h3>
                </div>
            </div>
        </div>
    )
}
