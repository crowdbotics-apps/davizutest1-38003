import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_framework_list = createAsyncThunk(
  "frameworks/api_v1_framework_list",
  async payload => {
    const response = await apiService.api_v1_framework_list(payload)
    return response.data
  }
)
export const api_v1_framework_create = createAsyncThunk(
  "frameworks/api_v1_framework_create",
  async payload => {
    const response = await apiService.api_v1_framework_create(payload)
    return response.data
  }
)
export const api_v1_framework_read = createAsyncThunk(
  "frameworks/api_v1_framework_read",
  async payload => {
    const response = await apiService.api_v1_framework_read(payload)
    return response.data
  }
)
export const api_v1_framework_update = createAsyncThunk(
  "frameworks/api_v1_framework_update",
  async payload => {
    const response = await apiService.api_v1_framework_update(payload)
    return response.data
  }
)
export const api_v1_framework_partial_update = createAsyncThunk(
  "frameworks/api_v1_framework_partial_update",
  async payload => {
    const response = await apiService.api_v1_framework_partial_update(payload)
    return response.data
  }
)
export const api_v1_framework_delete = createAsyncThunk(
  "frameworks/api_v1_framework_delete",
  async payload => {
    const response = await apiService.api_v1_framework_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const frameworksSlice = createSlice({
  name: "frameworks",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_framework_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_framework_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_framework_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_framework_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_framework_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_framework_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_framework_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_framework_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_framework_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_framework_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_framework_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_framework_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_framework_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_framework_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_framework_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_framework_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_framework_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_framework_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_framework_list,
  api_v1_framework_create,
  api_v1_framework_read,
  api_v1_framework_update,
  api_v1_framework_partial_update,
  api_v1_framework_delete,
  slice: frameworksSlice
}
