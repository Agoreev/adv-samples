import React, { Component } from "react";
import TrackText from "./track-text";
import Track from "./track";
import AnswersList from "./answers-list";
import classes from "./question.module.css";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { getRandomNumber } from "../../utils";

class Question extends Component {
  state = {
    question: this.props.question,
    questionsHistory: [],
    texts: [{ text: this.props.question.text, type: "question" }],
    track: this.props.question.track,
    showAnswers: false,
  };

  onAnswerSelected = (answer) => {
    if (answer.questions) {
      //if current answer has another question
      const questionNumber = getRandomNumber(answer.questions.length);
      const newQuestion = answer.questions[questionNumber];
      this.setState(({ texts, questionsHistory, question }) => {
        return {
          texts: [...texts, { text: answer.text, type: "answer" }],
          track: newQuestion.track,
          questionsHistory: [...questionsHistory, question], //add current question to history array
          showAnswers: false,
        };
      });
      setTimeout(() => {
        this.setState(({ texts }) => {
          return {
            question: newQuestion,
            texts: [...texts, { text: newQuestion.text, type: "question" }],
          };
        });
      }, 800);
    } else {
      // if current answer has no other questions it must have final answer from server
      const answerNumber = getRandomNumber(answer.finalAnswers.length);
      const finalAnswer = answer.finalAnswers[answerNumber];
      this.setState(({ texts, questionsHistory, question }) => {
        return {
          texts: [...texts, { text: answer.text, type: "answer" }],
          track: finalAnswer.track,
          questionsHistory: [...questionsHistory, question], //add current question to history array
          showAnswers: false,
        };
      });
      setTimeout(() => {
        this.setState(({ texts }) => {
          return {
            question: finalAnswer,
            texts: [...texts, { text: finalAnswer.text, type: "question" }],
          };
        });
      }, 800);
    }
  };

  onTrackEnded = () => {
    this.setState({
      showAnswers: true,
    });
  };

  onBackClicked = () => {
    if (this.state.questionsHistory.length === 0) {
      this.props.onExitFromQuestion();
      return;
    }

    this.setState(({ texts, questionsHistory }) => {
      return {
        question: questionsHistory[questionsHistory.length - 1],
        track: questionsHistory[questionsHistory.length - 1].track,
        questionsHistory: questionsHistory.slice(
          0,
          questionsHistory.length - 1
        ),
        answer: null,
        texts: texts.slice(0, texts.length - 2),
      };
    });
  };

  render() {
    const { question, track, texts, showAnswers } = this.state;

    return (
      <div className={classes.Question}>
        {/* <TrackText texts={texts} /> */}
        <SwitchTransition mode="out-in">
          <CSSTransition
            classNames="track-title"
            timeout={500}
            key={question.title}
          >
            <h3 className={classes.TrackTitle}>{question.title}</h3>
          </CSSTransition>
        </SwitchTransition>

        <Track track={track} onTrackEnded={this.onTrackEnded} />
        <CSSTransition
          classNames="answers-list"
          timeout={800}
          mountOnEnter
          unmountOnExit
          in={showAnswers}
        >
          <div>
            <AnswersList
              answers={question ? question.answers : null}
              onAnswerSelected={this.onAnswerSelected}
              onBackClicked={this.onBackClicked}
            />
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Question;
