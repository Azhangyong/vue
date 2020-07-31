import { MessageBox } from 'element-ui'
import {
    reactive,
    ref,
    isRef,
    toRefs,
    onBeforeMount,
    onMounted,
    computed
} from '@vue/composition-api'
// export default {//2.0
//     install(Vue, options) {
//         Vue.prototype.confirm = (params) => {
//             MessageBox.confirm(params.content, params.tip || '提示', {
//                     confirmButtonText: '确定',
//                     cancelButtonText: '取消',
//                     type: params.type || 'warning',
//                     center: true
//                 })
//                 .then(() => {
//                     params.fn && params.fn(params.id)
//                         // root.message({
//                         //     type: 'success',
//                         //     message: '删除成功!'
//                         // })
//                 })
//                 .catch(() => {
//                     // root.message({
//                     //     type: 'info',
//                     //     message: '已取消删除'
//                     // })
//                 })
//         }
//     }
// }
export function global() {
    const confirm = (params) => {
        MessageBox.confirm(params.content, params.tip || '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: params.type || 'warning',
                center: true
            })
            .then(() => {
                params.fn && params.fn(params.id)
                    // root.message({
                    //     type: 'success',
                    //     message: '删除成功!'
                    // })
            })
            .catch(() => {
                // root.message({
                //     type: 'info',
                //     message: '已取消删除'
                // })
            })
    }
    return {
        confirm
    }
}