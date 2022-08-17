
export const getList = (pathToList) => {

    // Vi
    console.log('getList', pathToList)

    // Vi returnere fetch som ultimativt er et promise.
    return fetch(pathToList)
    .then((response) => response.json())
    .catch((e) => {

        console.log('Her fanger vi eventuelle fejl. Prøv, at ændre filnavnet. udekriver selve fejlbeskeden. ->', e)

    })
    
}