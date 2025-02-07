import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    console.log('callbacksComponent');

    const id = '5d86371f25a058e5b1c8a65e';
    findHeroe(id, (hero) => {
        element.innerHTML = hero.name
    });



}

/**
 * 
 * @param {String} id 
 * @param {(hero: Object) => void} callback 
 */
const findHeroe = (id, callback) => {

    const hero = heroes.find(heroes => heroes.id === id);

    callback(hero);
}