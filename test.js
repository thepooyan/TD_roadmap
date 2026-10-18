/*
      Interactive demo. Production integration notes:
      - Confirm all course descriptions and replace null link URLs with validated URLs.
      - Render the complete roadmap content server-side for crawlability. This prototype only has a noscript fallback.
      - Progress is SELF-REPORTED, stored only in the current browser via localStorage. No user profile or analytics backend.
      - The diagnostic is deterministic rules, NOT a generative AI model or a validated skills exam.
    */
const givenLinks = {
  csharp:
    "https://www.tahlildadeh.com/CourseDetails/114/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B3%DB%8C-%D8%B4%D8%A7%D8%B1%D9%BE.aspx",
  advanced:
    "https://www.tahlildadeh.com/CourseDetails/1158/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B4%DB%8C-%DA%AF%D8%B1%D8%A7%DB%8C%DB%8C.aspx",
};
const courses = {
  foundations: {
    title: "مبانی برنامه‌نویسی",
    sub: "یاد بگیر چطور مسئله رو به الگوریتم تبدیل کنی",
    desc: "از منطق برنامه‌نویسی، الگوریتم، شرط و حلقه شروع کن تا کد برات فقط حفظ کردن دستورها نباشه.",
    skills: [
      "الگوریتم و فلوچارت",
      "شرط و حلقه",
      "مبانی JavaScript",
      "حل مسئله",
    ],
    output:
      "چند برنامه کوچک تعاملی که ورودی می‌گیرن، تصمیم می‌گیرن و داده رو ذخیره می‌کنن.",
    prereq: "بدون پیش‌نیاز",
    link: null,
  },
  web: {
    title: "طراحی سایت",
    sub: "صفحه‌های واکنش‌گرا بساز",
    desc: "ساختار صفحه، استایل و تعامل در مرورگر رو یاد بگیر تا برای مرحله‌های توسعه وب پایه داشته باشی.",
    skills: ["HTML", "CSS", "Responsive Design", "JavaScript"],
    output: "یک وب‌سایت واکنش‌گرا با چند تعامل کاربردی.",
    prereq: "مبانی برنامه‌نویسی یا مهارت معادل",
    link: null,
  },
  sql: {
    title: "SQL Server",
    sub: "داده رو درست مدل‌سازی و بازیابی کن",
    desc: "برای بک‌اند جدی، دیتابیس رابطه‌ای، کوئری، تراکنش و تحلیل عملکرد ضروریه.",
    skills: [
      "مدل‌سازی رابطه‌ای",
      "T-SQL",
      "JOIN و Query",
      "Index و Performance",
    ],
    output: "طراحی پایگاه داده یک سامانه واقعی همراه با کوئری‌های قابل‌بررسی.",
    prereq: "آشنایی اولیه با منطق برنامه‌نویسی و داده",
    link: null,
  },
  csharp: {
    title: "C# و ASP.NET Core پروژه‌محور",
    sub: "از کد تا ساخت و انتشار بک‌اند",
    desc: "مفاهیم C#، طراحی API و اتصال به دیتابیس رو روی پروژه واقعی اجرا کن.",
    skills: [
      "C# و OOP",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "JWT و انتشار",
    ],
    output:
      "فروشگاه تحت هدایت مدرس و سامانه آگهی مستقل؛ از مدل و دیتابیس تا API و انتشار.",
    prereq: "مبانی برنامه‌نویسی، طراحی وب و SQL یا مهارت معادل",
    link: givenLinks.csharp,
  },
  advanced: {
    title: "C# پیشرفته، Design Patterns و Clean Architecture",
    sub: "ساختاردهی مهندسی پروژه‌های پیچیده‌تر",
    desc: "طراحی قابل‌تست، مرزبندی مسئولیت‌ها و تصمیم‌گیری آگاهانه در معماری کد رو تمرین کن.",
    skills: ["Advanced C#", "Design Patterns", "Clean Architecture", "Testing"],
    output: "پیاده‌سازی و بازنگری معماری یک پروژه چندلایه با تحویل و ارزیابی.",
    prereq: "توانایی ساخت مستقل API با C# و دیتابیس",
    link: givenLinks.advanced,
  },
  pro: {
    title: "ASP.NET Core حرفه‌ای با AI، امنیت و CI/CD",
    sub: "ساخت، ایمن‌سازی و تحویل نرم‌افزار حرفه‌ای",
    desc: "یک سیستم واقعی رو با نگاه به امنیت، فرایند انتشار و ابزارهای AI توسعه بده.",
    skills: ["امنیت کاربردی", "CI/CD", "DevOps و Docker", "AI در فرایند توسعه"],
    output: "یک سامانه حرفه‌ای با مسیر توسعه، تست و انتشار قابل‌تکرار.",
    prereq: "تسلط عملی بر ASP.NET Core و اصول معماری",
    link: null,
  },
  react: {
    title: "React و Next.js",
    sub: "رابط کاربری مدرن و داده‌محور",
    desc: "از کامپوننت‌های قابل‌استفاده مجدد تا رندر و مدیریت داده در یک اپلیکیشن واقعی.",
    skills: [
      "React",
      "Components & State",
      "Next.js",
      "Routing و Data Fetching",
    ],
    output: "یک وب‌اپلیکیشن چندصفحه‌ای داده‌محور و واکنش‌گرا.",
    prereq: "HTML، CSS و JavaScript در حد ساخت مستقل صفحه",
    link: null,
  },
  python: {
    title: "پایتون جامع",
    sub: "زبان، منطق و ابزارهای پایه",
    desc: "کدنویسی، توابع، ساختار داده، فایل و پایگاه داده رو با تمرین و پروژه یاد بگیر.",
    skills: ["Python", "توابع و ماژول‌ها", "JSON/CSV", "SQLite"],
    output: "چند ابزار کاربردی برای مدیریت داده و کارهای تکراری.",
    prereq: "بدون پیش‌نیاز",
    link: null,
  },
  mldl: {
    title: "یادگیری ماشین و یادگیری عمیق",
    sub: "از داده خام تا مدل قابل‌ارزیابی",
    desc: "تمیزسازی داده، آموزش مدل و سنجش نتیجه رو جدا از نمایش‌های تبلیغاتی تمرین کن.",
    skills: [
      "Data Preparation",
      "Machine Learning",
      "Deep Learning",
      "Evaluation Metrics",
    ],
    output:
      "ساخت و ارزیابی یک مدل روی داده واقعی با گزارش معیارها و محدودیت‌ها.",
    prereq: "پایتون عملی و ریاضی موردنیاز مدل‌سازی",
    link: null,
  },
  llm: {
    title: "مهندسی LLM، RAG و هوش مصنوعی مولد",
    sub: "ساخت محصول مبتنی بر مدل زبانی",
    desc: "مدل‌های زبانی رو به داده معتبر، بازیابی و ارزیابی وصل کن تا محصول قابل‌کنترل بسازی.",
    skills: ["LLM Integration", "Embeddings", "RAG", "Evaluation و Guardrails"],
    output: "دستیار پاسخ‌گو به اسناد با ارجاع به منبع، ارزیابی خطا و هزینه.",
    prereq: "پایتون و مفاهیم پایه مدل‌های هوش مصنوعی",
    link: null,
  },
};
const paths = {
  backend: {
    title: "نقشه راه بک‌اند با دات‌نت",
    sub: "از پایه برنامه‌نویسی تا توسعه نرم‌افزار سمت سرور",
    color: "#2563eb",
    soft: "#edf3ff",
    light: "#dce8ff",
    icon: "▣",
    steps: ["foundations", "web", "sql", "csharp", "advanced", "pro"],
  },
  frontend: {
    title: "نقشه راه فرانت‌اند",
    sub: "از طراحی صفحه تا ساخت اپلیکیشن با React و Next.js",
    color: "#078b82",
    soft: "#e9f8f4",
    light: "#ccf1e9",
    icon: "▤",
    steps: ["foundations", "web", "react"],
  },
  ai: {
    title: "نقشه راه هوش مصنوعی",
    sub: "از پایتون تا ML، DL و مهندسی LLM",
    color: "#8154d9",
    soft: "#f3efff",
    light: "#e8dcff",
    icon: "✳",
    steps: ["python", "mldl", "llm"],
  },
};
const state = {
  path: "backend",
  step: 0,
  answers: { goal: null, base: null, built: null },
};
const $ = (s) => document.querySelector(s);
function loadProgress() {
  try {
    return JSON.parse(
      localStorage.getItem("tahlildadeh-roadmap-progress-v1") || "{}",
    );
  } catch (_) {
    return {};
  }
}
let done = loadProgress();
function saveProgress() {
  try {
    localStorage.setItem(
      "tahlildadeh-roadmap-progress-v1",
      JSON.stringify(done),
    );
  } catch (_) {}
}
function escapeHtml(s) {
  return String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}
