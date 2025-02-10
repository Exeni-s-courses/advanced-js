import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {
    
    
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }
  
    const renderTwoHero = (hero1, hero2) => {
        element.innerHTML = `${hero1.name} - ${hero2.name}`;
    }
    
    const renderError = (error) => {
        element.innerHTML = `
            <h3> ${error} </h3>
        `;
    }
    const id1 = '5d86371f9f80b591f499df32';
    const id2 = '5d86371fd55e2e2a30fe1ccb1';


    // forma 1
    // findHero(id1).then((hero1) => {
        
    //     findHero(id2).then((hero2) => {
    //         renderTwoHero(hero1, hero2);
    //     }).catch(renderError)

    // }).catch(renderError)

    // forma 2
    // let hero1;
    // findHero(id1).then(hero => {
    //     hero1 = hero;
    //     return findHero(id2);
    // }).then(hero2 => {
    //     renderTwoHero(hero1, hero2);
    // }).catch(renderError)

    // forma 3
    Promise.all([
        findHero(id1),
        findHero(id2)
    ]).then(([hero1, hero2]) => renderTwoHero(hero1, hero2)).catch(renderError)
}

/**
 * 
 * @param {String} id 
 * @returns { Promise }
 */
const findHero = (id) => {
    return new Promise((resolve, reject) => {
        const hero = heroes.find(hero => hero.id === id);
        if (!hero) {
            reject(`Hero with id ${id} not found`);
            return;
        };
        resolve(hero);
    });
}