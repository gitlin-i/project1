import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import Api from 'src/Api';
import { RootState } from 'src/store/configureStore';
import { Room, Rooms} from '../type/type'

// Define a type for the slice state

// Define the initial state using that type
const initialState: Rooms = {
  rooms:[],
  status: "idle",
  error:undefined,
};

export const roomsSlice  = createSlice({
  name: 'Rooms',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setPageData: (state, action : PayloadAction<Rooms>) => {

    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRooms.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched Rooms to the array
        state.rooms = action.payload
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const fetchRooms = createAsyncThunk('rooms/fetchRooms' ,async () => {
  const data = (await Api.get("/rooms?_limit=8")).data
  return data 
  
})

// // Other code such as selectors can use the imported `RootState` type
export const selectRooms = (state:RootState) => state.rooms.rooms
export const selectRoomsState = (state:RootState) => state.rooms.status

export default roomsSlice.reducer