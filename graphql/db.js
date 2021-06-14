export const people = [
  {
    id: 0,
    name: "Sandy",
    age: 26,
    gender: "female",
  },
  {
    id: 1,
    name: "Hocheeol",
    age: 29,
    gender: "male",
  },
  {
    id: 2,
    name: "Jeff",
    age: 26,
    gender: "male",
  },
  {
    id: 3,
    name: "Taek",
    age: 27,
    gender: "male",
  },
  {
    id: 4,
    name: "Karly",
    age: 28,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};
