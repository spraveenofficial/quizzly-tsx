import React from "react"
import "./style.css"


interface Props {
    children: React.ReactNode
}

const Container = ({ children }: Props): JSX.Element => {
    return (
        <div className="container">
            <div className="container_data">{children}</div>
        </div>
    )
}
export { Container }