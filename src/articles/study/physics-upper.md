---
title: 大学物理力学篇
icon: solar:notes-outline
date: 2026-04-05
star: false
excerpt: 清明闲来无事，来学物理吧
category:
  - 学习
  - 物理
tag:
  - 大学物理
  - 力学
---


## 第一章 质点运动学
### 质点运动的描述
**位矢**:又叫**位置矢量**,是从原点到质点的有向线段,是矢量
$$\vec r = x\vec i+y\vec j+z\vec k$$
$$r=|\vec r|=\sqrt{x^2+y^2+z^2}$$
>$(x,y,z)$是质点的坐标

**质点的运动方程**:在直角坐标系中,质点的运动方程可以表示为:
$$\vec r = \vec r(t)=x(t)\vec i+y(t)\vec j+z\vec k $$
其分量形式是
$$x = x(t),y = y(t),z=z(t)$$
将分量形式中的时间参数t消去,得到质点运动的**轨迹方程**:
$$f(x,y,z)=0$$

**位移**:
$$\Delta \vec r = \vec r(t+\Delta t)-\vec r(t)$$
其中r为位矢,t为质点的运动时间,$\Delta \vec r$就是位移

:::warning 注意
$\Delta r = |\vec r(t+\Delta t)|-|\vec r(t)|$,$|\Delta \vec r|=|\vec r(t+\Delta t)-\vec r(t)|$,所以
$$\Delta r \not=|\Delta \vec r| $$
,其中 $\Delta s=|\Delta \vec r|$表示路程
:::

**平均速度**
$$\bar{\vec v}=\frac{\Delta \vec r}{\Delta t}$$
>平均速度也是矢量!

**速度(瞬时速度)**
$$\vec v = \lim_{\Delta t\rightarrow 0}\frac{\Delta \vec r}{\Delta t}=\frac{d\vec r}{dt}$$

**速率**
$$v=\lim_{\Delta t\rightarrow 0}\frac{|\Delta \vec r|}{\Delta t}=\frac{ds}{dt}$$

在直角坐标系中,速度可以表示为
$$\vec v = \frac{d\vec r}{dt}=\frac{dx}{dt}\vec i+\frac{dy}{dt}\vec j+\frac{dz}{dt}\vec k$$
---
**加速度(平均)**
$$\bar{\vec a}=\frac{\Delta \vec v}{\Delta t} $$

**加速度**
$$\vec a = \lim_{\Delta t\rightarrow 0}\frac{\Delta \vec v}{\Delta t}=\frac{d\vec v}{dt}=\frac{d^2\vec r}{dt^2}$$

在直角坐标系中,加速度可以表示为:
$$\vec a = a_x\vec i+a_y\vec j+a_z\vec k$$

### 切向加速度与法向加速度
#### 自然坐标系
质点在一个平面内做曲线运动,若运动轨迹已知,则可以把此轨迹曲线看作一维坐标的轴线,建立一种新的坐标系,即**自然坐标系**

在轨迹曲线上任取一点$P$作为坐标原点,任意选定轴线的一个走向为正方向,则**质点在轨迹上的位置可以按从$P$点算起的弧长$s$来表示**,$s$被称为**弧坐标**,它的值可正可负.
$$s=s(t)$$

$t$时刻,质点在轨迹上的某处,取一单位矢量,沿着该点的切线方向,并指向弧坐标增加的方向,此矢量被称为**切向单位矢量**,记作$\tau$,
另取一单位矢量,沿着切线的法线方向,指向轨迹的凹侧,叫做**法向单位矢量**,记作$n$
在自然坐标系中速度也可以表示为
$$\vec v=v\tau=\frac{ds}{dt}\tau$$

#### 切向加速度与法向加速度
根据上式,在自然坐标系中,加速度可以表示为:
$$\vec a=\frac{d\vec v}{dt}=\frac{d(v\tau)}{dt}=\frac{dv}{dt}\tau+v\frac{d\tau}{dt}$$
其中:
$$\vec {a_\tau}=\frac{dv}{dt}\tau$$
$\vec {a_\tau}$是切向加速度,它反应速度大小随时间的变化,方向始终是切向;
$\frac{d\vec \tau}{dt}$经过计算(引入曲率)后为$\frac{v}{\rho}\vec n$
>$\rho$是该点的曲率半径

于是可以得到**法向加速度**
$$\vec a_n = v\frac{d\vec \tau}{dt}=\frac{v^2}{\rho}\vec n$$

