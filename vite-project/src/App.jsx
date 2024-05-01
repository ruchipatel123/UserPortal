import NavBar from "./component/NavBar";
import UserTabel from "./component/UserTabel";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    var response = await axios.get("https://jsonserver-ni0v.onrender.com/user");
    setUser(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <UserTabel user={user} fetchData={fetchData} />
    </>
  );
}

export default App;
