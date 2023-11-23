
const buyTicket = () => {
    let result = []
    let firstname = document.getElementById('firstname')
    let lastname = document.getElementById('lastname')
    let ticket = document.getElementById('ticket')
    let price = document.getElementById('price')
    result.push({
            firstname: firstname.value,
            lastname: lastname.value, 
            ticket: ticket.value, 
            price: price.value
        })
    // result.push(firstname)
    console.log(result)
    let tr = ""

    for (item of result) {
        tr+= "<tr>" + 
            "<td>" + item.firstname +"</td>"+
            "<td>" + item.lastname +"</td>"+
            "<td>" + item.ticket +"</td>"+
            "<td>" + item.price +"</td>"+
        "</tr>"
    }
    document.getElementById('tr').innerHTML = tr
}