import React, { useEffect, useState } from "react";
import Input from "../Input";
import "./style.css";
import { Select } from "antd";
import axios from "axios";

function Filter({ setCurrentCategory , searchKey , setSearchKey}) {
  const [categories, setCategories] = useState([{value: 'all', label: 'All'}]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
    .then(res => {
      const arr = res.data.map(val => {
        const name = val.replace('-', ' ');
        return {
          value: val,
          label: name[0].toUpperCase() + name.slice(1),
        }
      })
      setCategories((categories) => [...categories, ...arr]);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  function handleChange(value){
    setCurrentCategory(value);
  }

  return (
    <div className="filter">
      <Input
        type="text"
        className="searchBar"
        placeholder="Search products..."
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <Select
        defaultValue="All"
        style={{
          minWidth: 150,
          width: 'auto',
        }}
        onChange={handleChange}
        options={categories}
      />
    </div>
  );
}

export default Filter;
