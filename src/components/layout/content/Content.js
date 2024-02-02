import styles from "./Content.module.css";
import UserImg from "./userimg/UserImg";
import UserInfo from "./userinfo/UserInfo";
import FollowBtn from "./follow-btn/FollowBtn";

function Content() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.userimg}>
        <UserImg />
      </div>
      <div className={styles.userinfo}>
        <UserInfo />
      </div>
      <div className={styles.follow}>
        <FollowBtn />
      </div>
    </div>
  );
}

export default Content;
