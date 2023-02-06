import Products from "../Components/Products";

const Home = () => {
  return (
    <>
      <div className="H">
        <h2 className="heading">Welcome to Online Shopping Store</h2>
        <section>
          <h3>Products</h3>
          <Products />
        </section>
      </div>
    </>
  );
};

export default Home;
