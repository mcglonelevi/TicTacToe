export default function PlayAgainModal({ shouldDisplay, resetBoard }) {
    if (!shouldDisplay) {
        return null;
    }

    return (
        <div className="play-again-modal" onClick={resetBoard}>
            <h2>Click here to play again!</h2>
        </div>
    );
}
