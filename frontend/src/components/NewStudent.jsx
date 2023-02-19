import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewStudent() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [marks, setMarks] = useState("");

  const allStudents = () => {
    navigate("/");
  };

  const createStudent = async (e) => {
    const student = {
      name: name,
      email: email,
      gender: gender,
      marks: marks,
    };

    const response = await fetch(`http://localhost:5000/api/students/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });
    const data = await response.json();
    console.log(data);
    alert("Student created successfully!");
  };

  return (
    <div>
      <button onClick={allStudents} className="ms-5">
        <i className="fa-solid fa-users"></i> All Students
      </button>
      <form className="ps-5 m-3">
        <h2 className="text-center">Create Student</h2>
        <p className="text-center mb-5">
          Use the below form to create an account
        </p>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="John Doe"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@test.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
              required
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Marks
          </label>
          <input
            type="number"
            className="form-control"
            id="name"
            aria-describedby="marks"
            min="0"
            max="500"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
            placeholder="300"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => createStudent(e)}
        >
          Save
        </button>
      </form>
    </div>
  );
}
