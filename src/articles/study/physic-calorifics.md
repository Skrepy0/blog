---
title: 大学物理热学公式
icon: solar:notes-outline
date: 2026-06-11
star: false
excerpt: 热学公式
category:
  - 学习
  - 物理
tag:
  - 大学物理
  - 热学
---

## 热平衡定律 温度
$$
T=t+273.15
$$
> T 是热力学温度, t是摄氏温度


### 理想气体温标
简单系统的**物态方程**:
$$
f(p,V,T)=0
$$
> p,V,T分别是压强,体积,温度


**玻意耳定律**: $pV=C$
$pV \propto T$
$$T_0 \equiv 273.16K$$
$$T=T_0\frac{pV}{p_0V_0}=273.16\frac{pV}{p_0V_0}K.$$

### 理想气体物态方程
标准状态:
$$
p_0=1.013\times10^5 Pa,\quad T_0=273.15K
$$
标况下的摩尔体积
$$
V_{0,mol}=22.4 \times 10^{-3} m^3/mol
$$
**普适气体常量**:
$$
R=\frac{p_0V_{0,mol}}{T_0}\approx 8.31 J/(mol \cdot K)
$$

理想气体物态方程:
$$
\frac{pV}{T} = \frac{m}{M} R = \nu R
$$
> 其中 $\nu=\frac{m}{M}$ 为理想气体的摩尔数

阿伏加德罗常数: $N_A=6.02214076\times 10^{23} mol^{-1}$

$$
\nu = \frac{N}{N_A}
$$
$$
p=\frac{N}{N_A V}RT=\frac{N}{V}\frac{R}{N_A}T=nkT
$$
> N是粒子数, $k=\frac{R}{N_A}=1.380649\times10^{-23} J/K$ 称为**玻耳兹曼常数**,$n=\frac{N}{V}$ 是单位体积气体内的分子数,即**气体分子数密度**

## 理想气体压强和温度的统计意义
### 理想气体分子模型和分子运动的统计性假设

$$
\bar v_x = \frac{v_{1x}+v_{2x}+...+v_{Nx}}{N}=\frac{1}{N}\sum_{i=1}^N v_{ix},\\
\bar {v_x^2} = \frac{v_{1x}^2+v_{2x}^2+...+v_{Nx}^2}{N}=\frac{1}{N}\sum_{i=1}^N v_{ix}^2,
$$

$$
\bar v_x=\bar v_y=\bar v_z,\quad
\bar {v_x^2}=\bar {v_y^2}=\bar {v_z^2}
$$

### 理想气体的压强公式

$$
\bar {v_x^2}+\bar {v_y^2}+\bar {v_z^2}=\bar {v^2},\\
\bar {v_x^2}=\bar {v_y^2}=\bar {v_z^2} = \frac{1}{3}\bar {v^2}
$$
$$
p=\frac{1}{3}nm \bar {v^2} = \frac{1}{3}\rho \bar {v^2}
$$
> 式中n表示单位体积内存在n个分子,m表示每个分子的质量都是m;p表示气体压强

分子的**平均平动动能**:
$$
\bar \epsilon = \frac{1}{2}m \bar {v^2} = \frac{3}{2}kT
$$
$$
p=\frac{1}{3}nm \bar {v^2} = \frac{2}{3}n \bar \epsilon
$$

分子的**平均动能**:
$$
\bar \omega = \frac{i}{2}kT
$$
> i 为气体分子的自由度

**方均根速率**:
$$
\sqrt{\bar {v^2}} = \sqrt{\frac{3kT}{m}}=\sqrt{\frac{3RT}{M}}
$$
> $M=N_Am$ 是气体摩尔质量

联立前面的 $p=\frac{1}{3}nm \bar {v^2} = \frac{1}{3}\rho \bar {v^2}$ 得:
$$
\sqrt{\bar {v^2}}=\sqrt{\frac{3p}{\rho}}
$$
> $\rho = nm$ 是气体的密度, 

### 自由度

$$
i=t+r
$$
> 其中t是平动自由度, r是转动自由度, i是总自由度

|分子类型|自由度 $i$|
|---|---|
|单原子分子|3|
|刚性双原子分子|5|
|刚性多原子分子[^1]|6|

[^1]:刚性多原子分子: 三个或三个以上原子组成的刚性分子

### 能量均分定理
理想气体处于平衡态时,有:
$$
\bar \epsilon = \frac{1}{2}m \bar {v^2} = \frac{3}{2}kT
$$
由于 $\bar {v_x^2}=\bar {v_y^2}=\bar {v_z^2}=\frac{1}{3} \bar {v^2}$,得:

$$
\frac{1}{2}m\bar {v_x^2}=\frac{1}{2}m\bar {v_y^2}=\frac{1}{2}m\bar {v_z^2}=\frac{1}{2}kT
$$

