const fs = require('fs')
const path = require('path')

// 终止
const exit = function (log) {
  console.error(log)
  process.exit(1)
}

// 模块路径
const MODULES_PATH = path.join(__dirname, '../modules')

// 模块名称
const MODULES = process.argv[2]

if (!MODULES) {
  exit('请填入模块名称')
}

// 输出路径
const OUT_PATH = path.join(MODULES_PATH, `${MODULES}.ts`) // 文件路径
const TEST_OUT_PATH = path.join(__dirname, '../test') // 测试用例文件路径

const isExists = fs.existsSync(OUT_PATH)

if (isExists) {
  exit(`${MODULES}文件已经存在`)
}

const TEST_PATH = path.join(TEST_OUT_PATH, `${MODULES}.test.ts`)

// fs.mkdirSync(OUT_PATH)
// console.log('创建模块目录', OUT_PATH, TEST_OUT_PATH)

// fs.mkdirSync(TEST_OUT_PATH)
// console.log('创建测试目录', TEST_OUT_PATH)

// 函数模版
const addFileTemp =
  `
  export default function ${MODULES} (val:any) {
    return val
  }
  `

  // 测试用例模版
const testTemp =
`
  import ${MODULES} from '../modules/${MODULES}'
  describe('${MODULES}', () => {
    it('结果通过啦', () => {
      expect(${MODULES}('a')).toBe('a')
    })
  })
`

// 写入文件
fs.writeFileSync(OUT_PATH, addFileTemp)
fs.writeFileSync(TEST_PATH, testTemp)
console.log('创建新模块成功', `路径： ${MODULES}`)

