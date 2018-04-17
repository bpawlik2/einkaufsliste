
// !IMPORTANT: REPLACE WITH YOUR OWN CONFIG OBJECT BELOW


// Initialize Firebase
var config = {
	apiKey: "AIzaSyAmOQ1MyCR55pZ1oypCIo-Vfya9XzB0MGI",
	authDomain: "pawlikeinkaufsliste.firebaseapp.com",
	databaseURL: "https://pawlikeinkaufsliste.firebaseio.com",
	projectId: "pawlikeinkaufsliste",
	storageBucket: "pawlikeinkaufsliste.appspot.com",
	messagingSenderId: "843413985525"
};


firebase.initializeApp(config);

// Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const artikelRef = dbRef.child('artikel');


	readartikelData(); 
	

// --------------------------
// READ
// --------------------------
function readartikelData() {

	const artikelListUI = document.getElementById("artikel-list");

	artikelRef.on("value", snap => {

		artikelListUI.innerHTML = ""

		snap.forEach(childSnap => {

			let key = childSnap.key,
				value = childSnap.val()
  			
			let $li = document.createElement("li");

			// edit icon
			let editIconUI = document.createElement("span");
			editIconUI.class = "edit-artikel";
			editIconUI.innerHTML = " ✎";
			editIconUI.setAttribute("artikelid", key);
			editIconUI.addEventListener("click", editButtonClicked)

			// delete icon
			let deleteIconUI = document.createElement("span");
			deleteIconUI.class = "delete-artikel";
			deleteIconUI.innerHTML = " ☓";
			deleteIconUI.setAttribute("artikelid", key);
			deleteIconUI.addEventListener("click", deleteButtonClicked)
			
			$li.innerHTML = value.name;
			$li.append(editIconUI);
			$li.append(deleteIconUI);

			$li.setAttribute("artikel-key", key);
			$li.addEventListener("click", artikelClicked)
			artikelListUI.append($li);

 		});


	})

}



function artikelClicked(e) {


		var artikelID = e.target.getAttribute("artikel-key");

		const artikelRef = dbRef.child('artikel/' + artikelID);
		const artikelDetailUI = document.getElementById("artikel-detail");

		artikelRef.on("value", snap => {

			artikelDetailUI.innerHTML = ""

			snap.forEach(childSnap => {
				var $p = document.createElement("p");
				$p.innerHTML = childSnap.key  + " - " +  childSnap.val();
				artikelDetailUI.append($p);
			})

		});
	

}





// --------------------------
// ADD
// --------------------------

const addartikelBtnUI = document.getElementById("add-artikel-btn");
addartikelBtnUI.addEventListener("click", addartikelBtnClicked)



function addartikelBtnClicked() {

	const artikelRef = dbRef.child('artikel');

	const addartikelInputsUI = document.getElementsByClassName("artikel-input");

 	// this object will hold the new artikel information
    let newartikel = {};

    // loop through View to get the data for the model 
    for (let i = 0, len = addartikelInputsUI.length; i < len; i++) {

        let key = addartikelInputsUI[i].getAttribute('data-key');
        let value = addartikelInputsUI[i].value;
        newartikel[key] = value;
    }

	artikelRef.push(newartikel)

    
   console.log(myPro)
   


}


// --------------------------
// DELETE
// --------------------------
function deleteButtonClicked(e) {

		e.stopPropagation();

		var artikelID = e.target.getAttribute("artikelid");

		const artikelRef = dbRef.child('artikel/' + artikelID);
		
		artikelRef.remove();

}


// --------------------------
// EDIT
// --------------------------
function editButtonClicked(e) {
	
	document.getElementById('edit-artikel-module').style.display = "block";

	//set artikel id to the hidden input field
	document.querySelector(".edit-artikelid").value = e.target.getAttribute("artikelid");

	const artikelRef = dbRef.child('artikel/' + e.target.getAttribute("artikelid"));

	// set data to the artikel field
	const editartikelInputsUI = document.querySelectorAll(".edit-artikel-input");


	artikelRef.on("value", snap => {

		for(var i = 0, len = editartikelInputsUI.length; i < len; i++) {

			var key = editartikelInputsUI[i].getAttribute("data-key");
					editartikelInputsUI[i].value = snap.val()[key];
		}

	});




	const saveBtn = document.querySelector("#edit-artikel-btn");
	saveBtn.addEventListener("click", saveartikelBtnClicked)
}


function saveartikelBtnClicked(e) {
 
	const artikelID = document.querySelector(".edit-artikelid").value;
	const artikelRef = dbRef.child('artikel/' + artikelID);

	var editedartikelObject = {}

	const editartikelInputsUI = document.querySelectorAll(".edit-artikel-input");

	editartikelInputsUI.forEach(function(textField) {
		let key = textField.getAttribute("data-key");
		let value = textField.value;
  		editedartikelObject[textField.getAttribute("data-key")] = textField.value
	});



	artikelRef.update(editedartikelObject);

	document.getElementById('edit-artikel-module').style.display = "none";


}



        








