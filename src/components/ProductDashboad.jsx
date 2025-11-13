import Product from "./Product";

function ProductDashboard() {
	return (
		<>
      <nav>
        <h2>Our Shop</h2>
        <p>You have added x products!</p>
      </nav>
			<Product name="chapati" price={100} availability={true} />
			<Product name="mandazi" price={200} availability={false} />
			<Product name="omlette" price={500} availability={true} />
		</>
	);
}

export default ProductDashboard;
