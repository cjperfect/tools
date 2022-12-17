import { createSlice } from "@reduxjs/toolkit";

export interface CounterStateType {
	value: number;
}

const initialState: CounterStateType = {
	value: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			// Redux Toolkit允许我们在reducers中直接写改变state的逻辑.
			// 由于使用了Immer库,所以并没有真的改变state
			// 而是检测到“草稿state”的更改并根据这些更改生成一个全新的不可变state
			state.value += 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

// reducer方法的每一个case都会生成一个Action
export const { increment, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
