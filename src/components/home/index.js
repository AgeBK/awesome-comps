import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import logo from './logo.png' you can import individual images like this

import { ComputerContext } from "../../context/";
import styles from "./home.module.css";

function Home() {
  const { products } = useContext(ComputerContext);

  const test2 = products.reduce(
    (acc, val) => {
      const cat = val.category;

      if (!acc.a.includes(cat)) {
        acc.a.push(cat);
        acc.b.push({ category: cat, image: val.image });
      }
      return acc;
    },
    { a: [], b: [] }
  );

  const catData = test2.b.map((val, i) => {
    const { image, category } = val;
    return (
      <div className={styles.category} key={i}>
        <div>
          <Link to={`/${category.toLowerCase()}`}>
            <div className={styles.imgCont}>
              <img
                src={require("../../img/" + image)} // you need to reqire images for webpack to process them
                alt={category}
                className={styles.img}
              />
            </div>
            <h3>{category}</h3>
          </Link>
        </div>
      </div>
    );
  });

  return <div className={styles.container}>{catData}</div>;
}

export default Home;
