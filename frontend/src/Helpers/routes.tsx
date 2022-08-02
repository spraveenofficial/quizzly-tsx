import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FC } from 'react';


interface IRoute {
    isAuthenticated: boolean;
}


export const ProtectedRoute: FC = (): any => {
    const location = useLocation();
    const { isAuthenticated }: IRoute = useSelector((state: any) => state.auth);
    return isAuthenticated ? <Outlet /> : <Navigate state={{ from: location }} replace to={{ pathname: "/login" }} />;
}

export const PublicRoute: FC = (): any => {
    const location = useLocation();
    const { isAuthenticated }: IRoute = useSelector((state: any) => state.auth);
    return !isAuthenticated ? <Outlet /> : <Navigate state={{ from: location }} replace to={{ pathname: "/" }} />;
}