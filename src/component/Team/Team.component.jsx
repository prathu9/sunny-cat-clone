import TeamBox from "../Team-box/Team-box.component";

import './Team.style.css';

const teamMember = [
    {
        imageUrl: "https://sunnycats.art/static/media/purrmaster.97d6f387.png",
        name: "Purrmaster",
        role: "Chief Cat Herder"
    },
    {
        imageUrl: "https://sunnycats.art/static/media/sirpurr.ba71e761.png",
        name: "Sir Purr",
        role: "Head of Pawpaganda"
    },
    {
        imageUrl: "https://sunnycats.art/static/media/techcat.f135f5d0.png",
        name: "Tech Cat",
        role: "Cheif Cat Herder"
    },
    {
        imageUrl: "https://sunnycats.art/static/media/artist.b943a972.png",
        name: "Lan Anh",
        role: "Artist"
    },
    {
        imageUrl: "https://sunnycats.art/static/media/tabbeyroad.996b85a1.png",
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