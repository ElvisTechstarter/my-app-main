import styles from "./UserInfo.module.css";
import Label from "../../../common/props/Label";

function UserInfo() {
  return (
    <div>
      <Label className={styles.mainContainer} text="99 Beiträge"></Label>
      <Label className={styles.mainContainer} text="1000 Follower"></Label>
      <Label className={styles.mainContainer} text="200 Gefolgt"></Label>
    </div>
  );
}

export default UserInfo;
