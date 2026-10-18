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
    link: "https://tahlildadeh.com/coursedetails/123/%d8%a2%d9%85%d9%88%d8%b2%d8%b4-%d9%85%d9%86%d8%b7%d9%82-%d9%88-%d9%85%d9%82%d8%af%d9%85%d8%a7%d8%aa-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d9%87-%d9%86%d9%88%db%8c%d8%b3%db%8c.aspx",
  },
  web: {
    title: "طراحی سایت",
    sub: "صفحه‌های واکنش‌گرا بساز",
    desc: "ساختار صفحه، استایل و تعامل در مرورگر رو یاد بگیر تا برای مرحله‌های توسعه وب پایه داشته باشی.",
    skills: ["HTML", "CSS", "Responsive Design", "JavaScript"],
    output: "یک وب‌سایت واکنش‌گرا با چند تعامل کاربردی.",
    prereq: "مبانی برنامه‌نویسی یا مهارت معادل",
    link: "https://tahlildadeh.com/coursedetails/28/%d8%af%d9%88%d8%b1%d9%87-%d8%a2%d9%85%d9%88%d8%b2%d8%b4-%d8%b7%d8%b1%d8%a7%d8%ad%db%8c-%d8%b3%d8%a7%db%8c%d8%aa-web-design.aspx",
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
    link: "https://tahlildadeh.com/coursedetails/27/%d8%a2%d9%85%d9%88%d8%b2%d8%b4-sql-server.aspx",
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
    link: "https://tahlildadeh.com/coursedetails/114/%d8%a2%d9%85%d9%88%d8%b2%d8%b4-%d8%b3%db%8c-%d8%b4%d8%a7%d8%b1%d9%be.aspx",
  },
  advanced: {
    title: "C# پیشرفته، Design Patterns و Clean Architecture",
    sub: "ساختاردهی مهندسی پروژه‌های پیچیده‌تر",
    desc: "طراحی قابل‌تست، مرزبندی مسئولیت‌ها و تصمیم‌گیری آگاهانه در معماری کد رو تمرین کن.",
    skills: ["Advanced C#", "Design Patterns", "Clean Architecture", "Testing"],
    output: "پیاده‌سازی و بازنگری معماری یک پروژه چندلایه با تحویل و ارزیابی.",
    prereq: "توانایی ساخت مستقل API با C# و دیتابیس",
    link: "https://tahlildadeh.com/coursedetails/1158/%d8%a2%d9%85%d9%88%d8%b2%d8%b4-%d8%b4%db%8c-%da%af%d8%b1%d8%a7%db%8c%db%8c.aspx",
  },
  pro: {
    title: "ASP.NET Core حرفه‌ای با AI، امنیت و CI/CD",
    sub: "ساخت، ایمن‌سازی و تحویل نرم‌افزار حرفه‌ای",
    desc: "یک سیستم واقعی رو با نگاه به امنیت، فرایند انتشار و ابزارهای AI توسعه بده.",
    skills: ["امنیت کاربردی", "CI/CD", "DevOps و Docker", "AI در فرایند توسعه"],
    output: "یک سامانه حرفه‌ای با مسیر توسعه، تست و انتشار قابل‌تکرار.",
    prereq: "تسلط عملی بر ASP.NET Core و اصول معماری",
    link: "https://www.tahlildadeh.com/coursedetails/83/%d8%af%d9%88%d8%b1%d9%87-%d8%a2%d9%85%d9%88%d8%b2%d8%b4-mvc.aspx"
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
    link: "https://tahlildadeh.com/coursedetails/1166/%d8%af%d9%88%d8%b1%d9%87-%d8%a2%d9%85%d9%88%d8%b2%d8%b4-%d8%ac%d8%a7%d9%85%d8%b9-%da%a9%d8%a7%d8%b1%d8%a8%d8%b1%d8%af%db%8c-front-end.aspx",
  },
  python: {
    title: "پایتون جامع",
    sub: "زبان، منطق و ابزارهای پایه",
    desc: "کدنویسی، توابع، ساختار داده، فایل و پایگاه داده رو با تمرین و پروژه یاد بگیر.",
    skills: ["Python", "توابع و ماژول‌ها", "JSON/CSV", "SQLite"],
    output: "چند ابزار کاربردی برای مدیریت داده و کارهای تکراری.",
    prereq: "بدون پیش‌نیاز",
    link: "https://tahlildadeh.com/coursedetails/1165/%d8%af%d9%88%d8%b1%d9%87-%d8%a2%d9%85%d9%88%d8%b2%d8%b4%db%8c-%d9%be%d8%a7%db%8c%d8%aa%d9%88%d9%86.aspx",
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
    link: "https://www.tahlildadeh.com/coursedetails/1184/%d8%af%d9%88%d8%b1%d9%87-%d8%a2%d9%85%d9%88%d8%b2%d8%b4-%d8%af%d8%a7%d8%af%d9%87-%da%a9%d8%a7%d9%88%db%8c.aspx"
  },
  llm: {
    title: "مهندسی LLM، RAG و هوش مصنوعی مولد",
    sub: "ساخت محصول مبتنی بر مدل زبانی",
    desc: "مدل‌های زبانی رو به داده معتبر، بازیابی و ارزیابی وصل کن تا محصول قابل‌کنترل بسازی.",
    skills: ["LLM Integration", "Embeddings", "RAG", "Evaluation و Guardrails"],
    output: "دستیار پاسخ‌گو به اسناد با ارجاع به منبع، ارزیابی خطا و هزینه.",
    prereq: "پایتون و مفاهیم پایه مدل‌های هوش مصنوعی",
    link: "https://www.tahlildadeh.com/coursedetails/1220/llm-rag-generative-ai-course.aspx",
  },
};

