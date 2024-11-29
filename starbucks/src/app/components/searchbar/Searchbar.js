import './searchbar.scss';

const Searchbar = (props) => {
    return(
        <div className="searchbar position-relative">
            <span className="position-absolute">
                <i className="bi bi-search text-gray-500"></i>
            </span>
            <input className="fs-14px bg-white form-control text-black fw-300" placeholder={props.placeholder}/>
        </div>
    )
}

export default Searchbar;