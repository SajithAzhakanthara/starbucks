import "./know-more.scss"
import Link from "next/link";

const KnowMore = () => {
    return (
        <div className="py-4 bg-green-800">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h4 className="text-white fs-20px fw-500 text-uppercase m-0">Starbucks</h4>
                    </div>
                    <div>
                        <Link href="" className="border-white border rounded-5 bg-transparent px-3 py-1 d-inline-block fs-14px text-white text-decoration-none">Know more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KnowMore;