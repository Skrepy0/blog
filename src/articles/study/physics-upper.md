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
- 加速度：$\vec{a} = \vec{\beta} \times \vec{r} + \vec{\omega} \times (\vec{\omega} \times \vec{r})$
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
### 牛顿运动定律
**牛顿第一定律**(惯性定律):任何物体都有**保持静止**或**匀速直线运动**状态的性质,直到其他物体的作用迫使他改变这种状态
但是牛顿第一定律并不是在所有的参考系中都成立,只有在某种特殊的参考系中才会成立,这种参考系叫做**惯性系**.
而具体判断某个参考系是不是惯性参考系**只能通过实验观察**,例如:太阳参考系就是一个很好的参考系,而地球就不是严格的惯性参考系.

**牛顿第二定律**:物体运动的加速度与其所受到的合外力的大小成正比,与物体的质量成反比,加速度的方向和合外力的方向相同.
$$\vec F = m\vec a=m\frac{d\vec v}{dt}=\frac{d(m\vec v)}{dt}=\frac{d\vec p}{dt}$$
> 式中$\vec F$表示物体受到的合外力,$\vec p=m\vec v$,$p$表示该物体的动量

其中$F = m\frac{dv}{dt}$常常被用来列微分方程求解

**牛顿第三定律**:两个物体之间的作用力和反作用力总是同时产生,同时消失,大小相等,方向相反,且沿同一条直线,分别作用于两个不同的物体上,即:
$$
\vec F_{12}=-\vec F_{21}
$$
### 常见力与基本力
#### 重力
$$\vec P=m\vec g$$
#### 弹性力
弹簧的弹力满足**胡克定律**:
$$
F=-kx
$$
绳子的**张力**:
- 若绳子的质量可以忽略,则绳子各处的张力可以视为相等
- 若绳子的质量不可以被忽略,则绳子的张力在各个部分一般不相同
**压力和支持力**也是弹性力,它们的大小取决于相互挤压的程度,方向总是垂直于接触面并指向对方.

**摩擦力**:
1. **静摩擦力**:两个物体相互接触,但未发生相对滑动,但是沿着接触面的方向有相对滑动的趋势时,在接触面上就会产生一对**阻碍相对运动趋势的力**,即**静摩擦力**.
$$f_{smax}=\mu_s N $$
> 式中$f_{smax}$表示最大静摩擦力,$N$表示两物体间的压力,$\mu_s$表示**静摩擦系数**

2. **滑动摩擦力**:当两个相互接触的物体沿着接触面发生相对滑动时,在接触面之间会产生一种阻碍相对滑动的力,这种力就是滑动摩擦力
$$f_k=\mu_k N$$

> 式中$\mu_k$称为滑动摩擦系数,其数值取决于两个物体的材料,接触面的情况(干湿,粗糙程度)等,还和**两物体的相对滑动速度**有关,当相对滑动速度很大的时候,$\mu_k$也会想相应增大,但是在一般情况下,认为$\mu_k$近似是常量

#### 基本力
1. 万有引力
$$F=G\frac{mM}{r^2}$$
>式中$G=6.67\times 10^{-11} N\cdot m^2/kg^2$被称为引力常量

2. 弱力
一般也被成为**弱相互作用**,存在于许多粒子之间,但仅在微观粒子间的某些反应(如$\beta^-$衰变)中才显示出它的重要性,
弱力是短程力,两个质子之间的弱力约为$10^{-2}N$

3. 强力
一般也被成为**强相互作用**,它存在于原子核内质子,中子之间.它也是短程力,但是强度很大,两个相邻质子间的强力可以达到$10^4N$

4. 电磁力
指带电粒子或带电的宏观物体之间的相互作用力.(由于本文主要将力学,所以不过多讲述)

### 量纲
以$T,L,M$分别表示作为基本量的时间,长度和质量.若仅仅考虑某个导出量是如何由这些基本量组成的,则一个导出量可以用$T,L,M$的幂次的组合表示出来,下面举几个例子:
$$
[v]=LT^{-1}
$$
$$
[a]=LT^{-2}
$$
$$
[F]=MLT^{-2}
$$
这样的表达式叫做各个物理量的**量纲**
:::warning 注意
这里的量纲是它们在SI(国际单位制)中的表达式,在不同的单位制下,基本量的选择不同,则同一个物理量的量纲也不同
:::

### 动量和动量守恒定律
#### 动量定理
牛顿第二定律的微分形式:
$$\vec F dt=d\vec p$$
此式子左端的$\vec F dt$表示力在$dt$时间内的积累量,称作合外力$\vec F$的**冲量**,通常用$\vec I$表示,其单位是$N\cdot  s$(国际单位制).
在$t_1~t_2$时间段中,合外力的冲量:
$$\vec I=\int_{t_1}^{t_2}\vec F dt=\int_{\vec p_1}^{\vec p_2} d\vec p=\vec p_2-\vec p_1$$

上面两个等式均可以称为质点的**动量定理**(theorem of momentum)
当然,由于动量定理是矢量规律,在直角坐标系中,在x,y,z三个分量也有此规律.

**平均冲力**:

$$
\bar F = \frac{\int_{t_1}^{t_2}\vec F dt}{t_2-t_1}=\frac{\vec I}{\Delta t}
$$

根据上式可得:

