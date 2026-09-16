---
title: 算法基础
icon: hugeicons:algorithm
date: 2026-09-16
star: false
order: 1
excerpt: OJ算法
category:
  - 学习
tag:
  - 算法
---

## 快读快写

```cpp
#include <bits/stdc++.h>
using namespace std;

namespace FastIO {
    const int BUFSIZE = 1 << 20;

    // ==================== 快读 ====================
    char inbuf[BUFSIZE];
    int in_idx = 0, in_len = 0;

    inline int gc() {
        if (in_idx == in_len) {
            in_len = (int)fread(inbuf, 1, BUFSIZE, stdin);
            in_idx = 0;
            if (in_len == 0) return EOF;
        }
        return (unsigned char)inbuf[in_idx++];
    }

    // 读整数
    template <typename T>
    inline typename enable_if<is_integral<T>::value, bool>::type
    read(T &x) {
        int c = gc();
        while (c != EOF && c <= ' ') c = gc();
        if (c == EOF) return false;

        bool neg = false;
        if (c == '-') { neg = true; c = gc(); }
        else if (c == '+') { c = gc(); }

        x = 0;
        while (c >= '0' && c <= '9') {
            x = x * 10 + (c - '0');
            c = gc();
        }
        if (neg) x = -x;
        return true;
    }

    // 读浮点数（可选）
    inline bool read(double &x) {
        int c = gc();
        while (c != EOF && c <= ' ') c = gc();
        if (c == EOF) return false;

        bool neg = false;
        if (c == '-') { neg = true; c = gc(); }
        else if (c == '+') { c = gc(); }

        x = 0;
        while (c >= '0' && c <= '9') {
            x = x * 10 + (c - '0');
            c = gc();
        }
        if (c == '.') {
            c = gc();
            double base = 0.1;
            while (c >= '0' && c <= '9') {
                x += (c - '0') * base;
                base *= 0.1;
                c = gc();
            }
        }
        if (neg) x = -x;
        return true;
    }

    // 读字符串
    inline bool read(string &s) {
        s.clear();
        int c = gc();
        while (c != EOF && c <= ' ') c = gc();
        if (c == EOF) return false;
        while (c != EOF && c > ' ') {
            s.push_back((char)c);
            c = gc();
        }
        return true;
    }

    // 读 char
    inline bool read(char &c) {
        c = (char)gc();
        while (c != EOF && c <= ' ') c = (char)gc();
        return c != EOF;
    }

    // 一次性读多个
    template <typename T, typename... Args>
    inline void read(T &x, Args &...args) {
        read(x);
        read(args...);
    }

    // ==================== 快写 ====================
    char outbuf[BUFSIZE];
    int out_idx = 0;

    inline void flush() {
        if (out_idx) {
            fwrite(outbuf, 1, out_idx, stdout);
            out_idx = 0;
        }
    }

    inline void pc(char c) {
        if (out_idx == BUFSIZE) flush();
        outbuf[out_idx++] = c;
    }

    // 写整数
    template <typename T>
    inline typename enable_if<is_integral<T>::value, void>::type
    write(T x) {
        if (x == 0) { pc('0'); return; }

        using U = typename make_unsigned<T>::type;
        U y;
        if (x < 0) {
            pc('-');
            y = (U)(-(x + 1)) + 1;   // 防 -LLONG_MIN 溢出
        } else {
            y = (U)x;
        }

        char s[24];
        int n = 0;
        while (y) { s[n++] = '0' + y % 10; y /= 10; }
        while (n--) pc(s[n]);
    }

    // 写浮点数（默认 6 位小数，可自定义）
    inline void write(double x, int eps = 6) {
        if (x < 0) { pc('-'); x = -x; }
        long long ip = (long long)x;
        write(ip);
        x -= ip;
        if (eps > 0) {
            pc('.');
            while (eps--) {
                x *= 10;
                int d = (int)x;
                pc('0' + d);
                x -= d;
            }
        }
    }

    inline void write(char c) { pc(c); }

    inline void write(const char *s) {
        while (*s) pc(*s++);
    }

    inline void write(const string &s) {
        for (char c : s) pc(c);
    }

    // 一次性写多个
    template <typename T, typename... Args>
    inline void write(const T &x, const Args &...args) {
        write(x);
        write(args...);
    }

    // 程序结束自动 flush
    struct AutoFlush {
        ~AutoFlush() { flush(); }
    } autoFlush;
}

// 快捷别名
using FastIO::read;
using FastIO::write;
using FastIO::flush;
```

用法示例

```cpp
int main() {
    int n;
    long long m;
    double d;
    string s;

    // 一次性读多个
    read(n, m, d, s);

    // 一次性写多个
    write("n = ", n, "\n");
    write("m = ", m, "\n");
    write("d = ", d, "\n");        // 默认 6 位小数
    write("d = ", d, "\n");        // 想改精度就单独调用：write(d, 2);
    write("s = ", s, "\n");

    return 0;   // 自动 flush
}
```

注意事项

