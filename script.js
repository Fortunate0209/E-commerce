var cart = []
// var add = document.getElementById('add');
// var show = document.getElementById('show')


function submitItem(){
    if (items.value == ''){
        show.style.display = 'block'
        // add.addEventListener('click',()=>{
        //     show.classList.remove('d-none');
        //     show.classList.add('d-block')
        // })
    } else {
        big.style.display = 'block'
        cart.push (items.value)
        console.log(cart);
        document.getElementById('items').value = ''
        displayItem ()
        
    } 
}

function displayItem(){
    show.style.display= 'none'
    var html = '<table>';
    html += '<tr>';
    html +='<th>'+ 'S/N'+ '</th>'
    html +=`<th> Product </th>`;
    
    html +='</tr>';
        for (var i=0; i < cart.length; i++){
            html += '<tr>';
            html += `<td><small>${i+1}</small></td>`;
            html += `<td style = "width: 220px;"><small>${cart[i]}</small></td>`;
            html += '</tr>';



        }
        html += '</table>';
        document.getElementById('area').innerHTML = html;
} 

function delFirst (){
    cart.shift()
    // console.log(cart);
    displayItem()
}

function delLast (){
    cart.pop()
    // console.log(cart);
    displayItem()
}

function addStart (){
    cart.unshift(document.getElementById('items').value)
    displayItem()
}

function delAll (){
    var confrimation = confirm('are you sure you want to delete the item')
    // console.log(confrimation);
    if (confrimation == true){
        cart.splice(0, cart.length)
        displayItem()
        
    }
}

function delAny (){
    var start = Number(prompt('which item do you want to delete'))
    // console.log(start);
    cart.splice(start-1, 1)
    displayItem()
}

function editAny (){
    var start = Number(prompt('which item do you want to edit'))
    var replacement = (prompt('enter the new item'))

    // console.log(start);
    cart.splice(start-1, 1, replacement)
    displayItem()
}