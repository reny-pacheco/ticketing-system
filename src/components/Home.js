import { React, useEffect } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";
import { userStatus } from "../features/contacts/userSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    function isLoggedIn() {
      axios
        .get("http://localhost:3000/isLoggedIn")
        .then((res) => dispatch(userStatus(res.data)))
        .catch((err) => {
          dispatch(userStatus(err.data));
          console.log(err.data);
        });
    }
    isLoggedIn();
  }, []);

  return (
    <div>
      <h1>Home Component</h1>
    </div>
  );
};

export default Home;
