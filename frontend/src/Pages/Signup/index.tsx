import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Input, Loader, Toast } from "../../Components"
import { motion } from "framer-motion"
import animation from "../../Helpers/animation";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signupValidate } from "../../Helpers/validate";
import { useSelector } from "react-redux";
import { useTypedDispatch } from "../../Redux/Store";
import { loadUser, registerUser } from "../../Redux/Actions";
import { LocationState } from "../../Types/type"

const Signup = (): JSX.Element => {
    type UserInput = {
        name: string;
        email: string;
        password: string;
        checkbox: boolean;
    }
    interface Errors {
        error: boolean;
        message: string;
        success: boolean;
    }

    const [inputItem, setInputItem] = useState<UserInput>({
        name: "",
        email: "",
        password: "",
        checkbox: false,
    });


    const dispatch = useTypedDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state as LocationState || { from: { pathname: "/" } };
    const { loading, message, success } = useSelector((state: any) => state.register)
    const [errors, setError] = useState<Errors[]>([]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputItem({ ...inputItem, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const resultOfValidation = signupValidate(inputItem);
        setError(resultOfValidation);
        const isAnyError = resultOfValidation.some((error: Errors) => error.error);
        if (isAnyError) return;
        dispatch(registerUser(inputItem))
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
                <title>Signup - Quizzly</title>
            </Helmet>
            <motion.div
                initial="hidden"
                animate="show"
                variants={animation}
                exit="hidden"
                className="logincontainer"
            >
                <motion.div className="logincard">
                    <h1 className="text-center">Sign Up 👋</h1>
                    <form onSubmit={handleSubmit}>
                        <Input
                            error={errors[0]?.error}
                            type="text"
                            success={errors[0]?.success}
                            label={"Enter Name"}
                            errorMessage={errors[0]?.message}
                            placeholder="John doe"
                            name="name"
                            onChange={handleChange}
                        />
                        <Input
                            type="email"
                            error={errors[1]?.error}
                            success={errors[1]?.success}
                            errorMessage={errors[1]?.message}
                            label={"Enter Email"}
                            placeholder="test@gmail.com"
                            name="email"
                            onChange={handleChange}
                        />
                        <Input
                            type="password"
                            error={errors[2]?.error}
                            success={errors[2]?.success}
                            errorMessage={errors[2]?.message}
                            label={"Enter Password"}
                            placeholder="***********"
                            name="password"
                            onChange={handleChange}
                        />
                        <div className="remember-options">
                            <div className="remember">
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    name="checkbox"
                                    value="true"
                                    className="checkbox"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        handleChange(e);
                                    }}
                                />
                                <label htmlFor="checkbox">
                                    I agree, all the terms & conditions.
                                </label>
                                <br />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn full-width mt-10 inherit-font loading-btn"
                        >
                            {loading && <Loader />}Signup Now
                        </button>
                        <p className="text-center mt-10 text-white">
                            Already Registered? <Link to="/login">Login Now</Link>{" "}
                        </p>
                    </form>
                </motion.div>
                {message && <Toast message={message} success={success} />}
            </motion.div>
        </Container>
    )
}

export { Signup }