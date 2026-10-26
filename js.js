const loading_svg = `<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="3" r="0"><animate id="spinner_6RAU" begin="0;spinner_GErc.end-0.5s" attributeName="r" calcMode="spline" dur="0.6s" values="0;2;0" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="16.50" cy="4.21" r="0"><animate id="spinner_khXL" begin="spinner_6RAU.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="0;2;0" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="7.50" cy="4.21" r="0"><animate id="spinner_GErc" begin="spinner_JEaM.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="0;2;0" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="19.79" cy="7.50" r="0"><animate id="spinner_9orP" begin="spinner_khXL.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="0;2;0" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="4.21" cy="7.50" r="0"><animate id="spinner_JEaM" begin="spinner_RwRf.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="0;2;0" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="21.00" cy="12.00" r="0"><animate id="spinner_W8J5" begin="spinner_9orP.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="0;2;0" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="3.00" cy="12.00" r="0"><animate id="spinner_RwRf" begin="spinner_tByH.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="0;2;0" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="19.79" cy="16.50" r="0"><animate id="spinner_tedm" begin="spinner_W8J5.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="0;2;0" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="4.21" cy="16.50" r="0"><animate id="spinner_tByH" begin="spinner_c3Lr.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="0;2;0" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="16.50" cy="19.79" r="0"><animate id="spinner_QxRo" begin="spinner_tedm.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="0;2;0" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="7.50" cy="19.79" r="0"><animate id="spinner_c3Lr" begin="spinner_PW3C.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="0;2;0" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="12" cy="21" r="0"><animate id="spinner_PW3C" begin="spinner_QxRo.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="0;2;0" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle></svg>`;

const shell = {
  root: document.getElementById("roadmap_shell"),
};

