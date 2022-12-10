import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/aostext.module.css"



class animate extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div >
        <span className={styles.text} data-aos="fade-up">
        "Thanks for visiting my portfolio! I hope you enjoy exploring my projects and learning more about what I do."
        </span>
      </div>
    );
  }
}


export default animate
