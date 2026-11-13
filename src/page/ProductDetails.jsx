
import { useParams } from 'react-router-dom'
import Navbar from "../components/Navbar"
const ProductDetails = () => {
    const params = useParams();
    return (
        <div>
            <Navbar />
            <h1> Product Details Page </h1>
            <p> This Product name is<b> {params.id} </b></p>
        </div>
    )
}

export default ProductDetails