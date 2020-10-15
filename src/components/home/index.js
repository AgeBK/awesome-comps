import React, { useContext } from "react";
import { ComputerContext } from "../../context/";
import styles from "./home.module.css";

function App() {
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
        <h3>{category}</h3>
        <div>
          <img
            src={require("../../img/" + image)} //todo: require?
            alt={category}
            className={styles.img}
          />
        </div>
      </div>
    );
  });

  return <div className={styles.container}>{catData}</div>;
}

export default App;
