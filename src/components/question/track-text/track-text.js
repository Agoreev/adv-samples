import React, { Component } from "react";
import classes from "./track-text.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class TrackText extends Component {
  render() {
    const textsList = this.props.texts.slice(-3).map(({ text, type }) => {
      const typeClass = type === "question" ? classes.Question : classes.Answer;
      return (
        <CSSTransition key={text} timeout={700} classNames="texts">
          <li className={`${classes.TextItem} ${typeClass}`}>
            <span className={classes.TextBlock}>- {text}</span>
          </li>
        </CSSTransition>
      );
    });

    return (
      <div className={classes.TrackText}>
        <ul className={classes.TextsList}>
          <TransitionGroup>{textsList}</TransitionGroup>
        </ul>
      </div>
    );
  }
}

export default TrackText;
