import { Link } from "react-router-dom";
import Logotipo from "../images/logocolor.png"

function Logos() {

    return (
        <>
            <div className="d-logo">
                <Link to="/">
                    <img src={Logotipo} alt="Jugueteria Cosmica" />
                </Link>
            </div>
        </>
    )
}
export default Logos

