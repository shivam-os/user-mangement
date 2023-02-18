import { useEffect, useState } from "react";

export default function StudentsList() {
  const [studentsList, setStudentsList] = useState([]);

  const getStudentsList = async () => {
    const response = await fetch("http://localhost:5000/api/students");
    const data = await response.json();
    setStudentsList(data);
  };

  const deleteStudent = async (rno) => {
    const response = await fetch(`http://localhost:5000/api/students/${rno}`, {
      method: "delete",
    });
    const data = await response.json();
    console.log(data);
    getStudentsList();
  };

  useEffect(() => {
    getStudentsList();
  });

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Roll No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Marks</th>
            <th scope="col" colSpan="2">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {studentsList.map((item) => {
            return (
              <tr key={item.rno}>
                <td>{item.rno}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.marks}</td>
                <td>
                  <button>
                    <i className="fa-sharp fa-solid fa-pen"></i>
                  </button>
                </td>
                <td>
                  <button onClick={(e) => deleteStudent(item.rno)}>
                    <i className="fa-sharp fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
