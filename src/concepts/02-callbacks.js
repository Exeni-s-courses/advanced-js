import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    console.log('callbacksComponent');

    const id = '5d86371f25a058e5b1c8a65e';
    findHeroe(id, (error, hero) => {
        // element.innerHTML = hero?.name || 'No hay heroe';
        if (error) {
            element.innerHTML = error;
            return
        }
        element.innerHTML = hero?.name;
    });



}

/**
 * 
 * @param {String} id 
 * @param {(error: String | null, hero: Object) => void} callback 
 */
const findHeroe = (id, callback) => {

    const hero = heroes.find(heroes => heroes.id === id);

    if (!hero) {
        callback(`Hero witrh id ${id} not found.`);
        return;
    }

    callback(null, hero);
}