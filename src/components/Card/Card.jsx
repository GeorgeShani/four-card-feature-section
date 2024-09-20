import "./Card.css";

export default function Card(props) {
    return (
        <div className="card" style={props.themeStyle}>
            <div className="card-info">
                <h3 className="card-title">{props.topicTitle}</h3>
                <p className="card-descr">{props.topicDescription}</p>
            </div>
            <img className="theme-image" src={props.themeImageUrl} alt="" />
        </div>
    );
}