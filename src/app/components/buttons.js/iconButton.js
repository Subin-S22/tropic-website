
export default function IconButton(props) {
    const { handleClick, icon, } = props;
    return (
        <button
            onClick={handleClick}
        >
            <i className={icon} ></i>
        </button>
    );
}
