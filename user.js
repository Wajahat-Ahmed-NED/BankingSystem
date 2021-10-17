
var tbl = document.getElementById('main')
let k = 0;
while (k < 10) {
    console.log("chalgaya")
    // for(let j=0; j<i)
    firebase.database().ref('customers/' + k).on('value', function (data) {
        console.log(data.val().name)
        let name = document.createTextNode(data.val().name)
        let email = document.createTextNode(data.val().email)
        let bal = document.createTextNode(data.val().balance)
        let num = document.createTextNode(data.val().key)
        var tr = [];

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td0 = document.createElement('td');


        for (var i = 1; i < 4; i++) {
            tr[i] = document.createElement('tr');
            for (var j = 1; j < 4; j++) {
                td0.appendChild(num)
                td1.appendChild(name);
                td2.appendChild(email);
                td3.appendChild(bal);

                tr[i].appendChild(td0);
                tr[i].appendChild(td1);
                tr[i].appendChild(td2);
                tr[i].appendChild(td3);

            }
            tbl.appendChild(tr[i]);

        }

    })
    // console.log(firebase.database().ref('customers').length)
    k++;
}