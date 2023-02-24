import './NavBar.css'
const NavBar = (porps) => {
  return (
    <>
      <nav style={{ background: "#B99B6B", padding: "7px" }}>
        <div className="flex  items-center mx-8 my-1 justify-between ">
          <div className='flex items-center'>
          <box-icon name='shopify' size="lg" type='logo' color='#698269' ></box-icon>
          <span className='font-semibold'>Shopify</span>
          </div>
          <div class="indicator">
            <span class="indicator-item badge badge-secondary">{porps.Count} </span>
            <button class="btn btn-link" style={{ background: "#EDDBC7" }} ><box-icon name='cart' color='#a7727d' ></box-icon></button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
