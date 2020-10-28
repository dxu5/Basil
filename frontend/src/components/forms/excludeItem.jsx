import React from "react"
import { withRouter } from 'react-router-dom';

class ExcludeItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {this.props.item}
                <button onClick={this.props.deleteItem(this.props.item)}></button>
            </div>
        )
    }
}
export default withRouter(ExcludeItem)