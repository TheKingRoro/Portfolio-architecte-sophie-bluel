//LOGIN

function loginuser() {
  const formulaireLogin = document.querySelector(".connect");
  formulaireLogin.addEventListener("submit", function (event) {
    alert("script en cours");
    event.preventDefault();
    //recupération du couple email, password
    const coupleLogin = {
      email: event.target.querySelector("#email").value,
      password: event.target.querySelector("#password").value,
    };
    console.log(coupleLogin);
    //adaptation de la charge pour envoi
    const chargeUtile = JSON.stringify(coupleLogin);

    //appel de la fonction fetch avec la charge adaptée
    fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers : {"accept" : "application/json"},
      headers: {"Content-Type": "application/json"},
      body: chargeUtile,
    });
  });
}
//appel de la fonction
loginuser();
console.log("chargé");

/*document.getElementById("form").addEventListener("submit", auth);

function auth(event) {
  event.preventDefault();

  const emailLog = document.getElementById("username").value;
  const passwordLog = document.getElementById("password").value;
  console.log(emailLog);

  if (emailLog === email.value && passwordLog === password.value) {
    window.location.replace("index.html");
  }
  if (emailLog === "" && passwordLog === "") {
    alert("Please enter information");
  } else {
    alert("Please enter valid information");
    return;
  }
}*/
