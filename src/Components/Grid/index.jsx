import React from "react";
import "./style.css";
import { Empty } from "antd";
import Item from "../Item";

function Grid({ productsList, category, lastItemRef }) {
  const name = category.replace("-", " ");

  return (
    <div className="grid">
      <h1>Category: {name[0].toUpperCase() + name.slice(1)}</h1>
      <div className="products">
        {productsList.length > 0 ? (
          productsList.map((item, key) => {
            if (productsList.length === key + 1){
              return <Item item={item} lastItemRef={lastItemRef} key={key} />;
            }
            return <Item item={item} key={key} />;
          })
        ) : (
          <Empty className="empty" />
        )}
      </div>
    </div>
  );
}

export default Grid;
