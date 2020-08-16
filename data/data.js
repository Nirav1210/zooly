import Images from './images';

export const animals = [
    {
        animalId: 1,
        categoryId: 1,
        name: "Lion",
        image_url: Images.Animals.Lion,
        audio_url: "",
        description: "Lions are the only cats that live in groups"
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
      photo_url: Images.Categories.Mammals,
      description: 'A mammal is an animal that breathes air, has a backbone, and grows hair at some point during its life. In addition, all female mammals have glands that can produce milk. Mammals are among the most intelligent of all living creatures.'
    },
    {
      id: 2,
      name: 'Birds',
      photo_url: Images.Categories.Birds,
      description: 'The main characteristic of a bird is feathers. No other animal has feathers. Other important features for birds are wings and hollow bones. Birds also lay eggs, like reptiles, however they are warm-blooded, like mammals.'
    },
    {
      id: 3,
      name: 'Fish',
      photo_url: Images.Categories.Fish,
      description: 'All fish are cold-blooded animals that live in the water. They have backbones, fins, and gills.'
    },
    {
      id: 4,
      name: 'Reptiles',
      photo_url: Images.Categories.Reptiles,
      description: "Reptiles are animals that are cold-blooded. Most reptiles lay eggs and their skin is covered with hard, dry scales. Animals that are cold-blooded don't automatically maintain a constant body temperature. They have to lay out in the sun to keep their body heat up."
    },
    {
      id: 5,
      name: 'Amphibians',
      photo_url: Images.Categories.Amphibians,
      description: 'Amphibians live the first part of their lives in the water and the last part on the land. When they hatch from their eggs, amphibians have gills so they can breathe in the water. They also have fins to help them swim, just like fish. Later, their bodies change, growing legs and lungs enabling them to live on the land. The word "amphibian" means two-lives, one in the water and one on land.'
    },
];

export const descriptions = [
    {
        animalId: 1,
        facts: [
            'In the wild they live for between 10 and 14 years. They live up to 25 years in captivity.',
            'Lions are the most social of all big cats and live together in groups or “prides.” A pride consists of about 15 lions.',
            'Lions are the only cats that live in groups.',
            'Female lions are the main hunters. While they’re out looking for food, the males guard the pride’s territory and their young.',
            'A lion’s roar can be heard up to eight kilometres away.',
            'Lions scent mark their territory, using their wee, to create a border.',
            'Lions hunt for food every few days. They will feed from their kill and then rest until they hunt again.',
            'Both male and female lions roar. They usually start off with a few long, deep roars followed by shorter, faster ones.',
            'Lions also make other noises. They meow, hiss and snarl, like domestic cats, but louder.',
            'The main two types of lion are the African lion and the Asian lion',
            'Lions are the laziest of all the big cats, and can sleep for 16-20 hours each day.',
            'A lioness usually gives birth to between one and four lion babies.',
            'A lion can run for short distances at 50 mph and leap as far as 36 feet',
            'A good gauge of a male lion’s age is the darkness of his mane. The darker the mane, the older the lion.',
            'A lion’s heels don’t touch the ground when it walks.',
            'A female lion needs 5kg of meat a day. A male needs 7kg or more a day.',
            'After a hunt, all the lions in the pride share the meal. But there is a pecking order, with the adult males taking first claim, followed by the lionesses, and finally, the cubs.',
            'Since their prey is still generally faster than them, they use teamwork to bring an animal down.',
            'The heaviest lion on record weighed an amazing 375 kg (826 lb).',
            'The vision of a lion, for example, is roughly six times more sensitive to light than human vision. This gives lions a distinct advantage when hunting at night.',
        ]
    }
]