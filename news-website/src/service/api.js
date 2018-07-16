import fetch from '../config/api';
// 这里统一配置
export const news = (start, end) => fetch.get('/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
    wd: start,
    json: end,
    cb: ''
});