1. 用快读快写后，不要和 cin/cout/scanf/printf 混用，否则缓冲顺序会错乱。
2. 如果中途想强制输出（比如交互题），手动调用 FastIO::flush();。
3. 想关掉自动 flush（极少见），删掉 AutoFlush autoFlush; 那几行即可。
4. 浮点数快写有精度误差，比赛里一般建议用 printf("%.6f", x) 输出浮点，快写主要负责整数。

## 常用简单算法


### 快速幂
快速幂核心思想：把指数 b 二进制拆分，每次把底数平方，遇到二进制位为 1 就乘进答案，复杂度 O(\log b)。

1. 整数快速幂（取模版）

竞赛最常用，防溢出用 __int128。

```cpp
// 计算 (a^b) % mod
long long qpow(long long a, long long b, long long mod) {
    long long res = 1 % mod;   // mod 可能为 1
    a %= mod;
    while (b > 0) {
        if (b & 1) res = (__int128)res * a % mod;
        a = (__int128)a * a % mod;
        b >>= 1;
    }
    return res;
}
```

2. 不取模的快速幂

注意：很容易溢出，一般只用于结果不会超过 long long 的场景。

```cpp
long long qpow(long long a, long long b) {
    long long res = 1;
    while (b > 0) {
        if (b & 1) res *= a;
        a *= a;
        b >>= 1;
    }
    return res;
}
```

3. 递归版（取模）

```cpp
long long qpow(long long a, long long b, long long mod) {
    if (b == 0) return 1 % mod;
    long long t = qpow(a, b / 2, mod);
    t = (__int128)t * t % mod;
    if (b & 1) t = (__int128)t * (a % mod) % mod;
    return t;
}
```

### 素数判断
#### 试除法（最常用，适合 n ≤ 1e12）

用 6k±1 优化，复杂度 $O(\sqrt{n})$。

```cpp
bool isPrime(long long n) {
    if (n < 2) return false;
    if (n == 2 || n == 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;

    // 从 5 开始，每次跳 6：检查 6k-1 和 6k+1
    for (long long i = 5; i <= n / i; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    }
    return true;
}
```

#### Miller-Rabin（大整数，适合 64 位范围）

判定 $n < 2^{64}$ 时，用前 12 个素数作底数即可确定。

```cpp
using int64 = long long;
using i128 = __int128_t;

// 快速幂取模
int64 qpow(int64 a, int64 b, int64 mod) {
    int64 res = 1 % mod;
    a %= mod;
    while (b) {
        if (b & 1) res = (i128)res * a % mod;
        a = (i128)a * a % mod;
        b >>= 1;
    }
    return res;
}

bool isPrime(int64 n) {
    if (n < 2) return false;
    if (n == 2 || n == 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;

    // 小素数先试除，加速
    static const int small[] = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37};
    for (int p : small) {
        if (n == p) return true;
        if (n % p == 0) return false;
    }

    // 把 n-1 分解成 d * 2^s
    int64 d = n - 1;
    int s = 0;
    while ((d & 1) == 0) {
        d >>= 1;
        ++s;
    }

    for (int64 a : small) {
        if (a % n == 0) continue;
        int64 x = qpow(a, d, n);
        if (x == 1 || x == n - 1) continue;

        bool composite = true;
        for (int r = 1; r < s; ++r) {
            x = (i128)x * x % n;
            if (x == n - 1) {
                composite = false;
                break;
            }
        }
        if (composite) return false;
    }
    return true;
}
```
#### 埃氏筛（多组询问，预处理 n 以内所有素数）
是求 $2\sim n$之间所有素数的经典算法
适合 $n \le 10^7$ 左右。

```cpp
vector<int> primes;
vector<bool> is_prime;

void sieve(int n) {
    is_prime.assign(n + 1, true);
    is_prime[0] = is_prime[1] = false;
    primes.clear();

    for (int i = 2; i <= n; ++i) {
        if (is_prime[i]) {
            primes.push_back(i);
            if ((long long)i * i <= n) {
                for (long long j = 1LL * i * i; j <= n; j += i)
                    is_prime[j] = false;
            }
        }
    }
}
```

用法：

```cpp
sieve(100);
for (int p : primes) cout << p << ' ';
// 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97
```

---

#### 线性筛（O(n)，适合更大范围）
埃氏筛存在一些问题：一个合数会被多个质数反复筛
线性筛的做法：

- 维护一个 primes 数组，存已经找到的素数。
- 外层枚举 i 从 2 到 n。
- 如果 i 没被标记，说明它是素数，加入 primes。
- 内层用 primes 里的素数 p 去筛：标记 i \times p 为合数。
- 一旦 i % p == 0，立刻 break。(保证只被最小因子筛)

```cpp
vector<int> primes;
vector<bool> is_prime;

void linearSieve(int n) {
    is_prime.assign(n + 1, true);
    is_prime[0] = is_prime[1] = false;
    primes.clear();
    // 用i乘上已经找到的素数p去筛选合数
    for (int i = 2; i <= n; ++i) {
        if (is_prime[i]) primes.push_back(i);
        for (int p : primes) {
            if (1LL * i * p > n) break;// 超过n就停止
            is_prime[i * p] = false;
            if (i % p == 0) break;// 保证只被最小因子筛
        }
    }
}
```

