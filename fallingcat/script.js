document.addEventListener("DOMContentLoaded", function () {
  console.log("[debug] DOMContentLoaded");

  const P3_TEXT = `我們相遇其實很奇妙:)，我也不知道該怎麼說，就是當下很心疼一個女孩，我就一開始想，我能多幫她就多幫點，但是到後面我開始慢慢喜歡那個女孩，或許是因為跟我的個性的相似度，我覺得她才能懂我

老樣子，你不管什麼都很可愛、漂亮，不管別人怎麼說怎麼看，在我眼裡就是最好看的

手鍊是我研究好配色給你的，裡面的水晶有安宮的功用，希望你肚子能舒緩點，止痛藥呢少吃，但是真的真的頭有偏頭痛很不舒服，來找我!!!眼線筆你加油練習，希望你下次能練出成果

-# by the way，如果能打給我就更好了
祝 生日快樂
by 謝淙崴`;

  const intro = document.getElementById("intro");
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const page3 = document.getElementById("page3");
  const msg = document.getElementById("msg");
  const heart = document.getElementById("heart-container");
  const balloonsDiv = document.getElementById("balloons");
  const bgm = document.getElementById("bgm");
  const acceptBtn = document.getElementById("acceptBtn");
  const nextBtn = document.getElementById("next1");
  const yesBtn = document.getElementById("next2");

  if (!page1 || !page2 || !page3) {
    console.error("[error] page1/page2/page3 not found", {
      page1,
      page2,
      page3,
    });
  }
  if (!balloonsDiv) console.error("[error] balloons container not found");

  // 預設顯示 Intro
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  if (intro) intro.classList.add("active");

  /* ===================== Decor: Intro sparkles (existing) ===================== */
  (function setupIntroSparkles() {
    if (!intro) return;
    let container = document.createElement("div");
    container.className = "intro-sparkles";
    intro.appendChild(container);

    const COUNT = 28;
    for (let i = 0; i < COUNT; i++) {
      const s = document.createElement("div");
      s.className = "sparkle";
      if (i % 7 === 0) s.classList.add("big");
      const left = Math.random() * 100;
      const top = 20 + Math.random() * 60;
      const scale = 0.6 + Math.random() * 0.9;
      const delay = Math.random() * 4;
      const dur = 3.2 + Math.random() * 2.8;
      s.style.left = left + "%";
      s.style.top = top + "%";
      s.style.width = Math.max(4, 6 * scale) + "px";
      s.style.height = Math.max(4, 6 * scale) + "px";
      s.style.animationDelay = -delay + "s";
      s.style.animationDuration = dur + "s";
      s.style.opacity = 0;
      container.appendChild(s);
    }
    intro._sparkleContainer = container;
  })();

  /* ===================== Decor: P1 bokeh + dots ===================== */
  (function setupP1Decor() {
    if (!page1) return;
    const container = document.createElement("div");
    container.className = "page1-decor";
    // bokeh blobs
    const b1 = document.createElement("div");
    b1.className = "bokeh small";
    container.appendChild(b1);
    const b2 = document.createElement("div");
    b2.className = "bokeh mid";
    container.appendChild(b2);
    const b3 = document.createElement("div");
    b3.className = "bokeh big";
    container.appendChild(b3);
    // dots
    for (let i = 0; i < 10; i++) {
      const d = document.createElement("div");
      d.className = "dot";
      d.style.left = 5 + Math.random() * 90 + "%";
      d.style.bottom = 5 + Math.random() * 70 + "%";
      d.style.animationDelay = -Math.random() * 6 + "s";
      d.style.animationDuration = 4 + Math.random() * 6 + "s";
      d.style.opacity = 0;
      d.style.transform = "translateY(0)";
      container.appendChild(d);
    }
    page1._decorContainer = container;
    page1.appendChild(container);
  })();

  /* ===================== Decor: P2 paper + petals ===================== */
  (function setupP2Decor() {
    if (!page2) return;
    const container = document.createElement("div");
    container.className = "page2-decor";

    const grain = document.createElement("div");
    grain.className = "paper-grain";
    container.appendChild(grain);

    // 花瓣特效
    const PETAL_COUNT = 12;
    for (let i = 0; i < PETAL_COUNT; i++) {
      const p = document.createElement("div");
      p.className = "petal";
      p.style.left = 5 + Math.random() * 90 + "%";
      p.style.top = -10 - Math.random() * 20 + "%";
      p.style.animationDelay = Math.random() * 4 + "s";
      p.style.animationDuration = 5 + Math.random() * 6 + "s";
      const scale = 0.8 + Math.random() * 0.8;
      p.style.transform = `scale(${scale}) rotate(${
        Math.random() * 40 - 20
      }deg)`;
      container.appendChild(p);
    }

    // 圖片泡泡特效
    const imageUrls = [
      "img/page1.jpg",
      "img/page2.jpg",
      "img/page3.jpg",
      "img/page4.jpg",
      "img/page5.jpg",
      "img/page6.jpg",
      "img/page7.jpg",
      "img/page8.jpg",
      "img/page9.jpg",
      "img/page10.jpg",
      "img/page11.jpg",
      "img/page12.jpg",
      "img/page13.jpg",
      "img/page14.jpg",
      "img/page15.jpg",
      "img/page16.jpg",
      "img/page17.jpg",
      "img/page18.jpg",
    ];

    function spawnBubbles() {
      const BUBBLE_COUNT = 2 + Math.floor(Math.random() * 2);
      const chosen = imageUrls
        .slice()
        .sort(() => 0.5 - Math.random())
        .slice(0, BUBBLE_COUNT);
      chosen.forEach((url) => {
        const img = document.createElement("img");
        img.className = "bubble";
        img.src = url;
        const size = 40 + Math.random() * 40;
        img.style.width = size + "px";
        img.style.height = size + "px";
        img.style.left = 5 + Math.random() * 90 + "%";
        img.style.bottom = "-" + (20 + Math.random() * 100) + "px";
        img.style.animationDelay = "0s";
        img.style.animationDuration = 8 + Math.random() * 4 + "s";
        container.appendChild(img);
      });
    }

    // 持續生成泡泡直到切換頁面
    let bubbleInterval = setInterval(() => {
      if (document.body.classList.contains("page3-active")) {
        clearInterval(bubbleInterval);
      } else {
        spawnBubbles();
      }
    }, 2400);

    page2._decorContainer = container;
    page2.appendChild(container);
  })();

  /* ===================== Decor: P3 hearts ===================== */
  (function setupP3Decor() {
    if (!page3) return;
    const container = document.getElementsByClassName("page3-decor")[0];

    const HEART_COUNT = 12;
    for (let i = 0; i < HEART_COUNT; i++) {
      const h = document.createElement("div");
      h.className = "heart";
      h.style.left = 5 + Math.random() * 90 + "%";
      h.style.bottom = 5 + Math.random() * 20 + "%";
      h.style.animationDelay = -Math.random() * 6 + "s";
      h.style.animationDuration = 4 + Math.random() * 5 + "s";
      const s = 0.7 + Math.random() * 0.9;
      h.style.transform = ` rotate(45deg) scale(${s})`;
      container.appendChild(h);
    }
    page3._decorContainer = container;
    page3.appendChild(container);
  })();

  /* ===================== Balloons init (unchanged logic) ===================== */
  function initBalloons() {
    if (balloonsDiv.dataset.inited === "1") {
      console.log("[debug] balloons already inited");
      return;
    }
    balloonsDiv.dataset.inited = "1";
    try {
      balloonsDiv.innerHTML = "";
      if (
        typeof window !== "undefined" &&
        typeof window.balloons === "function"
      ) {
        try {
          window.balloons(balloonsDiv, {
            count: 8,
            size: 48,
            colors: ["#ff6bcb", "#7a5cff", "#ffd166", "#ff9a9e"],
            emojis: ["🎈"],
          });
          console.log("[debug] window.balloons() called for P1");
        } catch (err) {
          console.error("[error] window.balloons() threw", err);
          createManualBalloons();
        }
      } else {
        const esmUrl = "https://unpkg.com/balloons-js/dist/index.esm.js";
        try {
          import(esmUrl)
            .then((mod) => {
              if (mod && typeof mod.balloons === "function") {
                try {
                  mod.balloons(balloonsDiv, {
                    count: 8,
                    size: 48,
                    colors: ["#ff6bcb", "#7a5cff", "#ffd166", "#ff9a9e"],
                    emojis: ["🎈"],
                  });
                  console.log("[debug] imported ESM balloons and invoked");
                } catch (err) {
                  console.error("[error] mod.balloons() threw", err);
                  createManualBalloons();
                }
              } else if (mod && typeof mod.default === "function") {
                try {
                  mod.default(balloonsDiv);
                  console.log("[debug] imported default export and invoked");
                } catch (err) {
                  console.error("[error] default() threw", err);
                  createManualBalloons();
                }
              } else {
                console.warn(
                  "[warn] ESM module loaded but balloons export not found"
                );
                createManualBalloons();
              }
            })
            .catch((err) => {
              console.warn("[warn] dynamic import failed", err);
              createManualBalloons();
            });
        } catch (err) {
          console.warn("[warn] dynamic import not supported or failed", err);
          createManualBalloons();
        }
      }
    } catch (e) {
      console.error("[error] creating balloons", e);
    }
  }
  function createManualBalloons() {
    try {
      for (let i = 0; i < 8; i++) {
        const b = document.createElement("div");
        b.className = "balloon";
        b.dataset.i = String(i);
        b.style.left = `${6 + i * 11}%`;
        b.style.bottom = `${6 + (i % 3) * 4}%`;
        b.textContent = "🎈";
        balloonsDiv.appendChild(b);
      }
      console.log("[debug] manual balloons created");
    } catch (err) {
      console.error("[error] manual createBalloons failed", err);
    }
  }

  /* ===================== Page switching & cleanup ===================== */
  function showPage(current, next) {
    if (!current || !next) {
      console.warn("[warn] showPage missing element", { current, next });
      return;
    }
    // remove active from all, then add to next
    document
      .querySelectorAll(".page")
      .forEach((p) => p.classList.remove("active"));
    requestAnimationFrame(() => next.classList.add("active"));
    // cleanup decorations of previous page after short delay (to keep transition smooth)
    setTimeout(() => {
      try {
        if (current && current._decorContainer && current !== intro) {
          current._decorContainer.remove();
          current._decorContainer = null;
        }
        // intro sparkles handled separately (intro._sparkleContainer removed on accept)
      } catch (e) {
        console.warn("[warn] cleanup decor failed", e);
      }
    }, 700);
    console.log(`[debug] switched to ${next.id}`);
  }

  const next1 = document.getElementById("next1");
  const next2 = document.getElementById("next2");

  if (next1) {
    next1.addEventListener("click", () => {
      showPage(page1, page2);
      bgm
        .play()
        .then(() => {
          console.log("[debug] bgm playing");
        })
        .catch((err) => {
          console.log("[debug] bgm play blocked or requires interaction", err);
        });
    });
  } else {
    console.warn("[warn] next1 button not found");
  }

  if (next2) {
    next2.addEventListener("click", () => {
      showPage(page2, page3);
      startTyping();
    });
  } else {
    console.warn("[warn] next2 button not found");
  }

  function startTyping() {
    if (!msg) {
      console.warn("[warn] msg element not found");
      return;
    }
    msg.textContent = "";
    heart.style.display = "none";
    const lines = P3_TEXT.split("\n");
    let lineIndex = 0,
      charIndex = 0;
    function typeNext() {
      if (lineIndex >= lines.length) {
        heart.style.display = "flex";
        return;
      }
      const line = lines[lineIndex];
      if (charIndex < line.length) {
        msg.textContent += line[charIndex];
        charIndex++;
        setTimeout(typeNext, 45);
      } else {
        lineIndex++;
        charIndex = 0;
        if (lineIndex < lines.length) msg.textContent += "\n";
        setTimeout(typeNext, 60);
      }
      requestAnimationFrame(() => {
        msg.scrollTo({ top: msg.scrollHeight, behavior: "smooth" });
      });
    }
    typeNext();
  }

  /* ===================== Ripples for multiple buttons (unchanged) ===================== */
  (function attachRipplesToButtons() {
    const buttons = [];
    if (acceptBtn) buttons.push(acceptBtn);
    if (nextBtn) buttons.push(nextBtn);
    if (yesBtn) buttons.push(yesBtn);

    buttons.forEach((button) => {
      button.addEventListener(
        "click",
        function (ev) {
          const rect = button.getBoundingClientRect();
          const ripple = document.createElement("span");
          ripple.className = "ripple";
          const x = ev.clientX - rect.left;
          const y = ev.clientY - rect.top;
          const maxDim = Math.max(rect.width, rect.height);
          const size = maxDim * 1.4;
          ripple.style.width = ripple.style.height = size + "px";
          ripple.style.left = x - size / 2 + "px";
          ripple.style.top = y - size / 2 + "px";
          button.appendChild(ripple);
          setTimeout(() => {
            try {
              ripple.remove();
            } catch (e) {
              ripple.style.display = "none";
            }
          }, 700);
        },
        { passive: true }
      );
    });
  })();

  /* ===================== Intro accept button handler (keep original behavior) ===================== */
  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
      // 切到 P1 並初始化氣球
      setTimeout(() => {
        showPage(intro, page1);
        initBalloons();
      }, 900);

      // 移除 sparkles（如果存在），給短暫過渡效果
      try {
        const container = intro && intro._sparkleContainer;
        if (container) {
          setTimeout(() => {
            try {
              container.remove();
            } catch (e) {
              container.style.display = "none";
            }
          }, 600);
        }
      } catch (e) {
        console.warn("[warn] remove sparkles failed", e);
      }
    });
  } else {
    console.warn("[warn] acceptBtn not found");
  }
});
