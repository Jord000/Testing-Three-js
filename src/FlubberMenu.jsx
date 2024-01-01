const FlubberMenu = ({ isFlubberMenu, setIsFlubberMenu }) => {
  const flubberMenu = (e) => {
    setIsFlubberMenu(!isFlubberMenu)
  }

  return (
    <div className="flubber-menu-container" onClick={flubberMenu}>
      <img src="https://m.media-amazon.com/images/M/MV5BZDlkOTA0OTUtOThmMi00NTMyLTg0NDgtZWZiYmRjZWI4MDY4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg" />
      <p>
        <a
          href="https://www.imdb.com/title/tt0119137/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's go see flubber at IMDB
        </a>
      </p>
    </div>
  )
}

export default FlubberMenu
