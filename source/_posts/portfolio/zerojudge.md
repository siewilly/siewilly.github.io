---
title: zerojudge解題
cover: /img/ZJ.webp
date: 2025-07-11 12:00:00
tags:
  - Zerojudge
category: 作品集
portfolio: true
urlname: zerojudge
---
# 基礎
## a001_hello
#### baby :baby:
題目來源:[a001](https://zerojudge.tw/ShowProblem?problemid=a001)
### 題解:
題目敘述:學習所有程式語言的第一個練習題 
        請寫一個程式，可以讀入指定的字串，並且輸出指定的字串。
        比如：輸入字串 "world", 則請輸出 "hello, world"
題解:寫一個程式可以輸入東西，並且輸出你輸入的東西

### Code
```python
x=input()
print(x)
```
---
## a002 簡易加法
#### baby :baby:
題目來源[a002](https://zerojudge.tw/ShowProblem?problemid=a002)
### 題解:
題目說要輸入兩個數字(a&b)，要輸出a+b的值

要注意輸入的type:int
### 輸入方法
因為題目有說輸入只有一列，且包含兩個數字==以空白隔開==
map語法是搭配split使用的
split()的兩個括號裡面是代表說，這段資料是以甚麼元素作為分割，像是3.14要用小數點做分割就要寫split(".")
```python
x=map(int,input().split())
```
再加加法的程式`sum1=a+b#記得不要把代數的名字取成python內建函式的名字喔`
```python
x=map(int,input().split())
sum1=a+b
print(sum1)
```
---
## 插句話，你們先到目錄裡的其他裡面的第一個item看，我有教我以後要用的輸入法
---
## a003 兩光法師占卜術
#### baby :baby:
題目來源[a003](https://zerojudge.tw/ShowProblem?problemid=a003)
### 題解:
這題題目要求的是輸入M(月)D(日)，並且計算S值(M*2+D)%3(可以說是M*2+D除三的餘數)，如果`S=0 輸出"普通"` & `S=1 輸出"吉"` & `S=2 輸出"大吉"`
```python
from sys import stdin
M,D=map(int,stdin.readline().strip().split())
S=(2*M+D)%3
if S==0: print("普通")
elif S==1: print("吉")
elif S==2: print("大吉")
```
---
## a004 文文的求婚
#### baby :baby:
題目來源[a004](https://zerojudge.tw/ShowProblem?problemid=a004)
### 解題
題目說要找是平年還是閏年，並且輸入年分到EOFError(去看其他的第一點stdin輸入法)，我們先講閏年跟平年的分法，閏年:能被4整除但不能被100整除，或者能被400整除的年份;除了閏年就是平年，我們分成兩的部分講
輸入方式:
```python
from sys import stdin
for line in stdin:
  year=int(line.strip())
```
判斷式:
```python
if (year%4==0 and year%100!=0) or year%400==0:
  print("閏年")
else:
  print("平年")
```
最終合起來我們可以得到:
```python
from sys import stdin
for line in stdin:
  year=int(line.strip())
  if (year%4==0 and year%100!=0) or year%400==0:
    print("閏年")
  else:
    print("平年")
```
---
## a005 Eva的回家作業
#### easy😎
題目來源[a005](https://zerojudge.tw/ShowProblem?problemid=a005)
### 解題
題目說輸入一個n，代表說接下來要輸入幾次，並且要求輸入的數列(都有四項)的第五項，我們拆成輸入跟主程式來講
輸入:
```python
from sys import stdin
n=int(stdin.readline())
for _ in range(n):
  data=list(map(int,stdin.readline().strip().split()))
```
主程式
```python
if data[1]-data[0]==data[3]-data[2]:#判斷是否為等差數列
  data.append(data[3]+(data[3]-data[2]))
  print(*data,sep=" ")
else:#如果不是等差就是等比數列
  data.append(data[3]*(data[3]/data[2]))
  print(*data,sep=" ")
```
合起來就是:
```python
from sys import stdin
n=int(stdin.readline())
for _ in range(n):
  data=list(map(int,stdin.readline().strip().split()))
  if data[1]-data[0]==data[3]-data[2]:
    data.append(data[3]+(data[3]-data[2]))
    print(*data,sep=" ")
  else:
    data.append(data[3]*(data[3]/data[2]))
    print(*data,sep=" ")
```
---
## a006 一元二次程式
#### easy😎
### 解題
我們不要想太困難的東西，直接套公式`(-b±√b^2-4ac)/(2a)`，還有分辨是否有實數解，還是一個姐還是兩個解
輸入方法:
```python
from sys import stdin
a,b,c=list(map(int,stdin.readline().strip().split()))
```
主程式:
```python
if b**2-4*a*c<0:#無實數解
  print("No real root")
elif b**2-4*a*c==0:#重根
  S=(-b+(b**2-4*a*c)**0.5)/(2*a)
  print(f"Two same roots x={S}")
else:#有實數解且不重根
  S1=(-b+(b**2-4*a*c)**0.5)/(2*a)
  S2=(-b-(b**2-4*a*c)**0.5)/(2*a)
  print(f"Two different roots x1={S1} , x2={S2}")
```
結合在一起就是:
```python
from sys import stdin
a,b,c=list(map(int,stdin.readline().strip().split()))
if b**2-4*a*c<0:#無實數解
  print("No real root")
elif b**2-4*a*c==0:#重根
  S=(-b+(b**2-4*a*c)**0.5)/(2*a)
  print(f"Two same roots x={S}")
else:#有實數解且不重根
  S1=(-b+(b**2-4*a*c)**0.5)/(2*a)
  S2=(-b-(b**2-4*a*c)**0.5)/(2*a)
  print(f"Two different roots x1={S1} , x2={S2}")
```
---
# 其他
## stdin輸入法
我這裡要教stdin輸入法，請大家先把`from sys import stdin`背起來，很重要，請第一行程式就打這個
我們成幾類來講
- 輸入一個元素:`n=int(stdin.readline())`
- 輸入兩個元素or多個元素`n,m=map(int,stdin.readline().strip().split())` `n,m,k=map(int,stdin.readline().strip().spllit())`以此類推
- 輸入list`data=list(map(int,stdin.readline().strip().split()))`
- 輸入到EOFError(ctrl+D)`for line in stdin: n=int(line.strip())`
### 為什麼選這個輸入法呢
因為在大資料輸入時，這樣方便且便捷很多(~~版主常用這個輸入法懶得改~~)
[回目錄-->](https://siewilly.github.io/portfolio/)
