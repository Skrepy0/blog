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


#### Collection

- **`Collection`**（接口）：是**存储单个元素**的集合的根接口。
- **`Collections`**（工具类）：是一个**全静态方法**的工具类，专门用来操作 `Collection` 及其子类（如排序、查找、同步等）。

**家族族谱（核心）：**
```text
Iterable (接口，可迭代的，foreach的基础)
    └── Collection (接口，单列集合的根)
            ├── List (接口，有序、可重复、有下标) 
            │       ├── ArrayList (数组实现)
            │       └── LinkedList (链表实现)
            ├── Set (接口，无序、不可重复)
            │       ├── HashSet (哈希表实现，最快)
            │       └── TreeSet (红黑树实现，自动排序)
            └── Queue (接口，队列，先进先出)
                    └── LinkedList (也实现了队列)
```

##### Collection 定义的“通用契约”（所有集合都有的方法）

因为是根接口，`Collection` 定义了一套最通用的增删改查规范。不论你是 `List` 还是 `Set`，下面这些方法都有，可以直接用：

| 类别 | 方法名 | 作用 | 备注 |
| :--- | :--- | :--- | :--- |
| **增** | `add(E e)` | 添加一个元素 | `Set` 添加重复元素会返回 `false` |
| | `addAll(Collection<? extends E> c)` | 添加另一个集合的所有元素（并集） | 批量操作 |
| **删** | `remove(Object o)` | 删除指定元素 | 按元素值删，`List` 删第一个匹配的，`Set` 删该值 |
| | `removeAll(Collection<?> c)` | 删除本集合中**所有**出现在 c 中的元素（差集） | 重要！ |
| | `retainAll(Collection<?> c)` | 只保留本集合中**也**出现在 c 中的元素（交集） | 算法题中很实用 |
| | `clear()` | 清空所有元素 | - |
| **查** | `contains(Object o)` | 是否包含某元素 | 底层调用 `equals()` 比较 |
| | `containsAll(Collection<?> c)` | 是否包含 c 中**所有**元素 | - |
| | `isEmpty()` | 是否为空 | - |
| **长度** | `size()` | 返回元素个数 | **不是 length！** |
| **遍历** | `iterator()` | 返回迭代器 | 遍历删除元素的安全方式 |
| **转数组** | `toArray()` | 转为 `Object[]` 数组 | - |
| | `toArray(T[] a)` | 转为指定类型的数组 | 常用：`list.toArray(new Integer[0])` |

##### Collection 下的三大子接口

| 子接口 | 核心特性 | 允许重复？ | 有无顺序？ | 有没有下标？ | 首选场景 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`List`** | 有序、可重复、有索引 | ✅ 是 | ✅ 有（插入顺序） | ✅ 有 `get(index)` | **绝大多数情况**（需要遍历、随机访问、保持输入顺序） |
| **`Set`** | 无序、不可重复 | ❌ 否 | ❌ 通常无（`TreeSet` 例外，按大小排） | ❌ 无 | **去重**（统计不同元素个数）、**快速查重**（`contains` O(1)） |
| **`Queue`** | 队列（先进先出） | ✅ 是 | ✅ 有（出队顺序） | ❌ 无 | **BFS（广度优先搜索）**、**滑动窗口** |

#### Collections 工具类

| 方法 | 作用 | 场景 |
| :--- | :--- | :--- |
| **`Collections.sort(list)`** | 对 `List` 进行升序排序 | 极高频！比手写快排省事 |
| **`Collections.reverse(list)`** | 反转 `List` 顺序 | 翻转结果 |
| **`Collections.binarySearch(list, key)`** | 二分查找（**要求 list 已排序**） | 比 `indexOf` 快得多（O(log n)） |
| **`Collections.max(coll)`** | 返回最大元素 | 求极值，省去遍历 |
| **`Collections.min(coll)`** | 返回最小元素 | 同上 |
| **`Collections.frequency(coll, obj)`** | 统计某元素出现次数 | 统计频率专用 |
| **`Collections.disjoint(c1, c2)`** | 判断两个集合是否**没有交集** | 快速判断互斥 |

:::warning 注意
1. `Collection` 存的是引用，修改元素会影响外部对象
2. 遍历时删除元素，只能用 `Iterator` 

**唯一通用的安全删除模板（适用于所有 Collection）：**
```java
Iterator<Integer> it = collection.iterator();
while (it.hasNext()) {
    if (it.next() < 0) {
        it.remove(); // 用迭代器的 remove，安全！
    }
}
// 或者 Java 8 更简单的写法（底层也是迭代器）
collection.removeIf(num -> num < 0);
```
:::


