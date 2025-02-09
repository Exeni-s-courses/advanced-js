import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    console.log('callbacksComponent');

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f2343e37870b91ef1';
    findHeroe(id, (error, hero1) => {
        // element.innerHTML = hero?.name || 'No hay heroe';
        if (error) {
            element.innerHTML = error;
            return
        }
        findHeroe(id2, (errro, hero2) => {
            if (error) {
                element.innerHTML = error;
                return
            }
            element.innerHTML = `${hero1.name} / ${hero2.name}`;
        });
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