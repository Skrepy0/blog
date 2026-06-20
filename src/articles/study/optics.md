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
### 惠更斯-菲涅尔原理
惠更斯-菲涅尔原理:波面上各点出发的子波是彼此相干的,他们在空间相遇后发生相干叠加,使波的强度重新分布,形成衍射图像
### 单缝夫琅禾费衍射
<Picture
url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKA5xXIBXpjK_mwBvTXe3-wqi8pAW2lmS3yUtqnUzFQ&s=10"
height=220
/>

光程差:
$$
\delta = a\sin \theta
$$
分析:
$$
\delta = a\sin \theta=\begin{cases}\pm k\lambda,\quad k=1,2,...(\text{暗纹}),\\ 
 \pm (2k+1)\frac{\lambda}{2},k=1,2,...(\text{明纹}),\end{cases}
$$

> 有偶数个半波带: 两两抵消,是暗纹
有奇数个半波带: 抵消后还剩一个,是明纹

<Picture
url="https://zhengshili.com/tupian/3815.png"
height=220
/>

各级条纹的中心位置到中央明纹中心位置的距离.
设透镜的焦距是$f$,某级条纹的中心到中央明纹中心位置$O$ 的距离是$y$
$$
y=f\tan \theta \approx f\sin \theta = \begin{cases}\pm \frac{f}{a}k\lambda,\quad k=1,2,...(\text{暗纹}),\\ 
 \pm \frac{f}{a}(2k+1)\frac{\lambda}{2},k=1,2,...(\text{明纹}),\end{cases}
$$

<Picture
url="https://p3-sdbk2-media.byteimg.com/tos-cn-i-xv4ileqgde/babebfb1b61543a69b6b0f048423a12e~tplv-xv4ileqgde-resize-w:720.image"
height=220
/>

> 中央明纹的宽度: $\frac{2f\lambda}{a}$,其他各级明纹的宽度: $\frac{f\lambda}{a}$ 

### 光栅衍射
**光栅常数**: 两缝中心之间的距离,即 $a+b$
> $a$ 是单缝的宽度, $b$ 是两缝间不透光部分的宽度

**光栅方程**:
$$
(a+b)\sin \theta = k\lambda,k=0,\pm 1,\pm 2,...
$$
> $k$ 是光栅衍射明纹的级次

**主极大**:满足光栅方程的*明纹*称为**主极大**

#### 光栅衍射条纹的缺级
$$
\begin{cases}
a\sin \theta = k'\lambda,\quad k'=\pm 1,\pm 2,... \text{(夫琅禾费衍射为暗条纹)}\\
(a+b)\sin \theta = k\lambda,\quad k=0,\pm 1,\pm 2,...\text{(满足光栅方程明纹的条件)}
\end{cases} 
$$

解得:
$$
k=\frac{a+b}{a}k'
$$
::: warning
算出的 $k$ 必须是整数
:::
#### 光栅衍射明纹的宽度

<Picture
url="/assets/articles/study/optics/1.webp"
height=150
/>

**光栅衍射暗纹计算公式**:
$$
(a+b)\sin \theta = \frac{m}{N}\lambda,(m\in Z,m\not=kN,m>0)
$$

:::info 
在第$k$级主极大和第$k+1$级主极大明纹之间有$N-1$条暗纹,在相邻暗纹之间必定有明纹,称为**次极大**,相邻主极大之间有$N-2$个次极大
:::

第一级明纹的衍射角
$$
\sin \theta_1=\frac{\lambda}{a+b}
$$

### 光学仪器的分辨本领
$$
\theta=1.22\frac{\lambda}{D}
$$ 
> $D$ 是圆孔直径, $\lambda$ 是入射光波长, $\theta$ 是艾里斑的半角宽度,也叫最小分辨角

**光学仪器的分辨本领**: 最小分辨角的倒数 $\frac{1}{\theta_0}$
$$
\frac{1}{\theta_0}=\frac{D}{1.22\lambda}
$$

#### 光栅的分辨本领
$$
R=kN
$$
> 光栅的分辨本领与级次$k$,光栅的总缝数$N$都成正比

### X射线晶体衍射
#### 
<Picture
url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMsIPgdZ-LpDgNt6HZfUfQLzwLcVb8jN-9BecDY_UY0f3qmcsdi8CLtz0&s=10"
height=320
/>

$$
2d\sin \theta = k\lambda, \quad k=1,2,...
$$
> $d$ 是晶面间距, $\theta$ 是掠射角, 只有满足以上条件, X射线才能相互干涉而加强

## 光的偏振
圆偏振光可分解成两束振动方向相互垂直,振幅相等,频率相同,相位差是 $\pm\frac{\pi}{2}$ 的线偏振光
椭圆偏振光可分解成两束振动方向相互垂直,振幅不同,频率相同,有固定相位差的线偏振光
### 马吕斯定律
$$
I=I_0\cos^2\theta
$$
> $\theta$ 是光振动方向和偏振片的偏振化方向的之间的夹角,$I$ 是出射光强, $I_0$ 是入射光强

### 反射与折射的偏振
#### 布儒斯特定律
<Picture
url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwYCY2XUf824oLNZSK42GktQqfQRpiKnUFW6lx06Nt-SOPD909ANLeZ4&s=10"
height=320
/>

$$
\tan i_b=\frac{n_2}{n_1}
$$
> $i_b$ 为布儒斯特角
### 光的双折射

<BiliBili
bvid="BV1VDpUeCEvv"
/>
