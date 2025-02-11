
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorsComponent = (element) => {

    // const myGenerator = myFisrtGeneratorFunction();

    // console.log(myGenerator.next())
    
    const genId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);


    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${ value }`
    }

    console.log(genId.next());


    button.addEventListener('click', renderButton);

}


function* idGenerator() {
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
}

function* myFisrtGeneratorFunction() {

    yield 'Mi primer valor'

    return 'No hay valores'
}