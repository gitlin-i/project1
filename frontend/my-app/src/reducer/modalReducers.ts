import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/configureStore';
import { ModalInterface } from '../type'

const initialState : ModalInterface = {
  isOpenModal: false,
  modalTitle: "none",
  modalId: null,
};

export const modalSlice  = createSlice({
  name: 'Modal',
  initialState,
  reducers: {
    openModal: (state , action : PayloadAction<ModalInterface>) => {
        return {
          ...state,
          isOpenModal:action.payload.isOpenModal,
          modalTitle: action.payload.modalTitle,
          modalId: action.payload.modalId,
        }
    },
    closeModal: (state) => {
      return initialState
    }
  },
  
})


// // Other code such as selectors can use the imported `RootState` type
// export const selectPageSetting = (state:RootState) => state.page
export const {openModal, closeModal} = modalSlice.actions

export const selectModalisOpen = (state:RootState) => state.modal.isOpenModal
export const selectModalTitle = (state:RootState) => state.modal.modalTitle
export const selectModalId = (state:RootState) => state.modal.modalId
export default modalSlice.reducer