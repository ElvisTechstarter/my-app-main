import AppData from "../../../../utils/AppData";
import styles from "./NavBarLeft.module.css";

function NavBarLeft() {
  return (
    <div className={styles.mainContainer}>
      <img
        className={styles.logImg}
        src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_640.png"
        alt="logo"
      />
    </div>
  );
}

export default NavBarLeft;