若气体分子有i个自由度,则每个分子的**平均总动能** $\bar \epsilon_k=\frac{i}{2}kT$

### 理想气体的内能
$$
E=\frac{m}{M}N_A \frac{i}{2}kT = \frac{m}{M} \frac{i}{2}RT
$$
> 其中, m是气体质量, M是气体的摩尔质量

## 麦克斯韦速率分布律
速率分布函数:
$$
\frac{dN}{N}=f(v)dv
$$
> 其中, N为总分子数

$$
\frac{\Delta N}{N} = \int^{v_2}_{v_1} f(v)dv
$$
> 其中 $\Delta N$ 是速度在 $v_1, v_2$ 之间的分子数, N是总分子数

速率分布函数的归一化条件:
$$
\int_0^\infty f(v)dv=1.
$$

$$
f(v)=4 \pi (\frac{m}{2\pi kT})^{\frac{3}{2}}e^{-\frac{mv^2}{2kT}}v^2
$$

**最概然速率**($f(v)$ 的极大值对应的速率):
$$
v_p=\sqrt{\frac{2kT}{m}}=\sqrt{\frac{2RT}{M}} \approx 1.41\sqrt{\frac{RT}{M}}.
$$
$$
f(v_p)=\frac{4e^{-1}}{\sqrt{\pi}}\frac{1}{v_p}
$$

平均速率:
$$
\bar v = \frac{\int_0^\infty vNf(v)dv}{N}=\int_0^\infty vf(v)dv=\sqrt{\frac{8kT}{\pi m}}=\sqrt{\frac{8RT}{\pi M}}\approx 1.60\sqrt{\frac{RT}{M}}
$$

$$
\bar {v^2} = \int_0^{\infty} v^2f(v)dv = \frac{3kT}{m} = \frac{3RT}{M}
$$

$$
\sqrt{\bar {v^2}} = \sqrt{\frac{3kT}{m}} = \sqrt{\frac{3RT}{M}}\approx 1.73\sqrt{\frac{RT}{M}}
$$

$$
v_p<\bar v < \bar {v^2}
$$

> 室温下, $v_p,\bar v , \bar {v^2}$ 的数量级一般是 $10^2m/s$

## 玻耳兹曼分布率
**麦克斯韦速度分布律**:

在平衡态下, 速度分量 $v_x$ 在区间 $v_x \sim v_x + dv_x$ 内, $v_y$ 在区间 $v_y \sim v_y + dv_y$ 内, $v_z$ 在区间 $v_z \sim v_z + dv_z$ 内的气体分子数占总数的百分比为:
$$
f(v_x,v_y,v_z)dv_x dv_y dv_z = (\frac{m}{2\pi kT})^{\frac{3}{2}}e^{-\frac{m(v_x^2+v_y^2+v_z^2)}{2kT}}dv_x dv_y dv_z
$$

速度分量 $v$ 在区间 $v \sim v + dv$ 内的气体分子数占总数的百分比为:

$$
f(v)dv = 4\pi (\frac{m}{2\pi kT})^{\frac{3}{2}}e^{-\frac{mv^2}{2kT}}v^2dv
$$

**玻耳兹曼分布率**:
存在保守力的时候, 分子按总能量的分布与因子 $e^{-\frac{\epsilon}{kT}}$ 成正比

**玻耳兹曼因子**: $e^{-\frac{\epsilon}{kT}}$

**粒子数按高度(z)分布的规律**:
$$
n=n_0 e^{-\frac{mgz}{kT}}
$$
> 其中 $n_0=C(\frac{2\pi kT}{m})^{\frac{3}{2}}$, 代表了 $z=0$ 处单位体积内的分子数 

**等温气压公式**,将大气看成理想气体,且不同高度的温度近似相等,高度z处的压强:
$$
p=p_0 e^{-\frac{mgz}{kT}}
$$

> 其中 $p_0=n_0kT$ 是高度是0处的压强

**泻流质量流率公式**:
密闭容器(里面有气体,气体的摩尔质量是 $M$, 温度是 $T$)从侧壁开一个面积是 $A$ 的小孔,(小孔的线度远小于分子的平均自由程,分子间碰撞可忽略).
$$
\frac{dm}{dt}=pA\sqrt{\frac{M}{2\pi RT}}
$$
> p是某时刻的压强


## 气体分子的平均碰撞频率 平均自由程
$$
\bar \lambda = \frac{\bar v}{\bar z}
$$
> 其中 $\bar \lambda$ 是**平均自由程**
$\bar z$ 是**平均碰撞频率**

某分子相对于其他气体分子的平均相对速率 $\bar u = \sqrt{2} \bar v$

