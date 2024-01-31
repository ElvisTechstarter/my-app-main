import AppInfo from "../../../../utils/AppInfo";
import styles from "./UserInfo.module.css";

function UserInfo() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.table} src={AppInfo.logo} alt="" />
    </div>
  );
}

export default UserInfo;
