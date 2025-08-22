let text=`{ "employee": [
                            {"firstName":"John", "lastName":"Doe"},
                            {"firstName":"Anna", "lastName":"Smith"},
                            {"firstName":"Peter", "lastName":"Jones"} 
                        ]
            }`

let jsObj=JSON.parse(text)
console.log(jsObj.employee[1].firstName, jsObj.employee[1].lastName ) //Anna Smith