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


export { ReducersAction, ReducerState, AuthState };