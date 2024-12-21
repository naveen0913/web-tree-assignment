import React from "react";
import { useFetchUserData } from "../../hooks/userFetchApi";
import { CgSpinner } from "react-icons/cg";
import "../UserCard/userCardStyles.css";
import * as Constants from "../../constants/constants";

function UserCard() {
  const { data: userData, loading, error } = useFetchUserData(Constants.baseUrl);

  if (loading)
    return (
      <div className="loading-icon">
        <CgSpinner />
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="user-card">
      {/* User Picture */}
      <div className="user-picture">
        <img
          src={userData.picture.large}
          alt={`${userData.name.first} ${userData.name.last}`}
        />
      </div>

      {/* User Details */}
      <div className="user-details">
        <div className="names-container">
          <div className="paragraph-text">
            First Name :
            <span className="span-text"> {userData.name.first}</span>
          </div>
          <div className="paragraph-text">
            Last Name :<span className="span-text"> {userData.name.last}</span>
          </div>
        </div>

        <p className="paragraph-text">
          Gender : <span className="span-text"> {userData.gender}</span>
        </p>

        <p className="paragraph-text">
          Phone : <span className="span-text"> {userData.phone}</span>
        </p>
      </div>
    </div>
  );
}

export default UserCard;
