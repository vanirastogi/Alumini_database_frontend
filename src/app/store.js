import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from '../features/jobsSlice';
import newsReducer from '../features/newsSlice'
import achievementsReducer from '../features/achievementSlice'
import alumniDataReducer from '../features/alumniDataSlice'
import eventReducer from '../features/eventSlice'


export const store = configureStore({
  reducer: {
    news : newsReducer,
    jobs: jobsReducer,
    achievements: achievementsReducer,
    alumniData : alumniDataReducer,
    event : eventReducer,


  },
});
