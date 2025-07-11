---
title: Zerojudge題解
cover: /img/ZJ.png
date: 2025-07-11 12:00:00
tags:
  - Zerojudge
categories: 作品集
portfolio: true
---

## Easy
### a001.哈囉
https://zerojudge.tw/ShowProblem?problemid=a001
```CPP
#include <iostream>
using namespace std;

int main() {
string s;
 while(cin >> s){
  cout << "hello, "<< s << "\n";
 }
 return 0;
}
```
### a002. 簡易加法
https://zerojudge.tw/ShowProblem?problemid=a002
```CPP
#include<iostream>
using namespace std;
int main()
{
    int a,b;
    cin>>a>>b;
    cout<< a+b;
    return 0;
}
```
### a003. 兩光法師占卜術
https://zerojudge.tw/ShowProblem?problemid=a003
```CPP
#include <iostream>
using namespace std;

int main()
{
    int a, b;
    bool result=(a*2+b)%3;
    cin>>a>>b;
    if (result==0){
    cout<<"普通";
    }
    else if(result==1){
    cout<<"吉";
    }
    else if(result==2){
    cout<<"大吉";
    }
    return 0;
}
```
### a004. 文文的求婚
https://zerojudge.tw/ShowProblem?problemid=a004
```CPP
#include <iostream>
using namespace std;

int main() {
  int a;
	while(cin>>a){
    bool isleapa= (a % 4 == 0 && a % 100 != 0) || (a % 400 == 0);
    if(isleapa){
      cout<<"閏年\n";
     }
    else{
     cout<<"平年\n";
     }
    }
    return 0;
}
```
### a005. Eva 的回家作業
https://zerojudge.tw/ShowProblem?problemid=a005
```CPP
#include <iostream>
using namespace std;

int main() {
    int t;
    cin >> t; 

    for (int i = 0; i < t; i++) {
        int a, b, c, d; 
        
        cin >> a >> b >> c >> d;
        if (b - a == c - b && c - b == d - c) {
        
            int e = d + (d - c);
            cout << a << " " << b << " " << c << " " << d << " " << e <<'\n';
        }
        else if (b / a == c / b && c / b == d / c) {
        
            int e = d * (d / c);
            cout << a << " " << b << " " << c << " " << d << " " << e <<'\n';
        }
    }

    return 0;
}
```
### a006. 一元二次方程式
https://zerojudge.tw/ShowProblem?problemid=a006
```CPP
#include<iostream>
#include<cmath>
using namespace std;

int main()
{
    int a,b,c;
    cin>>a>>b>>c;
    int d = b*b-4*a*c;
    
    if (d<0) {
    cout<<"No real root"<<'\n';
    }
    
    else if(d==0){
    double x1= -b/(2.0*a);
    cout<<"Two same roots x="<<x1<<'\n';
    }
    else{ 
    double x1= (-b+sqrt(d))/(2*a);
    double x2= (-b-sqrt(d))/(2*a);
          
    cout <<"Two different roots "<<"x1="<<x1<<" , x2="<<x2<<'\n';
    }
    return 0;
}
```