export default function PlayAgainModal({ shouldDisplay, resetBoard }) {
    if (!shouldDisplay) {
        return null;
    }

    return (
        <div className="play-again-modal" onClick={resetBoard}>
            <h2>Play Again?</h2>
        </div>
    );
}