于是质点的加速度可以被分成切向和法向两个分量:
$$\vec a = a_\tau \vec \tau+a_n\vec n=\frac{dv}{dt}\tau+\frac{v^2}{\rho}\vec n$$

### 运动学相关公式

#### 一、直线运动
$v=\frac{dx}{dt}\quad a= \frac{dv}{dt}$

基本公式（初速度 $v_0$，加速度 $a$，时间 $t$，末速度 $v$，位移 $s$）：

1. 速度公式：$v = v_0 + at$
2. 位移公式：$s = v_0 t + \frac{1}{2}at^2$
3. 速度–位移公式：$v^2 - v_0^2 = 2as$
4. 平均速度公式：$\bar{v} = \frac{v_0 + v}{2} = \frac{s}{t}$
5. 中间时刻瞬时速度：$v_{t/2} = \bar{v}$
6. 连续相等时间间隔位移差：$\Delta s = aT^2$（$T$ 为时间间隔）

---

#### 二、自由落体运动（$v_0 = 0$，$a = g$）
- 速度：$v = gt$
- 下落高度：$h = \frac{1}{2}gt^2$
- 速度–高度：$v^2 = 2gh$

---

#### 三、竖直上抛运动（取竖直向上为正方向，$a = -g$）
- 速度：$v = v_0 - gt$
- 位移：$h = v_0 t - \frac{1}{2}gt^2$
- 速度–位移：$v^2 - v_0^2 = -2gh$
- 最大高度：$H = \frac{v_0^2}{2g}$
- 上升时间：$t_{\text{上}} = \frac{v_0}{g}$
- 落回抛出点时间：$t_{\text{总}} = \frac{2v_0}{g}$

---

#### 四、平抛运动（水平匀速，竖直自由落体）
以抛出点为原点，水平向右为 $x$ 轴，竖直向下为 $y$ 轴：

- 水平位移：$x = v_0 t$
- 竖直位移：$y = \frac{1}{2}gt^2$
- 合位移：$s = \sqrt{x^2 + y^2}$，方向 $\tan\theta = \frac{y}{x}$
- 水平速度：$v_x = v_0$
- 竖直速度：$v_y = gt$
- 合速度：$v = \sqrt{v_0^2 + (gt)^2}$，方向 $\tan\alpha = \frac{v_y}{v_x}$

---

#### 五、圆周运动

##### 1. 基本角量定义
- 角位置：$\theta(t)$（单位 rad）
- 平均角速度：$\bar{\omega}=\frac{\Delta \theta}{\Delta t}$
- 角速度：$\omega = \frac{d\theta}{dt}$
- 平均角加速度：$\bar{\beta}=\frac{\Delta \omega}{\Delta t}$
- 角加速度：$\beta = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2}$

##### 2. 线量与角量的关系（$R$ 为圆周半径）
- 弧长：$s = R\theta$
- 线速度大小：$v = R\omega$
- 切向加速度：$a_\tau = R\beta$
- 法向加速度（向心加速度）：$a_n = R\omega^2 = \frac{v^2}{R}$
- 总加速度大小：$a = \sqrt{a_\tau^2 + a_n^2}$

##### 3. 匀速圆周运动（$\omega = \text{常量}$，$\alpha = 0$）
- 周期：$T = \frac{2\pi}{\omega} = \frac{2\pi R}{v}$
- 频率：$f = \frac{1}{T} = \frac{\omega}{2\pi}$
- 向心加速度：$a_n = \frac{v^2}{R} = \omega^2 R$
- 向心力（牛顿第二定律）：$F_n = m a_n = m\frac{v^2}{R} = m\omega^2 R$

##### 4. 匀角加速圆周运动（$\beta = \text{常量}$）
- $\omega = \omega_0 + \beta t$
- $\theta = \omega_0 t + \frac{1}{2}\beta t^2$
- $\omega^2 - \omega_0^2 = 2\beta(\theta - \theta_0)$

##### 5. 非匀角加速圆周运动（一般情况）
- 角速度：$\omega(t) = \omega_0 + \int_0^t \beta(\tau)\,d\tau$
- 角位置：$\theta(t) = \theta_0 + \int_0^t \omega(\tau)\,d\tau$
- 线速度：$\vec{v} = \vec{\omega} \times \vec{r}$（矢量叉乘形式）
- 加速度：$\vec{a} = \vec{\alpha} \times \vec{r} + \vec{\omega} \times (\vec{\omega} \times \vec{r})$
  其中 $\vec{\beta} \times \vec{r}$ 为切向分量，$\vec{\omega} \times (\vec{\omega} \times \vec{r})$ 为法向（向心）分量。
