module.exports = {
  base: '/', //部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 Github pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。
  dest: './dist',
  title: '我要充满正能量',
  description: '立志而圣则圣矣,立志而贤则贤矣', //网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中,还显示在首页的文章列表上面
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/.ico'
      }
    ]
  ],
  // theme: 'indigo-material',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '我要充满正能量',
      description: '立志而圣则圣矣,立志而贤则贤矣。'
    }
  },
  markdown: {
    lineNumbers: true //是否开启文章代码左边的行号显示
  },
  themeConfig: {
    placeholder: '搜搜看', //搜索框的默认文章
    searchReply: '什么都没搜到，试一下其它搜索词~',
    author: '我要充满正能量', //侧边栏的设置
    email: '965389230@qq.com',
    pagination: '5', //每一页显示的文章个数
    avatar: '/tx.jpg', //头像地址
    brand: '/bj.jpg', //头像背景图片地址
    github: 'https://github.com/Ho-Jack', //点击github跳转的地址
    vssue: {
      //评论的配置,
      need: false, //是否需要评论
      option: {
        //公共的Vssue配置
        owner: '', //用户名
        repo: '', //仓库名
        locale: 'zh'
      },
      development: {
        //开发环境下的配置
        clientId: '',
        clientSecret: ''
      },
      production: {
        //生产环境的配置
        clientId: '',
        clientSecret: ''
      }
    },
    menus: {
      //侧边栏的文字
      tags: '标签分类',
      home: '主页',
      all: '时间归档',
      github: 'Github',
      about: '自我介绍'
    }
  }
}
