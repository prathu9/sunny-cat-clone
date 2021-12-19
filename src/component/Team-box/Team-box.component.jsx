import './Team-box.style.css';

const TeamBox = ({imageUrl, name, role}) => {
    return(
        <div className="team-box">
            <img src={imageUrl}/>
            <h2>{name}</h2>
            <h2>{role}</h2>
        </div>
    )
}

export default TeamBox;