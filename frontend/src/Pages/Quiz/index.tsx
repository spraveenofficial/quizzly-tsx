import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Question } from "../../Components";
import { decryptEachQuiz } from "../../Helpers/decrypt";
import { fetchEachQuiz } from "../../Redux/Actions";
import { useTypedDispatch } from "../../Redux/Store";
import { QuizProps } from "../../Types/global-interfaces";
import { Loading } from "../Loading";
import { Terms, Result } from "../index";



const Quiz: React.FC = () => {

    type QuizId = {
        id: string | undefined;
    }
    const { id } = useParams() as QuizId;

    const dispatch = useTypedDispatch();

    const { success, loading, quiz } = useSelector((state: any) => state.quiz);

    const [eachQuizs, setEachQuizs] = useState<QuizProps[]>([]);

    useEffect(() => {
        dispatch(fetchEachQuiz(id));
    }, [])


    useEffect(() => {
        if (!loading && success) {
            decryptQuiz();
        }
    }, [success, loading]);


    const decryptQuiz = async () => {
        const datas = await decryptEachQuiz(quiz);
        setEachQuizs(() => datas);
    };

    type StepMap = {
        [key: number]: number;
    }

    const Steps: StepMap | any = {
        1: Terms,
        2: Question,
        3: Result,
    }

    const [step, setStep] = useState<number>(1);
    const Step = Steps[step];


    if (loading) {
        return <Loading />
    }

    return (
        <>
            {!loading && <Step onNext={() => setStep((prev) => prev + 1)} quiz={eachQuizs} />}
        </>
    )
}

export { Quiz };