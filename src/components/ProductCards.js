import React, {useState} from "react";
import ProductCardItem from "./ProductCardItem";
import airpods from "../img/airPods.webp";
import iphone from "../img/iphone.webp";


export default function ProductCards() {
  const[productDataArray, setProductArray]= useState([
    {
      sale: 23,
      img: iphone,
      describe: "Смартфон Apple iPhone 13 128GB Midnight",
      priceWithSale: 59990,
      priceWithoutSale: 87990,
      productId: 1,
    },
    {
      sale: 23,
      img: airpods,
      describe: "Наушники Apple AirPods with Charging Case MV7N2RU/A",
      priceWithSale: 369990,
      priceWithoutSale: 419990,
      productId: 2,
    }
  
  ]);

  return (
    <div>
      <button onClick={()=>{setProductArray([...productDataArray, 
        {sale: 23,
        img: airpods,
        describe: "Наушники Apple AirPods with Charging Case MV7N2RU/A",
        priceWithSale: 369990,
        priceWithoutSale: 419990,
        productId: productDataArray.length+1,
      }
      ])}}>Add product</button>
      Наши Товары :
      {productDataArray.map((item) => {
        const {
          sale,
          img,
          describe,
          priceWithSale,
          priceWithoutSale,
          productId,
        } = item;

        return (
          <ProductCardItem
            key={productId}
            sale={sale}
            img={img}
            describe={describe}
            priceWithSale={priceWithSale}
            priceWithoutSale={priceWithoutSale}
            productId={productId}
            setProductArray={setProductArray}
          />
        );
      })}
    </div>
  );

  return (
    <div>
      Наши Товары
      <ProductCardItem
        sale={45}
        img={iphone}
        describe={"Смартфон Apple iPhone 13 128GB Midnight"}
        priceWithSale={59990}
        priceWithoutSale={87990}
        productId={1}
      />
      <ProductCardItem
        sale={45}
        img={iphone}
        describe={"Смартфон Apple iPhone 13 128GB Midnight"}
        priceWithSale={369990}
        priceWithoutSale={419990}
        productId={2}
      />
    </div>
  );
}
