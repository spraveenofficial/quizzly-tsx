import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useTypedDispatch } from "../../Redux/Store";
import { QuizProps } from "../../Types/global-interfaces";
import { Container } from "../Container";
import { motion } from "framer-motion";
import animation from "../../Helpers/animation";
import "./style.css";
import { scoreChange, SelectAnswer } from "../../Redux/Actions";


interface TermProps {
    onNext: () => void;
    quiz: QuizProps[];
}

const Question: React.FC<TermProps> = ({ onNext, quiz }) => {

    const dispatch = useTypedDispatch();

    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const { score } = useSelector((state: any) => state.playQuiz);

    const thisQuestion = quiz[0].questions[currentQuestion];
    const [totalTimer, setTotalTimer] = useState<number>(quiz[0].timeRequired);

    const eachQuestionMarks =
        quiz.length === 1 && quiz[0].marks / quiz[0].questions.length;

    useEffect(() => {
        const interval = setInterval(() => {
            totalTimer == 0
                ? clearTimeout(interval)
                : setTotalTimer((prev) => prev - 1);
        }, 1000);
        return () => {
            // dispatch(SetTimer(totalTimer));
            clearInterval(interval);
        };
    }, [totalTimer]);

    const nextQuestion = (e: React.MouseEvent<HTMLInputElement>, id: string) => {
        const optionSelected = (e.target as HTMLInputElement).innerText;

        dispatch(SelectAnswer(id, optionSelected));

        if (optionSelected === thisQuestion.correctAnswer) {
            dispatch(scoreChange(Number(eachQuestionMarks)));
        }

        const upcomingQuestion = currentQuestion + 1;

        upcomingQuestion < quiz[0].questions.length
            ? setCurrentQuestion(upcomingQuestion)
            : onNext();
    };

    var minutes = Math.floor(totalTimer / 60);
    var seconds = totalTimer - minutes * 60;


    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{quiz[0].title} - Quizzly</title>
            </Helmet>
            <motion.div
                initial="hidden"
                animate="show"
                variants={animation}
                exit="hidden"
            >
                <div className="header">
                    <h2 className="text-center">{thisQuestion.question}</h2>
                </div>
                <p>
                    Time Left: {minutes}.{seconds} {minutes > 1 ? "min" : "sec"}
                </p>
                <div className="question">
                    <div className="score">
                        <p>
                            Questions: {currentQuestion + 1}/{quiz[0].questions.length}
                        </p>
                        <p>Score: {score}</p>
                    </div>
                    <div className="questions">
                        <div className="options">
                            {thisQuestion.options.map((item: any) => {
                                return (
                                    <button
                                        key={item}
                                        onClick={(event: any) => nextQuestion(event, thisQuestion.id)}
                                        className="btn full-width mt-10 inherit-font opt-button"
                                    >
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </motion.div>
        </Container>
    );
}

export { Question }