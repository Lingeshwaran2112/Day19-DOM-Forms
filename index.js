var row = null
var count = 0;
function handlesubmit() {
   var data = gatherdata();
   if (row == null) {
        if (count >=  3) {
            
            tablelayout(data)
        } else {
            
            confirm("Please select atleast 3 food items");        
            updaterow(data)
        
        }
        } else {
         let counter = 0;
                
                if (document.getElementById("defaultCheck1").checked) {
            
                    counter = counter + 1;
        
                }
        
                if (document.getElementById("defaultCheck2").checked) {
            
                    counter = counter + 1;
           
                }
         
                if (document.getElementById("defaultCheck3").checked) {
            
                    counter = counter + 1;
        
                }
        
                if (document.getElementById("defaultCheck4").checked) {
              
                    counter = counter + 1;
        
                }
        
                if (document.getElementById("defaultCheck5").checked) {
            
                    counter = counter + 1;
        
                }
        
                console.log(counter);
        
                if (counter <  3) {
            
                    confirm("Please select atleast 3 food items");
        
                } else updaterow(data);
    }
                row = null
                resetform();
}


function gatherdata() {
    
                    var obj = {}
    
                    obj["firstname"] = document.getElementById("firstname").value;
                    obj["lastname"] = document.getElementById("lastname").value;
                    obj["address"] = document.getElementById("address").value;
                    obj["PINCODE"] = document.getElementById("PINCODE").value;
    
                    if (document.getElementById("gridRadios1").checked) {
        
                        obj["Gender"] = 'Male'
    
                    } 
    
                    if (document.getElementById("gridRadios2").checked) {
        
                        obj["Gender"] = 'Female';
    
                    }

                    let food = [];
    
                    if (document.getElementById("defaultCheck1").checked) {
        
                        count = count + 1;
                        food.push('food1')
    
                    }
    
                    if (document.getElementById("defaultCheck2").checked) {
        
                        count = count + 1;
                        food.push('food2')
    
                    }
    
                    if (document.getElementById("defaultCheck3").checked) {
        
                        count = count + 1;
                        food.push('food3')
    
                    }
    
                    if (document.getElementById("defaultCheck4").checked) {
        
                        count = count + 1;
                        food.push('food4')
    
                    }
    
                    if (document.getElementById("defaultCheck5").checked) {
        
                        count = count + 1;
                        food.push('food5')
    
                    }

                    obj["State"] = document.getElementById("State").value;
                    obj["Country"] = document.getElementById("Country").value;
                    obj["fooditems"] = food.join(',')
                return obj;
                }


function tablelayout(x) {
    
    console.log('table',x);
    
                var table = document.getElementById("myTable");
                var row = table.insertRow(table.length);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6);
                var cell8 = row.insertCell(7);
                var cell9 = row.insertCell(8);
  
                    cell1.innerHTML = `${x["firstname"]}`;
                    cell2.innerHTML = `${x["lastname"]}`;
                    cell3.innerHTML = `${x["address"]}`;
                    cell4.innerHTML = `${x["PINCODE"]}`;
                    cell5.innerHTML = `${x["Gender"]}`;
                    cell6.innerHTML = `${x["fooditems"]}`;
                    cell7.innerHTML = `${x["State"]}`;
                    cell8.innerHTML = `${x["Country"]}`;
                    cell9.innerHTML = `
    
                    <button class="btn btn-danger" onclick="deleteitem(this)">Delete</button>
                    <button class="btn btn-warning" onclick="updateitem(this)">update</button>`;
  }

  function resetform() {
                
                document.getElementById("firstname").value = "";
                document.getElementById("lastname").value = "";
                document.getElementById("address").value = "";
                document.getElementById("PINCODE").value = "";
                document.getElementById("gridRadios1").checked = false;
                document.getElementById("gridRadios2").checked = false;
                document.getElementById("defaultCheck1").checked = false;
                document.getElementById("defaultCheck2").checked = false;
                document.getElementById("defaultCheck3").checked = false;
                document.getElementById("defaultCheck4").checked = false;
                document.getElementById("defaultCheck5").checked = false;
                document.getElementById("State").value = "";
                document.getElementById("Country").value = "";
  
            }

 function updateitem(x) {
                    count = 0;
                    row = x.parentElement.parentElement;
    
                    console.log(row.cells[4]);
         
                    document.getElementById("firstname").value = row.cells[0].innerHTML;
                    document.getElementById("lastname").value = row.cells[1].innerHTML;
                    document.getElementById("address").value = row.cells[2].innerHTML;
                    document.getElementById("PINCODE").value = row.cells[3].innerHTML;
    
                    if (row.cells[4].innerHTML === "Male") {
        
                        document.getElementById("gridRadios1").checked = true
    
                    }
    
                    if (row.cells[4].innerHTML === "Female") {
        
                        document.getElementById("gridRadios2").checked = true
    
                    }

                    if (row.cells[5].innerHTML === "food1") {
        
                        document.getElementById("defaultCheck1").checked = true
    
                    }
    
                    if (row.cells[5].innerHTML === "food2") {
        
                        document.getElementById("defaultCheck2").checked = true
    
                    }
    
                    if (row.cells[5].innerHTML === "food3") {
        
                        document.getElementById("defaultCheck3").checked = true
    
                    }
    
                    if (row.cells[5].innerHTML === "food4") {
        
                        document.getElementById("defaultCheck4").checked = true
    
                    }
     
                    if (row.cells[5].innerHTML === "food5") {
        
                        document.getElementById("defaultCheck5").checked = true
    
                    }
    
                            document.getElementById("State").value = row.cells[6].innerHTML;
                            document.getElementById("Country").value = row.cells[7].innerHTML;
 
  }

            function deleteitem(x) {
    
                if (confirm("Are you sure to Delete this?")) {
      
                    let selectedrow = x.parentElement.parentElement;
                    document.getElementById("myTable").deleteRow(selectedrow.rowIndex);
            resetform();
        }
  }

            function updaterow(x) {
                    
                    row.cells[0].innerHTML = x.Firstname;
                    row.cells[1].innerHTML = x.Lastname;
                    row.cells[2].innerHTML = x.Address;
                    row.cells[3].innerHTML = x.PINCODE;
                    row.cells[4].innerHTML = x.Gender;
                    row.cells[5].innerHTML = x.Fooditems;
                    row.cells[6].innerHTML = x.State;
                    row.cells[7].innerHTML = x.Country;
  }