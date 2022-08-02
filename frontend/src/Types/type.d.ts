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


export {  LocationState, AuthState };