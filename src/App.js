import react from "react";
import Cart from "./Cart";
import NavBar from "./NavBar";

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          qyt: 8,
          name: "Mobile",
          price: 12000,
          id: 1
        },
        {
          qyt: 12,
          name: "Watch",
          price: 3300,
          id: 2
        },
        {
          qyt: 5,
          name: "Laptop",
          price: 45000,
          id: 3
        }
      ]
    };
  }
  handleincreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qyt += 1;

    this.setState({
      products: products
    });
  };
  handledecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qyt === 0) {
      return;
    }
    products[index].qyt -= 1;

    this.setState({
      products: products
    });
  };
  handleDelete = (id) => {
    const { products } = this.state;
    const Items = products.filter((Items) => Items.id !== id);

    this.setState({
      products: Items
    });
  };
  CartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count = count + product.qyt;
    });
    return count;
  };
  TotalPrice = () => {
    const { products } = this.state;
    let price = 0;
    products.map((product) => {
      return (price = price + product.price * product.qyt);
    });
    return price;
  };
  render() {
    const { products } = this.state;
    return (
      <>
        <NavBar Count={this.CartCount()} Totalprice={this.TotalPrice()} />
        <Cart
          products={products}
          onInreaseQuantity={this.handleincreaseQuantity}
          onDecreaseQuantity={this.handledecreaseQuantity}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}
export default App;
