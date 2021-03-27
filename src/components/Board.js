import Spot from './Spot';

export default function Board({ board, move, children }) {
    const rows = board.map((row, rowIndex) => {
        const spots = row.map((spotValue, columnIndex) => {
            return <Spot key={columnIndex} player={spotValue} onClick={() => move([rowIndex, columnIndex])} />;
        });

        return (
            <div className="row" key={rowIndex}>
                {spots}
            </div>
        );
    });

    return (
        <div className="board">
            {rows}
            {children}
        </div>
    );
}
