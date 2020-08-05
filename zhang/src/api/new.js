// import service from "@/utils/request"


/**
 * 列表
 */

/**
 * 新增
 */
/**
 * 编辑
 */
/**
 * 删除
 */
/**
 *一级 分类添加
 */
export function addFirstCategory(data) {
    return service.request({
        method: "post",
        url: "/news/addFirstCategory/",
        data
    })
}
/**
 * 获取分类
 */
export function getCategory(data) {
    return service.request({
        method: "post",
        url: "/news/addFirstCategory/",
        data
    })
}