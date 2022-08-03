type LocationState = {
    from: {
        path: string;
    }
}

type AuthState = {
    loading: boolean;
    isAuthenticated: boolean;
    user: {
        name: string;
        email: string;
        isAdmin: boolean;
    } | null;

}


type QuestionType = {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
}


export { LocationState, AuthState, QuestionType };