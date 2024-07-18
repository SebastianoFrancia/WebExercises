function generateTable() {
    var nColumn = document.getElementById("nColumn").value;
	var nRow = document.getElementById("nRow").value;

	const tableContainer = document.getElementById("tableContainer");
	const table = document.createElement("table");
	table.style.borderCollapse = "collapse";
	const oldTable = tableContainer.querySelector("table"); 
	                       
	if (oldTable) {   
		             
		oldTable.remove(); 
	}
	for (var i = 0; i < nColumn; i++) 
	{
		const row = document.createElement("tr");

		for (var j = 0; j < nRow; j++) 
		{
			const cell = document.createElement("td");
			cell.style.width = "25px";    
			cell.style.height = "25px";
			cell.style.border = "1px solid black";
			cell.style.backgroundColor = "white";

			cell.addEventListener("mouseover", 
			function () 
			{
                var temNum = Math.floor(Math.random() * 100) + 1;
                this.textContent = temNum;
                if(temNum % 2 == 0) cell.style.backgroundColor = "red";
                else cell.style.backgroundColor = "green"
			});

			row.appendChild(cell);
		}
		table.appendChild(row);
	}
	tableContainer.appendChild(table);
}


