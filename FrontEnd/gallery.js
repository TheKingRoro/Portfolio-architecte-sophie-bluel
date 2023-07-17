
export function ajoutListenerAddProjet() {
   const formulaireProjet = document.querySelector(".formulaire-avis");
   formulaireAvis.addEventListener("submit", function (event) {
   event.preventDefault();
   // Création de l’objet du nouvel avis.
   const avis = {
       pieceId: parseInt(event.target.querySelector("[name=piece-id]").value),
       utilisateur: event.target.querySelector("[name=utilisateur]").value,
       commentaire: event.target.querySelector("[name=commentaire]").value,
       nbEtoiles: parseInt(event.target.querySelector("[name=nbEtoiles]").value)
   };
   // Création de la charge utile au format JSON
   const chargeUtile = JSON.stringify(avis);
   // Appel de la fonction fetch avec toutes les informations nécessaires
   fetch("http://localhost:8081/avis", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: chargeUtile
   });
   });
   
