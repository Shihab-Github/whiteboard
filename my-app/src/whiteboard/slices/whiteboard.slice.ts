import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type WhiteboardState = {
  tool: string | null
}

const initialState: WhiteboardState = {
  tool: null,
}

const whiteboardSlice = createSlice({
  name: "whiteboard",
  initialState,
  reducers: {
    setToolType: (state, action: PayloadAction<string | null>) => {
      state.tool = action.payload
    },
  },
})

export const { setToolType } = whiteboardSlice.actions

export default whiteboardSlice.reducer