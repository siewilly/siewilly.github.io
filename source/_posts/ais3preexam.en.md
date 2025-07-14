---
title: AIS3 pre-exam 2025
date: 2025-07-11 13:32:32
tags:
  - AIS3
cover: /img/ais3/ais3.webp
urlname: AIS3
lang: en
---
# Introduction

This was my first CTF.  
My performance was poor, and so was this writeup.  
~~For the sake of your eyes, please don't read any further.~~

# web
## tomorin db
### Challenge Overview

Upon visiting the challenge URL http://chals1.ais3.org:30000/ :

![](/img/ais3/t see four files:
- cute.jpg
- flag
- is.jpg
- tomorin.jpg

Three are images, but **clicking on "flag" redirects to [MyGO!!!!!'s 聿日箋秋](https://www.youtube.com/watch?v=lQuWN0biOBU)** ~~again with the GO~~  
![](/img/ais3/MyGOability Analysis

Since the flag file exists but the /flag path is specially handled, I tried to bypass the /flag route.

### Bypass Approach

After trying, I discovered that using URL encoding **(%2f)** with flag avoids the redirect.  
So I appended ***/%2fflag*** to the base URL.

![](/img/ais3/成功訪問.webp me to obtain the flag:
```
AIS3{G01ang_H2v3_a_c0O1_way!!!_Us3ing_C0NN3ct_M3Th07_L0l@T0m0r1n_1s_cute_D0_yo7_L0ve_t0MoRIN?}
```

## Login Screen 1

### Page Analysis

The web page presents a login interface:

![](/img/ais3/登入畫面.webp:
- Username input
- Password input
- Login button

### Injection Attack

![](/img/ais3/FLAG the flag:
```
AIS3{1.Es55y_SQL_1nJ3ct10n_w1th_2fa_IuABDADGeP0}
```

# misc

## Ramen CTF

This was the most interesting challenge for me.

### Challenge Overview

A single image was provided:

![](/img/ais3/chal.jpg content was the receipt, so I thought maybe I could look up some information using the receipt details.

![](/img/ais3/:
- Pinghe...
- Starts with MF
- Invoice date: 2025/04/13
- Random code: 7095
- Seller number: 3478592...

Scanning the QR code revealed:

![](/img/ais3/QRcode.webp number: MF16879911
- Dish: Shrimp ramen

### Address Lookup

Entering the above details into the [Ministry of Finance e-invoice platform](https://www.einvoice.nat.gov.tw/portal/btc/audit/btc601w/search):

![](/img the address, and by searching it on Google Maps, we found **Leshan Onsen Ramen**.

![](/img/ais3/Map us the flag:
```
AIS3{樂山溫泉拉麵:蝦拉麵}
```

## AIS3 Tiny Server - Web / Misc

After visiting the provided URL and using the correct token, I reached http://chals1.ais3.org:20096/index.html

![](/img/ais3/Tiny common hidden paths and found that **adding // reveals the file directory**.

![](/img/ais many files; I clicked the one with "flag" in the name: **readable_flag_jkO47trw1ctKlOIFC7smx7hivqoCPL8Y**

!
This gave the flag:
```
AIS3{tInY_we8_53Rv3R_wi7H_fILe_8R0Ws1nG_AS_@_FeAtURe}
```

## Welcome

### I just typed in owo

![](/img/ais3/welcome

## SlowECDSA

This challenge was a classic LCG attack. The security of ECDSA relies entirely on the unpredictability of the random number k. If the server uses an LCG to generate these numbers, it's game over.

### **Sample Collection**

Since the server provided a `get_example` function, I called it twice to get two different signatures, thus obtaining a pair of signatures using consecutive LCG random numbers.

### **Mathematical Relationship**

According to Perplexity,  
ECDSA signature formula:
$$
s = k^{-1} \times (h + r \times d) \bmod n
$$

If k₁ and k₂ are linearly related: $$ k_2 = (a \times k_1 + c) \mod n $$, we can build an equation for d.

### **Solving**

From the two signatures, we can derive:
$$
s_2^{-1} \times (h + r_2 \times d) \equiv a \times s_1^{-1} \times (h + r_1 \times d) + c \pmod{n}
$$

Solving this linear equation yields d.

### **Prediction**

With the private key, we can recover the actual k₁, then use the LCG's linearity to predict k₃.

### **Signature Forgery**

Using the predicted k₃ and the recovered private key, we can generate a valid signature for the target message "give_me_flag".

### **Attack**

I asked AI to write a Python script to perform this attack.

```python
# ... (script omitted for brevity)
```

After running, I got the flag:

![](/img/ais3/responseounc3s_c@N_bE_broke_ezily...}
```

## Stream

The provided Python script revealed a flaw in the encryption scheme:  
**When the plaintext is much smaller than the key, the XOR result is dominated by the key.**  
So we can exploit this mathematical relationship to attack.

![](/img/aisApproach**

The encryption formula is:
```
encrypted_int = flag_int ⊕ (rand_num²)
```
When flag_int is much smaller than rand_num²:
```
encrypted_int ≈ rand_num²
```
So we can reverse-engineer the flag.

### **Attack**

First, estimate the random number:
```python
approx_rand_num = math.isqrt(encrypted_int)
```
Then search around this estimate:
```python
for offset in range(-search_width, search_width + 1):
    rand_num_candidate = approx_rand_num + offset
```
For each candidate, compute its square and try to decrypt:
```python
key_squared = rand_num_candidate ** 2
flag_candidate = encrypted_int ^ key_squared
```
Basic filtering:
```python
# Exclude invalid results
if flag_candidate == 0:
    continue

# Check reasonable length
num_bits = flag_candidate.bit_length()
byte_len = (num_bits + 7) // 8
if not (5  bytes:
    if n == 0:
        return b'\x00'
    byte_length = (n.bit_length() + 7) // 8
    return n.to_bytes(byte_length, 'big')

flag_bytes_candidate = int_to_bytes(flag_candidate)
```
Finally, decode:
```python
try:
    potential_flag = flag_bytes_candidate.decode('ascii')
    if (potential_flag.startswith('AIS3{') and 
        potential_flag.endswith('}') and 
        potential_flag.isprintable()):
        print(f"[Success] Found AIS3 flag, offset: {offset}")
        print(f"Candidate rand_num: {hex(rand_num_candidate)}")
        print(f"Flag bytes: {flag_bytes_candidate}")
        print(f"Decryption result: {potential_flag}")
        found_flag = True
        break
except UnicodeDecodeError:
    continue
except Exception as e:
    print(f"Error at offset {offset}: {e}")

if not found_flag:
    print(f"\nNo valid flag found in range [{-search_width}, {search_width}]")
    print("Try increasing search_width or check encryption assumptions")
```
Running this, I obtained the flag:

![](/img/ais3/more_junks...plz}
```

## Hill

The system uses two matrices A and B:

- First block: c₀ = A × m₀
- Subsequent blocks: cᵢ = A × mᵢ + B × mᵢ₋₁

### **Approach**

(The server only allows one `input()`.)  
I needed a special input sequence to recover both matrices A and B. I used standard basis vectors:
```payload = [e₀, 0, e₁, 0, e₂, 0, ..., e₇, 0]```

When the server processes this payload:
- c₀ = A × e₀ → get column 0 of A
- c₁ = A × 0 + B × e₀ → get column 0 of B
- c₂ = A × e₁ → get column 1 of A
- and so on...

Recovering A and B, calculating the inverse of A, I then decrypted the target FLAG.

### **Attack**

```python
# ... (script omitted for brevity)
```

After execution, I got:

![](/img/ais3/FLAG451c_h1ll_c1ph3r_15_2_3z_f0r_u5}```

## Happy Happy Factoring

This was a classic multi-algorithm attack:
- wi: Williams' p+1 method
- po: Pollard's p-1 method
- fp, fq: Fermat's factorization

First, use Pollard's p-1 to find po, remove po², then use Williams' p+1 to find wi, and finally use Fermat for the remaining part.

After obtaining all factors, calculate Euler's totient and decrypt.

```python
# ... (script omitted for brevity)
```

![](/imgielded the flag:
`AIS3{H@ppY_#ap9y_CRypT0_F4(7or1n&~~~}`

# Conclusion

I'm glad your eyes survived reading this far.  
But there's nothing more below, so see you next time(?)