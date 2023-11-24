import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import Popup from "reactjs-popup";
import "../../style.css";

const ProductDetails = (props) => {
  const [isPopupOpen, setIsOpenPopup] = useState(false);
  const { eachProduct, updateStatus, index, lastIndex } = props;
  

  const onClickedWrong = async (e) => {
    eachProduct.status === "" && (await setIsOpenPopup(true));
  };

  let statusColor;

  if (eachProduct.status === "Approved") {
    statusColor = "green";
  } else {
    statusColor = "red";
  }

  
  const onClickedTick = (e) => {
    if (eachProduct.status === "") {
      e.target.style.color = "green";
      updateStatus(eachProduct.id, "Approved");
    }
  };
  return (
    <>
      <div key={eachProduct.id} style={{ display: "flex" }}>
        <img
          src="https://res.cloudinary.com/datzkejai/image/upload/v1698334115/Avocado_Hass_osuywp.jpg"
          alt="product-image"
          style={{
            width: "50px",
            height: "50px",
            marginLeft: "3px",
            marginRight: "2px",
          }}
        />
        <p style={{ marginLeft: "20px", width: "250px", fontSize: "14px" }}>
          {eachProduct.name}
        </p>
        <p style={{ marginLeft: "40px", width: "150px", fontSize: "14px" }}>
          {eachProduct.brand}
        </p>
        <p style={{ marginLeft: "20px", width: "100px", fontSize: "14px" }}>
          {eachProduct.price}
        </p>
        <p style={{ marginLeft: "10px", width: "100px", fontSize: "14px" }}>
          {eachProduct.quantity}
        </p>
        <p style={{ marginLeft: "10px", width: "100px", fontSize: "14px" }}>
          {eachProduct.price * eachProduct.quantity}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#edf4f7",
            flexGrow: 1,
            marginBottom: "0px",
          }}
        >
          <div style={{ width: "150px" }}>
            {eachProduct.status !== "" && (
              <p
                style={{
                  borderRadius: "12px",
                  outline: "none",
                  border: "none",
                  backgroundColor: statusColor,
                  padding: "5px 5px",
                  color: "white",
                  fontSize: "14px",
                  marginRight: "30px",
                  marginLeft: "30px",
                  width: "100px",
                  textAlign: "center",
                }}
              >
                {eachProduct.status}
              </p>
            )}
          </div>
          <TiTick
            size={20}
            style={{ marginRight: "20px" }}
            onClick={onClickedTick}
          />
          <ImCross
            size={10}
            style={{
              marginRight: "20px",
              color:
                (eachProduct.status === "Missing-Urgent" ||
                  eachProduct.status === "Missing") &&
                "red",
            }}
            onClick={onClickedWrong}
          />
          <Popup open={isPopupOpen} modal nested>
            {(close) => (
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0px",
                  }}
                >
                  <h1 style={{ fontSize: "18px", fontWeight: 800 }}>
                    Missing Product
                  </h1>
                  <button
                    onClick={() => {
                      close();
                    }}
                    style={{
                      border: "none",
                      backgroundColor: "white",
                      fontSize: "18px",
                      color: "black",
                      outline: "none",
                    }}
                  >
                    X
                  </button>
                </div>
                <p style={{ marginTop: "0px" }}>
                  Is Chicken Breast fillets, Boneless...'urgent?
                </p>
                <div style={{ textAlign: "right" }}>
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "white",
                      outline: "none",
                    }}
                    onClick={async () => {
                      await updateStatus(eachProduct.id, "Missing");
                      await close();
                    }}
                  >
                    No
                  </button>
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "white",
                      outlint: "none",
                    }}
                    onClick={async () => {
                      await updateStatus(eachProduct.id, "Missing-Urgent");
                      await close();
                    }}
                  >
                    Yes
                  </button>
                </div>
              </div>
            )}
          </Popup>
          <button
            style={{
              marginLeft: "10px",
              fontSize: "14px",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
          >
            Edit
          </button>
        </div>
      </div>
      {index !== lastIndex && <hr style={{ margin: "0px" }} />}
    </>
  );
};

export default ProductDetails;
