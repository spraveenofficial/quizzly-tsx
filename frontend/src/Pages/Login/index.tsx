import { Container, Input, Loader, Toast } from "../../Components"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import animation from "../../Helpers/animation"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./style.css"
const Login = (): JSX.Element => {

    type UserInput = {
        email: string;
        password: string;
    }

    type DummyReducer = {
        loading: boolean;
        message: string;
        success: boolean

    }

    const [userInput, setUserInput] = useState<UserInput>({ email: "", password: "" });
    const [dummyReducer, setDummyReducer] = useState<DummyReducer>({ loading: false, message: "", success: false });
    const { loading, message, success } = dummyReducer;
    const [errors, setErrors] = useState([{ email: "", password: "" }]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setDummyReducer({ ...dummyReducer, loading: true });
        setErrors([{ email: "", password: "" }]);
        setTimeout(() => {
            setDummyReducer({ ...dummyReducer, loading: false, success: true, message: "Login Successful" });
        }, 2000);
    }
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
                            // error={errors[0]?.error}
                            // success={errors[0]?.success}
                            // errorMessage={errors[0]?.message}
                            label={"Enter Email"}
                            placeholder="test@gmail.com"
                            name="email"
                            onChange={handleChange}
                        />
                        <Input
                            type="password"
                            // error={errors[1]?.error}
                            // success={errors[1]?.success}
                            // errorMessage={errors[1]?.message}
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