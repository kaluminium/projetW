const randomChoice = (array, prob) => {
    // array: tableau de choix
    // prob: tableau de probabilité (si null, pas de probabilité)

    // Si le tableau est vide, on retourne null
    if(array.length === 0) return null;

    // Si le tableau n'est pas un tableau, on retourne null
    if(Array.isArray(array) === false) return null;

    // Choix par défaut (si il n'y a pas de probabilité)
    defaultChoice = array[Math.floor(Math.random() * array.length)]

    // Si il n'y a pas de probabilité, on retourne le choix par défaut
    if(prob !== null) return defaultChoice;

    // Si il y a une probabilité, on vérifie que le tableau de probabilité est valide
    if(Array.isArray(prob) === false){
        console.log("The probabilities are not an array or an object")
        return defaultChoice;
    }

    // On vérifie que le tableau de probabilité est de la même taille que le tableau de choix
    if(prob.length !== array.length) {
        console.log("The probabilities array is not the same size as the choices array")
        return defaultChoice;
    }

    // On vérifie que la somme des probabilités est égale à 1
    let total = 0;
    for(let i = 0; i < prob.length; i++) total += prob[i];
    if(total != 1) {
        console.log("The sum of the probabilities is not equal to 1")
        return defaultChoice;
    }

    // On calcule la probabilité
    let rand = Math.random();
    let current = 0;
    for(let i = 0; i < prob.length; i++){
        current += prob[i];
        if(rand < current) return array[i];
    }
}

module.exports = randomChoice;