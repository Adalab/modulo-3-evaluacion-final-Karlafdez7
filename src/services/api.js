const callToApi = () => {
  // Llamamos a la API
  return fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
    .then((response) => response.json())
    .then((data) => {
      // Cuando responde la API podemos limpiar los datos aquí
    const selectionApi = data.map((eachCharacter) => {
        return {
          name: eachCharacter.name,
          photo: eachCharacter.image,
          species: eachCharacter.species,
          id: eachCharacter.id,
        };
      });
      return selectionApi;
    });
};

export default callToApi;