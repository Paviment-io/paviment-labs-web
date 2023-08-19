const Waves = () => {
    return (
        <svg className="waves transform rotate-180 scale-y-50" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="0" className="wave-fill_primary opacity-70" />
                <use xlinkHref="#gentle-wave" x="48" y="3" className="wave-fill_primary opacity-50" />
                <use xlinkHref="#gentle-wave" x="48" y="5" className="wave-fill_primary opacity-30" />
                <use xlinkHref="#gentle-wave" x="48" y="7" className="wave-fill_secondary opacity-50" />
            </g>
        </svg>
    )
}

export default Waves