---
title: ais3_junior 心得(施工中)
date: 2025-08-26 16:32:32
tags: ais3
cover: /img/ais3_junior.webp
urname: ais3_junior
---
# AIS3 junior_day1_homework

## challenge-1

![image.png](attachment:eecacbc4-9982-45ed-9849-3722c5418abb:image.png)

- 我先使用`ls`叫出所有的當下目錄，並瞄準我要寫的第一題challenge-1去進入(使用`cd challenge-1`)
- 進到challenge-1後，我先用`ls`叫出challenge-1的當前目錄，看到了一個flag的文件
- 接著使用`cat flag`來執行flag這個檔案，就會得到這題的flag

### FLAG=`AIS3{C0N9_Y0UR_F1R57_F1A9_😼}`

## challenge-2

![image.png](attachment:7aee0bc4-5068-4e63-93b5-8986bf77be71:image.png)

- 我先使用`cd challenge-2`進入challeng-2的資料夾裡面
- 進到challenge-2之後，我使用`ls`叫出challenge-2的當前目錄，可惜的是沒有看到，所以我改用`ls -a`去查看challenge-2的總目錄(包含隱藏的)，成功在裡面找到.flag這個文件
- 接著使用`cat .flag`來執行.flag這個檔案，就會得到這題的flag

### FLAG=`AIS3{15_a1_W0N7_M155_D07_🚩}`

## challenge-3

![image.png](attachment:14344ba9-7485-4374-8dd7-5fe124dad00d:image.png)

- 我先使用`cd challenge-3`進入challenge-3的資料夾裡面
- 進到challenge-3之後，我使用`ls`叫出challenge-3的當前目錄，看到了flag這個文件
- 接著使用`cat flag`來執行flag這個文件，得到了一個提示`Please create a file named meow under /tmp folder`
- 使用`cd ..` 回到上一個層級的file，然後使用`cd /tmp` 到絕對路徑tmp這個資料夾
- 接著依照提示給的在/tmp這個資料夾加上一個命名為meow的文件，我們可以使用`touch meow` 創建一個命名為meow的檔案，建立之後就能得到flag

### FLAG=`AIS3{M30W_M30W_900D_J0B5}`

## challenge-4

![image.png](attachment:3a4ee5a3-9d5e-49c6-801f-61b21b899442:image.png)

- 我先使用`cd challenge-4` 進入challenge-4的資料夾裡面
- 進到challenge-4之後，我使用`ls` 叫出challenge-4的當前目錄，看到flag這個文件
- 接著使用`cat flag` 來執行flag這個文件，得到了一個提示`please move grep into ~/challenge-5/ folder`
- 可以使用`mv grep ~/challenge-5/` 把grep這個檔案移植到challenge-5這個資料夾，按下enter鍵後就得到flag

### FLAG=`AIS3{M0V3_M0VE_HURRY_UP!}`

## challenge-5

![image.png](attachment:ee3a041c-205d-4d03-a592-38822e8a43ea:image.png)

![image.png](attachment:e5230df6-8048-46b2-adb9-8d51f5166e83:image.png)

- 我先輸入`cd cahllenge-5` 進入challenge-5的資料夾
- 進到challenge-5之後，輸入`cd maybe_here` 打開maybe_here，發現裡面還包著一個maybe_here & 一個maybe_here.txt
- 我用`cat maybe_here.txt` 打開maybe_here.txt，發現裡面都是沒用的資訊，我只好再進入下一個maybe_here資料夾
- 經過再一次的`cd maybe_here` 裡面又有一個一樣的目錄(有可能是多重夾層)，那我們使用暴力法是不可能的了，我決定轉用`grep` 搜尋flag
- 因為這個機器是沒有`grep`的封包，所以沒辦法使用`grep`，經過查詢，我使用`export PATH=$PATH:/home/user/challenge-5` 來強制使用`grep`
- 緊接著我輸入`grep -r "AIS3{" .` 利用遞迴的方式遍歷每個檔案去尋內容找有`AIS3{` 的文件，找到了一個有這樣符合的文件，但是少了一半的flag，所以我還要想辦法找後半段
- 經過觀察前面的flag，我發現每個flag都是有`AIS3{`這前半段跟`}` 這個結尾，所以我決定用`}` 來尋找後半段的flag
- 輸入`grep -r "}" .` 利用遞迴的方式遍歷每個檔案內文有`}` 的檔案，第一個找到的就發現了後半部flag

