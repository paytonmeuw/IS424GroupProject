let signupbtn = document.querySelector("#signupbtn");
let signup_modal = document.querySelector("#signup_modal");
let signup_modalbg = document.querySelector("#signup_modalbg");

let loginbtn = document.querySelector("#loginbtn");
let login_modal = document.querySelector("#login_modal");
let login_modalbg = document.querySelector("#login_modalbg");

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

// Pulling details from firebase database
function fetchdata1() {
  db.collection("coworkingSpaces")
    .where("name", "==", "Brix Coworking")
    .get()
    .then((snapshot) => {
      let mydocs = snapshot.docs;
      let html = ``;
      mydocs.forEach((mydoc) => {
        html += `<p> ${mydoc.data().name} </p> <p> ${
          mydoc.data().description
        } </p> <p> ${mydoc.data().address} </p> <p> ${
          mydoc.data().hours
        } </p> <p> ${mydoc.data().company_email} </p> <p> ${
          mydoc.data().phone
        } </p> <p> ${mydoc.data().website} </p>`;
      });
      document.querySelector("#space1").innerHTML = html;
    });
}
fetchdata1();
function fetchdata2() {
  db.collection("coworkingSpaces")
    .where("name", "==", "Spaces Capitol East District")
    .get()
    .then((snapshot) => {
      let mydocs = snapshot.docs;
      let html = ``;
      mydocs.forEach((mydoc) => {
        html += `<p> ${mydoc.data().name} </p> <p> ${
          mydoc.data().description
        } </p> <p> ${mydoc.data().address} </p> <p> ${
          mydoc.data().hours
        } </p> <p> ${mydoc.data().company_email} </p> <p> ${
          mydoc.data().phone
        } </p> <p> ${mydoc.data().website} </p>`;
      });
      document.querySelector("#space2").innerHTML = html;
    });
}
fetchdata2();
function fetchdata3() {
  db.collection("coworkingSpaces")
    .where("name", "==", "Serendipity Labs")
    .get()
    .then((snapshot) => {
      let mydocs = snapshot.docs;
      let html = ``;
      mydocs.forEach((mydoc) => {
        html += `<p> ${mydoc.data().name} </p> <p> ${
          mydoc.data().description
        } </p> <p> ${mydoc.data().address} </p> <p> ${
          mydoc.data().hours
        } </p> <p> ${mydoc.data().company_email} </p> <p> ${
          mydoc.data().phone
        } </p> <p> ${mydoc.data().website} </p>`;
      });
      document.querySelector("#space3").innerHTML = html;
    });
}
fetchdata3();
function fetchdata4() {
  db.collection("coworkingSpaces")
    .where("name", "==", "Expansive Madison")
    .get()
    .then((snapshot) => {
      let mydocs = snapshot.docs;
      let html = ``;
      mydocs.forEach((mydoc) => {
        html += `<p> ${mydoc.data().name} </p> <p> ${
          mydoc.data().description
        } </p> <p> ${mydoc.data().address} </p> <p> ${
          mydoc.data().hours
        } </p> <p> ${mydoc.data().company_email} </p> <p> ${
          mydoc.data().phone
        } </p> <p> ${mydoc.data().website} </p>`;
      });
      document.querySelector("#space4").innerHTML = html;
    });
}
fetchdata4();

function fetchdata5() {
  db.collection("coworkingSpaces")
    .where("name", "==", "100 State")
    .get()
    .then((snapshot) => {
      let mydocs = snapshot.docs;
      let html = ``;
      mydocs.forEach((mydoc) => {
        html += `<p> ${mydoc.data().name} </p> <p> ${
          mydoc.data().description
        } </p> <p> ${mydoc.data().address} </p> <p> ${
          mydoc.data().hours
        } </p> <p> ${mydoc.data().company_email} </p> <p> ${
          mydoc.data().phone
        } </p> <p> ${mydoc.data().website} </p>`;
      });
      document.querySelector("#space5").innerHTML = html;
    });
}
fetchdata5();

