type ReducersAction = {
    type: string,
}

type LocationState = {
    from: {
        path: string;
    }
}


export { ReducersAction, LocationState };