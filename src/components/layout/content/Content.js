import styles from "./Content.module.css";
import UserImg from "./userimg/UserImg";
import UserInfo from "./userinfo/UserInfo";

function Content() {
  return (
    <div className={styles.mainContainer}>
      <UserImg />
      <UserInfo />
    </div>
  );
}

export default Content;
