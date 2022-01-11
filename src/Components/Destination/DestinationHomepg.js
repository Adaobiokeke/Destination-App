import React, {useState} from 'react'
import Paris from "../Assets/Paris.jpg"
import Bahamas from "../Assets/Bahamas.jpg"
import Likes from "../Assets/like.png"
import Unlikes from "../Assets/unlike2-removebg-preview.png"
import "./Destination.css"

const DestinationHomepg = () => {
    const[parislikes, setParisLikes] = useState(0)
    const[bahamslikes, setBahamasLikes] = useState(0)
    const[parisunlikes, setParisUnlikes] = useState(0)
    const[bahamasunlikes, setBahamasUnlikes] = useState(0)
    const handleParisLikes =()=>{
        setParisLikes(prev => prev + 1)
    }
    const handleBahamasLikes =()=>{
        setBahamasLikes(prev => prev + 1)
    }
    const handleParisUnlikes =()=>{
        setParisUnlikes(prev => prev + 1)
    }
    const handleBahamasUnlikes =()=>{
        setBahamasUnlikes(prev => prev + 1)
    }
    const winner =()=>{
        if(parislikes-parisunlikes > bahamslikes-bahamasunlikes){
            return "PARIS"
        }
        if(bahamslikes-bahamasunlikes > parislikes-parisunlikes){
            return "BAHAMAS"
        }
    }
     const handleReset = () =>{
        setParisLikes(0)
        setParisUnlikes(0)
        setBahamasLikes(0)
        setBahamasUnlikes(0)
     }
    return (
        <div>
            <div className="destination-div">
                <h1 style={{textAlign: "center", borderBottom:"2px solid"}}>Popular destinations</h1>
                <div className="img-div">
                <div className="paris-div">
                <h4>Destination 1</h4>
                    <img className="paris"src={Paris} alt="Paris"/>
                </div>
                <div>
                    <h4 style={{position:"relative",top:"95px"}}>Most Popular Destination</h4>
                    <h4 style={{position:"relative",top:"95px", textAlign:"center"}}>{winner()}</h4>
                </div>
                <div className="bahamas-div">
                    <h4>Destination 2</h4>
                <img  className="bahamas" src={Bahamas} alt="Paris"/>
                </div>
                </div>
                <div style={{display:"flex",justifyContent:"space-between", padding:"0 50px",position:"relative",bottom:"95px" }}>
                <div style={{justifyself: 'center',}}>
                   <img  onClick={handleParisLikes}style={{width:'50px',position:'relative',bottom:"2px",cursor:'pointer'}} src={Likes} alt="likes"/> 
                   <img onClick={handleParisUnlikes}style={{width:'50px',cursor:'pointer'}} src={Unlikes} alt="unlikes"/> 
                   <p>Likes:{parislikes}</p>
                   <p>Unlikes:{parisunlikes}</p>
                </div>
                <div style={{justifyself: 'center'}}>
                   <img onClick={handleBahamasLikes} style={{width:'50px',position:'relative',bottom:"2px", cursor:'pointer'}} src={Likes} alt="likes"/> 
                   <img onClick={handleBahamasUnlikes} style={{width:'50px',cursor:'pointer'}} src={Unlikes} alt="unlikes"/> 
                   <p>Likes:{bahamslikes}</p>
                   <p>Unlikes:{bahamasunlikes}</p>
                </div>
                </div>
                
                <button className="reset-btn"onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default DestinationHomepg