function fetchdata6() {
  db.collection("coworkingSpaces")
    .where("name", "==", "Horizon Coworking")
    .get()
    .then((snapshot) => {
      let mydocs = snapshot.docs;
      let html = ``;
      mydocs.forEach((mydoc) => {
        html += `<p> ${mydoc.data().name} </p> <p> ${
          mydoc.data().description
        } </p> <p> ${mydoc.data().address} </p> <p> ${
          mydoc.data().hours
        } </p> <p> ${mydoc.data().company_email} </p> <p> ${
          mydoc.data().phone
        } </p> <p> ${mydoc.data().website} </p>`;
      });
      document.querySelector("#space6").innerHTML = html;
    });
}
fetchdata6();
function fetchdata7() {
  db.collection("coworkingSpaces")
    .where("name", "==", "Lodgic Workplace")
    .get()
    .then((snapshot) => {
      let mydocs = snapshot.docs;
      let html = ``;
      mydocs.forEach((mydoc) => {
        html += `<p> ${mydoc.data().name} </p> <p> ${
          mydoc.data().description
        } </p> <p> ${mydoc.data().address} </p> <p> ${
          mydoc.data().hours
        } </p> <p> ${mydoc.data().company_email} </p> <p> ${
          mydoc.data().phone
        } </p> <p> ${mydoc.data().website} </p>`;
      });
      document.querySelector("#space7").innerHTML = html;
    });
}
fetchdata7();
function fetchdata8() {
  db.collection("coworkingSpaces")
    .where("name", "==", "Urban Office Co")
    .get()
    .then((snapshot) => {
      let mydocs = snapshot.docs;
      let html = ``;
      mydocs.forEach((mydoc) => {
        html += `<p> ${mydoc.data().name} </p> <p> ${
          mydoc.data().description
        } </p> <p> ${mydoc.data().address} </p> <p> ${
          mydoc.data().hours
        } </p> <p> ${mydoc.data().company_email} </p> <p> ${
          mydoc.data().phone
        } </p> <p> ${mydoc.data().website} </p>`;
      });
      document.querySelector("#space8").innerHTML = html;
    });
}
fetchdata8();
function fetchdata9() {
  db.collection("coworkingSpaces")
    .where("name", "==", "Progress Center for Black Women")
    .get()
    .then((snapshot) => {
      let mydocs = snapshot.docs;
      let html = ``;
      mydocs.forEach((mydoc) => {
        html += `<p> ${mydoc.data().name} </p> <p> ${
          mydoc.data().description
        } </p> <p> ${mydoc.data().address} </p> <p> ${
          mydoc.data().hours
        } </p> <p> ${mydoc.data().company_email} </p> <p> ${
          mydoc.data().phone
        } </p> <p> ${mydoc.data().website} </p>`;
      });
      document.querySelector("#space9").innerHTML = html;
    });
}
fetchdata9();
function fetchdata10() {
  db.collection("coworkingSpaces")
    .where("name", "==", "StartingBlock Madison")
    .get()
    .then((snapshot) => {
      let mydocs = snapshot.docs;
      let html = ``;
      mydocs.forEach((mydoc) => {
        html += `<p> ${mydoc.data().name} </p> <p> ${
          mydoc.data().description
        } </p> <p> ${mydoc.data().address} </p> <p> ${
          mydoc.data().hours
        } </p> <p> ${mydoc.data().company_email} </p> <p> ${
          mydoc.data().phone
        } </p> <p> ${mydoc.data().website} </p>`;
      });
      document.querySelector("#space10").innerHTML = html;
    });
}
fetchdata10();
function fetchdata11() {
  db.collection("coworkingSpaces")
    .where("name", "==", "Matrix Coworking")
    .get()
    .then((snapshot) => {
      let mydocs = snapshot.docs;
      let html = ``;
      mydocs.forEach((mydoc) => {
        html += `<p> ${mydoc.data().name} </p> <p> ${
          mydoc.data().description
        } </p> <p> ${mydoc.data().address} </p> <p> ${
          mydoc.data().hours
        } </p> <p> ${mydoc.data().company_email} </p> <p> ${
          mydoc.data().phone
        } </p> <p> ${mydoc.data().website} </p>`;
      });
      document.querySelector("#space11").innerHTML = html;
    });
}
fetchdata11();
function fetchdata12() {
  db.collection("coworkingSpaces")
    .where("name", "==", "Synergy Coworking")
    .get()
    .then((snapshot) => {
      let mydocs = snapshot.docs;
      let html = ``;
      mydocs.forEach((mydoc) => {
        html += `<p> ${mydoc.data().name} </p> <p> ${
          mydoc.data().description
        } </p> <p> ${mydoc.data().address} </p> <p> ${
          mydoc.data().hours
        } </p> <p> ${mydoc.data().company_email} </p> <p> ${
          mydoc.data().phone
        } </p> <p> ${mydoc.data().website} </p>`;
      });
      document.querySelector("#space12").innerHTML = html;
    });
}
fetchdata12();
function fetchdata13() {
  db.collection("coworkingSpaces")
    .where("name", "==", "Office Evolution")
    .get()
    .then((snapshot) => {
      let mydocs = snapshot.docs;
      let html = ``;
      mydocs.forEach((mydoc) => {
        html += `<p> ${mydoc.data().name} </p> <p> ${
          mydoc.data().description
        } </p> <p> ${mydoc.data().address} </p> <p> ${
          mydoc.data().hours
        } </p> <p> ${mydoc.data().company_email} </p> <p> ${
          mydoc.data().phone
        } </p> <p> ${mydoc.data().website} </p>`;
      });
      document.querySelector("#space13").innerHTML = html;
    });
}
fetchdata13();

