import DatabaseResponse from "../../../common/props/DatabaseResponse";

function UserInfo() {
  return (
    <div>
      <div>
        Name: {DatabaseResponse.profile.name}
        Age: {DatabaseResponse.profile.age}
        City: {DatabaseResponse.profile.address}
      </div>
      <div>
        Follower Count: {DatabaseResponse.profile.followerCount}
        Following Count: {DatabaseResponse.profile.followingCount}
        Post Count: {DatabaseResponse.profile.postCount}
      </div>
    </div>
  );
}

export default UserInfo;
