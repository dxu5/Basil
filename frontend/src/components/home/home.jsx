import React from 'react';
import ProgressBarContainer from '../progress_bar/progress_bar_container';
import CalendarContainer from '../calendar/calendar_container'
import UserInfo from './user_info';
import './home.css';

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
                <section className="user-info">
                    <UserInfo user={this.props.user}/>
                </section>
                <section className="calendar">
                    <CalendarContainer />
                </section>
            </div>
        )
    }
}

export default Home