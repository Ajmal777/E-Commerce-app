import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "../Button";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import ItemModal from "../ItemModal";
import checkFaourite from "../../helperFunctions/checkFavourite";
import addFavourite from "../../helperFunctions/addFavourite";
import removeFavourite from "../../helperFunctions/removeFavourite";
function Item({ item, key, lastItemRef}) {
  const [showModal, setShowModal] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    setIsFavourite(checkFaourite(item));
  }, []);

  function handleFavourite(e){
    e.stopPropagation();
    if(isFavourite){
      removeFavourite(item);
    }
    else addFavourite(item);

    setIsFavourite(!isFavourite);
  }

  return (
    <>
      <div className="item" key={key} onClick={() => setShowModal(true)} ref={lastItemRef}>
        <Button className="favourite-btn" onClick={handleFavourite} style={{borderColor: isFavourite ? 'var(--color-pink)' : 'white'}}>
          {!isFavourite ? <HeartOutlined /> : <HeartFilled style={{color: 'var(--color-pink)'}} />}
        </Button>
        <div className="p-img">
          <img src={item.thumbnail} />
        </div>
        <div className="details">
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
      </div>
      <ItemModal
        item={item}
        showModal={showModal}
        setShowModal={setShowModal}
        isFavourite={isFavourite}
        handleFavourite={handleFavourite}
      />
    </>
  );
}

export default Item;
