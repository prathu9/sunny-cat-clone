import './Mission.style.css';

const Mission =() => {
    return(
        <div className="mission-container">
            <div className="mission-left">
                <h1 className="mission-title">Mission</h1>
                <div className="mission-text-container">
                    <p className="mission-text">
                        There is no greater injustice than an innocent man or woman serving time
                        behind bars for a crime they did not commit. That’s why we made SunnyCats, 
                        to build a community focused on giving back, raising awareness, and making 
                        the world around us a brighter place. 
                    </p>
                    <p>
                        100% of mint proceeds will be donated 
                        to the Georgia Innocence Project.
                    </p>
                    <p> 
                        The SunnyCats community will be unlike any other NFT 
                        community – actively making a difference on-chain, and off.
                    </p>
                </div>
            </div>
            <div className="mission-right">
                <img src="https://sunnycats.art/static/media/gip2.34f8f53c.png"/>
            </div>
        </div>
    )
}

export default Mission;