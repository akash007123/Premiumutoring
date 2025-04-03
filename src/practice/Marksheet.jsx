import { useState } from "react";
import { motion } from "framer-motion";

function MarksheetForm() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    college: "Prashanti College of Engineering",
    course: "",
    semester: "",
    subjects: [
      { name: "Mathematics I", marks: "" },
      { name: "Chemistry", marks: "" },
      { name: "Communication Skills", marks: "" },
      { name: "Engineering Graphics", marks: "" },
      { name: "Basic Electrical & Electronics Engineering", marks: "" },
    ],
  });

  const handleChange = (e, index = null) => {
    if (index !== null) {
      const updatedSubjects = [...formData.subjects];
      updatedSubjects[index].marks = e.target.value;
      setFormData({ ...formData, subjects: updatedSubjects });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, formData]);
    setFormData({
      name: "",
      rollNumber: "",
      college: "Prashanti College of Engineering",
      course: "",
      semester: "",
      subjects: formData.subjects.map((subject) => ({
        name: subject.name,
        marks: "",
      })),
    });
  };

  const calculateTotalMarks = (subjects) =>
    subjects.reduce((total, subject) => total + Number(subject.marks), 0);
  const calculatePercentage = (totalMarks, totalSubjects) =>
    (totalMarks / (totalSubjects * 100)) * 100;
  const getGrade = (percentage) =>
    percentage >= 90
      ? "A+"
      : percentage >= 80
      ? "A"
      : percentage >= 70
      ? "B"
      : percentage >= 60
      ? "C"
      : "D";

  return (
    <>
      <div className="container mx-auto py-10 px-6 mt-[100px]">
        <h2 className="text-2xl font-bold text-center">
          Student Marksheet Form
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white shadow-md p-6 mt-5 rounded"
        >
          <div className="flex gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Student Name"
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <input
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              placeholder="Roll Number"
              className="w-full p-2 mb-2 border rounded"
              required
            />
          </div>
          <div className="flex gap-4">
            <input
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Course"
              className="w-full p-2 mb-2 border rounded"
              required
            />
            <input
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              placeholder="Semester"
              className="w-full p-2 mb-2 border rounded"
              required
            />
          </div>
          <h3 className="text-lg font-bold mt-4">Subjects & Marks</h3>
          {formData.subjects.map((subject, index) => (
            <div key={index} className="flex justify-between items-center">
              <p className="w-2/3">{subject.name}</p>
              <input
                type="number"
                value={subject.marks}
                onChange={(e) => handleChange(e, index)}
                placeholder="Marks"
                className="w-1/3 p-2 mb-2 border rounded"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 mt-4 rounded"
          >
            Generate Marksheet
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {students.map((student, index) => {
            const totalMarks = calculateTotalMarks(student.subjects);
            const percentage = calculatePercentage(
              totalMarks,
              student.subjects.length
            );
            const grade = getGrade(percentage);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white shadow-xl rounded-lg p-6 border"
              >
                <h1 className="text-2xl font-bold text-blue-700 text-center">
                  College Marksheet
                </h1>
                <p className="text-gray-600 text-center">{student.college}</p>
                <div className="mt-4">
                  <p>
                    <strong>Name:</strong> {student.name}
                  </p>
                  <p>
                    <strong>Roll Number:</strong> {student.rollNumber}
                  </p>
                  <p>
                    <strong>Course:</strong> {student.course}
                  </p>
                  <p>
                    <strong>Semester:</strong> {student.semester}
                  </p>
                </div>
                <table className="w-full mt-4 border">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="py-2 px-4">Subject</th>
                      <th className="py-2 px-4">Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {student.subjects.map((subject, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="py-2 px-4">{subject.name}</td>
                        <td className="py-2 px-4 font-semibold">
                          {subject.marks}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 text-center">
                  <p>
                    <strong>Total Marks:</strong> {totalMarks} /{" "}
                    {student.subjects.length * 100}
                  </p>
                  <p>
                    <strong>Percentage:</strong> {percentage.toFixed(2)}%
                  </p>
                  <p>
                    <strong>Grade:</strong>{" "}
                    <span className="text-blue-600 text-xl">{grade}</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MarksheetForm;
