const Button = ({ buttonLabel, clickHandler, classes,disabled}) => {
    return <button onClick={clickHandler} disabled={disabled} className={`${classes}`}>{buttonLabel}</button>
}

export default Button