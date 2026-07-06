---
title: Java常用API
icon: ri:java-fill
date: 2026-07-06
star: false
excerpt: Java常用API总结
category:
  - 学习
tag:
  - Java
---

## 输入输出
### 数据输入
#### Scanner
`Scanner`位于`java.util`包下
虽然它在处理海量数据时性能不如 `BufferedReader`，但它的易用性和强大的正则解析能力是无可替代的
```java
import java.util.Scanner; // 导入

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // ... 具体读取逻辑
        sc.close(); // 习惯性关闭（虽然程序结束会自动关）
    }
}
```
**核心读取方式**:

| 输入内容 | 对应方法 | 代码示例 |
| :--- | :--- | :--- |
| **单个整数** | `nextInt()` | `int n = sc.nextInt();` |
| **单个小数** | `nextDouble()` | `double d = sc.nextDouble();` |
| **单个单词/无空格字符串** | `next()` | `String s = sc.next();` （遇到空格或换行就停） |
| **一整行（含空格）** | `nextLine()` | `String line = sc.nextLine();` （读取回车之前的所有内容） |
| **判断是否还有输入（循环常用）** | `hasNext()` | `while (sc.hasNext()) { ... }` （用于不确定个数的输入） |

##### 常见场景
**读取固定个数的数字**
```java
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
```

**第一行是总数 n，第二行是 n 个数字**
```java
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
int[] arr = new int[n];
for (int i = 0; i < n; i++) {
    arr[i] = sc.nextInt();   // 循环读取，空格和换行都能自动跳过
}
```

**读取直到文件尾（EOF），不知道有几个数字**
```java
Scanner sc = new Scanner(System.in);
while (sc.hasNextInt()) {    // 只要有整数就一直读
    int num = sc.nextInt();
    System.out.println(num * 2);
}
```

:::warning `nextLine()` 的换行符问题
错误示例
```java
Scanner sc = new Scanner(System.in);
int age = sc.nextInt();    // 输入 18，按回车（换行符留在了缓冲区）
String name = sc.nextLine(); // 直接读到了换行符，name = ""，不等你输入！
```
现象:在 `nextInt()`、`nextDouble()`、`next()` 之后，紧接着调用 `nextLine()`，会发现 `nextLine()` 直接读到了空字符串，跳过了你想要的输入。

解决方案:
```java
int age = sc.nextInt();
sc.nextLine(); // 吸走换行符
String name = sc.nextLine(); // 现在可以正常读取了
```
:::

##### 进阶技巧
**自定义分隔符**:
```java
// 输入：1,2,3
Scanner sc = new Scanner(System.in);
sc.useDelimiter(","); // 设定以逗号作为分隔符
int a = sc.nextInt(); // 读到 1
int b = sc.nextInt(); // 读到 2
int c = sc.nextInt(); // 读到 3
```

:::warning
`Scanner`的性能较慢
:::

#### BufferedReader 
`BufferedReader` 是 Java 中的字符缓冲输入流。它内部维护了一个默认 8KB 的缓冲区，每次读取不是直接去硬盘/系统拿数据，而是一口气先把数据装进“内存大桶”里，然后程序再从桶里取。这极大地减少了系统调用的次数，所以速度远快于 `Scanner`。

**使用方法**：
```java
import java.io.*; // 必须导包

public class Main {
  // 必须抛异常！
    public static void main(String[] args) throws IOException{ 
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // ... 读取逻辑
        br.close(); // 习惯性关闭
    }
}
```

核心用法：`readLine()`
作用：读取一整行内容（包含空格），以换行符 `\n` 或回车 `\r` 结束。

返回值：返回读取到的字符串（不含换行符）。如果读到了文件末尾（EOF），返回 null。
循环读行：
```java
String line;
while ((line = br.readLine()) != null) {
    if (line.trim().isEmpty()) continue; // 跳过空行
}
```

因为 `readLine()` 返回的是原始字符串，你需要手动将其解析为整数或数组。
```java
// 读一行 -> 去掉首尾空格 -> 按空格分割 -> 转为整数
String[] parts = br.readLine().trim().split("\\s+");
int n = Integer.parseInt(parts[0]);
int m = Integer.parseInt(parts[1]);
```

### 数据输出
#### System.out
System.out 是 Java 的标准输出流

经典输出语句
```java
System.out.println("Hello World!");
```

```java
System.out.print("Hello");
System.out.print(" World");
// 输出结果：Hello World（在一行）

System.out.println("Hello");
System.out.println("World");
// 输出结果：
// Hello
// World（分为两行）
```
##### 格式化输出
**保留小数**:

