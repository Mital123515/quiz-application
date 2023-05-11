import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const questionReducer = createSlice({
    name: 'questions',
    initialState : {
        queue: [],
        answers : [],
        trace : 0
    },
    reducers : {
        startExamAction : (state, action) => {
            let { question, answers} = action.payload
  let availableQuestion = [];
   for (let i = 0; i < question.length; i++) {
       const Qindex = question[Math.floor(Math.random() * question.length)]  
        availableQuestion.push(Qindex);
   }
   const suffleQuestion = availableQuestion.filter((value,i,arr)=>arr.findIndex(value2=>['question'].some(k=>value2[k] ===value[k]))===i).slice(0,10)
    
   console.log("rs",availableQuestion.slice(0,10))
   console.log("suffleQuestion",suffleQuestion)

            return {
                ...state,
                queue : suffleQuestion,
                answers
            }
        },
        moveNextAction : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevAction : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllAction : () => {
            return {
                queue: [],
                answers : [],
                trace : 0
            }
        }
    }
})

export const { startExamAction, moveNextAction, movePrevAction, resetAllAction } = questionReducer.actions;

export default questionReducer.reducer;