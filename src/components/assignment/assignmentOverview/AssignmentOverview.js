import React from 'react'
import Card from './Card'
import ViewIcon from '../../assets/icons/view.svg'
import PersonIcon from '../../assets/icons/person.svg'
import SourceIcon from "../../assets/icons/source.svg"
import Link2Icon from "../../assets/icons/link2.svg"
function AssignmentOverview() {
    const data = [
        {
            title: "Total Assignments",
            data: [{
                value: "34"
            }],
            icon: ViewIcon
        },
        {
            title: "Candidates",
            icon: PersonIcon,
            data: [{
                value: "11,145",
                subValue: "+85",
                title: "Total Candidates",
            }, {
                value: "1,14",
                subValue: "+89",
                title: "Who Attamped",
            }]
        },
        {
            title: "Candidates Source",
            icon: SourceIcon,
            data: [
                {
                    value: "11,000",
                    subValue: "+89",
                    title: "E-mail"
                },
                {
                    value: "145",
                    subValue: "+89",
                    title: "Social Share",
                },
                {
                    value: "145",
                    subValue: "+89",
                    title: "Unique Link",
                }
            ]
        },
        {
            title: "Total Purpose",
            icon: Link2Icon,
            data: [
                {
                    value: "11"
                }
            ]
        }
    ]
    return (
        <div className='assignmentOverview'>
            <div>
                <p className='assignmentHeading'>Assessments Overview</p>
            </div>
            <div className='assParent'>
                {data.map((item, index) =>
                    <Card id={index} item={item} />
                )}
            </div>
        </div>
    )
}

export default AssignmentOverview