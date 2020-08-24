import { animals, descriptions, categories } from './data';

export function getAnimalsByCategoryId(id) {
    return animals.filter(animal => animal.categoryId === id);
}

export function getRandomFact(id) {
    const description = descriptions.find(item => item.animalId === id);
    const listFacts = description.facts
    return listFacts[Math.floor(Math.random() * listFacts.length)];
}