document.getElementById("login").onclick = function () {
  loginBackground.style.display = "block";
  loginWindow.style.display = "block";
  setTimeout(function () {
    loginBackground.style.opacity = "1";
    loginWindow.style.opacity = "1";
  }, 50);
};
document.getElementById("signup").onclick = function () {
  loginBackground.style.display = "block";
  signupWindow.style.display = "block";
  setTimeout(function () {
    loginBackground.style.opacity = "1";
    signupWindow.style.opacity = "1";
  }, 50);
};

loginBackground.onclick = function () {
  loginBackground.style.opacity = "0";
  loginWindow.style.opacity = "0";
  signupWindow.style.opacity = "0";
  setTimeout(function () {
    loginBackground.style.display = "none";
    loginWindow.style.display = "none";
    signupWindow.style.display = "none";
  }, 200);
};

//attach sign up --> connect sign up and login with firebase database
document.querySelector("#signup-button").addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.querySelector(`#SignupEmailInput`).value;
  let password = document.querySelector(`#SignupPasswordInput`).value;
  console.log(email);
  console.log(password);
  // pass values to firebase
  // sign up user
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log("user created successfully");
      // close the modal
      signupModal.classList.remove("is-active");
      // reset form
      signup_form.reset();
    })
    .catch((error) => {
      console.log(error.message);
      let signup_error = document.querySelector("#signup_error");
      signup_error.innerHTML = `<p> ${error.message} </p>`;
    });
});

// let space1 = {
//   name: "Spaces Capitol East District",
//   address:
//     "811 East Washington Avenue, 3rd and 4th Floor, Madison, Wisconsin 53703, United States of America",
//   hours: {
//     monday: "8:30-5:00",
//     tuesday: "8:30-5:00",
//     wednesday: "8:30-5:00",
//     thursday: "8:30-5:00",
//     friday: "8:30-5:00",
//   },
//   company_email: null,
//   phone: 18884254853,
//   description:
//     "Sharing tenancy with a brewery and a live music venue, this business centre sums of Madison perfectly: working hard and playing hard too. Spaces Capital East District is a distinctive cube building that never fails to make a great impression. From the branded elevator to the designer decor and a private rooftop terrace, this is an inspriational, flexible workspace that's hard to match. Stay productive with unlimited Wi-Fi, friendly staff and motivating, creative vibe. ",
//   website:
//     "https://www.spacesworks.com/madison/capitol-east-district/?utm_source=yext_places_gmb&utm_medium=places&utm_campaign=yext_traffic&utm_content=4980",
//   capacity: "55 offices",
//   private_office: true,
//   meeting_rooms: true,
//   parking: true,
//   events: true,
//   price_range: "55-239",
// };

// let space0 = {
//   name: "test",
// };

// db.collection("coworkingSpaces").add(space0);
