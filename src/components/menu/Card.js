import React from 'react'

function Card(props) {
    return (
        <div className='menuCard' style={{ borderTop: props?.isAdmin ? "dotted #BACBD5" : "" }}>
            {props?.isAdmin ?
                <>
                    <div className='accessAdmin'>
                        <p className='isAdmin'>Admin</p>
                        <div>
                            <img src={props?.icon} alt="" />
                            <p style={{ marginTop: "0px" }}>{props?.name}</p>
                        </div>
                    </div>
                </> :
                <>
                    <img src={props?.icon} alt="" />
                    <p style={{ marginTop: "0px" }}>{props?.name}</p>
                </>
            }
        </div>
    )
}

export default Card