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
    link: null,
  },
  advanced: {
    title: "C# پیشرفته، Design Patterns و Clean Architecture",
    sub: "ساختاردهی مهندسی پروژه‌های پیچیده‌تر",
    desc: "طراحی قابل‌تست، مرزبندی مسئولیت‌ها و تصمیم‌گیری آگاهانه در معماری کد رو تمرین کن.",
    skills: ["Advanced C#", "Design Patterns", "Clean Architecture", "Testing"],
    output: "پیاده‌سازی و بازنگری معماری یک پروژه چندلایه با تحویل و ارزیابی.",
    prereq: "توانایی ساخت مستقل API با C# و دیتابیس",
    link: null,
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
const shell = document.getElementById("roadmap_shell");
const shell_steps = shell.querySelector("#stageList");
const shell_title = shell.querySelector("#detail-title")
const shell_desc = shell.querySelector("#detail-desc")
const shell_link = shell.querySelector("#detail-link")
const shell_output = shell.querySelector("#detail-output")
const shell_prereq = shell.querySelector("#detail-prereq")
const shell_skills = shell.querySelector("#detail-skills")
const shell_step = shell.querySelector("#detail-step")
const shell_stepCount = shell.querySelector("#detail-stepCount")
const numberToPersian = (number) => {
    switch(number) {
        case 1:
            return "اول"
        case 2:
            return "دوم"
        case 3:
            return "سوم"
    }
}
const createStep = (data, index, step) => {
    const {title, sub, desc, skills, output, prereq, link} = data;
    const el = document.createElement("button");
    el.classList.add("step");
    if (index === 1) el.classList.add("selected")
    el.dataset.step = step;
    el.dataset.index = index;

    const span1 = document.createElement("span");
    span1.classList.add("step-num")
    span1.innerText = `0${index}`;
    el.appendChild(span1)

    const span2 = document.createElement("span");
    span2.classList.add("step-text")
        const titleEl = document.createElement("span")
        titleEl.classList.add("step-title");
        titleEl.innerText = title;
        span2.appendChild(titleEl)
        const subtitleEl = document.createElement("span")
        subtitleEl.classList.add("step-subtitle")
        subtitleEl.innerText = sub;
        span2.appendChild(subtitleEl)
    el.appendChild(span2)

    const span3 = document.createElement("span");
    span3.classList.add("step-arrow")
    span3.innerText = "‹";
    el.appendChild(span3)

    return el
}
const insertSkills = (skills, parent) => {
    parent.innerText = "";
    skills.forEach(s => {
        const span = document.createElement("span")
        span.innerText = s;
        parent.appendChild(span)
    })
}
const renderDetails = (data, index) => {
    const { desc, link, output, prereq, skills, title } = data
    shell_desc.innerText = desc;
    shell_title.innerText = title;
    shell_output.innerText = output;
    shell_prereq.innerText = prereq;
    shell_step.innerText = index;
    shell_link.setAttribute("href", link)
    insertSkills(skills, shell_skills);
} 
const step_click_event = (e) => {
    shell_steps.querySelector(".selected").classList.remove("selected");
    e.currentTarget.classList.add("selected");
    const targetStep = e.currentTarget.dataset.step;
    const index = e.currentTarget.dataset.index;
    const targetData = courses[targetStep]
    renderDetails(targetData, index)
}
shell_steps.querySelectorAll(".step").forEach(s => s.addEventListener("click", step_click_event));

const createSteps = (steps) => {
    const all = [] 
    steps.forEach((step, i) => {
        const data = courses[step];
        const el = createStep(data, i+1, step)
        el.addEventListener("click", step_click_event)
        all.push(el)
    })
    return all
}
const render = (path) => {
    const {color, sub, title, steps, order} = path
    shell.style.setProperty("--accent", `var(--color-${color})`)

    const shell_top = shell.querySelector(".shell-top")
    shell_top.querySelector("#pathNumber").innerText = `مسیر ${numberToPersian(order)} از 3 `;
    shell_top.querySelector("#roadmapTitle").innerText = title;
    shell_top.querySelector("#roadmapSub").innerText = sub;
    shell_stepCount.innerText = steps.length

    shell_steps.innerText = "";
    createSteps(steps).forEach(s => shell_steps.appendChild(s))
}

const cards = document.querySelectorAll(".path-card");
cards.forEach(card => {
    card.addEventListener("click", () => {
        cards.forEach(c => c.setAttribute("aria-pressed", false));
        card.setAttribute("aria-pressed", true);
        render(paths[card.dataset.path])
    })
})

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