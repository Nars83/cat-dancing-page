import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'
import { useAnimation } from '../hooks/useAnimation'
import AnimationControls from './AnimationControls'

const DancingCat = () => {
  const {
    isAnimating,
    animationSpeed,
    toggleAnimation,
    changeSpeed
  } = useAnimation()

  return (
    <div className="dancing-cat-container">
      <h1 className="title">🐱 Dancing Cat 🐱</h1>

      <div className="cat-stage">
        <img
          src={catSvg}
          alt="Dancing Cat"
          className={`dancing-cat ${isAnimating ? 'dancing' : ''}`}
          style={{
            animationDuration: isAnimating ? `${1/animationSpeed}s, ${2/animationSpeed}s, ${1.5/animationSpeed}s` : undefined
          }}
        />
      </div>

      <AnimationControls
        isAnimating={isAnimating}
        animationSpeed={animationSpeed}
        onToggle={toggleAnimation}
        onSpeedChange={changeSpeed}
      />

      <div className="music-notes">
        <span
          className={`note note-1 ${isAnimating ? 'floating' : ''}`}
          style={{
            animationDuration: isAnimating ? `${3/animationSpeed}s` : undefined
          }}
        >
          ♪
        </span>
        <span
          className={`note note-2 ${isAnimating ? 'floating' : ''}`}
          style={{
            animationDuration: isAnimating ? `${3/animationSpeed}s` : undefined
          }}
        >
          ♫
        </span>
        <span
          className={`note note-3 ${isAnimating ? 'floating' : ''}`}
          style={{
            animationDuration: isAnimating ? `${3/animationSpeed}s` : undefined
          }}
        >
          ♪
        </span>
        <span
          className={`note note-4 ${isAnimating ? 'floating' : ''}`}
          style={{
            animationDuration: isAnimating ? `${3/animationSpeed}s` : undefined
          }}
        >
          ♫
        </span>
      </div>
    </div>
  )
}

export default DancingCat