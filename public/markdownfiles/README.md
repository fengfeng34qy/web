
## 实用方法
``` js
// 设置倒计时时间
this.setTimeout(60);
// 暂停倒计时
this.$globalTimer.pause();
// 恢复倒计时
this.$globalTimer.resume();
// 手动关闭软键盘
import { ScreenKeyboardManagerJS } from "awp-plugin-screen-keyboard-js";
ScreenKeyboardManagerJS.closeScreenKeyboardAsync(); // 关闭小键盘
// 防抖动
Utils.debounce(function() {}, 3000, true)
```

## 软键盘
```bash
// v-keyboard="'number'"
none = 0 // 无屏幕键盘，默认项
number = 1 // 数字键盘
text = 2 // 文本键盘，与Normal键盘一致
normal = 2// 普通屏幕键盘
chineseId = 3 // 证件号码选择键盘，除数字键之外添加X键
address = 4 //地址键盘，提供省，市，区等常用字
phoneNumber = 5 // 电话号码选择键盘，除数字键之外添加-键
numberWithoutPoint = 6 //不带小数点的数字键盘
:decimal="2"  几位小数点

```

## 赞同钩子函数
```javascript
// vue实例创建完成后执行
async onInitialize() {}
// 动画完成后执行，在onInitialize之后
async onNavigated() {}
// 页面关闭时执行
async onClose() {}
// 页面超时时执行
async onTimeout() {}
```
## vue内置
```javascript
// 计算属性
computed: {
  isDisabled() {
    return !(this.value > 0)
  }
}

// 组件
components: { auiBtn }

// 过滤器
filters: {
  toDouble(num) {
    return num < 10 ? '0' + num : '' + num;
  }
}

// vue实例创建完成触发,在mounted之后
created() {}

// 实例被挂载之后触发,在created之后
mounted() {}
```
## 广电测试钞
| noteId | 面额 |
| :----| :------|
| 60983  | 100  |
| 60982  | 50   |
| 60981  | 20   |
| 60980  | 10   |
| 60979  | 5    |
| 60977  | 1    |

## 注册表
```bash
# 打开注册表
window + R
输入 regedit

# 逻辑名位置
HKEY_USERS/.DEFAULT/XFS/LOGICAL_SERVICES

```

## 弹窗
```javascript
// 点击遮罩外半透明区域关闭弹窗 提示: 4.0版本可用;
Dialog.showNonAwait(WaitInfo, {
  closeContentModalRestPart: true,  // 加该属性实现
  dialogBoxContentArgs: {
    content: "加载中..."
});
```
## 输入框
```bash
:maxlength="6"
```

## 布局
``` js
direction="column" | "row"  // 用于aui-box
justify-content="flex-start" | "space-between" | "center" | "flex-end"  // 用于aui-box
align="justify" | "right" | "left"  // 文本对齐: 两端对齐|右对齐|左对齐 tip:用于aui-text
justify="left" | "right"  // 用于aui-col
```

## 页面跳转
> 跳转页面是StepPageNavigator.vue页面里用的动态组件实现的，并没有用到路由
> 只是更改component标签里is的值
[![cover](https://www.sunfengfeng.com/markdownfiles/images/jpg/index_01.jpg)](images/index_02.jpg)

## 组件
```js

Vue.component('table-select', {
  template: `<aui-checkbox label="" v-model="value" @change="changeSelect"></aui-checkbox>`,
  props: {
    selected: {
      type: Boolean
    }
  },
  data() {
    return {
      value: this.selected
    }
  },
  methods: {
    changeSelect() {
      let params = {selected: this.value};
      this.$emit('on-custom-comp', params);
    }
  }
});

```
## 表格-单选
[![cover](https://www.sunfengfeng.com/markdownfiles/images/gif/index_01.gif)](images/index_01.jpg)
代码
```vue
<!-- test.vue -->
<template>
  <aui-row class="replenish-table-row" v-for="(item, index) in tableData" :key="index">
    <aui-col span="1">
      <table-check :field="item.selected" :index="index" @on-custom-comp="customCompFunc"></table-check>
    </aui-col>
    <aui-col span="4">{{ item.denomination }}</aui-col>
    <aui-col span="4">{{ item.amount }}</aui-col>
  </aui-row>
</template>
<script>
import TableCheck from "./TabelCheck";
export default {
  name: 'test',
  data() {
    return {
      selectItem: null, // 选中的内容
      tableData: [
        {selected: true, denomination: '200.00', amount: '4,300.00'},
        {selected: false, denomination: '200.00', amount: '4,300.00'},
        {selected: false, denomination: '200.00', amount: '4,300.00'},
      ],
    }
  },
  components: {
    TableCheck
  },
  methods: {
    async customCompFunc(obj) {
      for (let i = 0; i < this.tableData.length; i++) {
        if (obj.index !== i) {
          this.tableData[i].selected = false;
        } else {
          this.tableData[obj.index].selected = obj.selected;
          if (obj.selected === true) {
            // 选中内容赋值
            this.selectItem = this.tableData[obj.index];
          }
        }
      }
    }
  }
}
</script>
```
```vue
<!-- TabelCheck.vue -->
<template>
  <div style="width:100%;">
    <aui-checkbox v-model="value" @change="changefn"></aui-checkbox>
  </div>
</template>
<script>
export default {
  name: "table-check",
  data() {
    return {
      value: this.field
    };
  },
  props: {
    rowData: {
      type: Object
    },
    field: {
      type: Boolean
    },
    index: {
      type: Number
    }
  },
  mounted() {
    // this.value = this.rowData[this.field];
  },
  watch: {
    field: function(newValue, oldValue) {
      this.value = newValue;
    }
  },
  methods: {
    changefn() {
      let obj = {
        selected: this.value,
        index: this.index
      }
      this.$emit("on-custom-comp", obj);
    }
  }
</script>
```

## 输入框组件
```vue
<!-- test.vue -->
<template>
  <div>
    <table-input v-model="lovingVue" @change="changeFn"></table-input>
  </div>
</template>

<script>
import TableInput from './TableInput'

export default {
  data() {
    return {
      lovingVue: 'testTxt'
    }
  }
}
</script>
```
```vue
<!-- TableInput.vue -->
<template>
  <div style="width:100%;">
    <input type="text" :value="values" @change="changeFn" />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'values',
    event: 'change'
  },
  props: {
    values: String
  },
  methods: {
    changeFn($event) {
      this.$emit('change');
    }
  }
};
</script>
```


## 你可能不知道的冷知识
> 1.我们经常用的vscode编辑器是微软团队用js编写的
> 2.yarn dev是启动一个服务器环境,当你启动dev之后，别人也可以用浏览器访问你的ip+端口,跟你访问localhost:50003效果一样;如果你的电脑是外网，那么所有能上网的电脑都可以用ip+端口的方式访问,前提你的电脑是独立Ip，家庭电脑就可以

*********************

