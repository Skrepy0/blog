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
\frac{pV}{T} = \frac{m}{M} RT = \nu RT
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
> 其中 $\Delta N$ 是速度在 $v_1, V_2$ 之间的分子数, N是总分子数

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