// 1.安装依赖
// 第一个.将页面html转换成图片
// npm install --save html2canvas 
// 第二个.将图片生成pdf
// npm install jspdf --save


// 2.在配置文件下utils 创建htmlToPdf.js文件
// 导出页面为PDF格式
// import html2Canvas from 'html2canvas'
// import JsPDF from 'jspdf'
// export default{
//   install (Vue, options) {
//     Vue.prototype.getPdf = function () {
//       var title = this.htmlTitle
//       html2Canvas(document.querySelector('#pdfDom'), {
//         allowTaint: true
//       }).then(function (canvas) {
//         let contentWidth = canvas.width
//         let contentHeight = canvas.height
//         let pageHeight = contentWidth / 592.28 * 841.89
//         let leftHeight = contentHeight
//         let position = 0
//         let imgWidth = 595.28
//         let imgHeight = 592.28 / contentWidth * contentHeight
//         let pageData = canvas.toDataURL('image/jpeg', 1.0)
//         let PDF = new JsPDF('', 'pt', 'a4')
//         if (leftHeight < pageHeight) {
//           PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
//         } else {
//           while (leftHeight > 0) {
//             PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
//             leftHeight -= pageHeight
//             position -= 841.89
//             if (leftHeight > 0) {
//               PDF.addPage()
//             }
//           }
//         }
//         PDF.save(title + '.pdf')
//       }
//       )
//     }
//   }
// }


// 3.在main.js中使用我们定义的函数文件
// import htmlToPdf from '@/components/utils/htmlToPdf'
// Vue.use(htmlToPdf)


// 4.使用
//<div class="row" id="pdfDom" style="padding-top: 55px;background-color:#fff;">
	//给自己需要导出的ui部分.定义id为"pdfDom".此部分将就是pdf显示的部分
//</div>
//<button type="button" class="btn btn-primary"v-on:click="getPdf()">导出PDF</button>
//export default {
//     data () {
//         return {
//         htmlTitle: '页面导出PDF文件名'   //htmlToPdf.js文件中配置的属性
//         }
//     }
//    }