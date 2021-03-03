import axios from 'axios'

export const get = (url) => {
    return new Promise((reslove) => {
        axios.get(url).then(res => {
            reslove(res.data);
        })
    })
}