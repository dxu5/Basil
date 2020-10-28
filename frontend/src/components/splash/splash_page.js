import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/colors.css";
import "./splash.css";

class SplashPage extends React.Component {
  render() {
    return (
      <div class="splash">
        <div className="pimg1">
          <div className="ptext">
            {/* <div className="border-top"> */}
            <span className="border">
              {/* Basil */}
              <img src="/images/splashLogo2.png" />
            </span>
            {/* </div> */}
          </div>
        </div>

        <section className="section section-light">
          <h2>A Customizable Meal Planner</h2>
          <p>
            From clean eating to calorie-balanced nutritious meals to kid
            friendly recipes, get access to thousands of appetizing meals made
            by certified chefs. Our app accommodates all dietary restrictions.
            Take the anxiety out of deciding what to eat. Whatever your goals, let
            Basil make the process as simple as possible.
          </p>
        </section>

        <div className="pimg2">
          <div className="ptext">
            <span className="border trans">Eating smart has never been easier</span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Your meals at a glance</h2>
          <p>
            Access all of your meals for the week in one place. Get detailed
            information on instructions, ingredients, and nutritional facts. We
            make it easy for you.
          </p>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <Link to="/signup" className="border trans" id="signup">
              Signup
            </Link>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Make eating fun</h2>
          <p>
            Track your progress each day. Up-to-date stats to help you stay smart and on
            track to meet your goals. Watch your basil grow as you complete more meals.
          </p>
        </section>

        <div className="pimg4">
          <div className="ptext about-us">
            <span className="about-us-span">About Us</span>
          </div>
        </div>

        <div className="profiles">
          <a
            href="https://www.linkedin.com/in/derek-jinxiao-xu/"
            target="_blank"
          >
            <div className="profile">
              <img src="/images/Derek.png" className="dev-img"></img>
              <span className="prof-name">Derek</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/lisa-lam-64607743/"
            target="_blank"
          >
            <div className="profile">
              <img src="/images/Lisa.jpeg" className="dev-img"></img>
              <span className="prof-name">Lisa</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/nathan-oh-cpa-8062075a/"
            target="_blank"
          >
            <div className="profile">
              <img src="/images/Nate.jpg" className="dev-img"></img>
              <span className="prof-name">Nate</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/zhang-zhang-0911/"
            target="_blank"
          >
            <div className="profile">
              <img src="/images/Zhang.jpg" className="dev-img"></img>
              <span className="prof-name">Zhang</span>
            </div>
          </a>
        </div>
        {/* <footer>Copyright &copy; 2020 Basil</footer> */}
      </div>
    );
  }
}

export default SplashPage;
