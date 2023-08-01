const myButton = document.getElementById('btn');
const myName = document.getElementById('name');
const myEmail = document.getElementById('email');
const myAge = document.getElementById('age');
const myBody = document.getElementById('table-body');
const err = document.getElementById('err');

let user = [];

myButton.addEventListener('click', function(){
    err.innerHTML = "";
    myBody.innerHTML = "";
    if(myName.value ==="" || myEmail.value ===""  || myAge.value ===""){
        err.innerHTML = "All fields are required"
    } else{
        let userinfo = {
            myName: myName.value,
            myEmail: myEmail.value,
            myAge: myAge.value
        }
        user.push(userinfo);
    }

    for(var i=0; i<user.length; i++) {
        //New table rw
        let userRow = document.createElement('tr');

        //New th for order
        let userOrder = document.createElement('th');
        userOrder.innerText = i + 1

        //New td for Name
        let userName = document.createElement('td');
        userName.innerText = user[i].myName;

        //New td for email
        let userEmail = document.createElement('td');
        userEmail.innerText = user[i].myEmail;

        //New td for age
        let userAge = document.createElement('td');
        userAge.innerText = user[i].myAge;
        
        userRow.appendChild(userOrder);
        userRow.appendChild(userName);
        userRow.appendChild(userEmail);
        userRow.appendChild(userAge);

        myBody.appendChild(userRow);
    }
})


