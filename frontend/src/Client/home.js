import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
useEffect(() => {
    const verifyCookie = async () => {
      try {
        // token nahi → login
        if (!cookies.token) {
          navigate("/login");
          return;
        }

        // backend verify
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/verify`,
          {},
          { withCredentials: true }
        );

        const { status, user } = data;

        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, { position: "top-right" });

          //  2 sec baad dashboard redirect
          setTimeout(() => {
            window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}`;
          }, 2000);
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    };   
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };
  return (
    <>
      <div className="home_page">
        <h4>
          {" "}
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;