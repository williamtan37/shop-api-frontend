import logo from './logo.svg';
import './App.css';
import makeRequest from './makeRequest'
import React, {useState, useEffect} from 'react';
import useGetData from './useGetData'

function App() {
  const [data, loaded] = useGetData();
  const [itemData, setItemData] = useState(null);

  const getItemInfo = (url) => {
    makeRequest(url).then(res => {
      setItemData(res);
    })
  }

  return (
    <div>
      <h1>SHOP</h1>
      <h3>In stock items, click to see more info</h3>
      <ol>
        {loaded ? data.products.map((data)=> {
          return <li><button onClick={()=> getItemInfo(data.request.url)}>{data.name}</button></li>
        }): null}
      </ol>
      <hr></hr>
      <h3>More info</h3>
      {itemData ? <p>Item: {itemData.name}</p>: null}
      {itemData ? <p>Price: {itemData.price}</p>: null}
      {itemData ? <p>Description: {itemData.info}</p>: null}
    </div>
  );
}

export default App;
