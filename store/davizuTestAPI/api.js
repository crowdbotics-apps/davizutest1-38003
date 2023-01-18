import axios from "axios"
const davizuTestAPI = axios.create({
  baseURL: "https://davizutest1-38003.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_app_list(payload) {
  return davizuTestAPI.get(`/api/v1/app/`)
}
function api_v1_app_create(payload) {
  return davizuTestAPI.post(`/api/v1/app/`, payload.data)
}
function api_v1_plan_list(payload) {
  return davizuTestAPI.get(`/api/v1/plan/`)
}
function api_v1_plan_create(payload) {
  return davizuTestAPI.post(`/api/v1/plan/`, payload.data)
}
function api_v1_type_list(payload) {
  return davizuTestAPI.get(`/api/v1/type/`)
}
function api_v1_type_create(payload) {
  return davizuTestAPI.post(`/api/v1/type/`, payload.data)
}
function api_v1_login_create(payload) {
  return davizuTestAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return davizuTestAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_read(payload) {
  return davizuTestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return davizuTestAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return davizuTestAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_v1_app_read(payload) {
  return davizuTestAPI.get(`/api/v1/app/${payload.id}/`)
}
function api_v1_app_update(payload) {
  return davizuTestAPI.put(`/api/v1/app/${payload.id}/`, payload.data)
}
function api_v1_app_partial_update(payload) {
  return davizuTestAPI.patch(`/api/v1/app/${payload.id}/`, payload.data)
}
function api_v1_app_delete(payload) {
  return davizuTestAPI.delete(`/api/v1/app/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return davizuTestAPI.post(`/rest-auth/login/`, payload.data)
}
function api_v1_framework_list(payload) {
  return davizuTestAPI.get(`/api/v1/framework/`)
}
function api_v1_framework_create(payload) {
  return davizuTestAPI.post(`/api/v1/framework/`, payload.data)
}
function api_v1_plan_read(payload) {
  return davizuTestAPI.get(`/api/v1/plan/${payload.id}/`)
}
function api_v1_plan_update(payload) {
  return davizuTestAPI.put(`/api/v1/plan/${payload.id}/`, payload.data)
}
function api_v1_plan_partial_update(payload) {
  return davizuTestAPI.patch(`/api/v1/plan/${payload.id}/`, payload.data)
}
function api_v1_plan_delete(payload) {
  return davizuTestAPI.delete(`/api/v1/plan/${payload.id}/`)
}
function api_v1_type_read(payload) {
  return davizuTestAPI.get(`/api/v1/type/${payload.id}/`)
}
function api_v1_type_update(payload) {
  return davizuTestAPI.put(`/api/v1/type/${payload.id}/`, payload.data)
}
function api_v1_type_partial_update(payload) {
  return davizuTestAPI.patch(`/api/v1/type/${payload.id}/`, payload.data)
}
function api_v1_type_delete(payload) {
  return davizuTestAPI.delete(`/api/v1/type/${payload.id}/`)
}
function rest_auth_logout_list(payload) {
  return davizuTestAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return davizuTestAPI.post(`/rest-auth/logout/`)
}
function api_v1_subscription_list(payload) {
  return davizuTestAPI.get(`/api/v1/subscription/`)
}
function api_v1_subscription_create(payload) {
  return davizuTestAPI.post(`/api/v1/subscription/`, payload.data)
}
function api_v1_framework_read(payload) {
  return davizuTestAPI.get(`/api/v1/framework/${payload.id}/`)
}
function api_v1_framework_update(payload) {
  return davizuTestAPI.put(`/api/v1/framework/${payload.id}/`, payload.data)
}
function api_v1_framework_partial_update(payload) {
  return davizuTestAPI.patch(`/api/v1/framework/${payload.id}/`, payload.data)
}
function api_v1_framework_delete(payload) {
  return davizuTestAPI.delete(`/api/v1/framework/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return davizuTestAPI.post(`/rest-auth/registration/`, payload.data)
}
function api_v1_subscription_read(payload) {
  return davizuTestAPI.get(`/api/v1/subscription/${payload.id}/`)
}
function api_v1_subscription_update(payload) {
  return davizuTestAPI.put(`/api/v1/subscription/${payload.id}/`, payload.data)
}
function api_v1_subscription_partial_update(payload) {
  return davizuTestAPI.patch(
    `/api/v1/subscription/${payload.id}/`,
    payload.data
  )
}
function api_v1_subscription_delete(payload) {
  return davizuTestAPI.delete(`/api/v1/subscription/${payload.id}/`)
}
function rest_auth_password_reset_create(payload) {
  return davizuTestAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return davizuTestAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return davizuTestAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return davizuTestAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_app_list,
  api_v1_app_create,
  api_v1_plan_list,
  api_v1_plan_create,
  api_v1_type_list,
  api_v1_type_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_v1_app_read,
  api_v1_app_update,
  api_v1_app_partial_update,
  api_v1_app_delete,
  rest_auth_login_create,
  api_v1_framework_list,
  api_v1_framework_create,
  api_v1_plan_read,
  api_v1_plan_update,
  api_v1_plan_partial_update,
  api_v1_plan_delete,
  api_v1_type_read,
  api_v1_type_update,
  api_v1_type_partial_update,
  api_v1_type_delete,
  rest_auth_logout_list,
  rest_auth_logout_create,
  api_v1_subscription_list,
  api_v1_subscription_create,
  api_v1_framework_read,
  api_v1_framework_update,
  api_v1_framework_partial_update,
  api_v1_framework_delete,
  rest_auth_registration_create,
  api_v1_subscription_read,
  api_v1_subscription_update,
  api_v1_subscription_partial_update,
  api_v1_subscription_delete,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
