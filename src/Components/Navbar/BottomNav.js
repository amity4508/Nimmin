import React from "react";

export const BottomNav = () =>{
    return(

        <div className="container mx-auto">
        <div className=" hidden md:flex space-x-4 text-white list-none">
            <li onClick={() => setMenu("shop")}>
              {" "}
              <Link
                style={{ textDecoration: "none" }}
                to="/"
                onClick={closeSidebar}
              >
                Shop
              </Link>
              {menu === "shop" ? <hr /> : <></>}{" "}
            </li>
            <li onClick={() => setMenu("hero")}>
              <Link
                style={{ textDecoration: "none" }}
                to="/hero"
                onClick={closeSidebar}
              >
                Men
              </Link>
              {menu === "hero" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenu("women")}>
              <Link
                style={{ textDecoration: "none" }}
                to="/womens"
                onClick={closeSidebar}
              >
                Women
              </Link>
              {menu === "women" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenu("kids")}>
              <Link
                style={{ textDecoration: "none" }}
                to="/kids"
                onClick={closeSidebar}
              >
                Kids
              </Link>
              {menu === "kids" ? <hr /> : <></>}
            </li>
          </div>
        </div>
        

    )
}