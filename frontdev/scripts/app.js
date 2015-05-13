var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];
function showList() {
    var myTable = '<table border="1" class="table"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>Vizualizare</th><th>Stergere</th></tr>';
    for(var i in employeesList) {
        myTable +=
            '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td><td>'+'<button onclick="showEmployee('+i+')">Vizualizare</button>'+'</td><td>'+'<button onclick="deleteEmployee('+i+')">Sterge</button>'+'</td></tr>'
    }
    myTable +=     '<tr><td>'+commonSurname()+'</td><td>'+uniqeNameContor()+'</td><td>'+commonNumber()+'</td><td>'+averageSalary()+'</td></tr>' +'</table>';
    var container = document.getElementById('listcontainer');
        container.innerHTML = myTable;


}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, parseFloat(salary)));
    showList();
}
function sumSalarys(){
    var salarysSum = 0;
    for(var i in employeesList){
        salarysSum+=employeesList[i].salary;
    }

    var container = document.getElementById('listcontainer');
    container.innerHTML = salarysSum;
    return salarysSum;

}
function deleteLastEmployee(){
    employeesList.pop();
    showList();
}

function deleteEmployee(x){

    employeesList.splice(x,1) ;
    showList();
}
function showEmployee(x){
    alert(["First Name:"+employeesList[x].firstName + " "+ "Last Name:" + employeesList[x].lastName +" "+ "Phone Number:" + employeesList[x].phone +" "+ "Salary:" + employeesList[x].salary]) ;
    showList();
}
function commonSurname(){
    employeesList.filter([e => e.firstName])
    count
    }
}
function uniqeNameContor(){
    for(i=0;i<employeesList.length;i++){
        for(j=0;j<employeesList.length-1;j++){

        }
    }

}
function commonNumber(){

}
function averageSalary(){
    var average= sumSalarys()/ employeesList.length
    return average;


}