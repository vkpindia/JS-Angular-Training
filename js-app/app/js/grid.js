/* 
 * Create a form for name, mobile, email and city
 * then get data from the input fields and add in table grid
*/

var userList = [
    { name: 'John', mobile: '8756453456', email: 'john@gmail.com', city: 'Hyderabad' },
    { name: 'Smith', mobile: '7856453456', email: 'smith@gmail.com', city: 'Bangalore' },
    { name: 'James', mobile: '8956453456', email: 'jsmes@gmail.com', city: 'Delhi'},
];

function createUserTable() {
    var container = document.getElementById('grid');

    let grid = `<table class="user-list">
       <thead>
          <th>Name</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>City</th>
          <th>Action</th>
       </thead>
       <tbody id="tablebody">
       </tbody>
    </table>`

    container.innerHTML = grid;
    let tbody = document.getElementById('tablebody');
    let tableRow = ''

    userList.forEach((item, index) => {
        tableRow = tableRow + `<tr>
            <td>${item.name}</td>
            <td>${item.mobile}</td>
            <td>${item.email}</td>
            <td>${item.city}</td>
            <td><a onclick="deleteUser(${index})">Delete</a></td>
        </tr>`;
    });

    tbody.innerHTML = tableRow;
}

function deleteUser(index) {
    if(userList && userList.length){
        userList.splice(index, 1);
    }
    createUserTable();
}

function addUser(){
    let data =  { name: 'Cherry', mobile: '8756453456', email: 'chery@gmail.com', city: 'Hyderabad' };
    userList.push(data);
    createUserTable();
}

//Function call
createUserTable();