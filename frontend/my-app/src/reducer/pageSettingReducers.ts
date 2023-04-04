import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store/configureStore';
import { PageSetting} from '../type/type'

const initialState: PageSetting = {
    requestCategory: null,
    requestSize: 0,
    requestPageStart:0,
    requestPageEnd: 0,
};

export const pageSlice  = createSlice({
  name: 'Page',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<PageSetting>) => {
      return{
        requestCategory:action.payload.requestCategory,
        requestSize:action.payload.requestSize,
        requestPageStart: action.payload.requestPageStart,
        requestPageEnd: action.payload.requestPageEnd,
      }
    }
  },
  
})

export const {setPage} = pageSlice.actions
// // Other code such as selectors can use the imported `RootState` type
export const selectSize = (state:RootState) => state.page.requestSize
export const selectCategory = (state:RootState) => state.page.requestCategory
export const selectPageSetting = (state:RootState) => state.page
export default pageSlice.reducer