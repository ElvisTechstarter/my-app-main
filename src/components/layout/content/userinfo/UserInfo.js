import styles from "./UserInfo.module.css";
import DatabaseResponse from "../../../common/props/DatabaseResponse";

function UserInfo() {
  return (
    <div>
      <div className={styles.info}>
        <div style={{ padding: "5px" }}>
          Name: {DatabaseResponse.profile.name}
        </div>
        <div style={{ padding: "5px" }}>
          Age: {DatabaseResponse.profile.age}
        </div>
        <div style={{ padding: "5px" }}>
          City: {DatabaseResponse.profile.adress}
        </div>
      </div>
      <div className={styles.statisctics}>
        <div style={{ padding: "5px" }}>
          Follower Count: {DatabaseResponse.profile.followerCount}
        </div>
        <div style={{ padding: "5px" }}>
          Following Count: {DatabaseResponse.profile.followingCount}
        </div>
        <div style={{ padding: "5px" }}>
          Post Count: {DatabaseResponse.profile.postCount}
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
