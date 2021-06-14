const sandy = {
  name: "Sandy",
  age: 26,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => sandy,
  },
};

export default resolvers;
