import './Team-box.style.css';

const TeamBox = ({imageUrl, name, role}) => {
    return(
        <div className="team-box">
            <img src={imageUrl} alt="team-img"/>
            <h2>{name}</h2>
            <h2>{role}</h2>
        </div>
    )
}

export default TeamBox;