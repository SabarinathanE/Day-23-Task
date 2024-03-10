import ProductCard from "./ProductCart";

export default function ProductContainer({Products= [], handleCartitems = () => {}, Cart = []}) {

    function AddToCart(product = {}) {
        return (Cart.some((d) => (d.name == product.name)));
    }

    return(
      
        <div className="container" style={{padding: 50}}>
            <div className="container-fluid">
            <div className="row">
                {
                    Products.map((data, index) => (
                        <ProductCard key={`${data.name}-${index}`} data={data} handleCartitems={handleCartitems} isAvailable={AddToCart(data)} />
                    ))
                }
            </div>
            </div>
        </div>
    )
}