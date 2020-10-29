import React from "react"
import { withRouter } from 'react-router-dom';
import "./button.scss"
class ExcludeItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="excludeitem-div">
                <div className="item-div"><span className="item-span">{this.props.item}</span></div>
                {/* <button onClick={this.props.deleteItem(this.props.item)}></button> */}
                {/* <div className="button__holder"> */}
                <div>
                    <button className="close" onClick={this.props.deleteItem(this.props.item)}>&#xd7;</button>
                </div>
            </div>
        )
    }
}
export default withRouter(ExcludeItem)