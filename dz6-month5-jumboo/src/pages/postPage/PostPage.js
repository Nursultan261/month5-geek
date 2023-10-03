import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/PostsSlice";
import Post from "../../components/Post";
import PostSpinner from "../../components/PostSpinner";
import styles from "./PostPage.module.css"; // Импортируем стили

function PostPage() {
  const { posts, preloader, message } = useSelector(
    (state) => state.postsReducer
  );
  const dispatch = useDispatch();

  const getPostsFunc = () => {
    dispatch(getPosts());
  };

  useEffect(() => {
    getPostsFunc();
  }, []);

  return (
    <div className={styles["page-container"]}>
      <button className={styles["page-button"]} onClick={getPostsFunc}>
        Get Posts
      </button>
      <button className={styles["page-button"]}>Delete All</button>
      {preloader ? (
        <PostSpinner />
      ) : message ? (
        <h3 className={styles["page-message"]}>{message}</h3>
      ) : (
        posts.map((post) => <Post key={post.id} postInfo={post} />)
      )}
    </div>
  );
}

export default PostPage;
