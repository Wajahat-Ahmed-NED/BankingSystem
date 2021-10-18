

var tbl = document.getElementById('main')
let k = 1;

console.log("chalgaya")
// for(let j=0; j<i)
firebase.database().ref('transactions').on('child_added', function (data) {
    console.log(data.val().name)
    let sName = document.createTextNode(data.val().sName)
    let rName = document.createTextNode(data.val().rName)
    let amount = document.createTextNode(data.val().amount)
    let num = document.createTextNode(k)
    k++;
    var tr = [];

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td0 = document.createElement('td');


    for (var i = 1; i < 4; i++) {
        tr[i] = document.createElement('tr');
        for (var j = 1; j < 4; j++) {
            td0.appendChild(num)
            td1.appendChild(sName);
            td2.appendChild(rName);
            td3.appendChild(amount);

            tr[i].appendChild(td0);
            tr[i].appendChild(td1);
            tr[i].appendChild(td2);
            tr[i].appendChild(td3);

        }
        tbl.appendChild(tr[i]);

    }

})
    // console.log(firebase.database().ref('customers').length)

