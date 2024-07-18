function Riconize() 
{
    let string = document.getElementById("string").value;
	let newString = document.getElementById("newString").value;
	
	if(Contains(string, newString) == true)
	{
		document.getElementById("output").textContent = "Contains";
	}
	else
	{
		document.getElementById("output").textContent = "not Contains";
	}

}


function Contains(stringOne, contieneString)
{
	for (var i = 0; i<stringOne.length; i++)
	{
		var charEquals = true;

		for(var j = 0; j<contieneString.length; j++)
		{
			if(stringOne[i+j]!=contieneString[j])
			{
				charEquals = false;
				break;
			}
		}

		if(charEquals == true)
		{
			return true;
		}
	}

	return false;

}