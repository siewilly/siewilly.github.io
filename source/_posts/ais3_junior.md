---
title: 第一次建網站的心路歷程
date: 2025-08-03 16:32:32
tags: test
cover: /img/hexo_web_ex/hexo_web.webp
urname: test
---
# writeup
## day-1:
challenge-1:
首先先用`ls`找出challenge-1裡面的目錄，會找到flag檔案
用cat讀取flag會拿到AIS3{C0N9_Y0UR_F1R57_F1A9_😼}
challenge-2:
首先用`cd`進到challenge-2，試著用ls尋找challenge-2的當下目錄(隱藏的找不到)，當我輸入`ls`時，不會得到任何回應
那就換另一種方法，用`ls -a`尋找所有的根目錄(包含隱藏的)
當我輸入ls -a 會出現`.      ..     .flag`，那找到了隱藏的.flag就可以使用`cat`打開`.flag`
最終會得到AIS3{15_a1_W0N7_M155_D07_🚩}
