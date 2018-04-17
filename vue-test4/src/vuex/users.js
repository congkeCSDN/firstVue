let users = {
    state:{
        users:[
            {name:"李钟硕",sex:"男"},
            {name:"赵丽颖",sex:"女"},
            {name:"张哲瀚",sex:"男"},
        ]
    },
    getters:{
        getUsers(state){
            return state.users
        }
    }
}
export default users