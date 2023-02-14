import react from "react";

const NavBar = (porps) => {
  return (
    <>
      <div style={{ background: "yellow", padding: "10px" }}>
        <p>Total count : {porps.Count}</p>
      </div>
    </>
  );
};

export default NavBar;
