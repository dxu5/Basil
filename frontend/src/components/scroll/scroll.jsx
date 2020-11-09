import './scroll.css'
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

class Scroll extends React.Component {
    componentDidMount() {
        const scrollToTopBtn = document.querySelector('.scrollToTopBtn');
        const rootElement = document.documentElement;
            
        const handleScroll = () => {
            let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
            
            if ((rootElement.scrollTop / scrollTotal) > 0.30) {
                scrollToTopBtn.classList.add('showBtn');
            } else {
                scrollToTopBtn.classList.remove('showBtn');
            }
        }
        
        const scrollToTop = () => {
            rootElement.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        scrollToTopBtn.addEventListener('click', scrollToTop);
        document.addEventListener('scroll', handleScroll);
    }

    render() {
        return (
            <button className="scrollToTopBtn" style={{outline: 'none'}}><FontAwesomeIcon icon={faAngleUp} /></button>
        );
    };
};

export default Scroll;