### FLAG=`AIS3{M4st3r_0f_S34rch_1$_p0w3rfu11}`

## challenge-6

![image.png](attachment:b8cbf3aa-15a4-4f7a-a5c4-13cdf5a43576:image.png)

- 我首先輸入`cd challenge-6` ，進入到challenge-6的資料夾
- 進到challenge-6之後，先用`ls` 觀察這裡面的當前目錄，看到有一個flag檔案
- 使用`cat flag` 開啟flag檔案，會得到一個提示`REMOVE ME PLS!!!` 後面接著可以輸入的框
- 接著可以使用`rm flag` 執行刪除flag的動作，等一下就可以跑出flag

### FLAG=`AIS3{RM_RF_CHUMMY_/_D0N7_D0_17_PL5}`

## pico_**GET aHEAD**

點到題目裡面的連結

![image.png](attachment:f5ffbc2b-416c-4d95-b01a-e5fd8b159de6:image.png)

這邊有兩個按鈕可以選擇頁面顏色，但是flag可能會藏在哪裡呢?

我先打開burp suite→在上面的欄位找到proxy→找到下面的Intercept off按一下就可以變成Intercept on→點一下Choose RED會攔截到一個GET

![image.png](attachment:b4193c7b-4859-41d4-87da-a6f008d3ab86:image.png)

送到Repeater讀一下:會看到GET的請求，如果sent GET要求的，會得到body而不是看到flag

![image.png](attachment:98757c4b-6a97-4c6d-9775-314ce46a9478:image.png)

那我們不想拿到body而是只想拿到開頭的話，就把GET請求改成HEAD，就可以不輸出body直接輸出headers

最終破解方式:把GET改成HEAD輸出headers

![image.png](attachment:983dce6c-e3c3-4b8d-95c7-85455d07172c:image.png)

### FLAG=`picoCTF{r3j3ct_th3_du4l1ty_8f878508}`

## pico_**Cookies**

點到題目上面的網址會到一個輸入的網址，你輸入的任何東西都會有對應的cookie去查

![image.png](attachment:02a110e4-3f36-4cad-8ce2-d1e5d52bda28:image.png)

經過我的測資:

1.1

2.fjsdkfjs

3.1+6

通通輸入後我會發現題目通通回傳302

![image.png](attachment:59180b49-157c-48fe-8429-4a82b79cb275:image.png)

![image.png](attachment:c3e3ef9d-d7f7-471f-8042-3c794099b8bc:image.png)

![image.png](attachment:8761de86-89e0-447a-a126-42f1690772de:image.png)

那這題可以從哪裡入手呢?

- 我在最開始的輸入介面看到了一個關鍵字:snickerdoodle,既然發現都發現了試試看吧

![image.png](attachment:20cbb9f3-4e21-45d1-acfc-7542328c5e41:image.png)

ㄟ我發現一個東西，我輸入這個有一個新東西輸出

那我該從哪裡觀察這個東西?

因為我們在題目敘述上有看到Cookies，那依據題目文字給的提示，我們嘗試去看cookie

1.這是輸入snickerdoodle的結果，name值為0

![image.png](attachment:6cfedab2-7d85-4616-8b32-7ad04e9339b1:image.png)

2.這是輸入1的結果，cookie的值為-1

![image.png](attachment:bab8ddf7-cc23-4fcf-84af-72f544884fd4:image.png)

