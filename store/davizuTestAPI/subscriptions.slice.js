import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_subscription_list = createAsyncThunk(
  "subscriptions/api_v1_subscription_list",
  async payload => {
    const response = await apiService.api_v1_subscription_list(payload)
    return response.data
  }
)
export const api_v1_subscription_create = createAsyncThunk(
  "subscriptions/api_v1_subscription_create",
  async payload => {
    const response = await apiService.api_v1_subscription_create(payload)
    return response.data
  }
)
export const api_v1_subscription_read = createAsyncThunk(
  "subscriptions/api_v1_subscription_read",
  async payload => {
    const response = await apiService.api_v1_subscription_read(payload)
    return response.data
  }
)
export const api_v1_subscription_update = createAsyncThunk(
  "subscriptions/api_v1_subscription_update",
  async payload => {
    const response = await apiService.api_v1_subscription_update(payload)
    return response.data
  }
)
export const api_v1_subscription_partial_update = createAsyncThunk(
  "subscriptions/api_v1_subscription_partial_update",
  async payload => {
    const response = await apiService.api_v1_subscription_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_subscription_delete = createAsyncThunk(
  "subscriptions/api_v1_subscription_delete",
  async payload => {
    const response = await apiService.api_v1_subscription_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const subscriptionsSlice = createSlice({
  name: "subscriptions",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_subscription_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_subscription_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_subscription_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_subscription_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_subscription_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_subscription_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_subscription_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_subscription_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_subscription_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_subscription_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_subscription_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_subscription_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_subscription_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_subscription_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_subscription_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_subscription_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_subscription_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_subscription_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_subscription_list,
  api_v1_subscription_create,
  api_v1_subscription_read,
  api_v1_subscription_update,
  api_v1_subscription_partial_update,
  api_v1_subscription_delete,
  slice: subscriptionsSlice
}
