import TeamBox from "../Team-box/Team-box.component";

import './Team.style.css';


const teamMember = [
    {
        imageUrl: require("../../asset/images/sunny_cat6.jpg"),
        name: "Purrmaster",
        role: "Chief Cat Herder"
    },
    {
        imageUrl: require("../../asset/images/sunny_cat7.jpg"),
        name: "Sir Purr",
        role: "Head of Pawpaganda"
    },
    {
        imageUrl: require("../../asset/images/sunny_cat8.jpg"),
        name: "Tech Cat",
        role: "Cheif Cat Herder"
    },
    {
        imageUrl:  require("../../asset/images/sunny_cat9.jpg"),
        name: "Lan Anh",
        role: "Artist"
    },
    {
        imageUrl: require("../../asset/images/sunny_cat1.jpg"),
        name: "Tabbey Road",
        role: "Keyboard Warmer"
    }
]

const Team = () => {
    return(
        <div className="team-container">
            <h1>TEAM</h1>
            <div className="team">
                {
                    teamMember.map(
                        (member, i) => <TeamBox key={i} {...member}/>
                    )
                }
            </div>
        </div>
    )
}

export default Team;