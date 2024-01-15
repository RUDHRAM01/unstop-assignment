import React from 'react'

function Card(props) {
    return (
        <>
            {(props?.id === 0 || props?.id === 3) &&
                <div style={{padding: "16px 20px"}} className='overviewCard1'>
                    <p className='cardHeading'>{props?.item?.title}</p>
                    <div style={{ display: "flex", gap: "10px" }}>
                       {props?.id !== 0 ?<img src={props?.item?.icon} alt="" /> :<div className='imgIcon'><img src={props?.item?.icon} alt="" /></div> } 
                        <p className='assValue' style={{ margin: "0px" }}>{props?.item?.data[0].value}</p>
                    </div>
                </div>
            }
            {(props?.id === 1 || props?.id === 2) &&
                <div  style={{ padding: "16px 20px" }} className='overviewCard2'>
                    <p className='cardHeading'>{props?.item?.title}</p>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <img src={props?.item?.icon} alt="" />
                        <div style={{ display: "flex", gap: "20px"}}>
                            {props?.item?.data.map((item, index) =>
                                <>
                                    <div id={index} style={{ rowGap: "20px" }}>
                                        <div style={{ display: "flex",gap:"4px" }}>
                                            <p className='assValue' style={{ margin: "0px" }}>{item?.value}</p>
                                            <p className='baseAss' style={{ margin: "0px" }}>{item?.subValue}</p>
                                        </div>
                                        <p className='assBaseTitle' style={{ margin: "0px" }}>{item?.title}</p>
                                    </div>
                                    {props.item.data.length - 1!== index && <div className='v-line'></div>}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Card