function showToast(text) {
  const t = $("#toast");
  t.textContent = text;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2700);
}
function selectPath(name, step = 0, scroll = false) {
  if (!paths[name]) return;
  state.path = name;
  state.step = Math.max(0, Math.min(step, paths[name].steps.length - 1));
  const p = paths[name];
  document.documentElement.style.setProperty("--accent", p.color);
  document.documentElement.style.setProperty("--accentSoft", p.soft);
  document.documentElement.style.setProperty("--accentLight", p.light);
  document
    .querySelectorAll("[data-path]")
    .forEach((x) =>
      x.setAttribute("aria-pressed", String(x.dataset.path === name)),
    );
  $("#pathNumber").textContent =
    "مسیر " + { backend: "اول", frontend: "دوم", ai: "سوم" }[name] + " از ۳";
  $("#roadmapTitle").textContent = p.title;
  $("#roadmapSub").textContent = p.sub;
  render();
  try {
    const u = new URL(location.href);
    u.searchParams.set("path", name);
    history.replaceState(null, "", u.toString());
  } catch (_) {}
  if (scroll)
    $("#roadmap").scrollIntoView({ behavior: "smooth", block: "start" });
}
function render() {
  let p = paths[state.path];
  $("#stageList").innerHTML = p.steps
    .map((id, i) => {
      const c = courses[id],
        selected = i === state.step,
        isDone = !!done[id];
      return `<button class="step ${selected ? "selected" : ""} ${isDone ? "done" : ""}" data-step="${i}" type="button" aria-current="${selected ? "step" : "false"}"><span class="step-num">${isDone ? "✓" : ("0" + (i + 1)).slice(-2)}</span><span class="step-text"><span class="step-title">${escapeHtml(c.title)}</span><span class="step-subtitle">${escapeHtml(c.sub)}</span></span><span class="step-arrow" aria-hidden="true">‹</span></button>`;
    })
    .join("");
  let c = courses[p.steps[state.step]];
  let link = c.link
    ? `<a class="primary-btn" href="${c.link}" target="_blank" rel="noopener noreferrer" id="courseLink">مشاهده صفحه این دوره ↗</a>`
    : `<a class="primary-btn" href="tel:09039737027" id="courseLink">مشاوره درباره این مرحله ↗</a>`;
  $("#stageDetail").innerHTML =
    `<div class="detail-overline"><span class="pill">مرحله ${state.step + 1} از ${p.steps.length}</span> ${done[p.steps[state.step]] ? "✓ مهارت تأییدشده توسط خودت" : "مسیر پیشنهادی"}</div><h3>${escapeHtml(c.title)}</h3><p class="detail-desc">${escapeHtml(c.desc)}</p><h4 class="feature-title">مهارت‌های اصلی این مرحله</h4><div class="tag-list">${c.skills.map((s) => `<span class="tag">${escapeHtml(s)}</span>`).join("")}</div><h4 class="feature-title">خروجی عملی پیشنهادی</h4><div class="outcome"><span class="outcome-icon" aria-hidden="true">▧</span><div><strong>در پایان، چه چیزی می‌تونی بسازی؟</strong><p>${escapeHtml(c.output)}</p></div></div><p class="prereq"><strong>پیش‌نیاز:</strong> ${escapeHtml(c.prereq)}</p><label class="selfcheck"><input type="checkbox" id="selfCheck" ${done[p.steps[state.step]] ? "checked" : ""}><span>می‌تونم خروجی این مرحله رو مستقل بسازم</span></label><span class="footnote">این تیک فقط خودارزیابیه؛ به معنی گذراندن دوره یا تأیید مدرس نیست.</span><div class="detail-actions">${link}<button type="button" class="link-btn" id="nextStage" ${state.step === p.steps.length - 1 ? "disabled" : ""}>مرحله بعد ←</button></div>`;
  let count = p.steps.filter((id) => done[id]).length;
  $("#progressCount").textContent = `${count} از ${p.steps.length}`;
  $("#progressFill").style.width = (count / p.steps.length) * 100 + "%";
  $("#progressMeter").setAttribute(
    "aria-valuenow",
    Math.round((count / p.steps.length) * 100),
  );
  $("#selfCheck").addEventListener("change", (e) => {
    done[p.steps[state.step]] = e.target.checked;
    saveProgress();
    render();
    showToast(
      e.target.checked
        ? "این مهارت در خودارزیابی ثبت شد."
        : "خودارزیابی این مرحله برداشته شد.",
    );
  });
  $("#nextStage").addEventListener("click", () => {
    if (state.step < p.steps.length - 1) {
      state.step++;
      render();
      if (matchMedia("(max-width:660px)").matches)
        $("#stageDetail").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }
  });
}
document
  .querySelectorAll("[data-path]")
  .forEach((b) =>
    b.addEventListener("click", () => selectPath(b.dataset.path, 0, true)),
  );
