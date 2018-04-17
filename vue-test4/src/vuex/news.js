let news = {
    state:{
        news:[
            {id:"1",title:"杀害的拉开"},
            {id:"2",title:"杀害的拉开"},
            {id:"3",title:"杀害的拉开"}
        ]
    },
    getters:{
        getNews(state){
            return state.news
        }
    }
}
export default news