import { motion } from 'framer-motion';
import "./style.css";


type InputProps = {
    label?: string;
    name?: string;
    type?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    error?: boolean;
    success?: boolean;
    errorMessage?: string;
    refs?: any;
    autoComplete?: string;
}

const Input: React.FC<InputProps> = ({ label,
    placeholder,
    type,
    error,
    success,
    name,
    onChange,
    autoComplete,
    errorMessage,
    refs }) => {
    return label ? (
        <motion.div
            className={`${error
                ? "form-control error"
                : success
                    ? "form-control success"
                    : "form-control"
                } form-control`}
        >
            <label>{label}</label>
            <input
                onChange={onChange}
                name={name}
                type={type}
                placeholder={placeholder}
                className="input-main"
                ref={refs}
                autoComplete={autoComplete}
            />
            {success ? (
                <i className="fas successicon fa-check-circle"></i>
            ) : (
                error && <i className="fas fa-exclamation-circle"></i>
            )}
            <div className="error-msg">{error ? errorMessage : ""}</div>
        </motion.div>
    ) : (
        <motion.div className="form-controls">
            <input type={type} placeholder={placeholder} className="input-main" />
        </motion.div>
    );
}


export { Input };