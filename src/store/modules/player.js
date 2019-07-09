import axios from 'axios';
/* eslint-disable */

const state = {
    person: [],
}

const getters = {
getStudent: state => {
    return state.person;
}
}

const mutations = {
    SET_STUDENT: (state, payload) => {
        state.person = payload;
    }
}
const actions = {
    GET_PERSON: context => {
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        axios.get(URL).then((response) => {
            let result = response.data;
            
            context.commit('SET_STUDENT', result)
            
            console.log(result);
            return result;
        })

    }
}

export default {
    state,
    mutations,
    getters,
    actions
}