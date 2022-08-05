import { useSelector } from "react-redux";
import { Button, Container } from "../../Components"
import { QuizProps } from "../../Types/global-interfaces";
import { motion } from "framer-motion";
import animation from "../../Helpers/animation";
import { QuestionType } from "../../Types/type"
import { useEffect } from "react";
import { updateLeaderBoard } from "../../Redux/Actions";

interface ResultProps {
    onNext?: () => void;
    quiz: QuizProps[];
}

const Result: React.FC<ResultProps> = ({ quiz }) => {

    type ResultData = {
        id: string | undefined | number;
        score: number;
        timeTaken: number;
    }



    const { score, selectedOptions } = useSelector(
        (state: any) => state.playQuiz
    );

    const { marks, questions, id } = quiz[0];
    const updateData: ResultData = {
        id,
        score,
        timeTaken: 120
    }


    useEffect(() => {
        updateLeaderBoard(updateData);
    }, [])

    return (
        <Container>
            <motion.div
                initial="hidden"
                animate="show"
                variants={animation}
                exit="hidden"
            >
                <div className="finalscore">
                    <h1 className="text-center mb-10">
                        You have Scored: {score} out of {marks}
                    </h1>
                </div>
                {questions.map((eachQuiz: QuestionType, index: number) => {
                    return (
                        <div key={index} className="questions questionss">
                            <p>
                                {index + 1}. {eachQuiz.question}
                            </p>
                            <div className="options-answer">
                                {eachQuiz.options.map((eachOption) => {
                                    return (
                                        <Button
                                            disabled={true}
                                            isTrue={eachOption === eachQuiz.correctAnswer}
                                            isError={eachOption === selectedOptions[index].option}
                                            key={eachOption}
                                            isFull={true}
                                        >
                                            {eachOption}
                                        </Button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </Container>
    )
}


export { Result }