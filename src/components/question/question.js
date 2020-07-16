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
        answers: this.props.question.answers,
        title: this.props.question.title,
        track: this.props.question.track,
        questionsHistory: [],
        texts: [{ text: this.props.question.text, type: "question" }],
        selectedAnswer: null,
        showAnswers: false,
    };

    onAnswerSelected = (answerId) => {
        const answer = this.state.answers[answerId];

        if (answer.questions) {
            //if current answer has another question
            const questionNumber = getRandomNumber(answer.questions.length);
            const newQuestion = answer.questions[questionNumber];
            this.setState(({ texts, questionsHistory, question }) => {
                return {
                    texts: [...texts, { text: answer.text, type: "answer" }],
                    title: newQuestion.title,
                    track: newQuestion.track,
                    selectedAnswer: answerId,
                    questionsHistory: [...questionsHistory, question], //add current question to history array
                    showAnswers: false,
                };
            });
            setTimeout(() => {
                this.setState(({ texts }) => {
                    return {
                        question: newQuestion,
                        answers: newQuestion.answers,
                        selectedAnswer: null,
                        title: newQuestion.title,
                        texts: [
                            ...texts,
                            { text: newQuestion.text, type: "question" },
                        ],
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
                    title: finalAnswer.title,
                    track: finalAnswer.track,
                    selectedAnswer: answerId,
                    //questionsHistory: [...questionsHistory, question], //add current question to history array
                    showAnswers: false,
                };
            });
            setTimeout(() => {
                this.setState(({ texts }) => {
                    return {
                        title: finalAnswer.title,
                        texts: [
                            ...texts,
                            { text: finalAnswer.text, type: "question" },
                        ],
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
                answers: questionsHistory[questionsHistory.length - 1].answers,
                title: questionsHistory[questionsHistory.length - 1].title,
                track: questionsHistory[questionsHistory.length - 1].track,
                selectedAnswer: null,
                questionsHistory: questionsHistory.slice(
                    0,
                    questionsHistory.length - 1
                ),
                texts: texts.slice(0, texts.length - 2),
            };
        });
    };

    render() {
        const {
            track,
            showAnswers,
            answers,
            title,
            selectedAnswer,
        } = this.state;

        return (
            <div className={classes.Question}>
                {/* <TrackText texts={texts} /> */}
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        classNames="track-title"
                        timeout={500}
                        key={title}
                    >
                        <h3 className={classes.TrackTitle}>{title}</h3>
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
                            answers={answers ? answers : null}
                            onAnswerSelected={this.onAnswerSelected}
                            onBackClicked={this.onBackClicked}
                            selectedAnswer={selectedAnswer}
                        />
                    </div>
                </CSSTransition>
            </div>
        );
    }
}

export default Question;
