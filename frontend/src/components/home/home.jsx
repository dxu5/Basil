import React from 'react';
import './home.css'

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="home">
                <section className="progress">Progress</section>
                <section className="calendar">Calendar</section>
                <section className="user-infor">User Info</section>
            </div>
        )
    }
}

export default Home