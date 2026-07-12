# 大鼓达人 (Dagu Daren)

中国大鼓节奏游戏，对标太鼓达人，Web Audio API 合成中国大鼓音色。

## 目标平台

| 平台 | 方式 | 命令 |
|------|------|------|
| 🍎 iOS | Capacitor → Xcode → IPA | `./build.sh` → `open ios/App/App.xcworkspace` |
| 🤖 Android | Capacitor → Gradle → APK | `./build.sh` → `cd android && ./gradlew assembleDebug` |
| ⌚ 手表 | 自适应布局 + 触屏输入 | 自动检测小屏触发极简模式 |
| 👓 智能眼镜 | 窄FOV CSS + 语音控制 | 说「咚/咔」击鼓，自动适配眼镜比例 |
| 💍 智能戒指 | DeviceOrientation 倾角检测 | 倾斜上下→咚，左右→咔，快速抖动→咚 |
| 🦯 智能手杖 | DeviceMotion 加速度检测 | 敲击→咚，挥动方向→咔 |
| 🌐 Web | 单文件 HTML | `./serve.sh` 或直接打开 |

## 曲目 (30首)

| # | 曲名 | BPM | 难度 |
|---|------|-----|------|
| 1 | 战鼓·将军令 | 120 | ⭐ |
| 2 | 曹操 | 144 | ⭐⭐⭐ |
| 3 | 葫芦娃 | 132 | ⭐ |
| 4 | 好想大声说喜欢你 | 142 | ⭐⭐ |
| 5 | We Are! | 168 | ⭐⭐⭐ |
| 6 | CHA-LA HEAD-CHA-LA | 160 | ⭐⭐ |
| 7 | Silhouette | 183 | ⭐⭐⭐⭐ |
| 8 | 残酷天使的行动纲领 | 128 | ⭐⭐ |
| 9 | 红莲华 | 135 | ⭐⭐⭐ |
| 10 | 红莲的弓矢 | 180 | ⭐⭐⭐⭐ |
| 11-30 | 黑猫警长 / 犬夜叉 / 柯南 / 死神 / 银魂 / 全职猎人 / 钢炼 / 数码宝贝 / 哆啦A梦 / 蜡笔小新 / 美少女战士 / 圣斗士星矢 / 宝可梦 / 马里奥 / 街霸 / 千与千寻 / 你的名字 / 龙猫 / 功夫 / 哪吒 | — | ⭐~⭐⭐⭐⭐ |

## 技术栈

- HTML/CSS/JS 单文件 (1849行)
- Web Audio API 音色合成 (4层咚 + 3层咔)
- Canvas 渲染 + 中国鼓视觉
- RhythmEngine 节奏引擎类
- 字符串谱面系统
- Capacitor 原生包装 (iOS/Android)
