import "./GiftItem.scss";
import Image from "next/image";
import Link from "next/link";

const GiftItem = (props) => {
    return(
        <div className="position-relative gift-item-outer" style={{paddingLeft:'80px'}}>
            <Image className="rounded position-absolute" src={props.image} width="150" height="105" alt="gift-item-image" style={{top:'15px',left:'0'}}/>
            <div className="py-4 pe-4 rounded-2" style={{border:'1px solid #ededed',boxShadow:'0 0 2px #00000012,0 2px 2px #0000000f,0 1px 3px #0000001a',backgroundColor:'#f9f9f9',paddingLeft:'90px'}}>
                <h4 className="text-green-800 fs-14px fw-500 mb-2">{props.title}</h4>
                <p className="text-green-800 fs-12px fw-200">{props.description}</p>
                <Link href="#" className="text-decoration-none bg-green-800 px-3 py-1 rounded-4 border-0 fs-12px text-white fw-300 mb-3" data-bs-toggle="modal" data-bs-target="#database-error-modal">Add item</Link>
            </div>
        </div>
    )
}

export default GiftItem;