```java
double pi = 3.1415926;
System.out.printf("%.2f", pi); // 输出：3.14
System.out.printf("%.4f", pi); // 输出：3.1416
```

如果不只是想打印，而是想把格式化后的字符串存到 StringBuilder 里，用 `String.format()`：

```java
double pi = 3.1415926;
String result = String.format("%.2f", pi); // result = "3.14"
sb.append(result); // 放进大字符串构建器里
```

**补零 / 定宽输出**:

```java
int num = 12;
System.out.printf("%5d", num);  // 输出："   12"（前面3个空格）
System.out.printf("%05d", num); // 输出："00012"
```

`%5d`：输出整数，占 5 个字符宽度，默认右对齐，左边补空格。
`%05d`：输出整数，占 5 个字符宽度，左边补 0。
如果你还想左对齐（右边补空格）：`%-5d`。

**千位分隔符**:
```java
int money = 1000000;
System.out.printf("%,d", money); // 输出：1,000,000
```

**常用的格式化占位符速查表**

1.整数类型（Integer）
| 符号 | 含义 | 示例代码 | 输出结果 |
| :--- | :--- | :--- | :--- |
| `%d` | 十进制整数（最常用） | `printf("%d", 10)` | `10` |
| `%o` | 八进制整数 | `printf("%o", 10)` | `12` |
| `%x` | 十六进制整数（小写字母） | `printf("%x", 10)` | `a` |
| `%X` | 十六进制整数（大写字母） | `printf("%X", 10)` | `A` |

2.浮点数 / 小数类型（Floating Point）
| 符号 | 含义 | 示例代码 | 输出结果 |
| :--- | :--- | :--- | :--- |
| `%f` | 十进制浮点数（默认保留 6 位小数） | `printf("%f", 3.14)` | `3.140000` |
| `%.Nf` | **保留 N 位小数**（四舍五入，刷题必用） | `printf("%.2f", 3.1415)` | `3.14` |
| `%e` | 科学计数法（小写 e） | `printf("%e", 100.0)` | `1.000000e+02` |
| `%E` | 科学计数法（大写 E） | `printf("%E", 100.0)` | `1.000000E+02` |
| `%g` | 智能选择 `%f` 或 `%e`（更短的那个） | `printf("%g", 100.0)` | `100.000` |
| `%a` | 十六进制浮点数（极少用） | `printf("%a", 3.14)` | `0x1.91eb851eb851ecp1` |

3.字符与字符串（Character & String）
| 符号 | 含义 | 示例代码 | 输出结果 |
| :--- | :--- | :--- | :--- |
| `%s` | 字符串（最常用） | `printf("%s", "Hello")` | `Hello` |
| `%S` | 字符串转大写 | `printf("%S", "Hi")` | `HI` |
| `%c` | 单个字符 | `printf("%c", 'A')` | `A` |
| `%C` | 单个字符转大写 | `printf("%C", 'b')` | `B` |


4.特殊功能符号（辅助）
| 符号 | 含义 | 示例代码 | 输出结果 |
| :--- | :--- | :--- | :--- |
| `%n` | **跨平台换行符**（等价于 `\n`，但可移植） | `printf("Hello%n")` | `Hello` + 换行 |
| `%%` | 输出一个百分号 `%` | `printf("进度: %d%%", 80)` | `进度: 80%` |
| `%b` | 布尔值（`true`/`false`） | `printf("%b", 1 > 0)` | `true` |
| `%B` | 布尔值转大写 | `printf("%B", 1 > 0)` | `TRUE` |

5.日期 / 时间类型（Date & Time）—— 极少用
时间格式化以 `%t` 开头，后面跟一个后缀字母（需要传入 `Date` 或 `Long` 时间戳）：
| 符号 | 含义 | 示例代码 | 输出结果 |
| :--- | :--- | :--- | :--- |
| `%tY` | 四位年份 | `printf("%tY", new Date())` | `2026` |
| `%tm` | 两位月份（01~12） | `printf("%tm", new Date())` | `07` |
| `%td` | 两位日期（01~31） | `printf("%td", new Date())` | `06` |
| `%tH` | 24小时制小时（00~23） | `printf("%tH", new Date())` | `14` |
| `%tM` | 分钟（00~59） | `printf("%tM", new Date())` | `05` |
| `%tS` | 秒（00~60） | `printf("%tS", new Date())` | `30` |
| `%tA` | 星期几全称（英文） | `printf("%tA", new Date())` | `Monday` |

 6.核心“标志修饰符”（决定格式对齐和正负号）