那一句我以上兩個的結果，我猜測一下，在這裡cookie的name值有可能跟py裡面的data一樣，可以以index去查找資料(用binery的方式，一個一個猜太慢，那我們先試試邊界值(改cookie的name之後記得重新整理解面):

- name=40,可見是一個無效查詢

![image.png](attachment:04fb0cba-9cbc-4258-9c7c-6540ba182908:image.png)

- name=30可見是一個無效查詢

![image.png](attachment:5b33754b-445b-42e5-9d33-83b24396bef9:image.png)

- name=25是一個有效查詢，為求嚴謹，我們要求到精細值(L+1=R)，目前R=30,L=25

![image.png](attachment:41d6ef88-a91a-4405-bf00-c8298dacac35:image.png)

- name=27是一個有效查詢但未達到L+1=R，目前R=30,L=27

![image.png](attachment:81e46a66-121b-4991-9189-46c67bfbf617:image.png)

- name=29是一個無效查詢，目前R=29,L=27

![image.png](attachment:a64b7dae-3eaf-4b15-addb-26836aace549:image.png)

- name=28是一個有效查詢，L+1=R，所以我們能知道name=29為極端值

![image.png](attachment:033345a2-1b94-46e7-b513-be5e32a6f982:image.png)

那我們已經知道了name=28為極端值，就可以一步一步用暴力法遍歷所有28~0的數字，我這邊就不暴力法了(我效率派的，逼我寫暴力的東西我難受)，name=18就是flag的所在位置

![image.png](attachment:188d89f1-ecf3-4753-8baa-884e8f3757f7:image.png)

### FLAG=**`picoCTF{3v3ry1_l0v3s_c00k135_96cdadfd}`**

## pico_**Inspect HTML**

這題是要用lab的題目
我首先看到題目就先看到inspect html，這很明顯了，就是叫我去看F12:)

![image.png](attachment:4436c062-1baf-474c-b122-213f1c7910d7:image.png)

那個command疑似就是解答囉:)

### FLAG=`picoCTF{1n5p3t0r_0f_h7ml_fd5d57bd}`

## pico_**Bookmarklet**

這題也是用lab啟動的題目

![image.png](attachment:023c58f6-47fd-487e-99c0-6326fe5b6e1f:image.png)

我看到著個網頁就寫著`Welcome to my flag distribuition website!If you’te reading this,your browser has succesfully received the flag` 代表說flag不是會print出現在我眼前就是以提示的方式出現?

我看到了下面有一串程式碼

```jsx
    javascript:(function() {
        var encryptedFlag = "àÒÆÞ¦È¬ëÙ£ÖÓÚåÛÑ¢ÕÓÔÅÐÙí";
        var key = "picoctf";
        var decryptedFlag = "";
        for (var i = 0; i < encryptedFlag.length; i++) {
            decryptedFlag += String.fromCharCode((encryptedFlag.charCodeAt(i) - key.charCodeAt(i % key.length) + 256) % 256);
        }
        alert(decryptedFlag);
    })();

```

這有點類似於某種神祕的解碼程式?

我們去web可以直接執行javascript地方試試

F12→Console→把這段程式碼丟上去執行

![image.png](attachment:fb20aec5-eef7-4c97-8550-33b2a3ccfb16:image.png)

### FLAG=`picoCTF{p@g3_turn3r_1d1ba7e0}`

## pico_**WebDecode**

又是一個要用lab的題目

我們先分解題目，DeCode→解碼，代表說這題是跟解碼相關的?

![image.png](attachment:fcb764eb-9233-49fb-b0b6-55d5ee70c59d:image.png)

這感覺有三個按鈕可以互動，我們點其他的試試看

- ABOUT

![image.png](attachment:5f16fb81-5007-4823-8694-c59dafc54042:image.png)

感覺好像找到了?如果表面沒線索就去看看html!

![image.png](attachment:4b05d316-3ab6-4afc-9697-4f8f82cfeb8b:image.png)

這行這一串亂碼剛好在這裡感覺有點像是decode的線索?

先複製下來，然後上網查base64解碼(先猜最基本的)

![image.png](attachment:aae8a33d-80ac-4a2c-a03c-836477f5f616:image.png)

找到囉~~~

### FLAG=`picoCTF{web_succ3ssfully_d3c0ded_1f832615}`
