import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial calculator state
const initialState = {
  display: "0", // what user sees on screen
  first: null, // first number entered
  operator: null, // operator selected (+ - * /)
};

const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    // Add digits to the display
    digit: (state, action) => {
      state.display =
        state.display === "0"
          ? action.payload // replace initial "0"
          : state.display + action.payload; // append digit
    },

    // Set an operator (+ - * /)
    setOperator: (state, action) => {
      state.first = parseFloat(state.display);
      state.operator = action.payload; // store operator
      state.display = "0";
    },

    // Perform calculation
    equals: (state) => {
      if (state.first != null && state.operator) {
        const second = parseFloat(state.display);

        switch (state.operator) {
          case "+":
            state.display = String(state.first + second);
            break;
          case "-":
            state.display = String(state.first - second);
            break;
          case "*":
            state.display = String(state.first * second);
            break;
          case "/":
            state.display =
              second !== 0 ? String(state.first / second) : "Error"; // handle ÷0
            break;
        }

        // Reset after calculation
        state.first = null;
        state.operator = null;
      }
    },

    // Reset calculator
    clear: (state) => {
      state.display = "0";
      state.first = null;
      state.operator = null;
    },
  },
});

export const { digit, setOperator, equals, clear } = calcSlice.actions;

// Redux store
export const store = configureStore({ reducer: { calc: calcSlice.reducer } });
