import Images from './images';

export const animals = [
    {
        animalId: 1,
        categoryId: 1,
        name: "Lion",
        image_url: Images.Animals.Lion,
        audio_url: "",
        description: "Lion is a big mammal"
    },
    {
        animalId: 2,
        categoryId: 2,
        name: "Eagle",
        image_url: Images.Animals.Eagle,
        audio_url: "",
        description: "Eagles are large, powerfully built birds of prey, with heavy heads and beaks. Even the smallest eagles have relatively longer and more evenly broad wings, and more direct, faster flight – despite the reduced size of aerodynamic feathers."
    },
    {
        animalId: 3,
        categoryId: 3,
        name: "Shark",
        image_url: Images.Animals.Shark,
        audio_url: "",
        description: "I am Shark"
    },
];

export const categories = [
    {
      id: 1,
      name: 'Mammals',
      photo_url: Images.Categories.Mammals
    },
    {
      id: 2,
      name: 'Birds',
      photo_url: Images.Categories.Birds
    },
    {
      id: 3,
      name: 'Fish',
      photo_url: Images.Categories.Fish
    },
    {
      id: 4,
      name: 'Reptiles',
      photo_url: Images.Categories.Reptiles
    },
    {
      id: 5,
      name: 'Amphibians',
      photo_url: Images.Categories.Amphibians
    },
];