这些是**写在 `%` 和类型之间的修饰字母**，算法题中常用来补齐空格或对齐：
| 标志 | 含义 | 示例代码 | 输出结果 |
| :--- | :--- | :--- | :--- |
| `-` | **左对齐**（默认右对齐） | `printf("%-5d", 12)` | `12   `（右边补3个空格） |
| `0` | **左边补零**（用于编号） | `printf("%05d", 12)` | `00012` |
| `+` | **强制显示正负号** | `printf("%+d", 5)` | `+5` |
| ` `（空格） | **正数前显示空格，负数前显示 `-`** | `printf("% d", 5)` | ` 5` |
| `,` | **千位分隔符**（金额） | `printf("%,d", 9999)` | `9,999` |
| `(` | **负数用括号括起来**（财务风格） | `printf("%(d", -5)` | `(5)` |
#### BufferedWriter & PrintWriter 
* BufferedWriter：原始工具。只提供 write() 和 newLine()，不提供 print() / println() 这类便捷方法。所有内容必须手动拼接或分段写入。

* PrintWriter：增强工具。包装了 BufferedWriter 的缓冲功能，同时提供了我们最熟悉的 print()、println() 和 printf()（格式化），用法几乎和 System.out 一模一样，但性能快得多。

>99% 的场景直接用 PrintWriter，因为它既有缓冲的高性能，又有 println 的便捷性。BufferedWriter 仅在需要极致原生操作或避免自动刷新干扰时使用。


```java
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // PrintWriter
        // 直接包装 System.out，第二个参数 true 表示自动刷新（慎用，后面会讲）
        PrintWriter out = new PrintWriter(new OutputStreamWriter(System.out));
        
        // 更简洁的写法（PrintWriter 直接接受 OutputStream）
        PrintWriter out2 = new PrintWriter(System.out); 

        // BufferedWriter
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        
        // ... 逻辑
        
        // 千万记得关闭或刷新！否则缓冲区数据不输出
        out.close(); // close() 会自动 flush()
        bw.close();
    }
}
```

3.核心方法速查表

| 操作 | `PrintWriter` (推荐) | `BufferedWriter` (原生) |
| :--- | :--- | :--- |
| **输出字符串** | `out.print("Hello")` | `bw.write("Hello")` |
| **输出并换行** | `out.println("Hello")` | `bw.write("Hello"); bw.newLine();` |
| **格式化输出** | `out.printf("%.2f", 3.14)` | 不支持（需自己拼字符串） |
| **强制刷新** | `out.flush()` | `bw.flush()` |
| **关闭流** | `out.close()` | `bw.close()` |

:::warning
PrintWriter 和 BufferedWriter 都是带缓冲的。数据先写到内存缓冲区，满了才真正输出到控制台。如果程序结束前没调用 flush() 或 close()，缓冲区里残留的数据会被丢弃，导致控制台一片空白，但程序逻辑完全正确。
**错误示范**:
```Java
PrintWriter out = new PrintWriter(System.out);
out.println("Hello World");
// 程序结束，但没 close()！控制台什么都看不到！！！
```
**解决方案**:
方案一：手动 close()。

```java
out.println("Hello");
out.close(); // 结束前调用
```

方案二（自动刷新）：创建时传入 true，这样调用 println / printf / format 时会自动刷新。
```java
PrintWriter out = new PrintWriter(System.out, true);
out.println("Hello"); // 这一行会立刻输出，无需 flush
```
>但注意：自动刷新会频繁触发 I/O，如果循环里用 println + 自动刷新，性能会急剧下降，失去了缓冲的意义！

方案三（优雅关闭）：用 try-with-resources（自动调用 close）

```java
try (PrintWriter out = new PrintWriter(System.out)) {
    out.println("Hello");
} // 出了 try 块自动 close，不会丢数据
```
:::

### 常用容器
#### 数组
特点: 长度固定（一旦创建，不可变）。查询极快（直接通过下标计算地址，时间复杂度 `O(1)`），但插入/删除慢（需要移动元素）。

##### 声明与初始化

```java
int[] arr = new int[5]; // 默认初始化为 0
int[] arr = {1, 2, 3};  // 简写，不能分开写
int arr[] = new int[5]; //C/C++ 风格，Java 中也能用
```
>new int[n]:元素自动赋默认值（int 为 0，boolean 为 false，引用类型为 null）。

##### 数组的长度
```java
int[] arr = {1, 2, 3};
System.out.println(arr.length); // 输出 3
```

