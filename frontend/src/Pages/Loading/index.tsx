import { Loader } from "../../Components";
import "./style.css";
import { motion } from "framer-motion";
const Loading = (): JSX.Element => {
    return (
        <motion.div className="pageLoader">
            <Loader />
        </motion.div>
    );
};

export { Loading };
