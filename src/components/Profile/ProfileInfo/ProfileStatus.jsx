import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        console.log(e.currentTarget.value)
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <h4 onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status || 'No status' }</h4>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={ this.deactivateEditMode.bind(this) }
                                         onChange={ this.onStatusChange }
                                         value={ this.state.status }/>
                    </div>
                }
            </div>)
    }
}

export default ProfileStatus