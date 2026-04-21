import { configureStore } from "@reduxjs/toolkit"
import whiteboardSliceReducer from '../whiteboard/slices/whiteboard.slice.ts'



export const store = configureStore({
  reducer: {
    whiteboard: whiteboardSliceReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;