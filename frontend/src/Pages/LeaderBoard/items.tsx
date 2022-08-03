import { motion } from "framer-motion";

interface LeaderBoardProps {
    key: any;
    index: number;
    name: string;
    email: string;
    totalScore: string;
    scored?: number;
    timeTook?: number;
    thumbnail?: string;
}


export default function Items({
  index,
  name,
  scored,
  thumbnail,
  timeTook,
  email,
  totalScore,
} : LeaderBoardProps) {
  return (
    <motion.li className="leaderboard-item-li" initial={{ borderRadius: 10 }}>
      <motion.div className="leaderboard-item-parent">
        {thumbnail ? (
          <div className="badge">
            <img className="avatar" src={thumbnail}></img>
          </div>
        ) : (
          <motion.div className="avatar" layout>
            <p>{index}</p>
          </motion.div>
        )}
        {name ? name : <h2>Mohit Kumar</h2>}
        {scored ? <p>{scored}</p> : <p>{email}</p>}
        {timeTook ? <p>{timeTook}</p> : <h2>{totalScore}</h2>}
      </motion.div>
    </motion.li>
  );
}
