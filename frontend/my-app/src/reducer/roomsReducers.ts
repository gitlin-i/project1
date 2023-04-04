import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import Api from '../Api';
import { RootState } from '../store/configureStore';
import { PageSetting, Rooms} from '../type/type'
import { setPage } from './pageSettingReducers';

// Define a type for the slice state

// Define the initial state using that type
const initialState: Rooms = {
  rooms:[],
  status: "idle",
  error: null,
};

export const roomsSlice  = createSlice({
  name: 'Rooms',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    resetRooms: (state) => {
      return{
        ...state,
        rooms : [],
        error :null,
        status : "idle",
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRooms.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.rooms = action.payload
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = 'failed'
        if (action.error?.message != undefined){
          state.error = action.error.message
        }
      })
  }
})

export const fetchRooms = createAsyncThunk('rooms/fetchRooms' , async (setting :PageSetting ) => {
  const data = (await Api.get(`/rooms?SelectCategory=${setting.requestCategory}&_start=${setting.requestPageStart}&_end=${setting.requestPageEnd}`)).data
  return data 
})

export const updateRooms = createAsyncThunk('rooms/updateRooms',async (setting:PageSetting,thunkApi) => {
  const dispatch = thunkApi.dispatch
  dispatch(setPage(setting))
  await dispatch(fetchRooms(setting)); 
})

// // Other code such as selectors can use the imported `RootState` type
export const selectRoomsRaw = (state:RootState) => state.rooms
export const selectRooms = (state:RootState) => state.rooms.rooms
export const selectRoomsState = (state:RootState) => state.rooms.status

export const {resetRooms} = roomsSlice.actions
export default roomsSlice.reducer