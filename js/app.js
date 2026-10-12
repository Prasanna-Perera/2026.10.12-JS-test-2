console.log("hello");



//add localStorage items
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");
// localStorage.setItem("city", "New York");

// retrieve localStorage items
// localStorage.removeItem("age")


//data read from localStorage

// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");
// let city = localStorage.getItem("city");
// console.log(name, age, city);

//Objects in localStorage
//  let customer =[{
//     name : "Amal",
//     age: 25,
//     isMarried: true,
//  },
// {
//     name : "kmal",
//     age: 30,
//     isMarried: false,
// },
// {
//     name : "Manula",
//     age: 30,
//     isMarried: false,
// }]

// localStorage.clear();

// //---set customer in localStorage
// //1st step: convert object to string
// let stringCustomer = JSON.stringify(customer);
// //2nd step: store string in localStorage
// localStorage.setItem("customer", stringCustomer);


// //---get customer from localStorage--
// //1st step: retrieve string from localStorage
// let getcustomer =  localStorage.getItem("customer");
// //2nd step: convert string back to object
// let parsedCustomer = JSON.parse(getcustomer);
// console.log(parsedCustomer);




// ---------------------- CRUD operations in localStorage--------------------

let customerList = JSON.parse(localStorage.getItem("customerList")) || [];

function btnaddCustomrOnAction() {

    customerList.push({
        id: document.getElementById("txtid").value,
        name: document.getElementById("txtname").value,
        age: document.getElementById("txtage").value,
        address: document.getElementById("txtaddress").value,
    });
    localStorage.setItem("customerList", JSON.stringify(customerList));
    btnLoadTableOnAction();
      
}

function btnSearchCustomrOnAction() {
    alert("search customer");

    document.getElementById("txtid").value = customerList[0].id;
    document.getElementById("txtname").value = customerList[0].name;
    document.getElementById("txtage").value = customerList[0].age;
    document.getElementById("txtaddress").value = customerList[0].address;
    
}

function btnDeleteCustomrOnAction() {
    alert("delete customer");
    document.getElementById("txtid").value = "";
    document.getElementById("txtname").value = "";
    document.getElementById("txtage").value = "";
    document.getElementById("txtaddress").value = "";   
}

function btnUpdateCustomrOnAction() {
    alert("update customer");
    document.getElementById("txtid").value = customerList[0].id;
    document.getElementById("txtname").value = customerList[0].name;
    document.getElementById("txtage").value = customerList[0].age;
    document.getElementById("txtaddress").value = customerList[0].address;
}

function btnClearStorageOnAction() {
    localStorage.clear();
    customerList = [];
    document.getElementById("txtid").value = "";
    document.getElementById("txtname").value = "";
    document.getElementById("txtage").value = "";
    document.getElementById("txtaddress").value = "";
}

function btnClearConsoleOnAction(){
    document.getElementById("txtid").value = "";
    document.getElementById("txtname").value = "";
    document.getElementById("txtage").value = "";
    document.getElementById("txtaddress").value = "";
}

function btnLoadTableOnAction() {
    alert("load table");

    let tblbdy = "";

    customerList.forEach(customer => {
        tblbdy += `
            <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.age}</td>
            <td>${customer.address}</td>
        </tr>
        `;
    });
    document.getElementById("tblCustomer").innerHTML = tblbdy;
}