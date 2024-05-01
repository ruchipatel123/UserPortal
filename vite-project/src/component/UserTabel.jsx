import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";

import UserForm from "./UserForm";

const UserTabel = ({ user, fetchData }) => {
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
                  <Button variant="primary">Update</Button>{" "}
                  <Button variant="danger">Delete</Button>{" "}
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
