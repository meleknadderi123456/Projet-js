
    const nom = document.getElementById("nom");
    const prenom = document.getElementById("prenom");
    const telephone = document.getElementById("telephone");
    const dateRv = document.getElementById("dateRv");
    const messageElement = document.getElementById("message");
    const confirmerBtn = document.getElementById("confirmerBtn");
    
    

    confirmerBtn.addEventListener('click', verif)
        function verif() {
            let hasError = false;

            // Vérification des champs vides
             if (nom.value.trim() === "") {
                
                showError(nom, "Erreur : Nom requis.");
                hasError = true; } 
             if (prenom.value.trim() === "") {
                 showError(prenom, "Erreur : Prénom requis.");
                 hasError = true; } 
             if (telephone.value.trim() === "") {
                 showError(telephone, "Erreur : Numéro de téléphone requis.");
                  hasError = true; }
             if (dateRv.value.trim() === "") { showError(dateRv, "Erreur : Date de rendez-vous requise."); hasError = true; }

       

            if (/[\d]/.test(nom.value)) {
            showError(nom , "Le nom ne doit pas contient des chiffres");
            hasError = true;
        }

            if (/[\d]/.test(prenom.value)) {
            showError(prenom , "Le prénom ne doit pas contenit de chiffres.");
            hasError = true;
        }

            if (isNaN(telephone.value) || telephone.value.length !== 8) {
            showError(telephone ,"8 chiffre");
            hasError = true;
        }
        if(!hasError){
            messageElement.innerText = "Formulaire soumis avec succès!";

        }

        
    }

    function showError(inputField,message){
        const errorMessage = document.createElement("p");
        errorMessage.style.color="red";
        errorMessage.textContent=message;
        inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);
    }

    function clearErrors(){
        const errorMessages = document.querySelectorAll("p"); // Sélectionner tous les éléments <p>
    errorMessages.forEach(msg => msg.remove()); // Supprimer chaque message
}
    


