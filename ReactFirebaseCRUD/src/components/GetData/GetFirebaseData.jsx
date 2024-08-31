import React, { useState, useEffect } from "react";
import { database } from "../FirebaseConfig/FirebaseConfig.js";
import { ref, onValue } from "firebase/database";

function GetFirebaseData() {
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    // Create a reference to the "puppies" node in the database
    const puppiesRef = ref(database, "puppies");

    // Listen for value changes on that reference
    onValue(puppiesRef, (snapshot) => {
      const puppiesData = snapshot.val();
      if (puppiesData) {
        setPuppies(Object.values(puppiesData));
      } else {
        setPuppies([]);
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      // Firebase automatically removes listeners for you,
      // but you could add clean-up logic if needed
    };
  }, []);

  return (
    <div>
      <h1>Puppies</h1>
      <ul>
        {puppies.map((puppy) => (
          <li key={puppy.name}>
            {puppy.name} ({puppy.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetFirebaseData;
