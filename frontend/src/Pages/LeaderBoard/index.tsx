import { Helmet } from 'react-helmet-async'
import { Container, TopperIcon } from '../../Components'
import { AnimateSharedLayout, motion } from 'framer-motion'
import animation from '../../Helpers/animation'
import { useTypedDispatch } from '../../Redux/Store'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchLeaderBoard } from '../../Redux/Actions'
import { Loading } from '../Loading'
import "./style.css"
import LeaderBoardList from "./items"

const LeaderBoard: React.FC = () => {
    const dispatch = useTypedDispatch();
    const { loading, data }: any = useSelector((state: any) => state.leaderboard);

    useEffect(() => {
        dispatch(fetchLeaderBoard())
    }, [])


    if (loading) {
        return <Loading />
    }


    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>LeaderBoard - Quizzly</title>
            </Helmet>
            <motion.div
                className="leaderboard"
                initial="hidden"
                animate="show"
                variants={animation}
                exit="hidden"
            >
                <div className="top-on-leaderboard">
                    <div className="top-left">
                        <TopperIcon />
                    </div>
                    <div className="top-right">
                        <h2>{data[0].name}</h2>
                        <p>{data[0].email}</p>
                        <h3>Score: {data[0].totalScore}</h3>
                    </div>
                </div>
                <div className="leaderboard-items mt-20">
                    <AnimateSharedLayout>
                        <motion.ul layout initial={{ borderRadius: 25 }}>
                            {data.slice(1).map((item: any, index: number) => (
                                <LeaderBoardList
                                    key={index}
                                    index={index + 2}
                                    name={item.name}
                                    email={item.email}
                                    totalScore={item.totalScore}
                                />
                            ))}
                        </motion.ul>
                    </AnimateSharedLayout>
                </div>
            </motion.div>
        </Container>
    )
}

export { LeaderBoard }