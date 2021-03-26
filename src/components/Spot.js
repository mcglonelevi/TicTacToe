import xIcon from '../assets/x.svg';
import oIcon from '../assets/o.svg';
import BoardModel from '../models/Board';

function SpotImage({ player }) {
    if (player === null) {
        return null;
    }

    if (player === BoardModel.PLAYERS.FIRST_PLAYER) {
        return <img src={xIcon} alt="x" />
    }

    return <img src={oIcon} alt="o" />
}

export default function Spot({ player, onClick }) {
    const handleClick = () => {
        if (player === null) {
            onClick();
        }
    };

    return (
        <div className="spot" onClick={handleClick}>
            <SpotImage player={player} />
        </div>
    );
}