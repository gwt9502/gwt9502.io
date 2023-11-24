import inquirer from 'inquirer'
import fs from 'fs/promises'
import { join } from 'path'

const cwd = process.cwd()

const template = `---
title: '%s'
publishedAt: '${new Date().toLocaleDateString().replace(/\//g, '-')}'
summary: 'This is your first blog post.'
---

%s`

async function createFile(fileName, fileTitle) {
  try {
    const filePath = join(cwd, `./content/${fileName}.mdx`)
    const isExist = await fs
      .readFile(filePath)
      .then(() => true)
      .catch(() => false)
    if (!isExist) {
      fs.writeFile(filePath, template.replace(/%s/g, fileTitle), 'utf-8')
    }
  } catch (error) {
    console.log('createFile field:', error)
  }
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'fileName',
      message: '创建的文件名称',
      askAnswered: true,
    },
    {
      type: 'input',
      name: 'fileTitle',
      message: '文件标题',
      askAnswered: true,
    },
    {
      type: 'confirm',
      name: 'isNeedImage',
      message: '是否创建图片',
    },
  ])
  .then(async (res) => {
    const { fileName, fileTitle, isNeedImage } = res
    fileName && createFile(fileName, fileTitle)
    if (isNeedImage) {
      await fs.mkdir(join(cwd, `./public/images/${fileName}`))
    }
  })
  .catch((error) => {
    console.error(error)
  })
