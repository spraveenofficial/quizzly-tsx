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





export { ReducersAction, ReducerState, AxiosQuizResponse };