---
title: Element-UI表单校验
date: 2018-10-01 18:00:00
tags: [Element-UI,开发笔记]
---

### elment-ui表单校验

```html
<el-form  label-width="130px" :model="form" :rules="rules" ref="form">
<el-form-item label="作者" prop="author">
    <el-input v-model="form.author"></el-input>
</el-form-item>  </el-form>
```

- #### 注意要点

```js
1、：rules=rules    // rules定义在data里
2、prop = xx        // xx是form对象里面的xx  也是rules里的校验对象 
      form : { xx : ’  ’  }   、   rules:{ xx:[  ]}
3、this.$refs[form].validate( ( valid ) =>{
If ( valid ){
//校验成功，执行的函数
}else{ return false}
})
4、 清除输入      this.$refs[formName].resetFields();
```



- 在外部JS里

```js
import rules from '@/config/rules'  //这里是定义好的规则
export default {
    mainRules: {
        "vueThis":null,  //用来设置vue实例
        "main.name": [rules.required(),rules.limit(0,250)],
        "main.remark": [rules.limit(0,250)],
        "main.orgType.key": [rules.required()],
        "main.programa": [rules.required()],
    }
}
```

- 在script里

  ```js
  import rules from './config/rules';  //引入外部JS
  ```

- 在data里

  ```js
  rules: rules.mainRules,	
  form: {
  main: model.mainModel(),
  },
  
  ```

- 在当前js里

  ```js
  mounted() {
  //给规则的vueThisv赋值
  this.rules.vueThis = this;
  }，
  //校验方法
  this.$refs["form"].validate((valid) => {
  if (valid) {
  }else{
      return false
  }
  });
  ```
