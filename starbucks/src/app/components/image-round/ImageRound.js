import "./ImageRound.scss";

const ImageRound = (props) => {
    return(
        <div>
            <img src={props.image} alt="menu image" className="object-fit-cover overflow-hidden rounded-circle" style={{width:'108px',height:'108px'}}/>
        </div>
    )
}

export default ImageRound;