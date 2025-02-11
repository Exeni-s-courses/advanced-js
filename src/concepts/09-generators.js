
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorsComponent = (element) => {

    const myGenerator = myFisrtGeneratorFunction();

    console.log(myGenerator.next())
    
}


function* myFisrtGeneratorFunction() {

    yield 'Mi primer valor'

    return 'No hay valores'
}