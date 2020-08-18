var myTable = document.getElementById("myTable");

function createTable(x,y){
    var tbl = document.createElement("table");
    for(var i = 0; i < 255; i = i + 255/x){
        var row = document.createElement("tr");
        for(var j = 0; j < 255; j = j + 255/y){
            var col = document.createElement("td");
            var colText = document.createTextNode(`RGB(0 ${i} ${j})`);
            var colSpan = document.createElement("span");
            colSpan.appendChild(colText)
            col.appendChild(colSpan);
            col.style.backgroundColor = `rgb(0,${i},${j})`;
            row.appendChild(col);   
        }
            tbl.appendChild(row);
        
    }
    
    
            myTable.appendChild(tbl);
    
    
    
}
createTable(15,15);

