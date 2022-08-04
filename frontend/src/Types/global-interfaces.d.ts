interface ReducersAction {
    type: string;
    payload?: any;
}

interface ReducerState {
    loading: boolean;
    error?: string;
    success: boolean;
    data?: object | null;
    message?: string;
    quiz?: object | null;
}

interface AxiosQuizResponse {
    data: any;
    success: boolean;
    quiz: object | null;
    message: string;
}

interface QuizProps {
    id?: string | undefined;
    marks: number;
    noOfQuestions: number;
    questions: any;
    thumbnail: string;
    timeRequired: number;
    title: string;
}


interface PlayQuiz {
    selectedOptions: any[];
    score: number;
    timeTaken: number;
}



export { ReducersAction, ReducerState, AxiosQuizResponse, QuizProps, PlayQuiz };