import classes from './secondary-button.module.css';

const SecondaryButton = ({ text, onClick, isActive }) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={`${classes.btn} ${isActive ? classes.btnActive : ''}`}
        >
            {text}
        </button>
    );
};

export default SecondaryButton;
