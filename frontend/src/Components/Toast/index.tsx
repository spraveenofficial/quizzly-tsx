import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./style.css";


interface PropsForToast {
    message: string;
    success: boolean;
}

const Toast = ({ message, success }: PropsForToast): JSX.Element => {
    const [toast, setToast] = useState<boolean>(true);


    setTimeout(() => {
        setToast(false);
    }, 4000);



    const animateToast = {
        hidden: {
            x: -1000,
            opacity: 0,
            transition: {
                duration: 1,
                type: "tween",
                ease: "easeOut",
            },
        },
        show: {
            x: -200,
            opacity: 1,
            transition: {
                duration: 1,
                type: "tween",
                ease: "easeOut",
            },
        },
    };
    return (
        <AnimatePresence>
            {toast && (
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={animateToast}
                    exit="hidden"
                    className="snackbars"
                    style={{ background: success ? "green" : "red" }}
                >
                    <p>
                        {message ? message : "Under Construction. Please try again later."}
                    </p>
                    <i
                        onClick={() => setToast(false)}
                        className="fa fa-times pointer"
                        aria-hidden="true"
                    ></i>
                </motion.div>
            )}
        </AnimatePresence>
    );
}


export { Toast }