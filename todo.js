
  

  function getAnUpdate(){
    console.log("Updating List...");
tit = document.getElementById('title').value;
desc = document.getElementById('description').value;
if(localStorage.getItem('itemJson')==null){
  itemJsonArray = [];
  itemJsonArray.push([tit, desc]);
localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
}
else{
  itemJsonArrayStr = localStorage.getItem('itemJson')
  itemJsonArray  = JSON.parse(itemJsonArrayStr);
  itemJsonArray.push([tit, desc]);
  localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))

}
update();

  }

  function update(){
    if(localStorage.getItem('itemJson')==null){
  itemJsonArray = [];
localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
}
else{
  itemJsonArrayStr = localStorage.getItem('itemJson')
  itemJsonArray  = JSON.parse(itemJsonArrayStr);
  

}
// populate the table 

let tableBody = document.getElementById("tableBody");
let str = "";
itemJsonArray.forEach((eLement, index) => {
  str += `
  <tr>
    <th scope="row">${index + 1}</th>
    <td>${eLement[0]}</td>
    <td>${eLement[1]}</td>
    <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
  </tr>`;
  });
tableBody.innerHTML = str;
  }
    add = document.getElementById("add");
    add.addEventListener("click", getAnUpdate);
    update();
    function deleted(itemIndex){
      console.log("Delete", itemIndex);
      itemJsonArrayStr = localStorage.getItem('itemJson')
  itemJsonArray  = JSON.parse(itemJsonArrayStr);
// Delete itemIndex element from the array
itemJsonArray.splice(itemIndex, 1);
  localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
  update();

    }

    function clearStorage(){
      if(confirm("Do you want to clear?")){

     
      console.log('clearing the storage')
      localStorage.clear();
      update();

    }
    }
    const tableBodyDisplay = document.getElementById("tableBody");
   const alltr = document.querySelectorAll('#tableBody tr');
   
   const searchInputField = document.querySelector('#search');
   
   searchInputField.addEventListener('input', function(e){
    
    const searchStr = e.target.value.toLowerCase();
    
    tableBodyDisplay.innerHTML ='';
    
    alltr.forEach(tr=>{
      
      const td_in_tr = tr.querySelectorAll('td')[0];
      const td_in_td = tr.querySelectorAll('td')[1];

      
      if((td_in_tr.innerText.toLowerCase().indexOf(searchStr) > -1)+(td_in_td.innerText.toLowerCase().indexOf(searchStr) > -1)){
        
        tableBodyDisplay.appendChild(tr);
        
      }
    });
    if(tableBodyDisplay.innerHTML == ''){
      tableBodyDisplay.innerHTML = 'No records Founds';
    }
     //console.log(e.target.value);
   });