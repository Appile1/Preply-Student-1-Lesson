// import { collection, addDoc, getDocs } from "firebase/firestore";

// import { db } from "./firebase.js";
// import { useState } from "react";

// const App = () => {
//   const [data, UseData] = useState([]);
//   async function getProducts() {
//     const querySnapshot = await getDocs(collection(db, "products"));
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     });
//   }

//   return (
//     <>
//       <h1> Hello World</h1>
//       <button onClick={getProducts}>Get Products</button>
//     </>
//   );
// };

// export default App;

// React component: SimpleProducts.jsx
// Description: A simplified React component that connects to Firebase Firestore
// and allows adding and showing products.
//
// How to use:
// 1. Ensure you have a firebase.js file that exports `db` (Firestore instance).
// 2. Import and render <SimpleProducts /> in your App component.

import React, { use, useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Import Firestore reference

export default function App() {
  const [products, setProducts] = useState([]);
  //   const [userdata , setUserData ] = useState({name:"" , price : "" , country : ""})

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Fetch products once on mount
  useEffect(() => {
    async function fetchProducts() {
      const refCol = collection(db, "products");
      const snapshot = await getDocs(refCol);
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log(items);
      setProducts(items);
    }
    fetchProducts();
  }, []);

  // Add a new product
  async function handleAdd(e) {
    e.preventDefault();
    if (!name || !price) return;
    const colRef = collection(db, "products");

    await addDoc(colRef, { name, price: Number(price) });
    setName("");
    setPrice("");

    // Refresh list after adding
    // const snapshot = await getDocs(colRef);
    // const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    // setProducts(items);
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Products</h1>
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          className="border px-2 py-1 flex-1"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border px-2 py-1 w-24"
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          type="submit"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {products.map((p) => (
          <li key={p.id} className="border p-2 rounded">
            {p.name} — PKR {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
