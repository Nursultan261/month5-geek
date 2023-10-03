import React, { useState } from "react";
import styles from "./Post.module.css"; 

function Post({ postInfo }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(! showDetails);
  };

  return (
    <div className={styles["post-container"]}>
        <p>ID: {postInfo.userId}</p>
      <p className={styles["post-title"]}>Title {postInfo.title}</p>
      <button className={styles["post-button"]} onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "More Info"}
      </button>
      {showDetails && (
        <div className={styles["post-details"]}>
          <p>ID: {postInfo.id}</p>
          <p>Body: {postInfo.body}</p>
        </div>
      )}
    </div>
  );
}

export default Post;
