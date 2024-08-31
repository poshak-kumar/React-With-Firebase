import React, { useState } from "react";
import { database } from "../FirebaseConfig/FirebaseConfig.js";
import { ref, set, get } from "firebase/database";

function CreateFirebaseData() {
  const [puppyId, setPuppyId] = useState(""); // e.g., puppy3
  const [puppyName, setPuppyName] = useState("");
  const [puppyAge, setPuppyAge] = useState("");

  const handleCreate = () => {
    if (puppyId && puppyName && puppyAge) {
      // Create a reference to the new puppy in the database
      const newPuppyRef = ref(database, `puppies/${puppyId}`);

      // Check if the puppy already exists
      get(newPuppyRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            alert("Puppy already exists. Cannot create duplicate entry.");
          } else {
            // Set the new puppy's data
            set(newPuppyRef, {
              name: puppyName,
              age: Number(puppyAge),
            })
              .then(() => {
                alert("New puppy data created successfully!");
              })
              .catch((error) => {
                alert("Failed to create new puppy data: " + error.message);
              });
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
      <h2>Create New Puppy</h2>
      <div>
        <label>Puppy ID: </label>
        <input
          type="text"
          value={puppyId}
          onChange={(e) => setPuppyId(e.target.value)}
          placeholder="puppy3, puppy4, etc."
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
      <button onClick={handleCreate}>Create Puppy</button>
    </div>
  );
}

export default CreateFirebaseData;
