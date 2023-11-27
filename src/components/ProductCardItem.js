import React from "react";

export default function ProductCardItem({
  productId,
  img,
  describe,
  priceWithSale,
  priceWithoutSale,
  sale,
  setProductArray
}) {
  const alertId = () => {
    console.log(productId);
  };

  return (
    <div>
      <p>Скидки: {sale}%</p>
      <img src={img} alt="product" />
      <p>{describe}</p>
      <p>{priceWithSale} тг</p>
      <p>
        <span>{priceWithoutSale} тг</span>
      </p>
      <button onClick={()=>{setProductArray([])}}>В корзину</button>
    </div>
  );
}
