// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  restaurants: [
    {
      __typename: 'Restaurants',
      id: 42,
    },
    {
      __typename: 'Restaurants',
      id: 43,
    },
    {
      __typename: 'Restaurants',
      id: 44,
    },
  ],
})
