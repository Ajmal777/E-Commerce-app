import React, { useCallback, useEffect, useRef, useState } from "react";
import Filter from "../Components/Filter";
import Grid from "../Components/Grid";
import axios from "axios";
import { Spin } from "antd";
import "../Page Styles/shop.css";
import Error from "../Components/Error";
function Shop() {
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [productsList, setProductsList] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [limit, setLimit] = useState(20);
  const [error, setError] = useState("");

  useEffect(() => {
      const endpoint =
        currentCategory !== "all" ? `/category/${currentCategory}` : "";
      const URL = `https://dummyjson.com/products${endpoint}?limit=${limit}`;

    axios
      .get(URL)
      .then((res) => {
        setHasMore(res.data.products.length > 0);
        setProductsList(res.data.products);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [currentCategory, limit]);

  useEffect(() => {
    const temp = productsList.filter((item) => {
      return item.title.toLowerCase().includes(searchKey.toLowerCase());
    });
    setFilteredList(temp);
  }, [searchKey]);

  const observer = useRef();
  const lastItem = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLimit((prevLimit) => prevLimit + 20);
        }
      }, {
        rootMargin: '100px',
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="shop">
      <Filter
        setCurrentCategory={setCurrentCategory}
        setSearchKey={setSearchKey}
        searchKey={searchKey}
      />
      {loading && (
        <div className="loader">
          <Spin className="large" />
        </div>
      )}
      {!error && (
        <Grid
          category={currentCategory}
          lastItemRef={lastItem}
          productsList={searchKey ? filteredList : productsList}
        />
      )}
      {
        error && <Error error={error}/>
      }
    </div>
  );
}

export default Shop;