$("#stageList").addEventListener("click", (e) => {
  const b = e.target.closest("[data-step]");
  if (b) {
    state.step = Number(b.dataset.step);
    render();
    if (matchMedia("(max-width:660px)").matches)
      $("#stageDetail").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
$("#sharePath").addEventListener("click", async () => {
  let url = new URL(location.href);
  url.searchParams.set("path", state.path);
  if (navigator.share) {
    try {
      await navigator.share({
        title: paths[state.path].title,
        url: url.toString(),
      });
      return;
    } catch (_) {}
  }
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(url.toString());
      showToast("لینک همین مسیر کپی شد.");
      return;
    } catch (_) {}
  }
  showToast("لینک این مسیر در نوار آدرس صفحه قرار داره.");
});
const modal = $("#diagnosticModal"),
  panel = $("#modalPanel");
function openDialog() {
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  panel.focus();
}
function closeDialog() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
  $("#openDiagnostic").focus();
}
$("#openDiagnostic").addEventListener("click", openDialog);
$("#openDiagnosticBottom").addEventListener("click", openDialog);
$("#closeDiagnostic").addEventListener("click", closeDialog);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeDialog();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeDialog();
});
modal.addEventListener("click", (e) => {
  const b = e.target.closest("[data-q]");
  if (!b) return;
  state.answers[b.dataset.q] = b.dataset.value;
  modal
    .querySelectorAll('[data-q="' + b.dataset.q + '"]')
    .forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
  $("#runDiagnostic").disabled = !Object.values(state.answers).every(Boolean);
  $("#diagnosticResult").classList.remove("show");
});
$("#runDiagnostic").addEventListener("click", () => {
  const a = state.answers;
  let path = a.goal,
    step = 0,
    reason = "";
  if (path === "unsure") {
    path =
      a.base === "python"
        ? "ai"
        : a.base === "csharp"
          ? "backend"
          : a.base === "web"
            ? "frontend"
            : "backend";
    reason =
      "چون هنوز هدفت مشخص نیست، این مسیر فقط برای بررسی اولیه نمایش داده می‌شه؛ سه مسیر رو با هم مقایسه کن یا مشاوره بگیر.";
  }
  if (path === "backend") {
    step =
      a.built === "yes" && a.base === "csharp"
        ? 3
        : a.built === "yes" && a.base === "web"
          ? 2
          : 0;
  } else if (path === "frontend") {
    step = a.built === "yes" && a.base === "web" ? 2 : 0;
  } else if (path === "ai") {
    step = a.built === "yes" && a.base === "python" ? 1 : 0;
  }
  const c = courses[paths[path].steps[step]];
  const msg =
    reason ||
    "با توجه به هدفت و تجربه‌ای که خودت اعلام کردی، پیشنهاد اولیه اینه که توانایی انجام خروجی این مرحله رو ارزیابی کنی.";
  $("#diagnosticResult").innerHTML =
    `<strong>پیشنهاد اولیه: ${escapeHtml(c.title)}</strong><p>${escapeHtml(msg)} مهارت‌های قبلی رو بدون نمونه‌کار واقعی معادل گذراندن دوره فرض نکن.</p><button class="primary-btn" type="button" id="goSuggested">نمایش این مرحله در نقشه ←</button>`;
  $("#diagnosticResult").classList.add("show");
  $("#goSuggested").addEventListener("click", () => {
    closeDialog();
    selectPath(path, step, true);
  });
});
const query = new URLSearchParams(location.search).get("path");
selectPath(paths[query] ? query : "backend");
