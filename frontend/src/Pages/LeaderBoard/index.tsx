import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Container } from '../../Components'
import { motion } from 'framer-motion'
import animation from '../../Helpers/animation'
const LeaderBoard = (): JSX.Element => {
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
            ></motion.div>
        </Container>
    )
}

export { LeaderBoard }