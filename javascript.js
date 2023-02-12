
let data_list = [
    {
      name: "Emma Watson",
      phone: "+1 (555) 555-1234",
      email: "emma.watson@email.com"
    },
    {
      name: "Olivia Smith",
      phone: "+1 (555) 555-2345",
      email: "olivia.smith@email.com"
    },
    {
      name: "Ava Johnson",
      phone: "+1 (555) 555-3456",
      email: "ava.johnson@email.com"
    },
    {
      name: "Isabella Davis",
      phone: "+1 (555) 555-4567",
      email: "isabella.davis@email.com"
    },
    {
      name: "Sophia Wilson",
      phone: "+1 (555) 555-5678",
      email: "sophia.wilson@email.com"
    },
    {
      name: "Mia Anderson",
      phone: "+1 (555) 555-6789",
      email: "mia.anderson@email.com"
    },
    {
      name: "Charlotte Martinez",
      phone: "+1 (555) 555-7890",
      email: "charlotte.martinez@email.com"
    },
    {
      name: "Amelia Taylor",
      phone: "+1 (555) 555-8901",
      email: "amelia.taylor@email.com"
    },
    {
      name: "Harper Davis",
      phone: "+1 (555) 555-9012",
      email: "harper.davis@email.com"
    },
    {
      name: "Evelyn Wilson",
      phone: "+1 (555) 555-0123",
      email: "evelyn.wilson@email.com"
    }
  ];

window.onload = print_data_in_table(data_list)

function print_data_in_table(data_list) {

    let table = document.getElementById('data_table');

    for (var i = 0; i < data_list.length; i++) {

        let row = table.insertRow(-1);

        let name = row.insertCell(0);
        let phone = row.insertCell(1);
        let email = row.insertCell(2);

        let del_action = row.insertCell(3);
        let edit_action = row.insertCell(4);

        name.innerHTML = data_list[i].name;
        phone.innerHTML = data_list[i].phone;
        email.innerHTML = data_list[i].email;

        let del_btn = document.createElement('button')
        del_btn.className = 'delete'
        del_btn.id = i
        del_btn.innerHTML = 'delete'
        del_action.appendChild(del_btn)

        let edit_btn = document.createElement('button')
        edit_btn.className = 'edit'
        edit_btn.id = i
        edit_btn.innerHTML = 'edit'
        edit_action.appendChild(edit_btn)


    }
}

function clear_data_from_table() {

    let x = document.getElementById('data_table');
    while (x.rows.length > 1) {
        x.deleteRow(1);
    }

}

function add_new() {


    let new_object = {
        name: document.getElementById('name_input').value,
        phone: document.getElementById('phone_input').value,
        email: document.getElementById('email_input').value
    }
if (new_object.name != '' && new_object.phone!='' && new_object.email!=''){

 data_list.push(new_object)

    document.getElementById('name_input').value = ''
    document.getElementById('phone_input').value = ''
    document.getElementById('email_input').value = ''


}
   else{
alert('data is not complete!')

   }
}

function delete_item(listIndex) {

    data_list.splice(listIndex, 1)

}

function edit_item(listIndex) {

    var new_name = prompt("Enter new name:");
    if (new_name == null) {
        return
    }

    var new_phone = prompt("Enter new phone:");
    if (new_phone == null) {
        return
    }
    var new_email = prompt("Enter new email:");
    if (new_email == null) {
        return
    }

    data_list.push(
        [new_name, new_phone, new_email])


    alert("this new info saved: " + [new_name, new_phone, new_email]);
    delete_item(listIndex)
}

let save_button = document.getElementById('save_button');

save_button.addEventListener('click', function () {

    add_new()
    clear_data_from_table()
    print_data_in_table(data_list)

})

let table = document.getElementById('data_table');
table.addEventListener('click', function (event) {

    var target = event.target;

    if (target.className === "delete") {
        let response = window.confirm('are you sure?')
        if (response) {

            delete_item(target.id)
            clear_data_from_table()
            print_data_in_table(data_list)
        }


    }

    if (target.className === "edit") {
        edit_item(target.id)
        clear_data_from_table()
        print_data_in_table(data_list)

    }


})

const searchInput = document.getElementById("search_input");
searchInput.addEventListener("keyup", function () {

    const searchTerm = searchInput.value;
    const results = data_list.filter(item => {
        return Object.values(item).some(val => {
            return val.toString().toLowerCase().includes(searchTerm.toLowerCase());
        });
    });


    clear_data_from_table()
    print_data_in_table(results)

});
