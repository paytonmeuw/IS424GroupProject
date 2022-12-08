const loginBackground = document.getElementById("login-background");
const loginWindow = document.getElementById("login-window");
const signupWindow = document.getElementById("signup-window");

function fetchdata() {
  db.collection("coworkingSpaces")
    .where("name", "==", "100 State")
    .get()
    .then((snapshot) => {
      let mydocs = snapshot.docs;
      let html = ``;
      mydocs.forEach((mydoc) => {
        html += `<p> ${mydoc.data().name} </p> <p> ${
          mydoc.data().description
        } </p> `;
      });
      document.querySelector("#space5").innerHTML = html;
    });
}
fetchdata();

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
