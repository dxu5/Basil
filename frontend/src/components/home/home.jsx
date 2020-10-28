import React from 'react';
import ProgressBarContainer from '../progress_bar/progress_bar_container'
import './home.css'
import CalendarContainer from '../calendar/calendar_container'

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
                <CalendarContainer />
                <section className="user-infor">User Info</section>

            </div>
        )
    }
}

export default Home