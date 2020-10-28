import React from 'react';
import ProgressBarContainer from '../progress_bar/progress_bar_container'
import './home.css'

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="home">
                <section className="progress">
                    <ProgressBarContainer />
                </section>
                <section className="calendar">Calendar</section>
                <section className="user-infor">User Info</section>
            </div>
        )
    }
}

export default Home