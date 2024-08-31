import React, { useState } from "react";
import { database } from "../FirebaseConfig/FirebaseConfig.js";
import { ref, update, get } from "firebase/database";

function UpdateFirebaseData() {
  const [puppyId, setPuppyId] = useState(""); // puppy1, puppy2, etc.
  const [puppyName, setPuppyName] = useState("");
  const [puppyAge, setPuppyAge] = useState("");

  const handleUpdate = () => {
    if (puppyId && puppyName && puppyAge) {
      // Create a reference to the specific puppy in the database
      const puppyRef = ref(database, `puppies/${puppyId}`);

      // Check if the puppy exists in the database
      get(puppyRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            // If the puppy exists, update the name and age
            update(puppyRef, {
              name: puppyName,
              age: Number(puppyAge),
            })
              .then(() => {
                alert("Puppy data updated successfully!");
              })
              .catch((error) => {
                alert("Failed to update puppy data: " + error.message);
              });
          } else {
            alert("Puppy does not exist.");
          }
        })
        .catch((error) => {
          alert("Failed to check if puppy exists: " + error.message);
        });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <h2>Update Puppy Information</h2>
      <div>
        <label>Puppy ID: </label>
        <input
          type="text"
          value={puppyId}
          onChange={(e) => setPuppyId(e.target.value)}
          placeholder="puppy1, puppy2, etc."
        />
      </div>
      <div>
        <label>Puppy Name: </label>
        <input
          type="text"
          value={puppyName}
          onChange={(e) => setPuppyName(e.target.value)}
        />
      </div>
      <div>
        <label>Puppy Age: </label>
        <input
          type="number"
          value={puppyAge}
          onChange={(e) => setPuppyAge(e.target.value)}
        />
      </div>
      <button onClick={handleUpdate}>Update Puppy</button>
    </div>
  );
}

export default UpdateFirebaseData;
