import { useState } from "react";
import styles from "./FollowBtn.module.css";

function FollowBtn() {
  const [isFollowing, setIsFollowing] = useState(false);

  function onClickFollow() {
    setIsFollowing(true);
  }

  function onClickUnfollow() {
    setIsFollowing(false);
  }

  if (isFollowing) {
    return (
      <button className={styles.following} onClick={onClickUnfollow}>
        Following
      </button>
    );
  }

  return (
    <button className={styles.follow} onClick={onClickFollow}>
      Follow
    </button>
  );
}

export default FollowBtn;
