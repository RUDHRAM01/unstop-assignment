import React, { useState } from 'react'
import Menu from '../menu/Menu'
import AssignmentOverview from './assignmentOverview/AssignmentOverview'
import AssignmentCard from './assignmentCard/AssignmentCard'
import MenuIcon from "../assets/icons/menu.svg"
import './assignment.css'

function Assignments() {
  const [open, setOpen] = useState(false);
  const handleMenuOpen = () => {
    setOpen(!open);
  }
  return (
    <div className='assignment'>
      <div className={open ? "activeMenu" : "menuMain"}>
        <Menu open={open} handleMenuOpen={handleMenuOpen} />
      </div>
      <div className='assignmentCont'>
        <div className='assignmentHead'>
          <div style={{ display: "flex", gap: "8px",alignItems:"center" }} className='topAssHead'>
            <div className='menuIcon'>
              <img onClick={handleMenuOpen} src={MenuIcon} alt="" />
            </div>
            <h1>Assignment</h1>
          </div>
          <div class="vertical-line"></div>
          <div className='assTabParent'>
            <div className='assTabs'>
              <h4>
                My Assignments
              </h4>
            </div>
            <div className='assTabs'>
              <h4>
                Unstop Assignments
              </h4>
            </div>
          </div>
        </div>
        <div className='assignmentBody'>
          <AssignmentOverview />
          <AssignmentCard />
        </div>
      </div>
    </div>
  )
}

export default Assignments