// js for shell and path cards
if (shell.root) {
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
    nextBtn: shell.root.querySelector("#nextStage"),
    prevBtn: shell.root.querySelector("#prevStage")
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
  shell.details.prevBtn.addEventListener("click", () => {
    const selected = shell.steps.querySelector(".selected")
    const prev = selected.previousElementSibling
    if (prev) {
      prev.click()
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
}

//make all a href movements smooth
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

//js for questionnaire
const questionnaire = document.getElementById("roadmap_questionnaire");
if (questionnaire) {

  let currentStage = 1;

  const stages = {
    1: {
      title: "فرض کن قرار است در ساخت یک اپلیکیشن مشارکت کنی. دوست داری مسئول کدام بخش باشی؟",
      desc: "مورد مهم تر رو انتخاب کن.",
      questions: {
        frontend: "ظاهر اپلیکیشن، رنگ‌ها، دکمه‌ها و تجربه کاربر",
        backend: "منطق پشت اپلیکیشن؛ مثل ثبت‌نام، سفارش‌ها و اطلاعات کاربران",
        ai: "قابلیت‌های هوشمند؛ مثلاً یادگیری رفتار کاربر و ارائه پیشنهاد",
      }
    },
    2: {
      title: "کدام نتیجه بیشتر به تو حس رضایت می‌دهد؟",
      desc: "مورد مهم تر رو انتخاب کن.",
      questions: {
        frontend: "چیزی بسازم که دیگران آن را ببینند و با آن تعامل کنند",
        backend: "سیستمی بسازم که کارهای پیچیده را دقیق و بدون خطا انجام دهد",
        ai: "برنامه‌ای بسازم که بتواند یاد بگیرد، پیش‌بینی کند یا پیشنهاد بدهد",
      }
    },
    3: {
      title: "اگر قرار باشد یک مشکل واقعی را حل کنی، کدام را انتخاب می‌کنی؟",
      desc: "فرض کن هیچ محدودیتی در دانش و تجربه نداری.",
      questions: {
        frontend: "یک فروشگاه اینترنتی را ساده‌تر، زیباتر و کاربرپسندتر کنم",
        backend: "سیستم سفارش‌های فروشگاه را طوری بسازم که همه‌چیز درست ثبت و پردازش شود",
        ai: "سیستمی بسازم که براساس خریدهای قبلی، محصولات مناسب پیشنهاد دهد",
      }
    },
    4: {
      title: "اگر بخواهی یک پروژه شخصی بسازی، کدام ایده بیشتر هیجان‌زده‌ات می‌کند؟",
      desc: "پروژه‌ای را انتخاب کن که واقعاً دوست داری روی آن وقت بگذاری.",
      questions: {
        frontend: "ساخت یک وب‌سایت تعاملی با طراحی و انیمیشن‌های جذاب",
        backend: "ساخت سیستم مدیریت فروشگاه با کاربران، سفارش‌ها و پرداخت‌ها",
        ai: "ساخت یک ابزار هوشمند که تصاویر را تشخیص دهد یا به سؤالات پاسخ دهد",
      }
    }
  };
  const tieBreakers = {
    font_back: {
      title: "وقتی با یک برنامه که درست کار نمی‌کند روبه‌رو می‌شوی، ترجیح می‌دهی چه چیزی را بررسی کنی؟",
      desc: "فرض کن دانش لازم برای انجام هر دو کار را داری.",
      questions: {
        frontend: "بررسی کنم چرا کاربر نمی‌تواند به‌راحتی با صفحه کار کند یا نتیجه موردنظرش را ببیند",
        backend: "بررسی کنم اطلاعات در کدام مرحله اشتباه پردازش شده و چرا برنامه نتیجه درستی نمی‌دهد",
      }
    },
    font_ai: {
      title: "وقتی با یک مسئله جدید روبه‌رو می‌شوی، کدام روش برایت جذاب‌تر است؟",
      desc: "روشی را انتخاب کن که بیشتر دوست داری امتحان کنی.",
      questions: {
        frontend: "چند نمونه قابل مشاهده بسازم و با امتحان کردن آن‌ها به بهترین راه‌حل برسم",
        ai: "نمونه‌ها و داده‌های مختلف را بررسی کنم تا الگوهای پنهان و راه‌حل مناسب را پیدا کنم",
      }
    },
    back_ai: {
      title: "برای حل یک مسئله پیچیده، کدام روش را بیشتر می‌پسندی؟",
      desc: "فرض کن هر دو روش می‌توانند به نتیجه خوبی برسند.",
      questions: {
        backend: "قوانین و مراحل حل مسئله را مشخص کنم تا سیستم دقیقاً طبق آن‌ها عمل کند",
        ai: "از مثال‌ها و داده‌ها استفاده کنم تا سیستم الگوها را یاد بگیرد و برای موارد جدید نتیجه بدهد",
      }
    },
  };
  
  const stageCount = Object.keys(stages).length

  const singleResultDesc = "انتخاب‌های شما در خروجی و نوع کار، هر دو به این مسیر اشاره کردند."
  const resultLabels = {
    frontend: "فرانت اند",
    backend: "بک اند",
    ai: "هوش مصنوعی",
  } 
  const logicCourse = {
    title: "منطق و مقدمات برنامه نویسی",
    desc: "",
    link: "https://tahlildadeh.com/coursedetails/123/%d8%a2%d9%85%d9%88%d8%b2%d8%b4-%d9%85%d9%86%d8%b7%d9%82-%d9%88-%d9%85%d9%82%d8%af%d9%85%d8%a7%d8%aa-%d8%a8%d8%b1%d9%86%d8%a7%d9%85%d9%87-%d9%86%d9%88%db%8c%d8%b3%db%8c.aspx"
  };

  const firstStep = {
    frontend: {
      title: logicCourse.title,
      desc: "اولین دوره در مسیر آموزش فرانت‌اند",
      link: logicCourse.link
    },
    backend: {
      title: logicCourse.title,
      desc: "اولین دوره در مسیر آموزش بک‌اند",
      link: logicCourse.link
    },
    ai: {
      title: "پایتون جامع",
      desc: "اولین دوره در مسیر آموزشی هوش مصنوعی",
      link: "https://tahlildadeh.com/coursedetails/1165/%d8%af%d9%88%d8%b1%d9%87-%d8%a2%d9%85%d9%88%d8%b2%d8%b4%db%8c-%d9%be%d8%a7%db%8c%d8%aa%d9%88%d9%86.aspx"
    },
  }

  const resultBox = questionnaire.querySelector(".resultBox");
  const currentStageEl = questionnaire.querySelector(".js-currentStage");
  const resultBtns = questionnaire.querySelectorAll(".js-resultBtn")
  const reset = questionnaire.querySelector(".js-reset");
  const title = questionnaire.querySelector(".title");
  const desc = questionnaire.querySelector(".desc");
  const next = questionnaire.querySelector(".next");
  const questionsBox = questionnaire.querySelector(".options")
  const questions = questionsBox.querySelectorAll("button");

  const form = questionnaire.querySelector(".js-form");
  const formErrorsEl = questionnaire.querySelector(".js-formErrors");
  const formInputs = questionnaire.querySelectorAll(".js-form input");

  const consultSection = document.getElementById("roadmap_consult")
  const consult_title = consultSection.querySelector(".js-title");
  const consult_link = consultSection.querySelector(".js-link");
  const consult_desc = consultSection.querySelector(".js-desc");

  questions.forEach(Q => {
    Q.onclick = () => {
      questions.forEach(q => q.classList.remove("selected"))
      Q.classList.add("selected");
      checkToDisabledNext()
    }
  })
  const showResult = (titleText, descText, winners) => {
    title.innerText = titleText;
    desc.innerText = descText;
    resultBox.classList.remove("hidden")
    next.classList.add("hidden")
    questionsBox.classList.add("hidden")
    resultBtns.forEach(r => {
      if (winners.includes(r.dataset.target)) {
        r.classList.remove("hidden")
      } else {
        r.classList.add("hidden")
      }
    })
  }

  const sendFormData = async (name, last_name, phone) => {
    const formId = 13;

    const payload = {
      FormId: formId,
      SubmittedAt: new Date().toISOString(),
      FormFieldValues: [
        {
          FormFieldId: 33, // name
          FieldValue: name
        },
        {
          FormFieldId: 34, // last name
          FieldValue: last_name
        },
        {
          FormFieldId: 789, // number
          FieldValue: phone
        },
      ]
    };

    const token = document.querySelector(
      'input[name="__RequestVerificationToken"]'
    )?.value;
    if (!token) throw new Error("Verification token for roadmap consult form is not given.")

    const response = await fetch("/Form/save", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "RequestVerificationToken": token
      },
      body: JSON.stringify(payload)
    });

    console.log(response.status);
    console.log(await response.text());
  }
  const submitForm = async () => {
    next.classList.add("loading")
    next.disabled = true;
    next.innerHTML = loading_svg + "لطفا صبر کنید"
    formErrorsEl.classList.remove("show")
    try {
      await sendFormData()
      next.classList.remove("loading")
      form.classList.add("hidden")
      countVotes()
      const winners = findWinners() // length will be 1
      currentStageEl.innerText = "";
      showResult(
        `برای نتیجه بهتر، از ${resultLabels[winners[0]]} شروع کن.`,
        singleResultDesc,
        winners
      )
      consult_title.innerText = firstStep[winners[0]].title
      consult_desc.innerText = firstStep[winners[0]].desc
      consult_link.setAttribute("href", firstStep[winners[0]].link)
    } catch(e) {
      console.log(e)
      next.classList.remove("loading")
      next.disabled = false;
      next.innerText = "ارسال";
      formErrorsEl.innerText = "مشکلی در ارسال اطلاعات پیش آمد. لطفا مجددا تلاش کنید."
      formErrorsEl.classList.add("show")
    }
  }
  const showForm = () => {
    title.innerText = "مرحله نهایی";
    desc.innerText = "لطفا جهت نمایش نتیجه، اطلاعات خود را وارد کنید";
    next.innerText = "ثبت"
    form.classList.remove("hidden")
    questionsBox.classList.add("hidden")
    checkToDisabledNext()
  }
  const getFormErrors = () => {
    const errors = []
    const mobileInput = form.querySelector('input[name="mobile_number"]')?.value || "";
    const inputsArray = Array.from(formInputs)

    const anyEmpty = inputsArray.some(i => !i.value)
    const validMobile = (mobileInput.length === 11) && (mobileInput.startsWith("09"))

    if (!validMobile)
      errors.push("شماره همراه وارد شده صحیح نمیباشد")
    if (anyEmpty)
      errors.push("لطفا همه موارد را کامل کنید")

    return errors
  }
  const handleInput = () => {
    const errors = getFormErrors()

    if (errors.length === 0) { // no error
      next.disabled = false
      formErrorsEl.innerText = ""
      formErrorsEl.classList.remove("show")
    } else { // has error
      next.disabled = true
      formErrorsEl.classList.add("show")
      formErrorsEl.innerText = errors.at(-1)
    }

  }
  formInputs.forEach(input => input.oninput = handleInput)

  const checkToDisabledNext = () => {
    let someSelected = Array.from(questions).some(s => s.classList.contains("selected"));
    if (!someSelected) next.disabled = true;
    else next.disabled = false
  }
  const applyStage = stage => {
      title.innerText = stage.title;
      desc.innerText = stage.desc;
      questions.forEach(Q => {
        Q.classList.remove("selected")
        const newText = stage.questions[Q.dataset.target]
        if (newText)
          Q.innerText = newText
        else Q.classList.add("hidden")
      })
      next.disabled = true
  }
  const votes = {
    frontend: 0,
    backend: 0,
    ai: 0,
  }
  const countVotes = () => {
    questions.forEach(q => {
      if (q.classList.contains("selected")) {
        votes[q.dataset.target]++
      }
    })
  }
  const findWinners = () => {
    const maxVotes = Math.max(...Object.values(votes));
    if (maxVotes === 0) return []
    const winners = Object.keys(votes).filter(
      key => votes[key] === maxVotes
    );
    return winners
  }
  currentStageEl.innerText = `${currentStage} از ${stageCount}`;
  next.onclick = () => {
    const nextStageNumber = currentStage + 1
    if (stages[nextStageNumber]) {
      countVotes()
      applyStage(stages[nextStageNumber])
      currentStage++;
      currentStageEl.innerText = `${currentStage} از ${stageCount}`;
      if (nextStageNumber === stageCount) { //one to last stage
        currentStage = "unkown"
        next.innerText = "نمایش نتیجه"
      }
    } else if (currentStage === "unkown") {
      countVotes()
      const winners = findWinners()
      if (winners.length === 1) {
        showForm()
        currentStage = "show"
        currentStageEl.innerText = "تکمیل اطلاعات"
      }
      if (winners.length > 1) { // two options tied
        const tieBreakerStage = (() => {
          if (winners.includes("frontend")) {
            if (winners.includes("backend")) return tieBreakers.font_back
            else return tieBreakers.font_ai
          } else return tieBreakers.back_ai
        })();
        applyStage(tieBreakerStage)
        currentStageEl.innerText = "یک سوال تکمیلی"
        next.innerText = "نمایش نتیجه"
      }
    } else if (currentStage === "form") {
      showForm()
      currentStage = "show";
    } else if (currentStage === "show") {
      submitForm()
    }
  }
  resultBtns.forEach(r => {
    r.onclick = () => {
      const target = r.dataset.target;
      const selector = `[data-path="${target}"]`
      document.querySelector(selector).click()
    }
  })
  reset.onclick = () => {
    questionsBox.classList.remove("hidden")
    questions.forEach(q => q.classList.remove("hidden"))
    resultBox.classList.add("hidden")
    next.classList.remove("hidden")
    currentStage = 1;
    currentStageEl.innerText = currentStage
    next.innerText = "سوال بعدی"
    next.disabled = true;
    votes.frontend = 0;votes.backend = 0;votes.ai = 0;
    applyStage(stages[1])
  }
}
