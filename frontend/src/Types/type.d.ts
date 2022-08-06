type LocationState = {
    from: {
        path: string;
    }
}

type TUser = {
    name: string;
    email: string;
    isAdmin: boolean;
}

type AuthState = {
    loading: boolean;
    isAuthenticated: boolean;
    user: TUser | null;

}


type TUserAuthCredentials = {
    email: string,
    password: string,
    name?: string,
    checkbox?: boolean
}


type QuestionType = {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
}


export { LocationState, AuthState, QuestionType, TUser, TUserAuthCredentials };