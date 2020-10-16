import React, { useContext } from "react";
import { ComputerContext } from "../../context/";
import styles from "./categories.module.css";

function Categories() {
  const { products, addToCart } = useContext(ComputerContext);
  const selectedCat = window.location.pathname.substr(1);

  const category = products.filter(
    (val) => selectedCat === val.category.toLowerCase()
  );

  return (
    <div className={styles.container}>
      {category.map((val) => {
        const {
          productId,
          name,
          image,
          price,
          sale,
          supplierName,
          description,
        } = val;
        return (
          <div key={productId} className={styles.product}>
            <div key={productId} className={styles.productInner}>
              <h2>{name} </h2>
              <div className={styles.imgCont}>
                <div className={styles.img}>
                  <img
                    src={require("../../img/" + image)} // you need to reqire images for webpack to process them
                    className={styles.img}
                    alt={name}
                  />
                </div>
              </div>
              <div className={styles.price}>
                <span className={styles.dollarSign}>$</span>
                {price}
                {sale && <span className={styles.sale}>{sale}% OFF</span>}
              </div>
              <div className={styles.description}>{description}</div>
              <button className={styles.cart} onclick={addToCart}>
                ADD TO CART
              </button>
              {/* <div className={styles.supplierName}>{supplierName}</div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
