import React from 'react';
import ProgressBarContainer from '../progress_bar/progress_bar_container';
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
                <section className="calendar">Calendar</section>
                <section className="user-info">
                    <UserInfo user={this.props.user}/>
                </section>
            </div>
        )
    }
}

export default Home