const paths = {
  backend: {
    title: "نقشه راه بک‌اند با دات‌نت",
    sub: "از پایه برنامه‌نویسی تا توسعه نرم‌افزار سمت سرور",
    color: "back",
    steps: ["foundations", "web", "sql", "csharp", "advanced", "pro"],
    order: 1,
  },
  frontend: {
    title: "نقشه راه فرانت‌اند",
    sub: "از طراحی صفحه تا ساخت اپلیکیشن با React و Next.js",
    color: "front",
    steps: ["foundations", "web", "react"],
    order: 2,
  },
  ai: {
    title: "نقشه راه هوش مصنوعی",
    sub: "از پایتون تا ML، DL و مهندسی LLM",
    color: "ai",
    steps: ["python", "mldl", "llm"],
    order: 3,
  },
};

const shell = {
  root: document.getElementById("roadmap_shell"),
};

shell.top = {
  root: shell.root.querySelector(".shell-top"),
  pathNumber: shell.root.querySelector("#pathNumber"),
  title: shell.root.querySelector("#roadmapTitle"),
  sub: shell.root.querySelector("#roadmapSub"),
};

shell.steps = shell.root.querySelector("#stageList");

shell.details = {
  title: shell.root.querySelector("#detail-title"),
  desc: shell.root.querySelector("#detail-desc"),
  link: shell.root.querySelector("#detail-link"),
  output: shell.root.querySelector("#detail-output"),
  prereq: shell.root.querySelector("#detail-prereq"),
  skills: shell.root.querySelector("#detail-skills"),
  step: shell.root.querySelector("#detail-step"),
  stepCount: shell.root.querySelector("#detail-stepCount"),
  nextBtn: shell.root.querySelector("#nextStage")
};

const numberToPersian = (number) => {
  switch (number) {
    case 1:
      return "اول";
    case 2:
      return "دوم";
    case 3:
      return "سوم";
  }
};

const createStep = (data, index, step) => {
  const { title, sub } = data;
  const el = document.createElement("button");

  el.classList.add("step");

  if (index === 1) el.classList.add("selected");

  el.dataset.step = step;
  el.dataset.index = index;

  const span1 = document.createElement("span");
  span1.classList.add("step-num");
  span1.innerText = `0${index}`;
  el.appendChild(span1);

  const span2 = document.createElement("span");
  span2.classList.add("step-text");

  const titleEl = document.createElement("span");
  titleEl.classList.add("step-title");
  titleEl.innerText = title;
  span2.appendChild(titleEl);

  const subtitleEl = document.createElement("span");
  subtitleEl.classList.add("step-subtitle");
  subtitleEl.innerText = sub;
  span2.appendChild(subtitleEl);

  el.appendChild(span2);

  const span3 = document.createElement("span");
  span3.classList.add("step-arrow");
  span3.innerText = "‹";
  el.appendChild(span3);

  return el;
};

const insertSkills = (skills, parent) => {
  parent.innerText = "";

  skills.forEach((skill) => {
    const span = document.createElement("span");
    span.innerText = skill;
    parent.appendChild(span);
  });
};

const renderDetails = (data, index) => {
  const { desc, link, output, prereq, skills, title } = data;

  shell.details.desc.innerText = desc;
  shell.details.title.innerText = title;
  shell.details.output.innerText = output;
  shell.details.prereq.innerText = prereq;
  shell.details.step.innerText = index;
  shell.details.link.setAttribute("href", link ?? "#");

  insertSkills(skills, shell.details.skills);
};

const step_click_event = (e) => {
  const selected = shell.steps.querySelector(".selected");

  if (selected) {
    selected.classList.remove("selected");
  }

  e.currentTarget.classList.add("selected");

  const targetStep = e.currentTarget.dataset.step;
  const index = e.currentTarget.dataset.index;
  const targetData = courses[targetStep];

  renderDetails(targetData, index);
};

shell.steps.querySelectorAll(".step").forEach(s => s.addEventListener("click", step_click_event));
shell.details.nextBtn.addEventListener("click", () => {
  const selected = shell.steps.querySelector(".selected")
  const next = selected.nextElementSibling
  if (next) {
    next.click()
  }
})

const createSteps = (steps) => {
  const all = [];

  steps.forEach((step, i) => {
    const data = courses[step];
    const el = createStep(data, i + 1, step);

    el.addEventListener("click", step_click_event);
    all.push(el);
  });

  return all;
};

const render = (path) => {
  const { color, sub, title, steps, order } = path;

  shell.root.style.setProperty("--accent", `var(--color-${color})`);

  shell.top.pathNumber.innerText = `مسیر ${numberToPersian(order)} از 3`;
  shell.top.title.innerText = title;
  shell.top.sub.innerText = sub;

  shell.details.stepCount.innerText = steps.length;

  shell.steps.innerText = "";

  createSteps(steps).forEach((step) => {
    shell.steps.appendChild(step);
  });

  if (steps.length > 0) {
    renderDetails(courses[steps[0]], 1);
  }
};

const cards = document.querySelectorAll(".path-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.setAttribute("aria-pressed", false));
    card.setAttribute("aria-pressed", true);

    render(paths[card.dataset.path]);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    event.preventDefault();

    const top =
      target.getBoundingClientRect().top + window.scrollY - 100;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  });
});

// const stepsSection = document.querySelector("#stageList")
// if (stepsSection) {
//     const steps = stepsSection.querySelectorAll("button.step");
//     steps.forEach(step => {
//         step.addEventListener("click", () => {
//             steps.forEach(s => s.classList.remove("selected"));
//             step.classList.add("selected");
//         })
//     })
// }
