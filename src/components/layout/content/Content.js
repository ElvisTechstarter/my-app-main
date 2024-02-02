import styles from "./Content.module.css";
import UserImg from "./userimg/UserImg";
import UserInfo from "./userinfo/UserInfo";

function Content() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.userimg}>
        <UserImg />
      </div>
      <div className={styles.userinfo}>
        <UserInfo />
      </div>
    </div>
  );
}

export default Content;
