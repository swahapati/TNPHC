
// (newcell.rowIndex)
// (rowCount-2)
function addRow(tableID) {
   var table = document.getElementById(tableID);
   var rowCount = table.rows.length;
   var row = table.insertRow(rowCount);
   var colCount = table.rows[3].cells.length;
   for(var i=0; i<colCount; i++) {
       var newcell = row.insertCell(i);
       if(i==1){
       newcell.innerHTML = (rowCount-2);
       }
        else{
        newcell.innerHTML = table.rows[3].cells[i].innerHTML;
               
             
        }
    }}
   





// function regroup(i,tableID) {
//     var table = document.getElementById(tableID);
//     var rowCount = table.rows.length;
//     row= table.rows[i];
    
  
//     for (var j= i+1; j < rowCount; j--) {
//       table.rows[j] = (i+1);
//     }
//   }


function regroup(tableID) {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    var colCount = table.rows[3].cells.length;
    var j=1;
  
    for (var i = 3; i < rowCount; i++) {
        
        table.rows[i].cells[1].innerHTML=j;
        j++
     }
  }

function deleteRow(tableID) {
   try {
   var table = document.getElementById(tableID);
   var rowCount = table.rows.length;
   // var current = '';
   for(var i=0; i<rowCount; i++) {
       var row = table.rows[i];
       var chkbox = row.cells[0].childNodes[0];
       if(null != chkbox && true == chkbox.checked) {
           if(rowCount <= 4) {
               alert("Cannot delete all the rows");
               break;
           }
            else{
           table.deleteRow(i);
           rowCount--;
            i--;}
         regroup(tableID);
       }
   }
   }catch(e) {
       alert(e);
   }
}



function myFunction() {
    var x = document.getElementsByClassName("myDIV");
    for (i=0;i<x.length;i++){

    if (x[i].style.display === "none") {
      x[i].style.display = "block";
    } else {
      x[i].style.display = "none";
    }
  }
}



// function addRow(tableID) {  
//     var table = document.getElementById(tableID);  
//     var rowCount = table.rows.length;  
//     var row = table.insertRow(rowCount);  
//     //Column 1  
//     var cell1 = row.insertCell(0);  
//     var element1 = document.createElement("input");  
//     element1.type = "button";  
//     var btnName = "button" + (rowCount + 1);  
//     element1.name = btnName;  
//     element1.setAttribute('value', 'Delete'); // or element1.value = "button";  
//     element1.onclick = function() {  
//         removeRow(btnName);  
//     }  
//     cell1.appendChild(element1);  
//     //Column 2  
//     var cell2 = row.insertCell(1);  
//     cell2.innerHTML = rowCount + 1;  
//     //Column 3  
//     var cell3 = row.insertCell(2);  
//     var element3 = document.createElement("input");  
//     element3.type = "text";  
//     cell3.appendChild(element3);  
// }  
  
// function removeRow(btnName) {  
//     try {  
//         var table = document.getElementById('dataTable');  
//         var rowCount = table.rows.length;  
//         for (var i = 0; i < rowCount; i++) {  
//             var row = table.rows[i];  
//             var rowObj = row.cells[0].childNodes[0];  
//             if (rowObj.name == btnName) {  
//                 table.deleteRow(i);  
//                 rowCount--;  
//             }  
//         }  
//     } catch (e) {  
//         alert(e);  
//     }  
// } 




// function deleteRow() {
//     let checkboxs = document.querySelectorAll("input[type='checkbox']:checked");
//     checkboxs.forEach(function (checkbox) {
//       checkbox.parentElement.remove();
//     });
//   }