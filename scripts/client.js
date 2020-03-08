let employees = [];

$(document).ready(onReady);

//run after DOM loads: 
function onReady() {
    console.log("In onReady() function.");
    $('#submitButton').on('click', handleSubmitClick);
    $('#employeeTableBody').on('click', 'button', removeRow );
}

function handleSubmitClick(event) {
    console.log("In handleSubmitClick() function.");
    event.preventDefault();
    const firstNameInput = $('#firstNameInput').val();
    const lastNameInput = $('#lastNameInput').val();
    //TODO Check that ID is unique, not used already, 
    //before inserting a new employee: 

    const iDInput = $('#iDInput').val();
    const titleInput = $('#titleInput').val();
    const annualSalaryInput = $('#annualSalaryInput').val();
    employees.push({firstNameInput, lastNameInput, iDInput, titleInput, annualSalaryInput});
    console.log("employees[] is:", employees);
    displayEmployees();
}

function removeRow(event) {
    console.log("In removeRow() function.");
    console.log("this.parent() is:", $(this).parent().parent());
    $(this).parent().parent().remove();
    //${this} example:
    //<button class="button" id="3456">Delete</button>
    //remove employee from employees array:
    const employeeId = $(this).attr('id');
    for(let i = 0; i < employees.length; i++) {
        if(employees[i].iDInput === employeeId) {
            employees.splice(i, 1);
        }
    }
    console.log("employees[] is:", employees);
    //"redraw" with displayEmployees() after 
    //employees[] was updated: 
    displayEmployees();
}

/* displayEmployees() function loops 
 * over each employee object in the employees 
 * array, and appends each employee object to
 * the DOM. 
 */
function displayEmployees() {
    console.log("In displayEmployees() function.");
    $('#employeeTableBody').empty();
    for(let employee of employees) {
        console.log('employee is:', employee);
        const row = `<tr><td>${employee.firstNameInput}</td>
                    <td>${employee.lastNameInput}</td> 
                    <td>${employee.iDInput}</td> 
                    <td>${employee.titleInput}</td> 
                    <td>${employee.annualSalaryInput}</td> 
                    <td><button class="button" id="${employee.iDInput}">Delete</button></td></tr>`;
        $('#employeeTableBody').append(row);
    }
    displaySalaryTotal();
}

function displaySalaryTotal() {
    let salaryTotal = 0;
    for(let employee of employees) {
        salaryTotal += Number(employee.annualSalaryInput);
    }
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    $('#salariesTotal').empty();
    $('#salariesTotal').append(formatter.format(salaryTotal));
}