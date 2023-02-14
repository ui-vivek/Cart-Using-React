import react from "react";

const NavBar = (porps) => {
  return (
    <>
      <div style={{ background: "yellow", padding: "10px" }}>
        <p>Total count : {porps.Count} </p>
        <p>Total Price : {porps.Totalprice} </p>
      </div>
    </>
  );
};

export default NavBar;
