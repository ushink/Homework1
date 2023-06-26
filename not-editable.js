
import { getListStudentsNotEdit } from "./listStudents.js";
// Т. к. renderStudents экспортировалась по умолчанию default,
// то имя функции мы не берем в фигурные скобки
import renderStudents from "./renderStudents.js";

const listElement = document.getElementById("list");

renderStudents(listElement, getListStudentsNotEdit);


// const renderStudents = () => {
//   const studentsHtml = students
//     .map((student, index) => {
//       return `
//       <li class="student" data-color="${student.color}">
//         <p class="student-name">
//           ${student.name}
//         </p>
//         <p>Любимый цвет: ${student.color} <span style="
//           display:inline-block;
//           width: 15px;
//           height: 15px;
//           background-color: ${student.color};">
//         </span></p>
//       </li>`;
//     })
//     .join("");

//   listElement.innerHTML = studentsHtml;

// Реализуем callback для возврата нередактируемого списка
// const getListStudentsNotEdit = (student, index) => {
//   return `
//   <li class="student" data-color="${student.color}">
//     <p class="student-name">
//       ${student.name}
//     </p>
//     <p>Любимый цвет: ${student.color} <span style="
//       display:inline-block;
//       width: 15px;
//       height: 15px;
//       background-color: ${student.color};">
//     </span></p>
//   </li>`;
// }

// const renderStudents = (element, getListStudents) => {
//   const studentsHtml = students
//     .map((student, index) => getListStudents(student, index)).join("");

//   element.innerHTML = studentsHtml;

//   const deleteButtons = document.querySelectorAll(".delete-button");


//   for (const deleteButton of deleteButtons) {
//     deleteButton.addEventListener("click", (event) => {
//       event.stopPropagation();

//       const index = deleteButton.dataset.index;


//       students.splice(index, 1);
//       renderStudents();
//     });
//   }
// };

// renderStudents(listElement, getListStudentsNotEdit);