import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import UserForm from "./UserForm";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

const UserTabel = ({ setUser, user, fetchData }) => {
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClose = () => {
    setShow(false);
    setSelectedUser(null); // Reset selectedUser when closing the modal
  };

  const handleShow = () => setShow(true);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonserver-ni0v.onrender.com/user/${id}`);
      setUser(user.filter((item) => item.id !== id));
      toast.success("User deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Please check again");
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    handleShow();
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
                  <Button variant="primary" onClick={() => handleEdit(item)}>
                    Update
                  </Button>{" "}
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
      <UserForm
        fetchData={fetchData}
        handleShow={handleShow}
        handleClose={handleClose}
        show={show}
        selectedUser={selectedUser}
        setselectedUser={setSelectedUser}
      />
    </>
  );
};

export default UserTabel;
