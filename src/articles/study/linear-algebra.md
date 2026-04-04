---
icon: solar:notes-outline
date: 2026-04-04
star: false
excerpt: 线性代数部分公式（期末粥）
category:
  - 学习
  - 数学
tag:
  - 线代
---

# 线性代数部分公式及定理

大部分是矩阵相关的定理及公式，但是也掺杂着其他部分如行列式、向量的内容

## 矩阵

$(A^*)^{-1}=(A^{-1})^{*}$
$(A^*)^{T}=(A^{T})^{*}$
$(A^T)^{-1}=(A^{-1})^{T}$
$(AB)^{-1}=B^{-1}A^{-1}$
$(AB)^{T}=B^{T}A^{T}$
$(AB)^{*}=B^{*}A^{*}$

$|A^T|=|A|$
$(kA)^T=kA^T$
$|kA|=k^n|A|$
$(A\pm B)^T=A^T\pm B^T$
$|A^*|=|A|^{n-1}$
$|A^{-1}|={1\over |A|}$
$(kA)^{-1}={1\over k}A^{-1}$
$AA^{-1}=E$
$|AB|=|A||B|$
$|A^m|=|A|^m$
$A^*A=|A|E$
$A^{-1}={1\over |A|}A^*$
$A^*=A^{-1}|A|$
$|kA^*|=k^n|A|^{n-1}$
$(kA)^*=(kA)^{-1}|kA|={1\over k}A^{-1}k^n|A|=k^{n-1}A^*$
$(A^*)^*=(A^*)^{-1}|A^*|={1\over |A|}A|A|^{n-1}=A|A|^{n-2}$

若$A=\left(\begin{matrix}a&b\\c&d\end{matrix}\right)$则$A^*=\left(\begin{matrix}d&-b\\-c&a\end{matrix}\right)$

**$A ∈ K^{n × s}$**：

- A 是一个矩阵（matrix）
- 矩阵元素来自数域 K（可以是实数域 ℝ 或复数域 ℂ 等）
- A 有 n 行（rows），s 列（columns）
- 读作："A 属于 K 上的 n×s 矩阵"

### 矩阵的秩

$r(A^*)=\begin{cases}n,\;r(A)=n \\ 1,\;r(A)=n-1\\0,\;r(A)<n-1\end{cases}$

若$A\in K^{n \times s},\;B\in K^{s\times m}$,则有：

$$
r(AB)\ge r(A)+r(B)-s
$$

上式为**Sylvester 秩不等式**

<hr>

$$
r(AB)\le \min\{r(A),\;r(B)\}
$$

#### **证明思路**

- 乘积 $AB$ 的列向量可由 $A$ 的列向量线性表出，故 $r(AB)≤r(A)$.
- 乘积 $AB$ 的行向量可由 $B$ 的行向量线性表出，故 $r(AB)≤r(B)$.

上面两个结合有：

$$
r(A)+r(B)-s\le r(AB) \le \min \{r(A),r(B)\}
$$

<hr>

$$
r(A)+r(B)\ge r(A,B)
$$

### 矩阵的等价

定义：若矩阵$A$可以通过初等变换变成矩阵$B$则称$A$与$B$等价，记作:$A\approx B$
即：$\exists$ 可逆矩阵$P ,Q$,使得：

$$
PAQ=B
$$

则称$A$与$B$等价.

等价的矩阵具有一下性质：

- $A\approx A$
- 若$A\approx B,\;B\approx C\rightarrow A\approx C$
- 若$A\approx B\rightarrow\;B\approx A$

$A$与$B$等价的充要条件是**他们具有相同的标准形**
$A$与$B$等价,则他们的秩相等

$$
\begin{cases}奇异方阵、降秩方阵，\;|A|=0\\非奇异方阵、满秩方阵，\;|A|\not=0\end{cases}
$$

若$A\in R^{m\times n},\;B\in R^{n\times s}$ , 且$AB=0$，则

$$
r(A)+r(B)\le n
$$

#### 证明步骤

1. **矩阵分块**
   将矩阵 B 按**列分块**，记
   $B=[β_1,β_2,…,β_s]$
   其中$βi∈R^{n×1}$是 B 的第 i 列。
2. **分析 AB=0 的列向量意义**
   由矩阵乘法规则：
   $AB=A[β_1,β_2,…,β_s]=[Aβ_1,Aβ_2,…,Aβ_s]$
   已知 $AB=0$，因此对所有 $i=1,2,…,s$，有
   $Aβi=0$
   这表明：**B 的每一列 $β_i$ 都是齐次线性方程组 $Ax=0$ 的解**.
3. 分析基础解系
   $Ax=0$ 基础解析的向量数量为$n-r(A)$
   $r(B)$ 表示一组解的极大无关组向量的个数
   那么$r(B)\le n-r(A)$
   即$r(A)+r(B)\le n$

### 初等矩阵

$P(i,j)^T=P(i,j)$
$P(i,j)^{-1}=P(i,j)$
$P(i(k))^T=P(i(k))$
$P(i(k))^{-1}=P(i({1\over k}))$
$P(i,j(k))^T=P(j,i(k))^T$
$P(i,j(k))^{-1}=P(i,j(-k))$

### 分块矩阵

$$
\left|\left(\begin{matrix}A&0\\0&B\end{matrix}\right)\right|=|A||B|
$$

$$
\left|\left(\begin{matrix}0&A\\B&0\end{matrix}\right)\right|=(-1)^{mn}|A||B|
$$

m,n分别是A,B的阶数

若$A=\left(\begin{matrix}&&&A_1\\&&A_2\\&...\\A_n\end{matrix}\right)$ （$A_1,A_2,...,A_n$）都可逆
则：

$$
A^{-1}=\left(\begin{matrix}&&&A_n\\&&A_{n-1}\\&...\\A_1\end{matrix}\right)$$


::: warning 安全声明

请以教材为准，本文的某些符号、公式、定理可能与一些教材有所不同

:::