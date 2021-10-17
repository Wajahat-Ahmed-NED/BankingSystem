let modd=document.getElementById("mod")
const a = document.getElementById('sender')
const b = document.getElementById("receiver")
const c = document.getElementById("tAmount")
const d = document.getElementById("tAmount")
const e = document.getElementById("tAmount")

// console.log(a1[0])
// console.log(am)
var key;
function check() {

    if (a.value != 0 && b.value != 0 && (b.value != a.value) && c.value > 0) {
        let note=document.createTextNode("Successful Transfer")
        modd.innerText=""
        modd.appendChild(note)
        let sno = +(a.value) - 1
        console.log(c.value)
      
        let rno = +(b.value) - 1
        const a1 = [];
        a1.push(c.value)
        const b1 = [];
        b1.push(c.value)
        // alert("Successful Transfer")
        // alert(+(a.value)+2)
        let sender, reciever;

        firebase.database().ref('customers/' + sno).on('value', function (data) {
            sender = data.val().name
            // console.log(sender)
            // console.log("pehly"+a1[0])
            let obj1 = {
                balance: +(data.val().balance) - (+(c.value)),
                name: sender,
                email: data.val().email,
                key: data.val().key,
            }
            c.value = ""
            // console.log("baad "+a1[0]*2)
            // console.log("no "+(+a1[0])*2)
            // console.log("baad "+typeof(+a1[0]))

            
            // // fBalance=""
            // // console.log(obj)
            firebase.database().ref('customers/' + sno).set(obj1)
            // console.log(obj)
            // firebase.database().ref("transactions").child(key-1).child(balance).setValue(fBalance)
        })
        firebase.database().ref('customers/' + rno).on('value', function (data) {
            reciever = data.val().name
            // console.log(d.value)
            // console.log("e ki"+e.value)
            // console.log("a1 ki"+(+a1[0]))
            let bal= +(data.val().balance) + (+a1[0])
            setTimeout(() => {
            // console.log(reciever)
            // console.log(a1[0])
            // console.log((data.val().balance))
            // console.log(bal)
            let obj2 = {

                name: reciever,
                email: data.val().email,
                balance:bal,
                key: data.val().key,
            }
            a1[0]=""
            // fBalance=""
            // console.log(obj)
            firebase.database().ref('customers/' + rno).set(obj2)
            }, 2000);
            
        })


        // if (sender && reciever) {
        //     resolve(sender)
        // }
        // else{
        //     reject("Something went wrong")
        // }


        setTimeout(function () {


            var database = firebase.database().ref('transactions')
            key = database.push().key

            let transaction = {
                sName: sender,
                rName: reciever,
                amount: +(b1[0]),
                key: key
            }
            database.child(key).set(transaction)


        }, 4000)
        // transCount++;
        
    }
    else {
        
        // alert("Please Enter Correct Details")
        let note=document.createTextNode("Provide correct details")
        modd.innerText=""
        modd.appendChild(note)
        // window.location.reload(); 
        
    }

}





