---
title: 光学公式
icon: solar:notes-outline
date: 2026-06-18
star: false
excerpt: 光学公式
category:
  - 学习
  - 物理
tag:
  - 大学物理
  - 期末粥
---

## 第六章 光的干涉
### 光的相干性 杨氏双缝干涉实验
#### 光的相干性
可见光的频率范围 $3.9\times 10^{14} Hz \sim 8.6\times 10^{14} Hz$
其波长范围是 $350\sim770nm$

光传播到的每一点,电场和磁场都随时间做周期性变化
电场引起光效应,因此将光波中电场的周期性变化被称为**光振动**,电场强度矢量称为**光矢量**

两个普通光源或同一普通光源的不同部分发出的光不是相干光
普通光源的发光机制是**自发辐射**(粒子跃迁),每次每次跃迁发出的光都是一段长度有限的正弦波或余弦波,称为**光波列**
自发辐射有随机性和独立性,微观粒子发光行为有间歇性

激光是通过**受激辐射**放大的光
受激辐射发出的光在振动方向,振动频率和初相位上都与外来光子相同

#### 杨氏双缝干涉实验
<Picture
url="https://wuli.wiki/changed/dba829cfd4ea4c7d.png"
info="杨氏双缝干涉实验"
/>

杨氏双缝干涉实验获取相干光源的方法是**分波面法**

令 $P$ 点与 $S_1,S_2$ 连线中心点的连线与 $z$ 轴的夹角(锐角)为 $\theta$
,两列光到点 $P$ 的波程差
$$
\delta=r_2-r_1=d\sin \theta
$$
出现明纹和暗纹的条件是
$$
\delta=\begin{cases}\pm k\lambda,\quad k=0,1,2,...(\text{明纹}),\\
\pm (2k-1)\frac{\lambda}{2},\quad k=1,2,3,...(\text{暗纹})\end{cases}
$$
其中$k$ 是干涉条纹的级次,由于 $|x|<<D$ ,故有 $\sin \theta \approx \tan \theta = \frac{x}{D}$,带入上式有
$$
x_k=\begin{cases}\pm k\frac{D\lambda}{d},\quad k=0,1,2,...(\text{明纹}),\\
\pm (2k-1)\frac{D\lambda}{2d},\quad k=1,2,3,...(\text{暗纹})\end{cases}
$$

所以相邻明(暗)纹的间距为
$$
\Delta x = \frac{D}{d}\lambda
$$
即条纹呈等间距排列

设$S_1,S_2$ 发出的光波在$P$点产生的光振动的振幅分别是 $A_1,A_2$,初相位差为 $\Delta \varphi$,则$P$ 点处的合成光振动的振幅:
$$
A=\sqrt{A_1^2+A_2^2+2A_1A_2\cos \Delta \varphi}
$$
$P$ 点的光强:
$$
I=I_1+I_2+2\sqrt{I_1I_2}\cos \Delta \varphi
$$
在杨氏双缝干涉中,$A_1=A_2,I_1=I_2$,所以
$$
I=4I_1\cos ^2 \frac{\Delta \varphi}{2}
$$

::: important
光在经过平面镜反射的时候会产生 $\pi$ 的相位突变,即半波损失
:::

### 光程与光程差
$$
\text{光程}=\text{介质的折射率}\times \text{几何路径}
$$
由光程差产生的相位差是
$$
\Delta \varphi=\frac{2\pi}{\lambda}\times \text{光程差}
$$
初相位是 $\varphi_0$ 的光经过光程 $D$后到达$P$点时的相位:
$$
\varphi'=\varphi_0-\frac{2\pi}{\lambda}D
$$
:::info 透镜的等光程性
透镜虽改变了光的传播方向,但是未产生附加的光程差
:::
:::info 物像之间的等光程性
物点到像点各光线之间的光程差是0
:::

### 薄膜干涉
<Picture
url="https://enjoyphysics.cn/images/soft/matlab/%E5%8A%88%E5%B0%96%E7%9A%84%E7%AD%89%E5%8E%9A%E5%B9%B2%E6%B6%89%E6%9D%A1%E7%BA%B9.png"
height = 220
/>

a,b两列波的光程差为 $\delta = 2ne$
$$
\delta = 2ne=\begin{cases}k\lambda,\quad k=0,1,2,...(\text{明纹}),\\ 
(2k+1)\frac{\lambda}{2},k=0,1,2,...(\text{暗纹}),\end{cases}
$$
相邻明纹(暗纹)处对应的薄膜**厚度差**:
$$
\Delta e=\frac{\lambda}{2n}
$$
相邻明纹(暗纹)的间距
$$
\Delta L=\frac{\lambda}{2n\theta}
$$

### 牛顿环
光程差
$$
\delta = 2e+\frac{\lambda}{2}
$$
$$
\delta = 2e+\frac{\lambda}{2}=\begin{cases}k\lambda,\quad k=1,2,...(\text{明纹}),\\ 
(2k+1)\frac{\lambda}{2},k=0,1,2,...(\text{暗纹}),\end{cases}
$$
第$k$级明纹的半径
$$
r_k=\sqrt{(k-\frac{1}{2})R\lambda}, k=1,2,3,...
$$
第$k$级暗纹的半径
$$
r_k=\sqrt{kR\lambda}
$$
> $R$ 为牛顿环的曲率半径

### 等倾干涉
<Picture
url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EnAUDcx7fKA6cfWz6UTarGsTvGAqmIqrUaQCgIYQvg&s=10"
height=320
/>

a,b光波的光程差
$$
\delta=n_2(AC+BC)-n_1AD+\delta'=2n_2d\cos r+\delta'
$$
$$
\delta=2n_2d\cos r+\delta'=\begin{cases}k\lambda,\quad k=1,2,...(\text{明环}),\\ 
(2k+1)\frac{\lambda}{2},k=0,1,2,...(\text{暗环}),\end{cases}
$$

### 
<Picture
url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSj0cXTNSRqycziCaHK3d9S2z4DX1Sjo8_lunQ7_so88DKvTO2i7gbls&s=10"
height = 220
/>

> $G_1$ 是分束板或半透半反镜,$G_2$ 是补偿板

:::important
可以等价看成是经过 $M_2'$和$M_1$ 所构成的空气薄膜($n=1$)反射所产生的干涉
:::
令$M_2'$和$M_1$之间的距离为$d$
$$
\delta = 2d=\begin{cases}k\lambda,\quad k=0,1,2,...(\text{明纹}),\\ 
(2k+1)\frac{\lambda}{2},k=0,1,2,...(\text{暗纹}),\end{cases}
$$
:::info
等倾干涉所产生的圆环形条纹中,**外环干涉层级小,内环干涉层级大**,所以增大$d$时$k$变大,干涉条纹"冒出",反之"缩入".
:::
设"冒出"或"缩入"的条纹数是$m$,则 $M_2'$和$M_1$ 之间的距离变化为:
$$
\Delta d=m\frac{\lambda}{2}
$$

## 第七章 光的衍射

