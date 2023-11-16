const firebaseConfig = {
    apiKey: "AIzaSyDFa2FEFz3caMgPOUxood7v9turVpci8jo",
    authDomain: "doankangdien.firebaseapp.com",
    databaseURL: "https://doankangdien-default-rtdb.firebaseio.com",
    projectId: "doankangdien",
    storageBucket: "doankangdien.appspot.com",
    messagingSenderId: "83082397162",
    appId: "1:83082397162:web:202eba87a1c485bc73de93",
    measurementId: "G-WRWEWVM02E"
  };

  firebase.initializeApp(firebaseConfig);
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            alert("Bạn đã đăng kí thành công")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}

const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            alert("Bạn đã đăng nhập thành công")
            window.location.assign("vehicle_registration.html")
            console.log(result)
        })
        .catch((error) => {
            alert("Email hoặc mật khẩu không đúng")
            console.log(error.code);
            console.log(error.message)
        });
}