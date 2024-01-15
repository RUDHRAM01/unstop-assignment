import React from 'react'
import Link3 from "../../assets/icons/link3.svg"
import Work from "../../assets/icons/work.svg"
import Calendar from "../../assets/icons/calender.svg"
import Info from "../../assets/icons/info.svg"

function Card(props) {
    return (
        <div className='assCard'>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <img className='assIcon' src={Work} alt="" />
                <img src={Info} alt="" />
            </div>
            <p className='createdAss'>{props?.data?.title}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className='assCardMid'>
                <p style={{ margin: "0px" }} className='jobTitle'>Job</p>
                <div className='vr-line'></div>
                <img className="calendar" src={Calendar} alt="" />
                <p style={{ margin: "0px" }} className='date'>{props?.data.date}</p>
            </div>
            <div className='separator'></div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",  }} className='assCardBott'>
                <div style={{ display: "flex", gap: "12px",alignItems:"center",justifyContent:"flex-start",flexWrap:"wrap" }}>
                    <div>
                        <p style={{ margin: "0px" }} className='timeDu'>00</p>
                        <p style={{ margin: "0px" }} className='timeDu'>Duration</p>
                    </div>
                    <div>
                        <p style={{ margin: "0px" }} className='timeDu'>00</p>
                        <p style={{ margin: "0px" }} className='timeDu'>Questions</p>
                    </div>
                </div>
                <div style={{display:"flex",gap:"8px",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}} className='cardShare'>
                    <button><img src={Link3} alt="" /> Share</button>
                    {props?.id === "0" && <div className='person'>LP</div>}
                    {props?.id === "1" && <div className='group'>
                        <div>LP</div>
                        <div>LP</div>
                        <div>LP</div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Card