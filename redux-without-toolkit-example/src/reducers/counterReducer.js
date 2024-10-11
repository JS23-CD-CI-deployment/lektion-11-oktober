const initialState = {
  // Här bestämmer vi allt som vi vill spara i vår Redux store i formen av ett objekt
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (
    action.type // Fungerar som en if-sats baserat på ett scenario så går den in i ett case
  ) {
    case "INCREASE": // Om case är INCREASE som kommer från type i vår action
      return {
        ...state, // Kopiera ditt state
        counter: state.counter + action.payload, // Välj vilken del i din store du vill uppdatera, i detta fall counter
      };
    case "DECREASE":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
