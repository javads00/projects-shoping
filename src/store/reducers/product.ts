import { PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { GenerateSlice } from "../generateSlice";

export interface CreateProduct {
  id: string;
  name: string | null;
  price: number | null;
  count: number;
}

const initialState: CreateProduct[] = [];

const slice = GenerateSlice<
  CreateProduct[],
  SliceCaseReducers<CreateProduct[]>
>({
  initialState,
  name: "Product",
  reducers: {
    createProductItem: (state, { payload }: PayloadAction<CreateProduct>) => {
      if (!payload.id) return;

      const existingIndex = state.findIndex(
        (product) => product.id === payload.id
      );
      if (existingIndex !== -1) {
        state[existingIndex] = {
          ...state[existingIndex],
          ...payload,
          count: state[existingIndex].count + payload.count,
        };
      } else {
        const newItem = {
          ...payload,
          count: 1,
        };
        state.push(newItem);
      }
    },

    decreaseProduct: (state, { payload }: PayloadAction<CreateProduct>) => {
      if (!payload.id) return;
      const existingIndex = state.findIndex(
        (product) => product.id === payload.id
      );
      if (existingIndex !== -1) {
        state[existingIndex] = {
          ...state[existingIndex],
          ...payload,
          count: state[existingIndex].count + 1,
        };
      }
    },

    increaseProduct: (state, { payload }: PayloadAction<CreateProduct>) => {
      if (!payload.id) return;
      const existingIndex = state.findIndex(
        (product) => product.id === payload.id
      );

      console.log(existingIndex, "existingIndex");

      if (existingIndex !== -1) {
        if (state[existingIndex].count == 1) {
          return state.filter((product) => product.id !== payload.id);
        }
        state[existingIndex] = {
          ...state[existingIndex],
          ...payload,
          count: state[existingIndex].count - 1,
        };
      }
    },
    removeProductItem: (state, { payload }: PayloadAction<string>) => {
      return state.filter((product) => product.id !== payload);
    },
  },
});

export const {
  createProductItem,
  removeProductItem,
  decreaseProduct,
  increaseProduct,
} = slice.actions;
export default slice.reducer;
