import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Nav() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "50px",
        alignItems: "center",
        paddingLeft: "70px",
        paddingRight: "70px",
        backgroundColor: "#265c39",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <p
          style={{
            fontSize: "17px",
            color: "white",
            marginRight: "10px",
            width: "70px",
            fontWeight: "bold",
          }}
        >
          Reeco
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "white",
            marginRight: "10px",
            width: "70px",
            fontWeight: 300,
          }}
        >
          Store
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "white",
            marginRight: "10px",
            width: "70px",
            fontWeight: 300,
          }}
        >
          Orders
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "white",
            marginRight: "10px",
            width: "70px",
            fontWeight: 300,
          }}
        >
          Analytics
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", width: "70px" }}>
          <span
            style={{ marginRight: "0px", color: "white", borderRadius: "50px", backgroundColor:'#77FF33', padding:'3px', fontSize:'8px', alignSelf:'flex-start',position:'absolute', top:10 }}
          >
            10
          </span>
          <AiOutlineShoppingCart
            color="white"
            size={20}
            style={{ marginRight: "10px", marginLeft: "0px" }}
          />
        </div>
        <p
          style={{
            fontSize: "12px",
            color: "white",
            marginRight: "3px",
            fontWeight: 300,
          }}
        >
          Hello, James
        </p>
        <RiArrowDropDownLine color="white" />
      </div>
    </div>
  );
}