##### 数组的遍历
```java
int[] arr = new int[10];
// 方法一
for (int i=0; i<arr.length; i++){

}
// 方法二
for (int num : arr){

}
// 方式三
Arrays.stream(arr).sum() //Stream 流（Java 8+）
```
##### 二维数组

声明:
```java
// 方式1：固定矩阵 3行4列
int[][] matrix = new int[3][4];

// 方式2：直接赋值
int[][] matrix = {{1,2},{3,4},{5,6}};

// 方式3：锯齿数组（每行长度不同）
int[][] jagged = new int[3][];
jagged[0] = new int[2];
jagged[1] = new int[5];
```

##### java.util.Arrays 工具类:

| 方法 | 作用 | 示例 |
| :--- | :--- | :--- |
| **`Arrays.sort(arr)`** | **升序排序** | `Arrays.sort(arr);` |
| **`Arrays.toString(arr)`** | 将数组转为字符串打印 | `System.out.println(Arrays.toString(arr));` // 输出 [1, 2, 3] |
| **`Arrays.copyOf(arr, newLength)`** | 复制数组（扩容或截取） | `int[] newArr = Arrays.copyOf(arr, 10);` |
| **`Arrays.fill(arr, val)`** | 将数组所有元素填充为指定值 | `Arrays.fill(arr, -1);` |
| **`Arrays.equals(arr1, arr2)`** | 判断两个数组**内容**是否相等（别用 `==`） | `if (Arrays.equals(a, b))` |
| **`Arrays.binarySearch(arr, key)`** | 二分查找（**必须先排序**） | `int index = Arrays.binarySearch(arr, 5);` |

#### ArrayList
ArrayList 的底层就是一个 Object[] 数组。它通过“申请更大的新数组 -> 拷贝旧数据 -> 释放旧数组”的机制来实现动态扩容。
- 默认初始容量：10（调用无参构造时，JDK 1.8 起是延迟初始化，第一次 add 才真正分配容量为 10）。
- 扩容倍数：1.5 倍（新容量 = 旧容量 + 旧容量 >> 1）。

##### 声明与初始化
```java
List<Integer> list = new ArrayList<>();  // 元素个数未知，动态添加
List<Integer> list = new ArrayList<>(1000);  //已知数据量很大（避免频繁扩容，性能飙升）
List<Integer> list = new ArrayList<>(Arrays.asList(1,2,3));//快速填充测试数据,从数组/集合初始化
```

##### 核心方法速查表
| 操作 | **数组 (Array)** | **ArrayList** | 注意点 |
| :--- | :--- | :--- | :--- |
| **获取长度** | `arr.length`（属性） | `list.size()`（**方法**） | 千万别搞混，带括号的是方法 |
| **获取元素** | `arr[0]` | `list.get(0)` | 没有 `[]` 语法，必须用 `get` |
| **修改元素** | `arr[0] = 5` | `list.set(0, 5)` | 数组直接赋值，List 用 `set` |
| **尾部添加** | 不支持（长度固定） | `list.add(10)` | 最常用的方法 |
| **指定位置插入** | 不支持 | `list.add(1, 99)` | 插入后后续元素右移，O(n) |
| **删除元素** | 不支持 | `list.remove(0)`（按下标） 或 `list.remove(Integer.valueOf(2))`（按对象） | **极其容易混淆！见下方坑点** |
| **判断是否包含** | 需手写循环 | `list.contains(5)` | 底层遍历，O(n) |

::: warning
删除元素时，remove(2) 和 remove(Integer.valueOf(2)) 天差地别
ArrayList 有两个重载的 remove 方法：
- `remove(int index)` —— 按下标删。
- `remove(Object o)` —— 按元素值删。

```java
List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3));
list.remove(2);   // 你以为删“数字2”？不！它删的是下标2，即数字3！列表变成 [1,2]
list.remove(Integer.valueOf(2)); // 这才是删“元素2”，列表变成 [1,3]
```
:::

##### 数组和 ArrayList 互转
```java
// 1. 数组 -> ArrayList（注意：返回的是不可变的内部类，不能增删！）
List<Integer> list = Arrays.asList(1, 2, 3);
// 如果要可变，必须套一层 new ArrayList<>()
List<Integer> mutableList = new ArrayList<>(Arrays.asList(1, 2, 3));

// 2. ArrayList -> 数组
// 法一：传一个指定大小的空数组（性能最好，推荐）
Integer[] arr = list.toArray(new Integer[0]); 
// 法二：传同样大小的数组
Integer[] arr2 = list.toArray(new Integer[list.size()]);
```