$$
\bar z = \sqrt{2}\pi \bar v nd^2,\quad \bar \lambda = \frac{\bar v}{\bar z} = \frac{1}{\sqrt{2}\pi nd^2} = \frac{kT}{\sqrt{2}\pi pd^2}
$$
> $d$ 是分子的有效直径, $n$ 是气体分子数密度

单位时间单位面积碰撞次数 
$$\Gamma = \frac{1}{4}n\bar v$$

## 热力学第一定律
### 功 准静态过程
**准静态过程**: 认为气体的每一步变化都处于平衡态的过程

设气缸中的气体做准静态膨胀,气体的压强是 $p$, 活塞面积是 $S$, 气体对活塞的压力 $f=pS$, 活塞移动微小距离 $dx$ 的时候, 气体对外界做的功:
$$
dA=fdx=pSdx=pdV
$$
气体体积从 $V_1\text{到}V_2$ 时, 气体对外界做的功:
$$
A=\int dA=\int_{V_1}^{V_2} pdV
$$

### 热力学第一定律
$$
Q=E_2-E_1+A
$$
> $Q$ 是系统从外界吸收的热量, 过程前后系统的内能分别是$E_1,E_2$, $A$ 是系统对外做的功

微分形式:
$$
dQ = dE+dA
$$

### 热力学第一定律在理想气体等值过程中的应用
#### 等容过程
由于等容,所以 $dV$ 是0, 所以系统对外做的功为0,即 $dA=0$,
则:
$$
Q_V = \Delta E = E_2-E_1=\frac{m}{M}\frac{i}{2}R\Delta T=\frac{m}{M}\frac{i}{2}R(T_2-T_1)
$$
即:
$$
Q_V = \frac{m}{M}\frac{i}{2}R(T_2-T_1)
$$

#### 等压过程
$$
A=\int_{V_1}^{V_2} pdV=p(V_2-V_1)=\frac{m}{M}R(T_2-T_1)
$$
吸收的热量:
$$
Q_p=\Delta E+A=E_2-E_1+\frac{m}{M}R(T_2-T_1)
$$

#### 等温过程
$$
A=\int_{V_1}^{V_2} pdV=\int_{V_1}^{V_2} \frac{m}{M}RT\frac{dV}{V}=\frac{m}{M}RT ln\frac{V_2}{V_1}=\frac{m}{M}RTln\frac{p_1}{p_2}
$$

$$
Q_T=A=\frac{m}{M}RTln\frac{p_1}{p_2}
$$

### 热容 绝热过程
#### 热容
**定容摩尔热容**:
$$
C_{V,m} = \frac{dQ_V}{dT}=\frac{dE_m}{dT}=\frac{i}{2}R.
$$
若已知 $C_{V,m}$ ,就能利用 $dE_m=C_{V,m}dT$ 求得 $1mol$ 理想气体的内能增量
$$
\Delta E_m = E_{m2}-E_{m1}=\int_{T_1}^{T_2} C_{V,m}dT = C_{V,m}(T_2-T_1)
$$
对于物质的量是 $\nu$ 的气体:
$$
\Delta E_m = \nu C_{V,m}(T_2-T_1)
$$

**定压摩尔热容**:
对 $pV_m=RT$ 两边同时微分有 $pdV_m=RdT$. 根据热力学第一定律:
$dQ_p=dE_m+pdV_m=C_{V,m}dT+RdT$
于是便得到了**迈耶公式**:
$$
C_{p,m}=\frac{dQ_p}{dT}=C_{V,m}+R=(\frac{i}{2}+1)R.
$$

**比热[容]比**:
$$
\gamma=\frac{C_{p,m}}{C_{V,m}}=\frac{i+2}{i}. 
$$

#### 绝热过程
$$
pV^{\gamma}=\text{常数}
$$
$$
V^{\gamma-1}T=\text{常数} \\
p^{\gamma-1}T^{-\gamma}=\text{常数}
$$
> $\gamma$ 是*比热[容]比*

<Picture
url="/assets/articles/study/physic-calorifics/juere.webp"
height=320
/>

绝热线比等温线陡峭,在B点,
绝热线的斜率:
$$
\left(\frac{dp}{dV}\right)_S=-\gamma \frac{p}{V}
$$
等温线的斜率:
$$
\left(\frac{dp}{dV}\right)_T=-\frac{p}{V}
$$

计算功:
1. 通过热力学第一定律:
$$
A=-\Delta E=-\frac{m}{M}C_{V,m}(T_2-T_1).
$$
2. 功的定义
$$
pV^{\gamma}=p_1V_1^{\gamma}=p_2V_2^{\gamma}
$$
$$
A=\int_{V_1}^{V_2} pdV=p_1V_1^{\gamma}\int_{V_1}^{V_2}\frac{dV}{V^{\gamma}}=p_1V_1^{\gamma}\left(\frac{V_2^{1-\gamma}}{1-\gamma}-\frac{V_1^{1-\gamma}}{1-\gamma} \right)
$$

