import { heroes } from '../data/heroes'
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {

    const id = '5d86371fd55e2e2a30fe1cc3';
    findHero(id).then(element.innerHTML).catch(element.innerHTML)
}


/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    return hero.name;
}