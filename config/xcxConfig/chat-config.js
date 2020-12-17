let desc = [
  "此人面目狰狞，浑身杀气，大家离他远点，小心溅一身血。",
  "此人很平凡，但有一个特点就是丑",
  "此人特别自卑，原因竟然是自己的小dd比别人短......"
]
let nickNames = [
  '白一捧',
  '马一片'
]
let codeTips = [
  '避免用汉字做if判断',
  'if判断尽量使用全等 "==="',
  '保持规范的代码缩进，尽管代码是拷贝过来的'
]
let deviceData = [
  {
    title: '现金存入',
    link: 'CashIn'
  },
  {
    title: '现金发放',
    link: 'CashDispenser'
  },
  {
    title: '读卡器',
    link: 'CardReader'
  },
  {
    title: '发卡器',
    link: 'CardDispenser'
  },
  {
    title: '密码键盘',
    link: 'Encryptor'
  },
  {
    title: '凭条打印机',
    link: 'ReceiptPrinter'
  },
  {
    title: '存单读取',
    link: 'DepositReader'
  },
  {
    title: '存单打印',
    link: 'DepositPrinter'
  },
  {
    title: 'UK读取器',
    link: 'UKeyReader'
  },
  {
    title: 'UK发放器',
    link: 'UKeyDispenser'
  },
  {
    title: '磁条刷卡器',
    link: 'SPCardReader'
  },
  {
    title: '存折打印',
    link: 'PassbookPrinter'
  },
  {
    title: '摄像头',
    link: 'Camera'
  },
  {
    title: '文档打印机',
    link: 'DocumentPrinter'
  },
  {
    title: '传感器与指示器',
    link: 'SIU'
  }
]
let obj = { desc, nickNames, codeTips, deviceData }
exports.cfgList = obj;