import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios"
import { clearInputs } from "./jobSlice"
import { hideLoading, getAllJobs, showLoading } from "../allJobs/allJobsSlice"

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post("/jobs", job)
    thunkAPI.dispatch(clearInputs())
    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading())
  try {
    const resp = await customFetch.delete(`/jobs/${jobId}`)
    thunkAPI.dispatch(getAllJobs())
    return resp.data
  } catch (error) {
    thunkAPI.dispatch(hideLoading())
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(`/jobs/${jobId}`, job)
    thunkAPI.dispatch(clearInputs())
    return resp.data
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
  }
}
