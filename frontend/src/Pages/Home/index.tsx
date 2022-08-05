import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Container } from '../../Components';
import { fetchHomePageQuiz } from '../../Redux/Actions';
import { useTypedDispatch } from '../../Redux/Store';
import { Loading } from '../Loading';
import { motion } from 'framer-motion';
import { categoryItemVariants, categoryVariant } from '../../Helpers/animation';
import { Helmet } from 'react-helmet-async';
import { decryptHomeQuiz } from '../../Helpers/decrypt';
import { CategoryCard } from '../../Components/CategoryCard';
import "./style.css"
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {

    type ThomeQuizs = {
        title: string,
        marks: number,
        questionsCount: number,
        thumbnail: string,
        path: string,
    }

    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const { success, loading, quiz } = useSelector((state: any) => state.homePageQuiz);
    const [quizs, setQuizs] = React.useState<ThomeQuizs[]>([]);

    useEffect(() => {
        if (quiz.length === 0) {
            dispatch(fetchHomePageQuiz());
        }
    }, [])

    useEffect(() => {
        if (success) {
            decryptHomeQuizs();
        }
    }, [success])


    const decryptHomeQuizs = async () => {
        const datas: ThomeQuizs[] = await decryptHomeQuiz(quiz);
        setQuizs(datas);
    };

    const switchQuiz = (path: string) => {
        navigate(`/quiz/${path}`);
    };

    if (loading) {
        return <Loading />
    }

    return (
        <Container>
            <motion.div
                variants={categoryVariant}
                initial="hidden"
                animate={"show"}
            >
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home - Quizzly</title>
                </Helmet>
                <div className="main_data">
                    {quizs.map((quiz: ThomeQuizs, index: number) => {
                        return (
                            <motion.div
                                className="mobile-item"
                                variants={categoryItemVariants}
                                key={index}
                            >
                                <CategoryCard
                                    key={index}
                                    title={quiz.title}
                                    questionAmount={quiz.questionsCount}
                                    thumbnail={quiz.thumbnail}
                                    marks={quiz.marks}
                                    onClick={() => switchQuiz(quiz.path)}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </Container>
    )
}

export { Home }