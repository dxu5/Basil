import React from "react"
import { withRouter } from 'react-router-dom';
import ExcludeItem from "./excludeItem"
class ExcludeList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            this.props.exclude.map((item,idx)=>(
                <ExcludeItem key={idx} item={item} deleteItem={this.props.deleteItem}/>
            ))
        )
    }
}
export default withRouter(ExcludeList)