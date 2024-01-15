import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from "../../assets/icons/close.svg"
import "./new.css"


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewAssignment(props) {
    const [typeSkills, setTypeSkills] = useState("")
    const [skills, setSkills] = useState([
        "UI/UX Design",
        "No of Questions",
        "Web Development",
        "UI/UX Design",
        "Web Development",
    ]);
    const handleChangeSkills = (index) => {
        let newSkills = [...skills]
        newSkills.splice(index, 1)
        setSkills(newSkills)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setSkills([...skills, typeSkills])
            setTypeSkills("")
        }
      };
    return (
        <React.Fragment>
            <Dialog
                open={props?.create}
                TransitionComponent={Transition}
                keepMounted
                onClose={props?.handleCreate}
                aria-describedby="alert-dialog-slide-description"
                fullWidth={true}
                className='dialog'
            >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 20px 20px 20px",borderBottom:"1px solid #DADCE0" }}>
                    <p className='popUpTitle'> 
                        Create New Assignment
                    </p>
                    <img src={CloseIcon} style={{cursor:"pointer"}} alt="" onClick={props?.handleCreate}/>
                </div>
                <DialogContent>
                    <div className='formChild'>
                        <label >Name of assessment</label>
                        <input type="text" placeholder='Type Here'/>
                    </div>
                    <div className='formChild'>
                        <label >Purpose of the test is</label>
                        <select id='options' name='select'>
                            <option value="">select</option>
                            <option value="">y</option>
                        </select>
                    </div>
                    <div className='formChild'>
                        <label >Description</label>
                        <select id='options' name='select'>
                            <option value="">select</option>
                            <option value="">y</option>
                        </select>
                    </div>
                    <div className='formChild'>
                        <label className='skillLabel'>Skills</label>
                        <div className='skillsContainer'>
                            {skills.map((item, index) => <div>{item}<img src={CloseIcon} alt="" style={{cursor:"pointer"}} onClick={()=>handleChangeSkills(index)}/></div>)}
                        </div>
                        <input type="text" value={typeSkills} placeholder='Type here' onChange={(e)=>setTypeSkills(e.target.value)} onKeyDown={handleKeyPress}/>
                    </div>
                    <div className='formChild'>
                        <label >Duration of assessment</label>
                        <input type="text" placeholder='HH:MM:SS'/>
                    </div>
                    <div style={{padding:"20px 0px 0px 0px"}}>
                        <button className='formButton'>
                            Save
                        </button>
                    </div>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}