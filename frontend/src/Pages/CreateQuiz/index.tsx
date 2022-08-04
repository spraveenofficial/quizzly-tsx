import { useTypedDispatch } from "../../Redux/Store";
import "./style.css"
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { TUser } from "../../Types/type";
import { useState } from "react";
const CreateQuiz: React.FC = () => {
    type UserInput = {
        title: string;
        totalMarks: number | string;
        totalTime: number | string;
        thumbnail: string;
    }
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

    
    return (
        <div>
            <h1>Create Quiz</h1>
        </div>
    );
}



export { CreateQuiz }