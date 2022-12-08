// // Sign up user

// r_e('signup_form').addEventListener('submit', (e) => {
//     e.preventDefault(); //(No page refresh)

//     // Grab the email and password combination from the form

//     let email = r_e('email').value;
//     let password = r_e('password').value;

//     // Call the Firebase function to create the user

//     auth.createUserWithEmailAndPassword(email, password).then((user) => {

//         // Show sign up successful message on message bar
//         configure_message_bar(`${user.user.email} is successfully created!`)

//         // Reset the form
//         r_e('signup_form').reset();

//         // Close the modal
//         r_e('signup_modal').classList.remove('is-active');

//     }).catch(err => {
//         signup_modal.querySelector('.error').innerHTML = err.message;
//     })

// })

// // Fetch documents from a given collection
// function load_data(coll, loc, field, val) {
//     // Check if we pass all 4 arguments

//     let query = "";

//     if (field && val) {
//         query = db.collection(coll).where(field, '==', val);
//     } else {
//         query = db.collection(coll);
//     }

//     query.get().then(res => {

//         let documents = res.docs;

//         // Html reference

//         html = "";
//         // Loop through the documents array
//         documents.forEach(doc => {
//             html += `<div class="box has-background-primary">`;
//             // Check if current user email matches email stored on the document

//             if (auth.currentUser.email == doc.data().user_email) {
//                 // Show th button for deletion
//                 html += `<h1 class="title">${doc.data().city} <button class="button is-pulled-right is-danger" onclick="del_doc('bucketlist', '${doc.id}')">Remove from BucketList</button> </h1>`; // add the BucketList title inside an h1

//             } else {
//                 // Hide the deletion button

//                 html += `<h1 class="title has-text-black">${doc.data().city}, ${doc.data().country} </h1>`; // Add the BucketList title inside an h1
//                 html += `<p class=" has-text-white has-text-weight-bold">*Reach out to: ${doc.data().user_email} for more trip details!</p>`
//             }

//             html += `<p class="has-text-black has-text-weight-bold"> Country: ${doc.data().country}</p>`;
//             html += `<p class="has-text-black has-text-weight-bold"> Continent: ${doc.data().continent}</p>`;
//             html += `<p class="has-text-black has-text-weight-bold"> Price range: ${doc.data().price}</p>`;
//             html += `<p class="has-text-black has-text-weight-bold"> Average temperature: ${doc.data().temp} degrees F</p>`;

//             html += `<p class="has-text-black has-text-weight-bold"> To do here: ${doc.data().excursions}</p>`;
//             html += `<p class=" has-text-centered m-3"><img width="200" src="${doc.data().url}" /></p>`
//             html += `</div>`;
//         })

//         // Ensure the loc div is not hidden

//         r_e(loc).classList.remove('is-hidden');

//         // Show on the div#content

//         r_e(loc).innerHTML = html;

//     })
// }

// function configure_content(user) {
//     // Check user authentication status

//     if (user) {
//         // User signed in

//         // Fetch data from the bucketlist collection

//         load_data('bucketlist', 'content');

//         // Show the left and right columns
//         r_e('index_header').classList.remove('is-hidden');
//         r_e('l_column').classList.remove('is-hidden');
//         r_e('r_column').classList.remove('is-hidden');

//     } else {
//         // Set the content inside the main div
//         r_e('content').innerHTML = `<p class="title has-text-centered has-text-danger">Please sign-in to view content</p>`
//         r_e('index_header').classList.add('is-hidden');
//         // Hide the left and right columns
//         r_e('l_column').classList.add('is-hidden');
//         r_e('r_column').classList.add('is-hidden');

//     }
// }

// // Sign in user

// r_e('signin_form').addEventListener('submit', (e) => {
//     e.preventDefault(); //Prevent default behaviour of browser (no page refresh)

//     // Grab the email and password combination from the form

//     let email = r_e('email_').value;
//     let password = r_e('password_').value;

//     // Call the Firebase function to sign-in the user

//     auth.signInWithEmailAndPassword(email, password).then((user) => {

//         // Reset the form
//         r_e('signin_form').reset();

//         // Close the modal
//         r_e('signin_modal').classList.remove('is-active');

//     }).catch(err => {
//         signin_modal.querySelector('.error').innerHTML = err.message;
//     })

// })

// // Sign out user

// r_e('signoutbtn').addEventListener('click', () => {

//     auth.signOut().then(() => {

//     })
// })

// // Track user authentication status with onauthstatechanged

// auth.onAuthStateChanged((user) => {
//     // Check if user signed in or out
//     if (user) {
//         // Show sign in successful message on message bar
//         configure_message_bar(`${auth.currentUser.email} is successfully signed in!`)

//         // Show user email in navigation bar
//         r_e('user_email').innerHTML = `<p class="has-text-danger has-text-weight-bold has-text-centered">User:</p> ${auth.currentUser.email}`;

//         // Configure main column content
//         configure_content(user);

//         // Configure the navigation bar
//         configure_nav_bar(user);

//     } else {
//         // Show sign out message to user on message bar

//         configure_message_bar("You signed out successfully!")

//         // Remove user email from navigation bar
//         r_e('user_email').innerHTML = "";

//         // Configure main column content
//         configure_content();

//         // Configure the navigation bar
//         configure_nav_bar();
//     }
// })
