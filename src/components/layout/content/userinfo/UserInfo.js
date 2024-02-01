import AppData from "../../../../utils/AppData";
import styles from "./UserInfo.module.css";

function UserInfo() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.table} />
      {AppData.name}
    </div>
  );
}

export default UserInfo;
