let data = `{ 
              "name": "mkyong",
              "age":  "30",
              "address": {
                          "streetAdress": "88 8nd Street",
                          "city": "New York"
                        },
              "phoneNumber":[
                                {
                                "type":"home",
                                "number":"111 111-1111"
                                },
                                {
                                "type":"fax",
                                "number":"222"
                                }
                            ]
            }`

let jsObj=JSON.parse(data)
console.log(jsObj.name) //mkyong
console.log(jsObj.age) //30

console.log(jsObj.address.streetAdress) //88 8nd Street

console.log(jsObj.address.city) //New York
console.log(jsObj.address["city"]) //New York

console.log(jsObj.phoneNumber[0].type+":", jsObj.phoneNumber[0].number) //home: 111 111-1111
console.log(jsObj.phoneNumber[1].type+":", jsObj.phoneNumber[1].number) //fax: 222