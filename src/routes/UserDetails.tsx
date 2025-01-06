import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

function UserDetails() {
  const params = useParams();
  console.log(params);
  const [searchParams, setSearchParams] = useSearchParams(); //NOTE: When u use setSearchParams, it will update the URL and do side effect
  console.log(searchParams);
  const location = useLocation(); // NOTE: This is used to get the current location of the page
  console.log(location);
  //   <Link to={`/users/${user.id}/${user.title}?age=${user.age}`}>
  return (
    <div className="card mx-2 my-5" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{searchParams.get("title")}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {searchParams.get("name")}
        </h6>
        <p className="card-text">
          Name: {searchParams.get("name")} Title: {searchParams.get("title")}{" "}
          Age: {searchParams.get("age")}
        </p>
      </div>
    </div>
  );
}

export default UserDetails;
