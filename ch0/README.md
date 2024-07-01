# 复杂度分析

## 算法效率
算法效率已成为衡量算法优劣的主要评价指标，它包括以下两个维度。

- 时间效率：算法运行时间的长短。
- 空间效率：算法占用内存空间的大小。
简而言之，我们的目标是设计“既快又省”的数据结构与算法。


## 复杂度分析
由于实际测试具有较大的局限性，因此我们可以考虑仅通过一些计算来评估算法的效率。这种估算方法被称为渐近复杂度分析（asymptotic complexity analysis），简称复杂度分析。

复杂度分析能够体现算法运行所需的时间和空间资源与输入数据大小之间的关系。它描述了随着输入数据大小的增加，算法执行所需时间和空间的增长趋势。这个定义有些拗口，我们可以将其分为三个重点来理解。

- “时间和空间资源”分别对应时间复杂度（time complexity）和空间复杂度（space complexity）。
- “随着输入数据大小的增加”意味着复杂度反映了算法运行效率与输入数据体量之间的关系。
- “时间和空间的增长趋势”表示复杂度分析关注的不是运行时间或占用空间的具体值，而是时间或空间增长的“快慢”。


## 迭代与递归


迭代（iteration）是一种重复执行某个任务的控制结构。在迭代中，程序会在满足一定的条件下重复执行某段代码，直到这个条件不再满足。

### for 循环

```
/* for 循环 */
int forLoop(int n) {
    int res = 0;
    // 循环求和 1, 2, ..., n-1, n
    for (int i = 1; i <= n; i++) {
        res += i;
    }
    return res;
}
```

###  while 循环

while 循环比 for 循环的自由度更高。在 while 循环中，我们可以自由地设计条件变量的初始化和更新步骤。

```
/* while 循环（两次更新） */
int whileLoopII(int n) {
    int res = 0;
    int i = 1; // 初始化条件变量
    // 循环求和 1, 4, 10, ...
    while (i <= n) {
        res += i;
        // 更新条件变量
        i++;
        i *= 2;
    }
    return res;
}
```


### 嵌套循环
在一个循环结构内嵌套另一个循环结构

```
/* 双层 for 循环 */
String nestedForLoop(int n) {
    StringBuilder res = new StringBuilder();
    // 循环 i = 1, 2, ..., n-1, n
    for (int i = 1; i <= n; i++) {
        // 循环 j = 1, 2, ..., n-1, n
        for (int j = 1; j <= n; j++) {
            res.append("(" + i + ", " + j + "), ");
        }
    }
    return res.toString();
}
```






## 递归 
递归（recursion）是一种算法策略，通过函数调用自身来解决问题。它主要包含两个阶段。

- 1 递：程序不断深入地调用自身，通常传入更小或更简化的参数，直到达到“终止条件”。
- 2 归：触发“终止条件”后，程序从最深层的递归函数开始逐层返回，汇聚每一层的结果。

```

/* 递归 */
int recur(int n) {
    // 终止条件
    if (n == 1)
        return 1;
    // 递：递归调用
    int res = recur(n - 1);
    // 归：返回结果
    return n + res;
}

```


### 调用栈 
递归函数每次调用自身时，系统都会为新开启的函数分配内存，以存储局部变量、调用地址和其他信息等。这将导致两方面的结果。

- 函数的上下文数据都存储在称为“栈帧空间”的内存区域中，直至函数返回后才会被释放。因此，递归通常比迭代更加耗费内存空间。
- 递归调用函数会产生额外的开销。因此递归通常比循环的时间效率更低。

递归调用深度:
![recursion_sum_depth](recursion_sum_depth.png)


### 尾递归 
有趣的是，如果函数在返回前的最后一步才进行递归调用，则该函数可以被编译器或解释器优化，使其在空间效率上与迭代相当。这种情况被称为尾递归（tail recursion）。

- 普通递归：当函数返回到上一层级的函数后，需要继续执行代码，因此系统需要保存上一层调用的上下文。
- 尾递归：递归调用是函数返回前的最后一个操作，这意味着函数返回到上一层级后，无须继续执行其他操作，因此系统无须保存上一层函数的上下文。

