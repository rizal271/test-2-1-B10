
 let daf =
[
	{
		name: 'Tatas',
		company: 'Arkademy',
		job: 'Trainer',
		status: 'single',
		city: 'Jogja'
    }, 
	{
		name: 'Pratama',
		company: 'Emago',
		job: 'Trainer',
		status: 'single',
		city: 'Jakarta'
	}
]

let dafnew = daf.map(a => {
	const returnValue = {...a};
  
	if (a.name == "Tatas") {
	  returnValue.status = "married";
	  returnValue.city = "Jakarta";
	} else {
		returnValue.company = "Arkademy";
		returnValue.city = "Jogja";
	}
  
	return returnValue
  })

 
// const a = daf.map(value => [value.name, value.company, value.job, value.status, value.city].join(" "))
console.log(daf)
console.log(dafnew)

