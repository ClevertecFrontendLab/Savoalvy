import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApplicationState } from './configure-store';

export type AppState = typeof initialState;

const initialState = {
    isLoading: false,
    error: '' as string | null,
    selectedCategory: '',
    selectedOption: '',
};
export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppError(state, { payload: error }: PayloadAction<string | null>) {
            state.error = error;
        },
        setAppLoader(state, { payload: isLoading }: PayloadAction<boolean>) {
            state.isLoading = isLoading;
        },
        setSelectedCategory(state, { payload }: PayloadAction<string>) {
            state.selectedCategory = payload;
        },
        setSelectedOption(state, { payload }: PayloadAction<string>) {
            state.selectedOption = payload;
        },
    },
});
export const userLoadingSelector = (state: ApplicationState) => state.app.isLoading;
export const userErrorSelector = (state: ApplicationState) => state.app.error;
export const selectedCategorySelector = (state: ApplicationState) => state.app.selectedCategory;
export const selectedOptionSelector = (state: ApplicationState) => state.app.selectedOption;

export const { setAppError, setAppLoader, setSelectedCategory, setSelectedOption } =
    appSlice.actions;
export default appSlice.reducer;
