const AnimationControls = ({
  isAnimating,
  animationSpeed,
  onToggle,
  onSpeedChange
}) => {
  return (
    <div className="animation-controls">
      <div className="main-control">
        <button
          className="dance-button"
          onClick={onToggle}
          aria-label={isAnimating ? "Stop dancing" : "Start dancing"}
        >
          {isAnimating ? '⏸️ Stop Dancing' : '🎵 Start Dancing'}
        </button>
      </div>

      <div className="speed-control">
        <label htmlFor="speed-slider" className="speed-label">
          Dance Speed: {animationSpeed.toFixed(1)}x
        </label>
        <input
          id="speed-slider"
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={animationSpeed}
          onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
          className="speed-slider"
        />
        <div className="speed-marks">
          <span>Slow</span>
          <span>Normal</span>
          <span>Fast</span>
        </div>
      </div>

      <div className="keyboard-hint">
        <small>💡 Press <kbd>Space</kbd> to toggle dance</small>
      </div>
    </div>
  )
}

export default AnimationControls