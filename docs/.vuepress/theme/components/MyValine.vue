<template>
  <el-card
    shadow="hover"
    class="page"
  >
    <section class="page-edit">
      <!-- <div>
       // id 将作为查询条件
        <span
          class="leancloud-visitors"
          data-flag-title="Your Article Title"
        >
          <em class="post-meta-item-text">阅读量： </em>
          <i class="leancloud-visitors-count"></i>
        </span>
      </div> -->
      <h3>
        <a href="javascript:;"></a>
        评 论：
      </h3>
      <div id="vcomments"></div>
    </section>
  </el-card>

</template>

<script>
export default {
  name: 'Valine',
  mounted: function () {
    // require window
    const Valine = require('valine');
    window.AV = require('leancloud-storage')
    new Valine({
      el: '#vcomments',
      appId: 'kSwdzLSB7cPDrR6VWUO6OL7Q-gzGzoHsz',// your appId
      appKey: 'X3nXVgbG7pGjxP91jcEKOMdJ', // your appKey
      notify: false,
      verify: false,
      path: window.location.pathname,
      visitor: true,
      avatar: 'mm',
      placeholder: '各路大神，小弟技浅，若有错误，不吝赐教'
    });
  },
}
</script>

<style lang="scss" scoped>
.page {
  // width: 80%;
  // background-color: white;
  padding: 30px;
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
    0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
  background: white;
  border-radius: 10px;
  margin: 20px 69px;
}

// //手机
// @media screen and (min-width: 480px) {
// }
// @media (min-width: 768px) {
//   .page {
//     width: 90%;
//     margin: 0px auto;
//   }
// }
// //电脑
// @media (min-width: 992px) {
//   .page {
//     width: 66%;
//   }
// }
// @media (min-width: 1200px) {
//   .page {
//     width: 63%;
//     margin-left: 43px;
//   }
// }
</style>