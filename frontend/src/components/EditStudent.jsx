import { useState } from "react";

export default function EditStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [marks, setMarks] = useState("");

  const createStudent = () => {};

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlhtmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
          />
        </div>
        <div className="mb-3">
          <label htmlhtmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
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
              value="male"
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
              value="female"
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlhtmlFor="name" className="form-label">
            Marks
          </label>
          <input
            type="number"
            className="form-control"
            id="name"
            aria-describedby="marks"
            min="0"
            max="500"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
