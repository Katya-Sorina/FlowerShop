import React from "react";
import ProductCardItem from "./ProductCardItem";
import airpods from "../img/airPods.webp";
import iphone from "../img/iphone.webp";

export default function ProductCards() {
  const productDataArray = [
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
    },
    {
      sale: 23,
      img: iphone,
      describe: "Смартфон Apple iPhone 13 128GB Midnight",
      priceWithSale: 59990,
      priceWithoutSale: 87990,
      productId: 3,
    },
    {
      sale: 23,
      img: airpods,
      describe: "Наушники Apple AirPods with Charging Case MV7N2RU/A",
      priceWithSale: 369990,
      priceWithoutSale: 419990,
      productId: 4,
    },
    {
      sale: 23,
      img: iphone,
      describe: "Смартфон Apple iPhone 13 128GB Midnight",
      priceWithSale: 59990,
      priceWithoutSale: 87990,
      productId: 5,
    },
    {
      sale: 23,
      img: airpods,
      describe: "Наушники Apple AirPods with Charging Case MV7N2RU/A",
      priceWithSale: 369990,
      priceWithoutSale: 419990,
      productId: 6,
    },
  ];

  return (
    <div>
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
