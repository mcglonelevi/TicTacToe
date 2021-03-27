export default function PlayAgainOverlay({ shouldDisplay, resetBoard }) {
    if (!shouldDisplay) {
        return null;
    }

    return (
        <div className="play-again-overlay" onClick={resetBoard}>
            <h2>Click here to play again!</h2>
        </div>
    );
}
