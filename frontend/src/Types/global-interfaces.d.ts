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
    user: object | null;

}


export { ReducersAction, ReducerState, AuthState };