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


export { ReducersAction, ReducerState };