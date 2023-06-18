import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect( () => {
        setStatus(props.status)
        console.log(props)
    }, [ props.status ] )

    return (
        <div>
            {!editMode &&
                <div>
                    <h4 onDoubleClick={ activateEditMode }> {props.status || 'No status'} </h4>
                </div>
            }

            {editMode &&
                <div>
                    <input autoFocus onBlur={ deactivateEditMode }
                                    onChange={ onStatusChange } 
                                    value={ status }/>
                </div>
            }
        </div>)
}





export default ProfileStatusWithHooks