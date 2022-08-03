interface ReducersAction {
    type: string;
    payload?: any;
}

interface ReducerState {
    loading: boolean;
    error?: string;
    success: boolean;
    data?: object;
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





export { ReducersAction, ReducerState, AxiosQuizResponse, QuizProps };