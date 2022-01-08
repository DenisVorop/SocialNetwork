import './Profile.scss';
import MyPosts from './MyPosts/MyPosts';

let Profile = () => {
  return (
    <div className="body__profile profile-body">
      <div className="profile-body__board">
        <img src="http://torrenther.com/uploads/posts/soft/2017-04/149120497533e21db0db46b11eeac0b3056d1d170af.jpeg" />
      </div>
      <div className="profile-body__user">
        <div className="profile-body__avatar"><img src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8=" /></div>
        <div className="profile-body__info info-profile-body">
          <div className="info-profile-body__name">Denis</div>
          <div className="info-profile-body__birth">Date of bitth: 10 July</div>
          <div className="info-profile-body__city">City: Moscow</div>
          <div className="info-profile-body__education">Education: High-education</div>
          <div className="info-profile-body__website"><a href="#">www.pornhub.com</a></div>
        </div>
      </div>
      <div className="profile-body__posts">
        <MyPosts />
      </div>
    </div>
  );
}

export default Profile;
