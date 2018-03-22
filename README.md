# changeImg
图片切换
将js文件在body中引入，否则会出错。head中文件优先于body中内容加载，导致从页面中通过dom获取元素失败。
**.getElementsByTagName("××");返回一个数组；通过标签寻找元素，是一个动态方法，无论页面元素在js文件中动态输入还是在html中加入，只要在页面中显示，就会动态运行该方法。
