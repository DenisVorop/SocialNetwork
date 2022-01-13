let UserInfo = () => {
    return (
        <div className="profile-body__user-info">
            <div className="profile-body__avatar">
                <img src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8=" />
            </div>
            <div className="profile-body__info info-profile-body">
                <div className="info-profile-body__name">Denis</div>
                <div className="info-profile-body__birth">Date of bitth: 10 July</div>
                <div className="info-profile-body__city">City: Moscow</div>
                <div className="info-profile-body__education">Education: High-education</div>
                <div className="info-profile-body__website"><a href="#">www.github.com</a></div>
            </div>
        </div>
    );
}

export default UserInfo;
