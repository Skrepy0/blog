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
