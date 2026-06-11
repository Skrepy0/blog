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
