# README

```c
.
├── Component
	├── ChartCard // 图表卡片
	├── Charts // 图表类型
├── Router
	├── MainRouter.js //菜单router跳转
	├── menu.scss     //菜单样式（定义了标题h1样式）
├── util
	├── Constant.js  //图标类型常量定义
├── Views
	├── HomeView	//调用示例
```



apex图表：[options选项思维导图整理 - 简书 (jianshu.com)](https://www.jianshu.com/p/768e03273492)

### 小窗视图

调用接口：SmallChartCard。调用示例：HomeView中。

需要使用的文件：

* util/Constant.js
* Component/ChartCard/SmallChartCard.js
* Component/Charts/LineChart.js



Costumize Card需要传入options