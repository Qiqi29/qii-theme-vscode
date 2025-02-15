# 欢迎来到您的VS Code扩展

## 文件夹里有什么
* 此文件夹包含颜色主题扩展所需的所有文件。
* `pack.json` - 这是定义主题文件位置并指定主题基本主题的清单文件。
* `themes/**.json` - 颜色主题定义文件。

## 跑起来
* 按 `F5` 打开一个加载了扩展程序的新窗口。
* 打开 `文件>首选项>颜色主题”` 并选择您的颜色主题。
* 打开具有关联语言的文件。语言配置的语法将标记文本并为标记分配“范围”。要检查这些范围，请从命令面板调用 `开发人员：检查编辑器令牌和范围` 命令（Mac上的“Ctrl+Shift+P”或“Cmd+Shift+P”）。

## 进行更改
* 对主题文件的更改会自动应用于扩展开发主机窗口。

## 将您的主题采用到 Visual Studio Code

* 标记着色是基于标准TextMate主题完成的。颜色与一个或多个范围匹配。

要详细了解作用域及其使用方式，请查看[color主题]（https://code.visualstudio.com/api/extension-guides/color-theme）留档。

## 安装你的扩展
* 要开始将您的扩展与Visual Studio Code一起使用，请将其复制到 `C: 用户/../.vscode/extensions` 文件夹并重新启动Code。
* 要与全世界分享您的扩展，请阅读有关发布扩展的 https://code.visualstudio.com/docs。

## 打包扩展
运行 `vsce package` 命令进行打包扩展。