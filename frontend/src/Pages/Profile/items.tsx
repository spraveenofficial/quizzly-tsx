import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Loader } from "../../Components";
import { fetchUserRecentQuiz } from "../../Redux/Actions";
import { useTypedDispatch } from "../../Redux/Store";
import { motion, AnimateSharedLayout } from "framer-motion";
import Items from "../LeaderBoard/items";

const RecentQuiz: React.FC = () => {
    const dispatch = useTypedDispatch();
    interface IRecentQuiz {
        loading: boolean,
        data: any[],
        success: boolean,
    }
    const { loading, data, success }: IRecentQuiz = useSelector((state: any) => state.user);
    console.log(loading)

    useEffect(() => {
        dispatch(fetchUserRecentQuiz())
    }, [])

    if (loading && !success) {
        <div className="loader_center">
            <Loader />
        </div>
    }

    return (
        <div className="leaderboard-items m-10">
            <AnimateSharedLayout>
                {!data ? (
                    <div className="loader_center">
                        <h3>You have Not Played Any Quiz Yet.</h3>
                    </div>
                ) : (
                    !loading &&
                    success &&
                    data.map((item, index) => (
                        <Items
                            key={index}
                            thumbnail={item.thumbnail}
                            name={item.title}
                            scored={`${item.scored}/${item.totalMarks}`}
                            timeTook={`${item.timeTaken / 60} Minute`}
                        />
                    ))
                )}
            </AnimateSharedLayout>
        </div>
    )
}



const UserSettings: React.FC = () => {
    return (
        <div className="loader_center">
            <Loader />
        </div>
    );
};




interface IItems {
    icon: string;
    label: string;
    component: React.ReactNode;
}


export const allItems: IItems[] = [
    { icon: "⏰", label: "Recent Quizs", component: <RecentQuiz /> },
    { icon: "⚙️", label: "Settings", component: <UserSettings /> },
];


const [Recent, Settings] = allItems;
export const initialTabs = [Recent, Settings];