---

### 相对运动
#### 伽利略速度变换
伽利略速度变换是经典力学（牛顿力学）中不同惯性参考系之间速度变换的基本关系。它描述了一个物体相对于两个相对运动的参考系的速度如何关联。
$$\vec v = \vec v_0+\vec v'$$

**符号含义**:
- **$\vec v$**：物体相对于**静止参考系 S**（通常视为地面）的速度。
- **$\vec v_0$**：**运动参考系 S'** 相对于 **静止参考系 S** 的速度（即参考系之间的相对速度）。
- **$\vec v'$**：物体相对于**运动参考系 S'** 的速度。

**物理意义**:
如果运动参考系 S' 以恒定速度 $\vec v_0$ 相对于 S 运动（且两者坐标轴保持平行，时间统一），那么物体在 S 中的速度等于 S' 相对于 S 的速度加上物体在 S' 中的速度。这相当于**速度的矢量加法**。

**适用范围**:
- 只适用于**低速**（远小于光速）情况，且参考系为**惯性系**（无加速度）。
- 时间被认为是绝对的（与参考系无关），即 $t = t'$。

**例子**:
人在行驶的火车上行走
- 设地面为静止参考系 S。
- 火车以速度 $v_0 = 20 \, \text{m/s}$ 向东行驶（取向东为正方向），火车作为运动参考系 S'。
- 人在火车上相对火车以速度 $v' = 2 \, \text{m/s}$ 向东行走。
- 则人相对于地面的速度为：
  $v = v_0 + v' = 20 + 2 = 22 \, \text{m/s}$（向东）
- 若人相对火车向西行走（$v' = -2 \, \text{m/s}$），则：
  $v = 20 + (-2) = 18 \, \text{m/s}$（仍向东，但变慢）

---

## 第二章 质点动力学
## 第三章 刚体力学
### 刚体运动学
#### 角速度与角加速度
**刚体**: 其内部任意两个质点之间的距离在外力作用下始终保持不变

- 刚体的**角速度**（$\omega$）定义为
$$\omega = \frac{d\theta}{dt}$$
>其中$d\theta$是$dt$时间内发生的角位移
- 刚体的**角加速度**定义为

$$\beta = \frac{d\omega}{dt} = \frac{d^2 \theta}{dt^2}$$

- $\omega$是矢量，其方向满足右手螺旋定则
- 某质点$P$的角速度与速度的关系：
$$\vec v_i=\vec\omega \times \vec r_{iO}=\vec\omega \times \vec r_i$$
> 注意：$\vec v_i$是该点相对参考点的速度
- 某质点$P$的加速度：
$$
\vec a_i = \frac{d\vec v_i}{dt} = \frac{d(\vec\omega \times \vec r_i)}{dt} = \frac{d\vec\omega}{dt} \times \vec r_i + \vec\omega \times \frac{d\vec r_i}{dt}
$$
>$v_i$是线速度矢量，$r$是位矢
注意：其中$\frac{d\vec r_i}{dt}$表示该点相对参考点的速度即$v_i$,所以有
$$\frac{d\vec r_i}{dt} = v_i = \vec\omega \times \vec r_i$$
原式的最终结果是
$$\frac{d\vec\omega}{dt} \times \vec r_i + \vec\omega \times (\vec\omega \times \vec r_i)$$

将其按加号拆成两个部分，前一个是切向加速度$a_{\tau}$,后一项是法向加速度$a_n$，即：
$$a_{\tau} = r_i\beta,a_n=r_i\omega^2$$

::: warning
虽然角位移有大小，也有方向，但是**不是矢量**，因为角位移不满足矢量的交换律。
如：将一个物品先绕x轴顺时针旋转$\pi\over 2$，再绕y轴顺时针旋转$\pi\over 2$。但是如果是先y后x，得到的物品方向和之前完全不同
:::
<hr/>

#### 转动定律
一刚体绕z轴转动：
$$M_z=\frac{d L_z}{dt} $$
其中，$M_z$是总外力矩在z轴的分量，$L_z$是总角动量在z轴的分量
由他们的求和形式可以推出转动惯量$I$的表达式
$$I=\lim_{N\rightarrow \infty} \sum_{i=1}^N \Delta m_i r_i^2 = \int r^2 dm$$

