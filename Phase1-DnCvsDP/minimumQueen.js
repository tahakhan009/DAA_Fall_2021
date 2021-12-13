var arr=new Array();
//var input=document.getElementById("text1").value;
var Raw;
var column;
var copyInp;
function inputArr(){
    
    var input = document.getElementById("text1").value;
    Raw=input;
    column=input;
    copyInp=input;
    var center = document.createElement('right');
    //arr=new Array();
    for (var i = 0; i < input; i++) {
        arr[i]=new Array();
        for(var j=0;j<input;j++){

            arr[i][j]=0;
        }
    }
    
 
    if(input<=20){    
    // Create a table element
        var ChessTable = document.createElement('table');
        ChessTable.setAttribute('class','c1')
        
        for (var i = 0; i < input; i++) {
 
            // Create a row
            //arr[i]=new Array();
            var tr = document.createElement('tr');
            for (var j = 0; j < input; j++) {

 
                // Create a cell and append the value in array
                //if((arr[i][j]==arr[i])){
                    //arr[i][j]=1;

                //}
                //arr[i][j]=0;
                var td = document.createElement('td');
                
 
                // If the sum of cell coordinates is even
                // then color the cell white
                if ((i + j) % 2 == 0) {
 
                    // Create a class attribute for all white cells
                    td.innerHTML="0"
                    td.setAttribute('class', 'cell whitecell');
                    tr.appendChild(td);
                }
 
                // If the sum of cell coordinates is odd then
                // color the cell black
                else {
 
                    // Create a class attribute for all black cells
                    td.innerHTML="&#9819;"
                    td.setAttribute('class', 'cell blackcell');
 
                    // Append the cell to its row
                    tr.appendChild(td);
                }
            }
           // solve(arr,column);
 
            // Append the row
            ChessTable.appendChild(tr);
        }
        center.appendChild(ChessTable);
 
        // Modifying table attribute properties
        ChessTable.setAttribute('cellspacing', '0');
        ChessTable.setAttribute('width', '270px');
        document.body.appendChild(center);
    }
    else{
        alert('Your limit exceed...')
    }
        
}

