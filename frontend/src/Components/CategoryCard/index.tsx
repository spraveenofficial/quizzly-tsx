import "./style.css"

interface CategoryCardProps {
    title: string;
    questionAmount: number;
    thumbnail: string;
    marks: number;
    onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    title,
    questionAmount,
    thumbnail,
    marks,
    onClick
}): JSX.Element => {

    return (
        <div onClick={onClick} className="card-img card-width">
            <img src={thumbnail} alt="data" />
            <div className="card_data">
                <p>{title}</p>
                <p>Take a quiz to test yourself.</p>
                <p>
                    {questionAmount} questions | {marks} Marks
                </p>
            </div>
        </div>
    )
}


export { CategoryCard };