#### List(interface)
`List` 是 Java 中有序的、可重复的集合（也叫“序列”）。它最大的特点是有下标（索引）
特点:有序,可重复,有索引
##### List 的实现类

| 实现类 | 底层数据结构 | 优势 | 劣势 |
| :--- | :--- | :--- | :--- |
| **`ArrayList`** | **`Object[]` 数组** | **随机访问（`get`/`set`）极快**，遍历效率最高，内存连续。 | 中间插入（`add(index)`）和删除（`remove(index)`）慢，因为要移动元素。 | 
| **`LinkedList`** | **双向链表** | 头部/尾部插入删除极快，中间插入删除也比 ArrayList 快（只改指针）。 | 随机访问（`get(index)`）极慢，需要从头/尾遍历。 | 
| **`Vector`** | 数组（同 ArrayList） | 线程安全（底层方法加了 `synchronized`）。 | 性能比 ArrayList 差，属于遗留类（JDK 1.0）。 | 

##### List 接口定义的“通用方法”

| 类别 | 方法名 | 作用 |
| :--- | :--- | :--- |
| **增** | `add(e)` | 尾部添加元素 |
| | `add(index, e)` | 指定位置插入（会右移后续元素） |
| | `addAll(Collection c)` | 尾部添加另一个集合的所有元素 |
| **删** | `remove(index)` | 删除指定下标元素（返回被删元素） |
| | `remove(Object o)` | 删除第一次出现的指定对象（返回 boolean） |
| | `clear()` | 清空所有元素 |
| **改** | `set(index, e)` | 替换指定位置的元素（返回旧值） |
| **查** | `get(index)` | 获取指定位置元素 |
| | `indexOf(o)` | 返回第一次出现的索引，找不到返回 -1 |
| | `lastIndexOf(o)` | 返回最后一次出现的索引 |
| | `contains(o)` | 是否包含该元素 |
| **长度/判断** | `size()` | 返回元素个数（**注意：不是 `length`！**） |
| | `isEmpty()` | 是否为空 |
| | `subList(from, to)` | 截取子列表（视图，修改会影响原列表） |

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
#### Set(interface)

`Set`是 Collection 的子接口，代表一个不允许包含重复元素的集合。它没有 List 那样的 get(index) 方法（因为没有下标），核心数学模型就是数学上的“集合”——交、并、补、差

三大核心特征：
- 无重复：set.add(e) 时，如果元素已存在，返回 false，且不会添加。
- 无序（大部分实现）：顺序通常与插入顺序无关（HashSet 是按哈希值排列的）。
- 无索引：不能通过下标取值，只能遍历或通过迭代器访问。

##### Set 的实现类

| 实现类 | 底层数据结构 | 是否有序 | 是否允许 `null` | 时间复杂度（增删改查） | **适用场景** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`HashSet`**（首选） | **哈希表（数组 + 链表/红黑树）** | 完全无序 | ✅ 允许 | **O(1)** | **99% 的去重/查重场景**（比如两数之和、字母异位词） |
| **`LinkedHashSet`** | 哈希表 + 双向链表 | **维护插入顺序** | ✅ 允许 | O(1) | 既要去重，又要保持输入顺序（如 LRU 缓存相关） |
| **`TreeSet`** | **红黑树（自平衡二叉搜索树）** | **自动升序排序**（自然顺序） | ❌ **不允许**（会抛 NPE） | **O(log n)** | 需要元素**自动排序**且去重（如求第 K 大、滑动窗口中的中位数） |

##### 核心 API
因为 `Set` 继承自 `Collection`，它并没有发明很多新方法，最常用的就这几个：

| 方法 | 作用 | 返回值 | 与 List 的区别 |
| :--- | :--- | :--- | :--- |
| **`add(e)`** | 添加元素 | `true`（成功）/ `false`（已存在） | List 永远返回 `true`（允许重复） |
| **`remove(e)`** | 删除指定元素 | `true`（删除成功）/ `false`（不存在） | 按值删，没有 `remove(index)` |
| **`contains(e)`** | **判断元素是否存在** | `true` / `false` | **O(1) 时间复杂度** |
| `size()` | 获取元素个数 | int | 通用 |
| `isEmpty()` | 判空 | boolean | 通用 |

:::important
存入 `Set` 的对象，如果是自定义类，务必重写 `hashCode` 和 `equals`，并且在存入后**绝对不要修改**它的参与哈希计算的字段
:::