//公共
import { url } from '@/config/config'
export function axios(type, link, data) {
    console.log(url)
    axios.request({
        method: type,
        url: link,
        data,
        responseType: 'json',
    }).then(function(response) {
        console.log(response)
    }).catch(function(error) {
        console.log(error)
    })
}