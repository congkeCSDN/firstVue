export const formatDate = (time) => {
        if(time){
            let nowDate = new Date();
            nowDate.setTime(time);
            let year = nowDate.getFullYear();
            let month = (nowDate.getMonth()+1)>10 ? ''+(nowDate.getMonth()+1) : '0'+(nowDate.getMonth()+1);
            let date = (nowDate.getDate())>10 ? ''+nowDate.getDate() : '0'+nowDate.getDate();
            let hour = (nowDate.getHours())>10 ? ''+nowDate.getHours() : '0'+nowDate.getHours();
            let minutes = (nowDate.getMinutes())>10 ? ''+nowDate.getMinutes() : '0'+nowDate.getMinutes();
            let seconds = (nowDate.getSeconds())>10 ? ''+nowDate.getSeconds() : '0'+nowDate.getSeconds();
            return year +'-'+ month +'-'+ date +' '+ hour +':'+ minutes +':'+ seconds;
        }
}