const NavBar = (porps) => {
  return (
    <>
      <nav  style={{ background: "#F9F5E7", padding: "10px" }}>
        <div className="flex  items-center mx-8 my-1 justify-between ">
          <div>
            <p>My Cart</p>
          </div>
          <div class="indicator">
            <span class="indicator-item badge badge-secondary">{porps.Count} </span>
            <button class="btn btn-link" style={{ background: "#EDDBC7" }} ><box-icon name='cart' color='#a7727d' ></box-icon></button>
          </div>
        </div>
      </nav>
      <p>Total Price : {porps.Totalprice} </p>
    </>
  );
};

export default NavBar;