:::important 注意
理想气体的**绝热自由膨胀**不是准静态过程
绝热自由膨胀过程中"温度与内能不变"是对系统的始末状态而言的, 但是不是等温过程,绝热方程对绝热自由膨胀过程也不适用.
:::

### 循环过程  循环效率
#### 循环效率
**正循环**:
$$
A=Q_1-Q_2
$$
> $Q_1$表示正循环一周**吸收**的热量,$Q_2$表示正循环一周对外界**释放**的热量,$A$ 表示对外做的功

**热机效率**:
$$
\eta = \frac{A}{Q_1}=1-\frac{Q_2}{Q_1}
$$
> 式子中 $Q_1,Q_2$ 都取正值计算

**逆循环**:
$$
A=Q_1-Q_2
$$
> $Q_1$表示逆循环一周向高温热源放出的热量,$Q_2$表示逆循环一周工质从低温热源吸收的热量,$A$ 表示外界对系统做的功

**致冷系数**:
$$
\omega = \frac{Q_2}{A}=\frac{Q_2}{Q_1-Q_2}
$$
> 式子中 $Q_1,Q_2$ 都取正值计算

#### 卡诺循环
##### 卡诺热机的效率
$$
\eta_{\text{卡}}=1-\frac{T_2}{T_1}
$$
> $T_1$ 是高温热源的温度, $T_2$ 是低温热源的温度

##### 卡诺致冷机的制冷系数
$$
\omega_{\text{卡}}=\frac{Q_2}{A}=\frac{T_2}{T_1-T_2}
$$
> $T_1$ 是高温热源的温度, $T_2$ 是低温热源的温度

## 热力学第二定律 熵
### 热力学第二定律
克劳修斯表述: 热量不可能自动地从低温物体传向高温物体
开尔文表述: 不可能从单一热源吸热使之完全变成功而不引起其他变化

### 熵
卡诺定理:
1. 在相同高温热源 $T_1$ 和相同低温热源 $T_2$ 之间工作的一切可逆的热机,其效率都相同,都等于 $1-\frac{T_2}{T_1}$, 与工质无关
2. 在相同高温热源和相同低温热源之间工作的一切不可逆热机,若热机中的工质所经历的循环是不可逆循环,则称为不可逆热机

由卡诺定理得到:
$$
\eta = 1-\frac{Q_2}{Q_1}\le \frac{T_2}{T_1}
$$
即:
$$
\frac{Q_1}{T_1}+\frac{Q_2}{T_2}\le 0
$$
推广至 $n$ 个热源的情况

$$
\sum_{i=1}^n \frac{Q_i}{T_i}\le 0
$$
对温度连续可变的循环过程: $n\rightarrow \infty$, 上式变为
$$
\oint \frac{dQ}{T} \le 0
$$
上式被称为**克劳修斯等式和不等式**

::: important
可逆过程中热温比 $\frac{dQ}{T}$ 的积分 $\int \frac{dQ}{T}$ 与路径无关
:::
定义状态1,2之间的熵变等于从状态1沿可逆过程到状态2的 $\frac{dQ}{T}$ 的积分,即
$$
S_2-S_1=\int_1^2\frac{dQ}{T}
$$
> $S_2,S_1$ 分别是系统在平衡态2与平衡态1时的熵值.这里定义的熵是热力学熵,又称为**克劳修斯熵**,在国际单位制中. 熵的单位是焦\[耳\]每开\[尔文\]\(J/K\)

若是不可逆过程:
$$
S_2-S_1\ge\int_1^2\frac{dQ}{T}
$$
将上式应用于无穷小的过程
$$
dS\ge \frac{dQ}{T}
$$
若是绝热过程,即 $dQ=0$:
$$
dS\ge0
$$

### 热力学第二定律的统计意义
热力学第二定律的统计意义:
在系统不受外界影响的条件下,实际情况总是有热力学概率小的宏观态向热力学概率大的宏观态过渡

气体绝热自由膨胀的过程中,系统宏观态的热力学概率取最大值时对应的微观态数目:
$$
\Omega_{max}=C^{N/2}_N=\frac{N!}{(\frac{N}{2})!(\frac{N}{2})!}
$$
可以证明:
$$
\lim_{N\rightarrow \infty}\frac{ln \frac{N!}{(N/2)!(N/2)!}}{ln2^N}=1
$$

可见,均匀的宏观分布时最概然分布,最概然分布所包含的微观态数目几乎是系统全部可能的微观态数目