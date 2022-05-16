const express = require('express');
const app = express();
const PORT = 3000;

const students = [
  {
      id: 1,
      name: "Daniel",
      college: "Cornerstone"
  },
  {
      id: 2,
      name: "Prabh",
      college: "Cornerstone"
  }
];

app.get('/students', (request, response) => {
  return response.status(200).json(students);
})

app.get('/students/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const student = students.find(student => student.id === id);
  
  if (!student) {
    response.status(404).json({
      message: "Student not found"
    });
  }

  return response.status(200).json(student);
})

app.listen(PORT, (request, response) => {
    console.log(`Server running at port ${PORT}`);
})
