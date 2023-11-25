import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import Popup from "reactjs-popup";
import "../../style.css";

const ProductDetails = (props) => {
  const [isPopupOpen, setIsOpenPopup] = useState(false);
  const { eachProduct, updateStatus, index, lastIndex, updateProducts } = props;
  const [price, setPrice] = useState(eachProduct.price);
  const [quantity, setQuantity] = useState(eachProduct.quantity);

  const onClickedWrong = async (e) => {
    eachProduct.status === "" && (await setIsOpenPopup(true));
  };

  let statusColor;

  if (eachProduct.status === "Missing" || eachProduct.status === "Missing-Urgent") {
    statusColor = "red";
  } else  {
    statusColor = "green";
  }

  const onSend = async () =>{
    await updateProducts(eachProduct.id, {price, quantity})
  }

  const onClickedTick = (e) => {
    if (eachProduct.status === "") {
      e.target.style.color = "green";
      updateStatus(eachProduct.id, "Approved");
    }
  };

  const decreaseQuantity = () => {
    quantity !== 0 && setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const onChangeStatus = () => {
    if (price !== eachProduct.price && quantity !== eachProduct.quantity) {
      updateStatus(eachProduct.id, "price-quantity updated");
    } else if (price !== eachProduct.price) {
      updateStatus(eachProduct.id, "price-updated");
    } else {
      updateStatus(eachProduct.id, "quantity-updated");
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
        {eachProduct.previousPrice === eachProduct.price ? 
        <p style={{ marginLeft: "10px", width: "100px", fontSize: "14px" }}>{eachProduct.price*eachProduct.quantity}</p>:
        <div style={{ marginLeft: "10px", width: "100px", fontSize: "14px"}}>
          <p style={{marginTop:'2px'}}>{eachProduct.price*eachProduct.quantity}</p>
          <p style={{textDecoration:'line-through', marginBottom:'0px', color:'#a5a5c0'}}>{eachProduct.previousPrice*eachProduct.quantity}</p>
        </div>
        }
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
          <Popup
            trigger={
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
            }
            modal
            nested
            position="right center"
            className="edit"
          >
            {(close) => (
              <div>
                <div style={{ textAlign: "right" }}>
                  <button
                    onClick={() => {
                      close();
                    }}
                    style={{
                      border: "none",
                      backgroundColor: "white",
                      fontSize: "12px",
                      color: "black",
                      outline: "none",
                    }}
                  >
                    X
                  </button>
                </div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginBottom: "0px",
                  }}
                >
                  {eachProduct.name}...
                </p>
                <p style={{ marginTop: "7px", color: "#a5a5c0" }}>
                  American Roland
                </p>
                <div style={{ display: "flex" }}>
                  <img
                    src="https://res.cloudinary.com/datzkejai/image/upload/v1698334115/Avocado_Hass_osuywp.jpg"
                    alt="product-image"
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                    }}
                  />
                  <div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ width: "150px" }}>Price ($)</p>
                      <div>
                        <input
                          type="text"
                          value={price}
                          style={{ outline: "none", padding: "5px" }}
                          onChange={(e) => {
                            setPrice(e.target.value);
                          }}
                        />
                        <p
                          style={{
                            display: "inline",
                            marginLeft: "8px",
                            fontSize: "15px",
                          }}
                        >
                          / 6 * 1LB
                        </p>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ width: "120px" }}>Quantity</p>
                      <div>
                        <button
                          style={{
                            backgroundColor: "#77FF33",
                            borderRadius: "50px",
                            padding: "4px 10px",
                            border: "none",
                            outline: "none",
                            color: "white",
                            fontSize: "14px",
                            marginRight: "8px",
                          }}
                          onClick={decreaseQuantity}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={quantity}
                          style={{ outline: "none", padding: "5px" }}
                        />
                        <button
                          style={{
                            backgroundColor: "#77FF33",
                            borderRadius: "50px",
                            padding: "4px 8px",
                            border: "none",
                            outline: "none",
                            color: "white",
                            fontSize: "14px",
                            marginLeft: "8px",
                          }}
                          onClick={increaseQuantity}
                        >
                          +
                        </button>
                        <p
                          style={{
                            display: "inline",
                            marginLeft: "8px",
                            fontSize: "15px",
                          }}
                        >
                          x 6 * 1LB
                        </p>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p style={{ width: "150px" }}>Total</p>
                      <div>
                        <input
                          type="text"
                          value={price * quantity}
                          style={{ outline: "none", padding: "5px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <b>Choose reason</b>
                <span style={{ color: "#a5a5c0" }}> (Optional)</span>
                <div style={{ marginTop: "20px" }}>
                  <button
                    style={{
                      background: "transparent",
                      outline: "none",
                      border: "1px solid",
                      borderRadius: "20px",
                      padding: "10px",
                      marginRight: "8px",
                    }}
                  >
                    Missing product
                  </button>
                  <button
                    style={{
                      background: "transparent",
                      outline: "none",
                      border: "1px solid",
                      borderRadius: "20px",
                      padding: "10px",
                      marginRight: "8px",
                    }}
                  >
                    Quantity is not the same
                  </button>
                  <button
                    style={{
                      background: "transparent",
                      outline: "none",
                      border: "1px solid",
                      borderRadius: "20px",
                      padding: "10px",
                      marginRight: "8px",
                    }}
                  >
                    Price is not the same
                  </button>
                  <button
                    style={{
                      background: "transparent",
                      outline: "none",
                      border: "1px solid",
                      borderRadius: "20px",
                      padding: "10px",
                    }}
                  >
                    Other
                  </button>
                </div>
                <div style={{ textAlign: "right", marginTop: "20px" }}>
                  <button
                    style={{
                      background: "transparent",
                      outline: "none",
                      border: "1px solid rgb(34, 102, 65)",
                      borderRadius: "20px",
                      padding: "5px 18px",
                      marginRight: "10px",
                      color: "rgb(34, 102, 65)",
                    }}
                    onClick={async () => {
                      await setPrice(eachProduct.price);
                      await setQuantity(eachProduct.quantity);
                      close();
                    }}
                  >
                    {" "}
                    Cancel
                  </button>
                  <button
                    style={{
                      background: "transparent",
                      outline: "none",
                      border: "1px solid",
                      borderRadius: "20px",
                      padding: "5px 18px",
                      backgroundColor: "rgb(34, 102, 65)",
                      color: "white",
                    }}
                    onClick={async () => {
                      await onSend();
                      onChangeStatus();
                      close();
                    }}
                  >
                    Send
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
      {index !== lastIndex && <hr style={{ margin: "0px" }} />}
    </>
  );
};

export default ProductDetails;
