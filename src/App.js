import react from "react";
import Cart from "./Cart";
import NavBar from "./NavBar";
import {boxicons} from './boxicons'
import Footer from "./Footer";
import './App.css'

import {
  doc,
  addDoc,
  setDoc,
  collection,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  // doc,
} from "firebase/firestore";
import { db } from "./index";

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  //function to change 
  async componentDidMount() {
    //this is a realtime listener if you change anything in firebase ui will automatically updated 
    const q = query(
      collection(db, "products"),
      where("price", ">", 0),
      orderBy("price")
    );
    const unsub = await onSnapshot(q, (querySnapshot) => {
      const getProducts = [];
      querySnapshot.forEach((doc) => {
        const product = doc.data();
        product.id = doc.id;
        getProducts.push(product);
      });
      // console.log(getProducts);
      this.setState({ products: getProducts, loading: false });
    });
  }
  //add product

  addProductPhone = async () => {
    const docRef = await addDoc(collection(db, "products"), {
      img: "https://assets.tatacliq.com/medias/sys_master/images/33131150409758.jpg",
      price: 10000,
      qty: 1,
      title: "Phone"
    })
      .then((docRef) => {
        console.log("product added" + docRef);
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };

  addProductHeadPhone = async () => {
    const docRef = await addDoc(collection(db, "products"), {
      img: "https://m.media-amazon.com/images/I/71s9FMKzr+L._SL1500_.jpg",
      price: 900,
      qty: 1,
      title: "HeadPhone"
    })
      .then((docRef) => {
        console.log("product added" + docRef);
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };

  addProductLaptop = async () => {
    const docRef = await addDoc(collection(db, "products"), {
      img: "https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg",
      price: 45000,
      qty: 1,
      title: "LapTop"
    })
      .then((docRef) => {
        console.log("product added" + docRef);
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };

  //changed increase qty

  handleincreaseQuantity = async (product) => {
    let { products } = this.state;
    const index = products.indexOf(product);

    const docRef = doc(collection(db, "products"), products[index].id);
    if(products[index].qty===10){
      return;
    }
    await updateDoc(docRef, {
      qty: products[index].qty + 1,
    });
  };
  // decrease qty
  handledecreaseQuantity = async (product) => {
    let { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty !== 0) {
      const docRef = doc(collection(db, "products"), products[index].id);
      await updateDoc(docRef, {
        qty: products[index].qty - 1,
      });
    }
  };

  //delete product
  handleDelete = (productToDelete) => {
    const docRef = doc(collection(db, "products"), productToDelete);
    deleteDoc(docRef)
      .then(() => {
        console.log("product deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  CartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count = count + product.qty;
    });
    return count;
  };
  TotalPrice = () => {
    const { products } = this.state;
    let price = 0;
    products.map((product) => {
      return (price = price + product.price * product.qty);
    });
    return price;
  };
  render() {
    const { products } = this.state;
    return (
      <>
        <NavBar Count={this.CartCount()} />
        <div className=" flex justify-center mt-2 mb-2 space-x-8">
        <button class="btn btn-sm sm:btn-sm md:btn-md lg:btn"onClick={this.addProductPhone} >Add Phone</button>
        <button class="btn btn-sm sm:btn-sm md:btn-md lg:btn"onClick={this.addProductHeadPhone} >Add HeadPhone</button>
        <button class="btn btn-sm sm:btn-sm md:btn-md lg:btn"onClick={this.addProductLaptop} >Add LapTop</button>
        </div>
        <hr/>
        <Cart
          products={products}
          onInreaseQuantity={this.handleincreaseQuantity}
          onDecreaseQuantity={this.handledecreaseQuantity}
          onDelete={this.handleDelete}
        />
        <hr/>
        <p className="font-bold text-xl mx-8 my-8">Total Price : <span className="mx-8 ">{this.TotalPrice()}</span></p>
        <Footer/>
      </>
    );
  }
}
export default App;
