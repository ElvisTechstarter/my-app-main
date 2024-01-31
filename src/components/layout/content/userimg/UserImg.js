import AppImg from "../../../../utils/AppImg";
import styles from "./UserImg.module.css";

function UserImg() {
  return (
    <div className={styles.mainContainer}>
      <img className={styles.logImg} src={AppImg.logo} alt="img" />
    </div>
  );
}

export default UserImg;
