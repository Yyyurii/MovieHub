const Loader = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ margin: "auto", background: "rgba(255, 255, 255, 0)", display: "block", shapeRendering: "auto"}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <g transform="translate(50,50)">
        <g transform="scale(0.7)">
          <circle cx="0" cy="0" r="50" fill="#fed530"></circle>
          <circle cx="0" cy="-28" r="15" fill="#ffffff">
            <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 0 0;360 0 0"></animateTransform>
          </circle>
        </g>
      </g></svg>
  )
}

export default Loader;