$L_z=I\omega,M_z=\frac{d L_z}{dt}$联立：
$$M_z = I\beta$$

:::info 转动定律
$M_z = I\beta$，即刚体所受的对某一固定转轴的**合外力矩**等于刚体对同一转轴的**转动惯量**与刚体获得的**角加速度**的*乘积*
:::
#### 一些均匀刚体对特殊转轴的转动惯量
<img src="/assets/articles/study/physic-hupper-1.jpg" hight=430/>
<br>
<img src="/assets/articles/study/physic-hupper-2.jpg" hight=430/>
<hr>

#### 平行轴定理和垂直轴定理
##### 平行轴定理
对应同一个刚体(质量是m)的两个平行转轴(间距是d)，其中一个(对应的转动惯量是$I_C$)通过此刚体的质心；则刚体对应另一个转轴的转动惯量$I$:
$$I = I_C + md^2$$

##### 垂直轴定理
::: center
<img src="/assets/articles/study/垂直轴定理.webp" alt="垂直轴定理示意图"/>
:::

***薄板型刚体***相对于z轴的转动惯量$I_z$和相对于x，y轴的转动惯量$I_x$,$I_y$有下面关系：
$$
I_z = I_x+I_y
$$

#### 刚体的动能与势能
**力矩所做的功**：
$$d A = M d \theta$$
> A为力矩做功，M是力矩，$d \theta$是角位移
即：
$$A=\int_{\theta_1}^{\theta_2}M d \theta$$
<hr>

##### **刚体的转动动能**
$$E_k = \frac{1}{2} I \omega^2$$
>$I$是转动惯量，$\omega$是刚体转动的角速度，$E_k$就是转动动能

$$A=\int_{\theta_1}^{\theta_2}M d \theta=\frac{1}{2} I \omega_2^2-\frac{1}{2} I \omega_1^2$$
:::info 刚体转动的动能定理
刚体绕固定转轴转动时**动能的增量**等于**合外力矩阵所做的功**
:::

##### **刚体的势能**
$$E_p = mgh_C$$
>$E_p$是刚体的势能，$h_C$是**刚体质心相对势能零点**的距离

#### 刚体转动的角动量和角动量守恒
##### 刚体转动的角动量
刚体转动的角动量可以表示为
$$L=I\omega$$
>其中$\omega$表示刚体转动的**角速度**

刚体转动的角动量定理可以表示为:
$$M=\frac{dL}{dt}=\frac{d(I\omega)}{dt}$$
$$\int_{t_0}^t M dt = I\omega-I_0\omega_0$$
$\int_{t_0}^t M dt$被称为合外力矩$M$在$t_0~t$时间内的**冲量矩**

:::info 角动量定理的积分形式
$\int_{t_0}^t M dt = I\omega-I_0\omega_0$表明:在一段时间内,相对于同一转轴的合外力矩的**冲量矩**等于在这段时间内的刚体**角动量的增量**
:::

##### 角动量守恒
由$\int_{t_0}^t M dt = I\omega-I_0\omega_0$知,若合外力距$M = 0$,则有:
$$I\omega=0$$
:::info 刚体定轴转动的角动量守恒定律
当刚体相对于转轴所受的**合外力距**是0时,刚体相对于同一转轴的**角动量**保持不变
:::
<hr>

#### *进动

**进动**（precession）是指一个自转物体（如陀螺、行星）的旋转轴在空间中绕另一个固定方向（通常为竖直方向）缓慢旋转的现象。其本质是：当自转物体的角动量方向受到与它垂直的净力矩作用时，角动量方向会随时间发生改变，从而使得自转轴绕某个轴做圆锥运动。

经典例子：
- **陀螺进动**：倾斜的自转陀螺，重力对支点产生力矩，使自转轴绕竖直方向缓慢转动，而非倒下。
- **地球的岁差**：地球自转轴在约 2.6 万年内绕黄道轴画出一个圆锥，由太阳、月亮对地球赤道隆起部分的引力矩引起。

进动的角速度 $\vec\Omega$ 满足：
$$
\vec\Omega = \frac{\vec M}{I\omega \sin\theta}
$$
>$I$与$\omega$分别是陀螺仪绕自身转轴转动的角动量和角速度,$M$是合外力距,$\theta$是自身转轴与通过顶点的竖直轴的夹角(锐角)
