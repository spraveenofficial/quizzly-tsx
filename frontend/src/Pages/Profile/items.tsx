import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Loader } from "../../Components";
import { fetchUserRecentQuiz } from "../../Redux/Actions";
import { useTypedDispatch } from "../../Redux/Store";

const RecentQuiz: React.FC = () => {
    const dispatch = useTypedDispatch();
    interface IRecentQuiz {
        loading: boolean,
        data: any[],
        success: boolean,
    }
    const { loading, data, success }: IRecentQuiz = useSelector((state: any) => state.user);


    useEffect(() => {
        dispatch(fetchUserRecentQuiz())
    }, [])

    if (loading) {
        <div className="loader_center">
            <Loader />
        </div>
    }

    return (
        <h1>this is Recent Tab</h1>
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