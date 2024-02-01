import AppData from "../../../../utils/AppData";
import styles from "./UserImg.module.css";

function UserImg() {
  return (
    <div className={styles.mainContainer}>
      <img className={styles.logImg} src={AppData.image} alt="img" />
    </div>
  );
}

export default UserImg;
