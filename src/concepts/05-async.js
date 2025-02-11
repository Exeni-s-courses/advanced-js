import { heroes } from '../data/heroes'
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {

    const id = '5d86371fd55e2e2a30fe1cc3';
    findHero(id);
}


/**
 * 
 * @param {String} id 
 * @returns 
 */
const findHero = (id) => {
    const hero = heroes.find(hero => hero.id === id);
    return hero;
}