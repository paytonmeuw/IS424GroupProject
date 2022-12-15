let signupbtn = document.querySelector("#signupbtn");
let signup_modal = document.querySelector("#signup_modal");
let signup_modalbg = document.querySelector("#signup_modalbg");

let loginbtn = document.querySelector("#loginbtn");
let login_modal = document.querySelector("#login_modal");
let login_modalbg = document.querySelector("#login_modalbg");
let submitbtn = document.querySelector("#submitbtn");
let code2 = document.querySelector("#code2");
let code1 = document.querySelector("#code1");
let search = document.querySelector("#search");
let available_spaces = document.querySelector("#available_spaces");
let home = document.querySelector("#home");

code2.style.display = "none";


available_spaces.addEventListener("click", () => {
  code1.style.display = "none";
  code2.style.display = "block";
  fetchdata();
});

home.addEventListener("click", () => {
  code1.style.display = "block";
  code2.style.display = "none";
});

// Sign-up modal link
signupbtn.addEventListener("click", () => {
  signup_modal.classList.add("is-active");
});

signup_modalbg.addEventListener("click", () => {
  signup_modal.classList.remove("is-active");
});

// Sign-in modal link
loginbtn.addEventListener("click", () => {
  login_modal.classList.add("is-active");
});

login_modalbg.addEventListener("click", () => {
  login_modal.classList.remove("is-active");
});

const loginBackground = document.getElementById("login-background");
const loginWindow = document.getElementById("login-window");
const signupWindow = document.getElementById("signup-window");



//attach sign up --> connect sign up and login with firebase database
document.querySelector("#signup_form").addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector(`#SignupEmailInput`).value;
  let password = document.querySelector(`#SignupPasswordInput`).value;
  // console.log(email);
  // console.log(password);
  // pass values to firebase
  // sign up user
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log("user created successfully");
      // close the modal
      signup_modal.classList.remove("is-active");
      // reset form
      signup_form.reset();
    })
    .catch((error) => {
      console.log(error.message);
      let signup_error = document.querySelector("#signup_error");
      signup_error.innerHTML = `<p> ${error.message} </p>`;
    });
});

// signing users in
let login_form = document.querySelector("#login_form");
login_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector(`#email_`).value;
  let password = document.querySelector(`#password_`).value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      console.log(
        userCredentials.user.email +
          " with the uid" +
          userCredentials.user.uid +
          " is logged in"
      );

      login_modal.classList.remove("is-active");
      // reset form
      login_form.rest;
    })

    .catch((error) => {
      console.log(error.message);
      let signin_error = document.querySelector("#signin_error");
      signin_error.innerHTMl = `<p> ${error.message}</p>`;
    });
});

// signing out

let signoutbtn = document.querySelector("#signoutbtn");

signoutbtn.addEventListener("click", (e) => {
  auth.signOut().then((msg) => {
    console.log("user signed out!");
  });
});

let loggedoutlinks = document.querySelectorAll(".loggedout");
let loggedinlinks = document.querySelectorAll(".loggedin");

function configureNav(user) {
  console.log(loggedoutlinks);
  console.log(loggedinlinks);
  // alert('k')
  // check if user is passed to function (signed in)
  if (user) {
    document.querySelector(
      "#welcome_user"
    ).innerHTML = `Welcome ${auth.currentUser.email}`;
    // show logged in links

    loggedinlinks.forEach((link) => {
      link.classList.remove("is-hidden");
    });
    // hide logged out
    loggedoutlinks.forEach((link) => {
      link.classList.add("is-hidden");
    });
  } else {
    loggedinlinks.forEach((link) => {
      // alert('logged out - loggedinlinks')
      link.classList.add("is-hidden");
    });
    // hide logged out
    loggedoutlinks.forEach((link) => {
      //  alert('logged out - loggedoutlinks')
      link.classList.remove("is-hidden");
    });
  }
}
// keep track of user authentication status (signin or signed out)
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("user is now signed in");
    configureNav(user);
  } else {
    console.log("user is now signed out");
    configureNav(user);
  }
});


// Pulling details from firebase database
async function fetchdata(filter) {
  let data = db.collection("coworkingSpaces");
  document.querySelector("#space").innerHTML = "";
  if (filter && filter.length > 0) {
    for (let i = 0; i < filter.length; i++) {
      data = data.where(filter[i], "==", true);
    }
  }
  data.get().then((snapshot) => {
    let html = ``;
    let mydocs = snapshot.docs;
    mydocs.forEach((mydoc) => {
      html += ` <img src=${mydoc.data().image_url} width="400" height="300">
      <p> ${mydoc.data().name} </p> <p> ${
        mydoc.data().description
      } </p> <p> ${mydoc.data().address} </p> <p> ${
        mydoc.data().hours
      } </p> <p> ${mydoc.data().company_email} </p> <p> ${
        mydoc.data().phone
      } </p> <p> ${mydoc.data().website} </p>`;
    });
    document.querySelector("#space").innerHTML += html;
  });
}


// check 
const checkboxOffice = document.querySelector('#office');
const checkboxMeeting = document.querySelector('#meeting');
const checkboxEvent = document.querySelector('#event');
const checkboxParking = document.querySelector('#parking');

search.addEventListener("click", () => {
  code1.style.display = "none";
  code2.style.display = "block";
  let filterTag = []
  if (checkboxOffice.checked == true){
    filterTag.push("private_office");
  }
  if (checkboxMeeting.checked == true){
    filterTag.push("meeting_rooms");
  }
  if (checkboxEvent.checked == true){
    filterTag.push("events");
  }
  if (checkboxParking.checked == true){
    filterTag.push("parking");
  }
  fetchdata(filterTag);
});
