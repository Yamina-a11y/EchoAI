import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
const Main = () => {

    const {onSent,showResult,recentPrompt,loading,resultData,setInput,input}= useContext(Context)

    const cardPrompts = [
        { text: "Suggest beautiful places to see on an upcoming road trip", prompt: "Suggest beautiful places to see on an upcoming road trip" },
        { text: "Briefly summarize this concept: urban planning", prompt: "Briefly summarize this concept: urban planning" },
        { text: "Brainstorm team bonding activities for our work retreat", prompt: "Brainstorm team bonding activities for our work retreat" },
        { text: "Improve the readability of the following code", prompt: "Improve the readability of the following code" },
    ];

    return(
        <div className='main'>
            <div className="nav">
                <img src={assets.echo_icon} alt=""  className='Logo'/>
                 <img src={assets.user_icon} alt="" className='PP'/>
            </div>

                
            <div className="main-container">
                {!showResult
                ?<>
                   <div className="greet">
                    <p><span>Hello! FindMate.</span></p>
                    <p>How can I assist you today?</p>
                </div>
                <div className="cards">
                    {cardPrompts.map((card,index) => (
                    <div className="card" key={index} onClick={()=> onSent(card.prompt)}
                        style={{ cursor:'pointer'}}>
                        <p>{card.text}</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>
                    ))}
                </div>
                </>
                :<div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt=""/>
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt=""/>
                        {loading
                        ?<div className='loader'>  
                            <hr />
                            <hr />
                            <hr />
                        </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p> 
                    }
                        
                    </div>

                </div>
                }
                
                <div className="main-bottom">
                    <div className="search-bar">
                        <input  onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter the prompt here'
                        onKeyDown={(e) =>{
                            if(e.key === 'Enter'){
                                onSent();
                            }
                        }}/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}

                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Main
