import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";

import UserForm from "./UserForm";
import { toast } from "react-toastify";
import axios from "axios";

const UserTabel = ({ setUser, user, fetchData }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonserver-ni0v.onrender.com/user/${id}`);
      setUser(user.filter((item) => item.id !== id)); // Remove the deleted user from the local state
      toast.success("User deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("please check again");
    }
  };

  return (
    <>
      <Container>
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <UserForm fetchData={fetchData} />
    </>
  );
};

export default UserTabel;
