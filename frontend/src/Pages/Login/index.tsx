import "./style.css";
import { Container, Input, Loader, Toast } from "../../Components"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import animation from "../../Helpers/animation"
import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { loginValidate } from "../../Helpers/validate"
import { useSelector } from "react-redux"
import { loadUser, loginUser } from "../../Redux/Actions"
import { useTypedDispatch } from "../../Redux/Store"
import { LocationState, TUserAuthCredentials } from "../../Types/type"

const Login: React.FC = () => {
    interface Errors {
        error: boolean;
        message: string;
        success: boolean;
    }

    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state as LocationState || { from: { pathname: "/" } };
    const [userInput, setUserInput] = useState<TUserAuthCredentials>({ email: "", password: "" });
    const { loading, success, message } = useSelector((state: any) => state.login)
    const [errors, setError] = useState<Errors[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const resultOfValidation = loginValidate(userInput);
        setError(resultOfValidation);
        const isAnyError = resultOfValidation.some((error: Errors) => error.error);
        if (isAnyError) return;
        dispatch(loginUser(userInput))
    }
    useEffect(() => {
        if (success) {
            dispatch(loadUser());
            navigate(from?.path || "/");
        }
    }, [success])

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login - Quizzly</title>
            </Helmet>
            <motion.div
                initial="hidden"
                animate="show"
                variants={animation}
                exit="hidden"
                className="logincontainer"
            >
                <motion.div className="logincard">
                    <h1 className="text-center">Login 👋</h1>
                    <form onSubmit={handleSubmit} >
                        <Input
                            type="email"
                            error={errors[0]?.error}
                            success={errors[0]?.success}
                            errorMessage={errors[0]?.message}
                            label={"Enter Email"}
                            placeholder="test@gmail.com"
                            name="email"
                            onChange={handleChange}
                        />
                        <Input
                            type="password"
                            error={errors[1]?.error}
                            success={errors[1]?.success}
                            errorMessage={errors[1]?.message}
                            label={"Enter Password"}
                            placeholder="***********"
                            name="password"
                            onChange={handleChange}
                            autoComplete="new-password"
                        />
                        <div className="remember-options flex justify-between">
                            <div className="remember">
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    name="checkbox"
                                    value="true"
                                    className="checkbox"
                                />
                                <label htmlFor="checkbox">Remember Me</label>
                                <br />
                            </div>
                            <div className="forgot-passwor">
                                <Link to="/forget">
                                    <p>Forgot Password?</p>
                                </Link>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn full-width mt-10 inherit-font loading-btn"
                        >
                            {loading && <Loader />} Login Now
                        </button>
                        <p className="text-center mt-10 text-white">
                            New User? <Link to="/signup">Signup Now</Link>{" "}
                        </p>

                    </form>
                </motion.div>
                {message && <Toast message={message} success={success} />}
            </motion.div>
        </Container>
    )
}

export { Login }