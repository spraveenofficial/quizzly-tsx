import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Container } from "../../Components"
import { TUser } from "../../Types/type";
import { motion } from "framer-motion";
import animation from "../../Helpers/animation";


const Profile: React.FC = () => {
    interface IUser {
        user: TUser
    }

    const { user }: IUser = useSelector((state: any) => state.auth);
    const rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
    let initials: any = [...user.name.matchAll(rgx)] || [];
    initials = (
        (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
    ).toUpperCase();

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Profile - Quizzly</title>
            </Helmet>
            <motion.div
                className="leaderboard"
                initial="hidden"
                animate="show"
                variants={animation}
                exit="hidden"
            >
                <div className="top-on-leaderboard">
                    <div className="top-left profile-left">
                        <div className="badges">{initials}</div>
                    </div>
                    <div className="top-right">
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                </div>
            </motion.div>
        </Container>
    )
}


export { Profile }