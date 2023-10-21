import React from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Modal } from "antd";
import Button from "../Button";
import { Link } from "react-router-dom";
import "./style.css";
function ItemModal({ item, showModal, setShowModal, isFavourite, handleFavourite }) {
    
  return (
    <Modal
      open={showModal}
      okText="Buy"
      onCancel={() => setShowModal(false)}
      width="fit-content"
      style={{ position: "relative" }}
      centered
      closeIcon={false}
    >
      <Link to={item.thumbnail}>
        <div className="item-img">
          <img src={item.thumbnail} />
        </div>
      </Link>
      <div className="product-details">
      <Button className="favourite-btn" onClick={handleFavourite} style={{borderColor: isFavourite ? 'var(--color-pink)' : 'white'}}>
          {!isFavourite ? <HeartOutlined /> : <HeartFilled style={{color: 'var(--color-pink)'}} />}
        </Button>
        <div className="top">
          <h1>{item.title}</h1>
          <h1 className="item-price">${item.price}</h1>
        </div>
        <p>{item.description}</p>
        <p>
          <span className="bold">Ratings:</span> {item.rating} / 5
        </p>
      </div>
    </Modal>
  );
}

export default ItemModal;