$$\vec I=\bar F\Delta t$$
#### 质点系动量定理
**质点系**:由多个质点构成的系统
**内力**:系统内各质点间的相互作用力
**外力**:系统以外的物体对系统内质点的作用力
:::info 质点系的动量定理
系统所受的合外力的**冲量**,等于**系统总动量的增量**
$$
\int_{t_0}^t \sum_i \vec F_i=\sum_i m_i \vec v_{i}-\sum_i m_i \vec v_{i0}
$$
> $\sum_i \vec F_i$表示系统所受的合外力,$\sum_i m_i \vec v_{i0}$和$\sum_i m_i \vec v_{i}$分别表示始,末状态的系统总动量
:::

质点系的动量定理也有分量形式,下面以直角坐标中的x轴方向作为示例:
$$
\int_{t_0}^t \sum_i F_{ix}=\sum_i m_{ix}  v_{ix}-\sum_i m_i v_{i0x}
$$
#### 动量守恒定律
由[质点系的动量定理](#质点系动量定理)知,当$\sum_i \vec F_i=\vec 0$时,有
$$
\sum_i m_i \vec v_i=\text{常矢量}
$$
:::info 动量守恒定律
**当系统所受合外力为零时,系统总动量保持不变**
:::

当然,它也有分量形式,即系统在某方向上的合外力等于0时，系统总动量在该方向的分量守恒；下面以直角坐标中的x轴方向作为示例:
$$\sum_i F_{ix}=0\text{时},\sum_i m_i v_{ix}=\text{常量} $$

#### 质心运动定理
##### 质心的位置
在直角坐标系中，质心的位置为
$$
x_C=\frac{\sum_{i=1}^N m_i x_i}{m},\quad y_C=\frac{\sum_{i=1}^N m_i y_i}{m},\quad z_C=\frac{\sum_{i=1}^N m_i z_i}{m}
$$
对于质量连续分布的物理,质心的位置矢量是:
$$
x_C=\frac{\int xdm}{m},\quad y_C=\frac{\int ydm}{m},\quad z_C=\frac{\int zdm}{m}
$$

##### 质心运动定理
:::info 质心运动定理
不管物体的质量如何分布,也不管外力情况如何,质心的运动就像物体的质量都集中在作用在质心时质点的运动一样,数学表达式:
$$\vec F = \frac{d\vec p}{dt}=m\frac{d\vec v_c}{dt}=m\vec a_C$$
:::
### 功和能
**功**:质点在力 $\vec F$ 的作用下发生了一**元位移** $d\vec r$ ,力 $\vec F$ 做的**功**定义为:
$$
dA=\vec F\cdot d\vec r
$$

力 $\vec F$ 在质点从`a`点沿着路径`L`到达`b`点时对质点做的功:
$$
A=\int_{a(L)}^b \vec F\cdot d\vec r
$$

**功率**:力在单位时间内做的功,即
$$
P=\frac{dA}{dt}
$$

结合 $dA=\vec F\cdot d\vec r$ 有:
$$
P=\frac{dA}{dt}=\frac{\vec F\cdot d\vec r}{dt}=\vec F \cdot \vec v
$$

### 动能定理
**动能**:$E_k=\frac{1}{2} mv^2$

:::info 动能定理
合外力对质点所做的功等于质点动能的增量,数学表达式为:
$$
A=\int_a^b \vec F \cdot d\vec r = \int_a^b m \frac{d\vec v}{dt} \cdot d\vec r=\int_{v_a}^{v_b} m\vec v \cdot d\vec v = \frac{1}{2} m v_b^2-\frac{1}{2} m v_a^2
$$
:::

:::info 质点系的动能定理
对于一质点系,所有外力做的功与所有内力做的功的代数和等于系统总动能的增量,即:
$$
\sum_{i=1}^N A_{i\text{外}}+\sum_{i=1}^N A_{i\text{内}}=\sum_{i=1}^N E_{ki}

$$
:::
> **内力**虽然不改变系统的总动量,但是会改变**系统的总动能**即系统所有的内力做的功不一定为零

### 保守力与非保守力
**保守力**:做功与路径无关的力(只与质点的始末位置有关, 与具体路径无关)称为保守力
**非保守力**:做功与路径有关的力(如摩擦力)称为非保守力
#### 重力做的功
$$
A=\int_a^bm\vec g\cdot d\vec r=-(mgz_b-mgz_a)
$$
$$E_p=mgh$$
#### 弹簧弹力的功
$$
A=\int_{x_0}^x fdx=-(\frac{1}{2}kx^2-\frac{1}{2}kx_0^2)
$$
$$E_p=\frac{1}{2}kx^2$$
#### 万有引力做的功
$$
\vec f=-G\frac{m_1m_2}{r^3} \vec r
$$
$$
A=-\int^{r_b}_{r_a}G\frac{m_1m_2}{r^2}dr=G\frac{m_1m_2}{r_b}-G\frac{m_1m_2}{r_a}
$$
$$E_p=-G\frac{m_1m_2}{r}$$
:::warning 注意<Badge text="warning" type="warning" />
因为保守力做功与路径无关,所以物体沿任意封闭路径移动一周时保守力做的功为0,即刚体所受的对某一固定转轴的
$$
\oint_{L} \vec{F} \cdot d\vec{r} = 0
$$
此式子为保守力的数学定义式
:::

#### 势能
**保守力做的功等于势能的减少**
$$\int_a^b\vec f_{\text{保}}\cdot d\vec r=-(E_{pb}-E_{pa})$$

某质点在$a$点处的势能可以表示为
$$E_{pa}=\int_a^{\text{势能零点}}\vec f_{\text{保}}\cdot d\vec r$$

**势能函数求保守力**:
$$-dE_p=\vec f \cdot d\vec l=f \cos \theta dl$$
$$f_l=-\frac{dE_p}{dl}$$
即:保守力沿某个方向的分量等于对应势能函数沿该方向上空间变化率的负值
即:
$$\vec f=-\nabla E_p$$
其中 $\nabla$ 为**梯度算子**
$$\nabla=\frac{\partial}{\partial x}\vec i+\frac{\partial}{\partial y}\vec j+\frac{\partial}{\partial z}\vec k$$

#### 功能原理
$$A_{\text{内}}=A_{\text{保内}}+A_{\text{非保内}}$$
$$A_{\text{保}}=-(E_{p_2}-E_{p_1})=E_{p_1}-E_{p_2}$$
:::info 功能原理
所有**外力**和所有**非保守力**做的功的代数和等于质点系的机械能增量
:::
:::important 机械能守恒定律
如果在质点系运动变化的过程中,**只有保守内力做功**,或**所有外力做的功与所有非保守内力做的功的代数和等于零**,即:
$$A_{\text{外}}+A_{\text{非保内}}\equiv 0$$
则有:
$$E=\text{常量}$$
即为**机械能守恒定律**
:::

### 角动量守恒定律
#### 质点的角动量
$$\vec L=\vec r \times \vec p=\vec r \times m\vec v$$
> $\vec r$ 是质点相对于参考系的位矢, $\vec p$是质点的动量, $\vec L$ 就是角动量, 单位是 $kg\cdot m^2/s$

#### 力矩 质点的角动量定理
$$\vec M=\vec r\times \vec F$$
> $\vec M$ 就是力 $\vec F$ 的力矩,单位是 $N\cdot m$; $\vec r$ 是位矢

$r_{\bot}=r\sin \theta$ 为**力臂**($\theta$ 是 $\vec r\text{与}\vec F$ 之间的夹角)
**质点的角动量定理**:
$$\frac{d\vec L}{dt}=\frac{d(\vec r \times \vec p)}{dt}=\frac{d\vec r}{dt}\times \vec p+\vec r \times \frac{d\vec p}{dt}$$

其中 $\frac{d\vec r}{dt}=\vec v$ 与 $\vec p$ 平行,所以 $\frac{d\vec r}{dt}\times \vec p=0$,
$$\frac{d\vec L}{dt}=\vec r \times \frac{d\vec p}{dt}=\vec r \times \vec F=\vec M$$
即:
$$\vec M=\frac{d\vec L}{dt}$$
就是质点的角动量定理
:::info 质点的角动量定理
质点所受到的合外力矩等于质点角动量随时间的变化量
:::

其分量形式是:
$$\vec M_z=\frac{d\vec L_z}{dt}$$
是**对轴的角动量定理**
#### 质点的角动量守恒定律
由 $\vec M=\frac{d\vec L}{dt}$ 可知,若合外力距为 0 ,则角动量为常矢量

:::important 质点的角动量守恒定律
如果质点相对于某个参考点所受的合外力矩为零,则质点对该点的角动量保持不变
:::
#### 质点系的角动量定理与角动量守恒定律
**质点系的角动量定理**:质点系所受的合外力矩等于系统角动量对时间的变化律,即:
$$\vec M = \sum_{i=1}^N \vec M_{i\text{外}}=\frac{d\vec L}{dt}$$

当 $\vec M = \vec 0$ 时,$\vec L$ 是常矢量, 这就是质点系的角动量守恒定律
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
<img src="/assets/articles/study/physic-hupper/physic-hupper-1.webp" hight=430/>
<br>
<img src="/assets/articles/study/physic-hupper/physic-hupper-2.webp" hight=430/>
<hr>

#### 平行轴定理和垂直轴定理
##### 平行轴定理
对应同一个刚体(质量是m)的两个平行转轴(间距是d)，其中一个(对应的转动惯量是$I_C$)通过此刚体的质心；则刚体对应另一个转轴的转动惯量$I$:
$$I = I_C + md^2$$

##### 垂直轴定理
::: center
<img src="/assets/articles/study/physic-hupper/垂直轴定理.webp" alt="垂直轴定理示意图"/>
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
刚体绕固定转轴转动时**动能的增量**等于**合外力矩所做的功**
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

## 第四章 机械振动
### 简谐振动的描述
**简谐振动**:物体偏离平衡位置的位移 $x$ 随时间 $t$ 满足:
$$x=A\cos (\omega t+\varphi)$$
称为简谐振动,上式称为简谐振动的运动方程

### 简谐振动的特征量
$$A\quad \omega \quad \varphi$$
上面三个物理量决定了简谐运动,这三个参数是简谐振动的特征量
$A$ 是振幅,表示了质点离开平衡位置的最大距离
$T$ 是周期,表示做一次完全振动所需要的时间
$$T=\frac{2\pi}{\omega}$$
$\nu=\frac{1}{T}=\frac{\omega}{2\pi}$ 表示频率
$\omega=2\pi\nu=\frac{2\pi}{T}$ 是角频率
> 单位:$\nu(Hz),\quad \omega(rad/s)$

$(\omega t+\varphi)$ 表示**振动系统在t时刻的相位**, $t=0$ 时,$\varphi$ 表示**初相位**

### 简谐振动的旋转矢量法
**旋转矢量法**:简谐振动可以通过一个**旋转矢量的投影**来表示
::: center
<img
src="https://www.fmingde.com/wp-content/uploads/2020/10/physic14-rotationvector.gif" alt="简谐振动的旋转矢量法" height=200
/>

通过一个旋转的矢量 $M$ 在x轴的投影:
$$x=A\cos (\omega t+\varphi)$$
:::
---
设有两个简谐振动,其运动方程分别是
$$x_1=A_1\cos (\omega t+\varphi_1),\quad x_2=A_2\cos (\omega t+\varphi_2)$$
二者在任意时刻的相位差
$$\Delta \varphi = (\omega t+\varphi_2)-(\omega t+\varphi_1)=\varphi_2-\varphi_1$$

- $\Delta \varphi=0$ 时称为**同相**
- $\Delta \varphi=\pi$ (或 $\pi$ 的奇数倍),旋转矢量 $\vec A_1,\quad A_2$ 完全相反,称为**反相**
- $\Delta \varphi>0$ 时称 $x_2$ 的相位超前 $x_1$ 的相位 $\Delta \varphi$ ,反之为落后.

:::warning 注意
由于 $\Delta \varphi$ 的周期是 $2\pi$,这种**超前**和**落后**不具有绝对性,一般取 $-\pi\le\Delta\varphi\le\pi$
:::

### 简谐运动的动力学方程
$$
F=-kx
$$
这种与位移大小成正比,方向与位移相反,且始终指向平衡位置的力称为**线性恢复力**
物体受到线性恢复力是物体做简谐振动的动力学原理

弹簧振子的固有频率是
$$
\nu=\frac{\omega}{2\pi}=\frac{1}{2\pi}\sqrt{\frac{k}{m}}
$$
### 简谐振动的能量
$$
E_k=\frac{1}{2}mv^2=\frac{1}{2}m\omega^2A^2sin^2(\omega t+\varphi)
$$
$$
E_p=\frac{1}{2}kx^2=\frac{1}{2}kA^2cos^2(\omega t+\varphi)
$$
简谐运动的总能量
$$
E=E_k+E_p=\frac{1}{2}m\omega ^2A^2=\frac{1}{2}kA^2
$$
弹簧振子动能和势能在一个周期T内对时间的平均值
$$
\bar E_k=\frac{1}{4}kA^2,\quad
\bar E_p=\frac{1}{4}kA^2
$$

### 简谐振动的合成
#### 两个同方向,同频率的简谐振动的合成
$$x_1=A_1\cos(\omega t+\varphi_1), \quad x_2=A_2\cos(\omega t+\varphi_2)
$$
合成的振动表达式
$$
x=A\cos(\omega t+\varphi)
$$
$$
A=\sqrt{A_1^2+A_2^2+2A_1A_2\cos(\varphi_2-\varphi_1)}
$$
$$
\varphi = \arctan \frac{A_1\sin \varphi_1+A_2\sin \varphi_2}{A_1\cos \varphi_1+A_2\cos \varphi_2}
$$
:::info
两个同方向同频率简谐运动的合振动仍是简谐振动,合频率与分振动的频率相同
:::
**重要特例**:
1. 两分振动同向:$\Delta \varphi=2k\pi(k\in Z), \cos(\varphi_2-\varphi_1)=1$
合振幅
$$
A=A_1+A_2
$$
此时合振幅最大,两个分振动合成的结果是振动加强
2. 两分振动反向:$\Delta \varphi=(2k+1)\pi(k\in Z), \cos(\varphi_2-\varphi_1)=-1$
合振幅
$$
A=|A_1-A_2|
$$
#### 多个同方向同频率简谐振动的合成
合振动的运动方程:
$$
x=A\cos(\omega t+\varphi)
$$
合振动的振幅
$$
A=\sqrt{A_x^2+A_y^2}
$$
合振动的初相位
$$
\varphi = \arctan \frac{A_y}{A_x}
$$
式中 
$$A_x=\sum_{k=1}^n A_k\cos \varphi_k$$
$$
A_y=\sum_{k=1}^n A_k\sin \varphi_k
$$
> 其中$n$表示分振动个数

特别地,当 $x_i=A_0\cos(\omega t+i\theta-\theta)$ 时:
$$
A=A_0 \frac{\sin \frac{n\theta}{2}}{\sin \frac{\theta}{2}}, \quad
\varphi = \frac{n-1}{2} \theta
$$

#### 两个同方向不同频率简谐振动的合成 拍
两个分振动:
$$
x_1=A\cos \omega_1 t, \quad x_2=A\cos \omega_2 t
$$
合振动的运动方程
$$
x=2A\cos(\frac{\omega_2-\omega_1}{2}t)\cos(\frac{\omega_2+\omega_1}{2}t)
$$

若 $|\omega_2-\omega_1|<<\omega_2+\omega_1$ , 则可以认为合振动是"振幅"为 $|2A\cos(\frac{\omega_2-\omega_1}{2}t)|$ , 角频率是 $\frac{\omega_2+\omega_1}{2}$ 的"近似"简谐振动, 由于"振幅"随时间做周期性的缓慢变化, 故形成了**振幅(或强度)时而加强时而减弱的现象**, 称为**拍**(beat)

**拍频**: 单位时间内振动加强或振动减弱的次数,即"振幅" $|2A\cos(\frac{\omega_2-\omega_1}{2}t)|$ 随时间做周期性变化的频率叫做拍频

$$\nu=\frac{|\omega_2-\omega_1|}{2\pi}=|\nu_2-\nu_1|$$
> 即:拍频等于两分振动的频率之差

#### 两个相互垂直简谐振动的合成
$$x=A_1\cos(\omega t+\varphi_1), \quad y=A_2\cos(\omega t+\varphi_2)
$$
消去时间 `t` ,得到直角坐标系中质点的轨迹方程
$$
\frac{x^2}{A_1^2}+\frac{y^2}{A_2^2}-\frac{2xy}{A_1A_2}\cos(\varphi_2-\varphi_1)=\sin^2(\varphi_2-\varphi_1)
$$
下面讨论 $\Delta \varphi = \varphi_2 - \varphi_1$ 的特殊情况
- ==$\Delta \varphi=0$==, 即两振动同相,令 $\varphi_2 = \varphi_1 = \varphi$, 有:
$$
y=\frac{A_2}{A_1} x
$$
是一条直线
- ==$\Delta \varphi=\pi$==,两振动反相,则有
$$
y=-\frac{A_2}{A_1} x
$$
> 上面两个的振幅都是 $\sqrt{A_1^2+A_2^2}$
- ==$\Delta \varphi=\frac{\pi}{2}$==,带入轨迹方程得:
$$
\frac{x^2}{A_1^2}+\frac{y^2}{A_2^2}=1
$$
,质点沿椭圆顺时针运动
- ==$\Delta \varphi=\frac{3\pi}{2}$==,质点的运动仍是以坐标轴为主轴的椭圆,但是和上面的情况运动方向相反,沿椭圆逆时针运动
- ==$\Delta \varphi$ 为其他值==,质点的运动轨迹是斜椭圆

<Picture
url="https://spaces.ac.cn/sci/mechanics/images/img6/84.gif"
height=350
info="两个相互垂直且同频率简谐振动的合成图形"
/>

**李萨如图形**:若两分振动的频率成简单整数比且初相位差恒定,**则轨迹是稳定的闭合曲线**,被称为李萨如图形

<Picture
url="https://exp-picture.cdn.bcebos.com/f591ab03c8d246fed0671d36b8bf3bef344f1e83.jpg?x-bce-process=image%2Fresize%2Cm_lfit%2Cw_500%2Climit_1%2Fformat%2Cf_auto%2Fquality%2Cq_80"
height=350
info="李萨如图形"
/>

作水平方向的直线,贯穿李萨如图形,使之和李萨如图形有==最多==数目的交点,设交点数是 $n_x$ ,同样,竖直方向的是$n_y$.
若水平,竖直方向简谐振动的周期分别是 $T_x, T_y$,则有:
$$
T_x:T_y=n_x:n_y
$$

### 阻尼振动,受迫振动,共振
#### 阻尼振动
**阻尼振动**:实际上,任何振动系统总要受到阻力的作用,由于有阻力的存在,振动系统需要不断克服阻力做功,能量将不断减少,振幅会随时间不断减弱,这种振动就是**阻尼振动**

阻尼振动可以分为两类:
1. **摩擦阻尼**:要不断克服摩擦力做功,振动能量逐渐转变成热能耗散掉
2. **辐射阻尼**:振动能量以波的形式向四周传播
> 例如:簧片震动时不仅因为空气阻力而耗散能量,同时因辐射声波而减少能量

实验表明:当物体以较小的速度在黏性介质中运动时,所受到的阻力与其运动速度成正比,方向相反,即:
$$
f=-\gamma v=-\gamma\frac{dx}{dt}
$$
> $\gamma$ 是阻力系数,其值取决于介质的性质,运动物体的形状和大小等.

以弹簧振子为例:
$$
ma=m\frac{d^2x}{dt^2}=-kx-\gamma\frac{dx}{dt}
$$
令 $\omega_0=\sqrt{\frac{k}{m}},2\beta=\frac{\gamma}{m}$
> 式中 $\omega_0$ 是振动系统无阻尼时的**固有角频率**,$\beta$ 叫**阻尼系数**

则上式可写成:
$$
\frac{d^2x}{dt^2}+2\beta\frac{dx}{dt}+\omega_0^2x=0
$$
根据 $\beta$ 的值,上述方程的解可分成三种情况:
<Picture
url="https://pic1.zhimg.com/v2-7605f73b570cc2978959d5171f600eec_r.jpg",
height=300
info="三种阻尼振动比较"
/>

- 当阻力较小时, $\beta<\omega_0$ 时称为**欠阻尼**(例如单摆在空气阻力作用下摆动的情形),方程的解为:
$$
x=A_0e^{-\beta t}\cos(\omega t+\varphi_0)
$$
> 式中 $\omega=\sqrt{w_0^2-\beta^2}; A_0,\varphi_0$ 是积分常量, $A_0e^{-\beta t}$ 是振幅

**欠阻尼振动**本身没有周期性,但是震动具有某种往复性,于是仍将 $T$ 叫做周期
$$T=\frac{2\pi}{\omega}=\frac{2\pi}{\sqrt{\omega_0^2-\beta^2}}$$

- 当 $\beta>\omega_0$ 时,称为**过阻尼**,方程的解为:
$$
x=C_1e^{-(\beta+\sqrt{\beta^2-\omega_0^2})t}+C_2e^{-(\beta-\sqrt{\beta^2-\omega_0^2})t}
$$
> $C_1,C_2$ 是由初始条件决定的积分常数,这种情况下无振动现象发生,如上图

- 当 $\beta=\omega_0$ 时,称为**临界阻尼**,方程的解为:
$$
x=(C_1+C_2t)e^{-\beta t}
$$
> $C_1,C_2$ 是由初始条件决定的积分常数,这种情况下也无振动现象发生

与过阻尼情形相比,临界阻尼情形下,物体回到平衡并停在那里所需的时间最短

#### 受迫振动
**策动力**:周期性外力
**受迫振动**:在周期性外力下发生的振动,称为**受迫振动**

设策动力为 $H\cos pt$, 其中 $H$ 是策动力的最大值,叫做==力幅==, $p$ 是策动力的角频率, 弹簧振子的受迫振动的动力学方程:
$$
m\frac{d^2x}{dt^2}+\gamma\frac{dx}{dt}+kx=H\cos pt
$$
令 $\omega_0=\sqrt{\frac{k}{m}},2\beta=\frac{\gamma}{m}, h=\frac{H}{m}$,上式可写成:
$$
\frac{d^2x}{dt^2}+2\beta\frac{dx}{dt}+\omega_0^2x=h\cos pt
$$
上式的解:
$$
x=A_0e^{-\beta t}\cos(\sqrt{\omega_0^2-\beta^2}t+\varphi_0)+A\cos(pt+\varphi)
$$
> $A_0,\varphi_0$ 是由初始条件决定的积分常数
受迫振动开始情形很复杂,但是经过一段时间后,可以达成一种稳定状态,即**外力做的功恰好补偿因阻尼而损耗的能量**,系统的机械能保持不变,振动稳定下来.

在稳定状态下,受迫振动的振动方程:
$$
x=A\cos(pt+\varphi)
$$
> 式中,振动的频率就是策动力的角频率,振幅与初相位由 $\omega_0,\beta,h,p$ 共同决定,有:

$$
A=\frac{h}{\sqrt{(\omega_0^2-p^2)^2+4\beta^2p^2}}
$$

$$
\tan\varphi=\frac{-2\beta p}{\omega_0^2-p^2}
$$

#### 共振
由于:
$$
A=\frac{h}{\sqrt{(\omega_0^2-p^2)^2+4\beta^2p^2}}
$$
策动力 $H$ 一定时,受迫振动的振幅 $A$ 随策动力角频率 $p$ 的变化而变化.
<Picture
url="https://pic3.zhimg.com/v2-0316265876ad810fb0768a1548d3ef5f_r.jpg"
height=300
info="受迫振动-频率曲线(图中的ω即为上面的p,策动力角频率)"
/>

每一条曲线都有最大值.由 $\frac{dA}{dp}=0$ 得最大值对应的角频率为:
$$
p_r=\sqrt{\omega_0^2-2\beta^2}
$$
**共振(位移共振)**:当策动力的角频率满足 $p=\sqrt{\omega_0^2-2\beta^2}$ 时,受迫振动的振幅最大,这个现象称为共振.
$p_r$ 为共振频率,由振动系统中的角频率和阻尼系数决定.
共振振幅:
$$
A=\frac{h}{2\beta \sqrt{\omega_0^2-\beta^2}}
$$

**速度共振**:若策动力的角频率 $p=\omega_0$ ,振动速度与策动力相同,速度振幅达到最大,这个现象称为速度共振
> 速度共振时策动力始终和物体的运动方向一致,策动力做正功

## 第五章 机械波
### 机械波的产生与传播
**弹性介质**:相互作用为**弹性力**的**质元**构成的系统
>常见的弹性介质有:固体,液体,气体

**波源**:引起介质质元振动的物体

**形成机械波的条件**:
- 波源
- 有传播机械振动的弹性介质

:::warning
参与波动的质元并没有随波在传播方向上漂移, 而是仅仅在自己的平衡位置附近振动
:::
---

**横波**:振动方向与波的传播方向垂直的波(如水波)
**纵波**:振动方向与波的传播方向平行的波(如声波)

---

**简谐波**:波源做简谐振动,则波所传播到的介质质元均做简谐振动,这样的波是简谐波

---

**波射线/波线**:用带箭头的直线或曲线表示波的传播方向
**波面/波阵面**:将同一时刻介质中各振动相位相同的点所连成的曲面
**波前**:最前方的波面

按照波面形状将波分为:
* 平面波
* 球面波
* 柱面波
它们的波阵面分别是平面,球面,圆柱面

:::info
- 在各向同性介质中,**波线**恒与**波面**垂直
- 球面波在无穷远处时可以看成**平面波**
:::

### 简谐波的波长,波的周期,频率与波速
**波长($\lambda$)**:在波的传播方向上两个相邻的振动状态相同(或相位差为 $2\pi$ )的质元之间的距离
**波数**:波长的倒数 $1\over \lambda$,表示单位长度内包含完整波的个数
**角波数**: $k=\frac{2\pi}{\lambda}$ 表示 $2\pi$ 长度内包含的完整波的个数

**波的周期($T$)**:介质质元完成一次全振动所需要的时间
**波的频率($\nu$)**:波的周期的倒数

**波速/相速($u$)**:振动状态的传播速度
**角频率($\omega$)**: $\omega = \frac{2\pi}{T} = 2\pi\nu$ 表示在 $2\pi s$ 内通过某参考系点的完整波的个数

$\nu, \lambda,u,T$ 有下面关系:
$$
u=\frac{\lambda}{T},\quad \nu=\frac{u}{\lambda}
$$

机械波波速与波长(或频率)无关[^1],而是取决于介质的性质(弹性与惯性)
[^1]: 电磁波在介质中的波速与波长(或频率)有关,称为**色散现象**

在**无限大均匀***各向同性*的**固体介质**中,**横波**的波速为
$$
u=\sqrt{\frac{G}{\rho}}
$$
> 式中 $\rho$ 是介质密度, $G$ 是切变模量

均匀弹性细杆中,**纵波**的波速为
$$
u=\sqrt{\frac{E}{\rho}}
$$
> 式中 $\rho$ 是介质密度, $E$ 是细杆的弹性模量

:::info
同种材料中的**切变模量**总是比**弹性模量**小,因此地震波的 S波(横波)的波速总是比P波(纵波)的波速小
:::

在张紧的绳或弦线中,**横波**的波速为
$$
u=\sqrt{\frac{T}{\mu}}
$$
> $T$ 是绳或弦线张力, $\mu$ 是绳或弦线的质量线密度

液体与气体中只能传播与体变有关的**弹性纵波**,波速是
$$
u=\sqrt{\frac{K}{\rho}}
$$
> $\rho$ 是介质的密度, $K$ 是介质的体积模量

波速 $u=\lambda \mu$,可见,波长由传播介质与波源共同决定

### 平面简谐波的波函数
#### 平面简谐波的波函数

已知某向$x$轴正向传播的平面简谐波的波速是 $u$ 角频率是 $\omega$; 各质元的平衡位置用 $x$ 表示,质元相对于平衡位置的位移用 $y$ 表示,位于原点的质元的振动方程是
$$
y=A\cos(\omega t+\varphi)
$$
那么此波的波函数是
$$
y(x,t)=A\cos \left[\omega (t-\frac{x}{u})+\varphi \right]
$$
利用 $\omega=2\pi\nu=\frac{2\pi}{T},u=\lambda \nu$,上式还能写成:
$$
y(x,t)=A\cos \left[2\pi (\nu t-\frac{x}{\lambda})+\varphi \right]
$$
$$
y(x,t)=A\cos \left[2\pi (\frac{t}{T}-\frac{x}{\lambda})+\varphi \right]
$$
$$
y(x,t)=A\cos \left[(\omega t-\frac{2\pi}{\lambda}x)+\varphi \right]
$$
若向$x$轴负向传播,波函数为:

$$
y(x,t)=A\cos \left[\omega (t+\frac{x}{u})+\varphi \right]
$$

同一时刻沿波的传播方向上位置坐标分别是 $x_1,x_2$ 的两质元振动的相位差是:
$$
\Delta \varphi = \frac{2\pi}{\lambda}(x_2-x_1)=\frac{2\pi}{\lambda} \Delta x
$$

#### 波函数的物理意义
将 $x=x_0$ 带入下面式子:
$$
y(x,t)=A\cos \left[(\omega t-\frac{2\pi}{\lambda}x)+\varphi \right]
$$
得:
$$
y=A\cos \left[\omega t-\frac{2\pi}{\lambda}x_0+\varphi \right]
$$
即 $x=x_0$ 处质点的振动方程

---

将 $t=t_0$ 带入下面式子:
$$
y(x,t)=A\cos \left[(\omega t-\frac{2\pi}{\lambda}x)+\varphi \right]
$$
得:
$$
y=A\cos \left[\omega t_0-\frac{2\pi}{\lambda}x+\varphi \right]
$$
即**波形曲线**,相当于在 $t_0$ 时刻波的状态

若 $x,t$ 都在变,则波函数表示所有质点偏离平衡位置的位移随时间的变化规律,即**随着时间的推移,波形沿着波的传播方向不断前进**,这波又叫**行波**

### 波的能量与能流  声压与声强
#### 波的能量密度
**介质质元的动能**
设平面简谐波在密度是 $\rho$ 的介质中沿 $x$ 轴正方向传播,其波函数为
$$
y=A\cos \left[\omega (t-\frac{x}{u})+\varphi \right]
$$
在坐标为 $x$ 处取一体积元 $dV$ (可看作质元), 其质量 $dm=\rho dV$. $t$ 时刻,该质元的振动速度为:
$$
v=\frac{\partial y}{\partial t}=-\omega A\sin\left[\omega (t-\frac{x}{u})+\varphi\right]
$$
质元的动能
$$
dE_k=\frac{1}{2}(dm) v^2=\frac{1}{2}(\rho dV)\omega^2 A^2\sin^2\left[\omega (t-\frac{x}{u})+\varphi\right]
$$
---
**介质质元的势能**
波在传播过程中,介质因形变而具有势能.可以证明在密度是 $\rho$ 的介质中,位置坐标是 $x$ 的质元 $dm$ 因发生形变而具有的弹性势能为:
$$
dE_p=\frac{1}{2}(\rho dV)\omega^2 A^2\sin^2\left[\omega (t-\frac{x}{u})+\varphi\right]
$$
----
**能量密度**
体积元的总能量为:
$$
dE=dE_k+dE_p=(\rho dV)\omega^2 A^2\sin^2\left[\omega (t-\frac{x}{u})+\varphi\right]
$$
**能量密度**:介质**单位体积**内波的能量,用 $w$ 表示
$$
w=\frac{dE}{dV}=\rho \omega^2 A^2\sin^2\left[\omega (t-\frac{x}{u})+\varphi\right]
$$

在一个周期内的**平均能量密度**为:
$$
\bar w=\frac{1}{T}\int_0^Twdt=\frac{1}{2}\rho \omega^2A^2
$$
上式对各种弹性波都适用

#### 能流与能流密度
**能流**:单位时间内沿波的传播方向通过介质中某一截面积的能量称为通过该截面积的能流,用 $P$ 

在介质中垂直于波传播方向取一截面积 $S$ ,在 $dt$时间内流过截面积 $S$ 的能量就是体积为 $Su dt$的长方体内的能量,则通过 $S$ 的能流为:
$$
P=\frac{wSudt}{dt}=wuS
$$

在一个周期内的的平均能流:
$$
\bar P=\bar w uS=\frac{1}{2}\rho A^2\omega^2uS
$$

**能流密度**
单位时间内通过垂直于波的传播方向的单位面积的平均能量称为**平均能流密度**或**波的强度**,简称**波强**,用 $I$ 表示,国际单位制中单位是($W/m^2$)即:
$$
I=\frac{\bar P}{S} = \bar w u=\frac{1}{2}\rho A^2\omega^2u
$$
:::info 球面简谐波的传播时的规律
在介质是均匀且无吸收的理想介质(介质只传播能量,没将波的能量变成热能)的情况下
设 $S_1$,$S_2$ 两个波面,到波源的距离分别是 $r_1,r_2$,波强分别是 $I_1,I_2$,振幅分别是 $A_1, A_2$, 在一个周期内通过这两个面的能量是相等的,所以有
$$I_1S_1=I_2S_2$$
$$
\frac{I_1}{I_2}=\frac{S_2}{S_1}=\frac{r_2^2}{r_1^2},\quad \frac{A_1}{A_2}=\frac{r_2}{r_1}
$$
$$I\propto \frac{1}{r^2}$$
球面波的波强与球面半径平方成反比
取距离波源单位距离处的振幅是 $A_0$,则有球面波在距离波源距离是 $r$ 的振幅 $A = \frac{A_0}{r}$,从而球面简谐波的波函数为
$$
y(r,t)=\frac{A_0}{r}\cos\left[\omega(t-\frac{r}{u})+\varphi\right]
$$
:::

#### 声压 声强 声强级
**声波**:空气被扰动而传播的机械波,是**纵波**.
> 频率在20Hz 到 20000Hz 范围内的声波能被人听到

声波传播时,各处介质时而密集时而稀疏,各点的压强发生变化.
**声压**:实际压强与没有声波传播时的**静压强**之间的差值
> 在密集区域,实际压强大于静压强,声压是正值,反之为负值

随着质元位移的周期性变化,声压也在做周期性变化,平面简谐声波的波函数为
$$
y(x,t)=A\cos\left[\omega(t-\frac{x}{u})+\varphi\right].
$$
若用 $p$ 表示声压,对平面简谐波,体应变 $\frac{\Delta V}{V}=\frac{\partial y}{\partial x}$,利用体应变下的胡克定律式,声压表示为
$$
p=K\frac{\Delta V}{V}=K\frac{\partial y}{\partial x}=-K\frac{\omega}{u}\sin\left[\omega(t-\frac{x}{u})+\varphi\right]
$$
联立纵波波速式得:
$$
p(x,t)=\rho_0uv(x,t)
$$
> 式中 $\rho_0$ 表示空气在没声波时的空气密度

**声强**:声波的平均能流密度
$
I=\frac{1}{2}\rho A^2\omega^2u
$ 对声波也适用

<Picture
url="https://p.ayxbk.com/images/d/d0/Gmed4kh5.gif"
height=350
info="中心斜线区:/, 下方斜线区:\"
/>

能引起人的听觉的声强范围大约是 $10^{-12}\sim1 W/m^2$

由于声强的数量级相差悬殊,通常用**声强级**来描述声波的强弱,某一声强的声强级用 $L$ 表示,单位是*分贝($dB$)*.
$$
L=10\lg \frac{I}{I_0}
$$
> 其中 $I_0=10^{-12}W/m^2$ 是声波频率是 1000Hz 时的可闻阈

**超声波**:频率在 20000Hz以上的声波(含能量多,有良好的定向传播性,不易衍射,在液体与固体中有强穿透力)
**次声波**:频率在 $10^{-2}\sim20Hz$ 之间的声波 (频率低,空气中传播衰减小,传播距离远,穿透力强) 