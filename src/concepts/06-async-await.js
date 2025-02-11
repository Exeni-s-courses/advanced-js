import { heroes } from '../data/heroes'
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element) => {

    const id1 = '5d86371fd55e2e2a30fe1cc3';
    const id2 = '5d86371fd55e2e2a30fe1cc4';

    const {name: name1} = await findHero(id1);
    const {name: name2} = await findHero(id2);

    element.innerHTML = `${name1} / ${name2}`;

}


/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero) throw new Error(`Hero with id ${id} not found`);
    return hero.name;
}