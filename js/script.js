// CREATE AN ARRAY OF EMPLOYEES
let employee = [12345678, "Trish Daugherty", 1234, "td@gmail.com", "administration" ];

const addEmployee = (id, name, ext, email, dept) => {
    employeesArray.push({
        id: id,
        name: name,
        ext: ext,
        email: email,
        dept: dept
    });

    return {id, name, ext, email, dept}
}
 let employeesArray = JSON.parse(localStorage.getItem('employees')) || [];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
 if (!(localStorage.getItem("employees") == true || localStorage.getItem("employees") == false)) {
    // init variable/set default variable for item
     localStorage.setItem("employees", JSON.stringify(employeesArray));
}

// GET DOM ELEMENTS
const $ = (id) => {
    return document.getElementById(id);
};

// // BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
        let empForm         = document.getElementById('addForm');
        let tbodyElement    = document.querySelector('tbody');
        let empTable        = document.querySelector('#employees');
   
// ADD EMPLOYEE
       function addEmployees(e) {  
        localStorage.setItem("employees", JSON.stringify(employeesArray)); 
         
//     // PREVENT FORM SUBMISSION
       e.preventDefault();
// GET THE VALUES FROM THE TEXT BOXES
       let id           = document.getElementById('id').value;
       let name         = document.getElementById('name').value;
       let extension    = document.getElementById('extension').value;
       let email        = document.getElementById('email').value;
       let department   = document.getElementById('department').value;

 // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    function addEmployee(employee) {
        employees.push(employee);
        localStorage.employees = JSON.stringify(employees);
}
 // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
 // BUILD THE GRID
       let empForm=  document.getElementById('addForm').value;
            tbodyElement.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${extension}</td>
                <td>${email}</td>
                <td>${department}</td>
                <td><button class = "deleteBtn">Delete</td>
            </tr>
      `;
 };

// DELETE EMPLOYEE
   function onDeleteRow(e) {
      if(!e.target.classList.contains('deleteBtn')){
           return;
       }
     else if (confirm('Are you sure you want to delete this employee?')) {
       const btn = e.target;
       btn.closest('tr').remove();
       }
   }
   empForm.addEventListener('submit', addEmployees);
   empTable.addEventListener('click', onDeleteRow);

// RESET THE FORM
    empForm.reset();
// SET FOCUS BACK TO THE ID TEXT BOX
    empForm.id.focus();

// };
