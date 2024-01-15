import React, { useState } from 'react'
import AddIcon from "../../assets/icons/add.svg"
import Card from './Card'
import SearchIcon from "../../assets/icons/search.svg"
import FilterIcon from "../../assets/icons/filter.svg"
import GraphIcon from "../../assets/icons/graph.svg"
import NewAssignment from '../newAssignment/NewAssignment'


function AssignmentCard() {
    const [create, setCreate] = useState(false);
    const handleCreate = () => {
        setCreate(!create);
    }
    const data = {
        title: "Math Assignment",
        date: "20 Apr 2023"
    }
    return (
        <div style={{ display: "flex", gap: "12px", flexDirection: "column" }} className='myAssCont'>
           <NewAssignment create={create} handleCreate={handleCreate} />
            <div style={{ width: "100%", height: "40px" }} className='gapDiv'></div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <p className='myAss'>My Assignment</p>
                <div className='assTools'>
                    <img src={SearchIcon} alt="" />
                    <img src={FilterIcon} alt="" />
                    <img src={GraphIcon} alt="" />
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "30px", flexWrap: "wrap", overflowY: "scroll" }} className='allCreAss'>
                <div className='createAssignment'>
                    <img src={AddIcon} alt="" onClick={handleCreate} style={{cursor:"pointer"}}/>
                    <p className='newAss'>New Assignment</p>
                    <p className='createDis'>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
                </div>
                <Card id="0" data={data} />
                <Card id="1" data={data} />
            </div>
        </div>
    )
}

export default AssignmentCard