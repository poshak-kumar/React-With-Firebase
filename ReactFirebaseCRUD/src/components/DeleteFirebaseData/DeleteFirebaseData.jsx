import React, { useState } from "react";
import { database } from "../FirebaseConfig/FirebaseConfig.js";
import { ref, remove, get } from "firebase/database";

function DeleteFirebaseData() {
  const [puppyId, setPuppyId] = useState(""); // e.g., puppy1, puppy2, etc.

  const handleDelete = () => {
    if (puppyId) {
      // Create a reference to the specific puppy in the database
      const puppyRef = ref(database, `puppies/${puppyId}`);

      // Check if the puppy exists before attempting to delete
      get(puppyRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            // If the puppy exists, delete it
            remove(puppyRef)
              .then(() => {
                alert("Puppy data deleted successfully!");
              })
              .catch((error) => {
                alert("Failed to delete puppy data: " + error.message);
              });
          } else {
            alert("Puppy does not exist.");
          }
        })
        .catch((error) => {
          alert("Failed to check if puppy exists: " + error.message);
        });
    } else {
      alert("Please enter a Puppy ID.");
    }
  };

  return (
    <div>
      <h2>Delete Puppy Information</h2>
      <div>
        <label>Puppy ID: </label>
        <input
          type="text"
          value={puppyId}
          onChange={(e) => setPuppyId(e.target.value)}
          placeholder="puppy1, puppy2, etc."
        />
      </div>
      <button onClick={handleDelete}>Delete Puppy</button>
    </div>
  );
}

export default DeleteFirebaseData;
