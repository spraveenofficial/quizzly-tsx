import { useTypedDispatch } from "../../Redux/Store";
import "./style.css"
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { TUser } from "../../Types/type";
import React, { useState } from "react";
import { Button, Container, Input, Loader } from "../../Components";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import animation from "../../Helpers/animation";


const CreateQuiz: React.FC = () => {
    type UserInput = {
        title: string;
        totalMarks: number | string;
        totalTime: number | string;
        thumbnail: string;
    }
    const loading = false
    const dispatch = useTypedDispatch();
    const optionArray: string[] = ["A", "B", "C", "D"];
    const itemTemplate: any = {
        id: uuidv4(),
        title: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        answer: "",
    }

    const { user }: TUser | any = useSelector((state: any) => state.auth);


    const [userInput, setUserInput] = useState<UserInput>({
        title: "",
        thumbnail: "",
        totalMarks: "",
        totalTime: "",
    });

    const [questionInput, setQuestionInput] = useState([itemTemplate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    };

    const addQuizQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setQuestionInput([...questionInput, itemTemplate]);
    };
    const handleSubmit = () => {
        const questions = questionInput.map((item) => {
            return {
                id: item.id,
                question: item.title.trim(),
                options: [
                    item.optionA.trim(),
                    item.optionB.trim(),
                    item.optionC.trim(),
                    item.optionD.trim(),
                ],
                correctAnswer: item[item.answer].trim(),
            };
        });
        const titleThing = {
            title: userInput.title.trim(),
            thumbnail: userInput.thumbnail.trim(),
            marks: userInput.totalMarks,
            timeRequired: Number(userInput.totalTime) * 60,
            difficulty: "easy",
            noOfQuestions: Number(questionInput.length),
            questions: questions,
        };
        alert(JSON.stringify(titleThing));
    }
    const onChange = (e: any, index: number) => {
        const updatedItems = questionInput.map((items, i) =>
            index === i
                ? Object.assign(items, {
                    [e.target.name]: e.target.value,
                })
                : items
        );
        setQuestionInput(updatedItems);
    };
    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add Quiz - Quizzly</title>
            </Helmet>
            <motion.div
                initial="hidden"
                animate="show"
                variants={animation}
                exit="hidden"
                className="create-quiz"
            >
                <div className="justify-between text-center align-center flex">
                    <h3>Create Quiz</h3>
                    <p>{user.name} </p>
                </div>
                <div className="quiz-box-main">
                    <Input
                        label="Enter Title *"
                        onChange={handleChange}
                        placeholder="Enter Quiz Title"
                        name="title"
                    />
                    <Input
                        label="Enter Thumbnail *"
                        placeholder="Currently we are accepting url"
                        onChange={handleChange}
                        name="thumbnail"
                    />
                    <div className="grid grid-2 gap10">
                        <Input
                            label="Total Time *"
                            onChange={handleChange}
                            placeholder="in Minutes "
                            name="totalTime"
                            type="number"
                        />
                        <Input
                            label="Marks"
                            onChange={handleChange}
                            placeholder="Total Marks"
                            name="totalMarks"
                            type="number"
                        />
                    </div>
                    <div className="create-quiz-btn flex justify-last">
                        <Button onClick={addQuizQuestion}>Add Question</Button>
                    </div>
                    {questionInput.map((item, index: number) => {
                        return (
                            <div
                                className={
                                    "add-questions pb-10 mt-10 " +
                                    (questionInput.length > 1 && "border-bottom")
                                }
                                key={index}
                            >
                                <Input
                                    label="Enter Question Title *"
                                    placeholder={`Enter Question ${index + 1}`}
                                    onChange={(e) => onChange(e, index)}
                                    name="title"
                                />
                                {optionArray.map((item, i: number) => {
                                    return (
                                        <div className="grid grid-2 gap-10 " key={i}>
                                            <Input
                                                onChange={(e) => onChange(e, index)}
                                                name={`option${item}`}
                                                label={`Option ${i + 1}`}
                                                placeholder={`Option ${item} `}
                                            />
                                            <div className="checkbox-option-correct">
                                                <p>Correct?</p>
                                                <input
                                                    className="text-center justify-center"
                                                    type="checkbox"
                                                    name="answer"
                                                    id=""
                                                    onChange={(e: any) =>
                                                        onChange(
                                                            {
                                                                target: {
                                                                    name: e.target.name,
                                                                    value: e.target.checked ? `option${item}` : "",
                                                                },
                                                            },
                                                            index
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
                <Button onClick={handleSubmit} isFull={true}>
                    {loading && <Loader />} Submit
                </Button>
            </motion.div>
        </Container>
    );
}



export { CreateQuiz }