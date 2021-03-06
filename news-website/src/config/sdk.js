export const baiSdk = function (id, token, host, widt) {
  var option = {
    docId: id,
    token: token,
    host: host,
    serverHost: 'http://doc.bj.baidubce.com',
    width: widt, //文档容器宽度
    zoom: false, //是否显示放大缩小按钮
    zoomStepWidth: 200,
    pn: 1, //定位到第几页，可选
    ready: function(handler) { // 设置字体大小和颜色, 背景颜色（可设置白天黑夜模式）
      handler.setFontSize(1);
      handler.setBackgroundColor('#000');
      handler.setFontColor('#fff');
    },
    flip: function(data) { // 翻页时回调函数, 可供客户进行统计等
      if (data.pn === 1) {
        document.documentElement.scrollTop = document.body.scrollTop = 0
      }
    },
    fontSize: 'big',
    toolbarConf: {
      page: true, //上下翻页箭头图标
      pagenum: true, //几分之几页
      full: false, //是否显示全屏图标,点击后全屏
      copy: true, //是否可以复制文档内容
      position: 'center', // 设置 toolbar中翻页和放大图标的位置(值有left/center)
    } //文档顶部工具条配置对象,必选
  };
  new Document('reader', option);
};
