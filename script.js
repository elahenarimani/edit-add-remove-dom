"use strict"
let data = [{
        name: "ali",
        age: 20,
        id: 1
    },
    {
        name: "nazanin",
        age: 20,
        id: 2
    },
    {
        name: "mohammad",
        age: 20,
        id: 3
    },
    {
        name: "reza",
        age: 20,
        id: 4
    },
    {
        name: "elahe",
        age: 20,
        id: 5
    }
];
let x;
const reciveData = document.getElementById("get-data");
let index;
let users = document.getElementById("users");

function makeTable(dataBase) {
    let dataInTable = `
    <tr>
    <td>name</td>
    <td>age</td>
    <td>option</td>
    </tr>
    <tr>
    <td><input id="new-name" placeholder="name"></td>
    <td><input id="new-age" placeholder="age"></td>
    <td id="get-data"><button  onclick="getData()">add</button></td>
    </tr>
    <tr>
    <td><input id="edit-name" placeholder="edit name" ></td>
    <td><input id="edit-age" placeholder="edit age" ></td>
    <td><button onclick="editData()">submit edited</button></td>
    </tr>`
    dataBase.forEach(item => {
        dataInTable = dataInTable + `<tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td onclick="removeDate(${item.id})"><button>delete</button></td>
        <td onclick="getEditData(${item.id})"><button>edit</button></td>
        </tr>`
    });
    users.innerHTML = dataInTable;
};
makeTable(data);

function removeDate(numberOfRemoving) {
    data = data.filter(item => item.id !== numberOfRemoving);
    makeTable(data)
}

function getData() {
    const newName = document.getElementById("new-name");
    const newAge = document.getElementById("new-age")
    console.log(newName.value);
    console.log(newAge.value);
    console.log(data)
    data.push({
        name: newName.value,
        age: newAge.value,
        id: data.at(-1).id + 1
    })
    console.log(data);
    makeTable(data);
};

function getEditData(numberOfEditing) {
    // x=numberOfEditing;
    console.log(x);
    let newData;
    const editName = document.getElementById("edit-name");
    const editAge = document.getElementById("edit-age");
    console.log(editName);
    console.log(data);
    index = data.map(item => item.id).indexOf(numberOfEditing);
    x = index;
    console.log(index);
    console.log(data);
    newData = data.find(item => item.id == index + 1);
    console.log(data);
    console.log(editName.value = newData.name);
    console.log(editAge.value = newData.age);
    console.log(newData);
}

function editData() {
    let newData;
    console.log(data)
    console.log(x);
    const editName = document.getElementById("edit-name");
    const editAge = document.getElementById("edit-age");
    console.log(editName);
    console.log(editAge);
    console.log(editName.value);
    console.log(editAge.value);
    console.log(data);
    data[x].name = editName.value;
    data[x].age = editAge.value;
    console.log(data)
    makeTable(data);
}