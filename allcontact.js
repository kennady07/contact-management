const API_URL = "http://localhost:3000/users";  // Local JSON server url running at port 3000 run the server by 'npx json-server -p 3000 db.json'


//Fill the table with contact detils from json file
document.getElementById("getbtn").addEventListener("click", async function(){
    alert("this is alert message");
    const data = await getdata();
    data.forEach(function(e){
        const newrow = `<tr id="${e.id}">
                        <td>${e.id}</td>
                        <td>${e.name}</td>
                        <td>${e.email}</td>
                        <td>${e.phone}</td>
                        <td>${e.addr}</td>
                        <td><button id="btn" onclick="editdata()">EDIT</button>&nbsp;<button id="btn" onclick="deletedata('${e.id}')">DELETE</button>&nbsp;<button id="btn" onclick="favdata()">FAVORITE</button></td>
                    <tr>`;
        table.innerHTML += newrow;
    });
});
// fetching the data from json file
async function getdata(){
    try {
       
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        });
        const data = await response.json();
        return data;
    } catch(err) {
        console.log(err);
    }
}


//delete the contact detail using id of the respective contact.
async function deletedata(id){
    try{
        const response = await fetch(`${API_URL}/${id}`,{ // The url of the json server is constructed again using the id that of the user wanted to be deleted 

            method:"DELETE"
        })
       
        alert("This contact details is removed form file");
    }catch(err){
        console.log(err);
    }
}




function favdata(){
    alert("it is working properly")
}