```
/* 尾递归 */
int tailRecur(int n, int res) {
    // 终止条件
    if (n == 0)
        return res;
    // 尾递归调用
    return tailRecur(n - 1, res + n);
}

/* 递归 */
int recur(int n) {
    // 终止条件
    if (n == 1)
        return 1;
    // 递：递归调用
    int res = recur(n - 1);
    // 归：返回结果
    return n + res;
}
```

尾递归过程:
![tail_recursion_sum](tail_recursion_sum.png)


## 时间复杂度








# 原码、反码、补码
- https://higoge.github.io/2015/07/02/basic03/ 

机器数与真值
机器数，即数字在计算机中的二进制表示形式。
真值，第一位用+-表示数字的正负，其余为二进制数。
举个栗子：-3的机器数是10000011，真值是-0000011。

原码
原码，符号位加真值的绝对值。

+3[原] = 00000011
-3[原] = 10000011
8位二进制数原码的取值范围是[11111111, 01111111]，即[-127, 127]

反码
正数的反码是其原码。
负数的反码，符号位不变，其余各位取反，即1变成0，0变成1。

+3[反] = 00000011[原] = 00000011[反]
-3[反] = 10000011[原] = 11111100[反]
8位二进制数反码的取值范围是[11111111, 01111111]，即[-127, 127]

补码
正数的的补码是其原码。
负数的补码，是其反码+1。

+3[补] = 00000011[原] = 00000011[反] = 00000011[补]
-3[反] = 10000011[原] = 11111100[反] = 11111101[补]
反码和补码均不能直接看出其实际的数值，需要转换成原码后再计算。

为何要使用补码
原码比较直观，它的数值部分就是该数的绝对值，而且与真值、十进制数的转换十分方便。但是它的加减法运算较复杂。当两数相加时，机器要首先判断两数的符号是否相同，如果相同则两数相加，若符号不同，则两数相减。在做减法前，还要判断两数绝对值的大小，然后用大数减去小数，最后再确定差的符号。换言之，用这样一种直接的形式进行加运算时，负数的符号位不能与其数值部分一同参加运算，而必须利用单独的线路确定和的符号位。要实现这些操作，电路就很复杂。
为了减少设备，解决机器内负数的符号位参加运算的问题，总是将减法运算变成加法运算，引进了反码机器数，可以让符号位直接参与计算，把它统一看做无符号数。

-3 + 2 = 11111100[反] + 00000010[反] = 11111110[反] =10000001[原] = -1
看似挺好，但也会出问题。

3 - 2 = 3 + (-2) = 00000011[反] + 11111101[反] = 00000000[反] = 00000000[原] = 0
显然是不对的。
反码可以让符号位直接参与运算，但计算结果有错误。
并且，11111111[反] = 10000000[原] = -0 00000000[反]=00000000[原] = +0
自然数中， -0 = +0 = 0，但是0却又两个表示。
所以，反码充满了错误。

为了解决反码的错误，引入了补码。

-3 + 2 = 11111101[补] + 00000010[补] = 11111111[补] = 11111110[反] = 10000001[原] = -1
3 + (-2) = 00000011[补] + 11111110[补] = 00000001[补] = 00000001[原] = 1
1 + (-1) = 00000001[补] + 111111111[补] = 00000000[补] = 00000000[原] = 0
即，0 可以用00000000[补]表示，-0不存在。用10000000[补]表示-128。

(-1) + (-127) = 11111111[补] + 10000001[补] = 10000000[补] = -128
注：-1 + -127的结果是-128，所以用补码最后计算的结果10000000[补]来表示-128，但-128并不存在反码和原码。若按照反码和原码计算，10000000[补] = 01111111[反] = 00000000[原] = 0显然是不正确的。
使用了补码，可以再[-127, 127]的范围内，在表示-128，即可以表示的范围是[-128, 127]。
所以，n位二进制数，可表示的整数范围是[-2^n-1, (2^n-1) - 1]。上述的栗子n=8，即一个字节。