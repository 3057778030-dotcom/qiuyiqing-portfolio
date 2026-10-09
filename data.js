window.PORTFOLIO_DATA = {
  meta: {
    name: "邱怡青",
    role: "海外用户增长",
    title: "Qiu Yiqing · Overseas Growth Portfolio",
    intro:
      "把创意、投放和数据分析串成一条增长链路，偏好能复用、可验证、能持续迭代的工作方式。",
  },
  profile: {
    headline: "我做的不是单点作品，而是能持续运转的系统。",
    body:
      "这组作品都围绕海外用户增长展开：先把流程标准化，再把内容生产提速，最后用数据把每日波动拉回到可判断的基线。",
    skills: [
      "Creative Ops",
      "Run-rate Analysis",
      "Localization",
      "API Workflow",
      "Project Routing",
      "Cross-market Testing",
    ],
  },
  timeline: [
    {
      year: "2026",
      title: "秋招项目管理程序",
      detail: "把投递材料、答题库、经验库和跟进节奏整理成一个可复用工作流。",
      tone: "system",
    },
    {
      year: "2026",
      title: "TT / FB 文案生成",
      detail: "面向不同地区、语言和视频类型，做批量化本地化输出。",
      tone: "copy",
    },
    {
      year: "2026",
      title: "跑出率分析看板",
      detail: "严格定义跑出条件，并用素材跑出率判断当天新素材的真实贡献。",
      tone: "data",
    },
    {
      year: "2026",
      title: "文案 + API 工作台",
      detail: "把自动生成文案、深度链接和批处理接到同一套工作台里。",
      tone: "tool",
    },
  ],
  projects: [
    {
      slug: "jobhunt",
      title: "秋招项目管理程序",
      alias: "JobHuntBot",
      category: "Workflow / Ops",
      summary:
        "把候选人信息、筛选规则、简历路由、答案库和跟进节奏放进同一套工作流，减少重复查找和状态失控。",
      fit:
        "对应海外用户增长里的流程管理、跨角色协作和高频迭代场景，强调的是可复制的执行秩序。",
      tags: ["流程标准化", "答题库", "经验路由", "跟进看板"],
      heroImage: "assets/projects/jobhunt-1.png",
      coverImage: "assets/projects/jobhunt-2.png",
      livePath: "detail.html?project=jobhunt",
      modalNotes: [
        "不是自动投递，而是让每一步都可追踪。",
        "先定义边界，再谈规模化。",
      ],
      snippets: [
        { label: "流程", text: "候选人信息 → 简历路由 → 答题库 → 跟进节奏" },
        { label: "边界", text: "缺少关键事实时先停下来，不猜身份和薪资" },
        { label: "目标", text: "把投递从零散动作变成可复用系统" },
      ],
      detailCards: [
        {
          kind: "image",
          src: "assets/projects/jobhunt-1.png",
          caption: "首页总览把项目管理的层级关系先摆清楚。",
          span: "tall",
        },
        {
          kind: "text",
          title: "方法",
          copy: "把候选人信息、答案库、经验库和跟进节奏拆成固定模块，避免每次投递都重新组织一次。",
          span: "medium",
        },
        {
          kind: "image",
          src: "assets/projects/jobhunt-2.png",
          caption: "批量导入与备份界面强调的是稳，而不是快。",
          span: "wide",
        },
        {
          kind: "code",
          title: "Safety boundary",
          copy:
            "This is not a one-click auto-apply bot.\nIt stops and asks before guessing identity, legal, or compensation facts.",
          span: "medium",
        },
        {
          kind: "text",
          title: "Growth lens",
          copy: "对海外增长岗位来说，这类工作流的价值是把复杂任务先标准化，再让后续迭代更稳。",
          span: "short",
        },
        {
          kind: "proof",
          src: "assets/awards/chuangye-track.png",
          caption: "项目化执行也需要证明材料来闭环。",
          span: "medium",
        },
      ],
    },
    {
      slug: "runrate",
      title: "TT 文案生成 + 跑出率分析看板",
      alias: "Creative System",
      category: "Copy + Analytics",
      summary:
        "前半部分是本地化文案生成与趋势整理，后半部分是严格按数据计算跑出率、素材跑出率和当日波动的分析看板。",
      fit:
        "对应海外用户增长最核心的两件事：一边让创意更快出，一边让数据判断更稳，不被单次波动带偏。",
      tags: ["本地化文案", "素材跑出率", "账户基线", "数据看板"],
      heroImage: "assets/projects/runrate-1.png",
      coverImage: "assets/projects/runrate-2.png",
      livePath: "detail.html?project=runrate",
      modalNotes: [
        "跑出率要看有效转化，不看表面的 0。",
        "素材跑出率衡量当日新素材的真实贡献。",
      ],
      snippets: [
        { label: "逻辑", text: "spend > min_spend && subscriptions > 0 && cpa <= max_cpa" },
        { label: "判断", text: "不要因为一两次市场波动改掉原本稳定的增长基线" },
        { label: "输出", text: "国家维度、日期维度、创建日期维度一起看" },
      ],
      detailCards: [
        {
          kind: "image",
          src: "assets/projects/runrate-1.png",
          caption: "核心指标卡片让跑出与消耗的关系一眼可见。",
          span: "wide",
        },
        {
          kind: "image",
          src: "assets/projects/runrate-2.png",
          caption: "筛选与自定义跑出率区域支持实时判断。",
          span: "medium",
        },
        {
          kind: "code",
          title: "Run-rate rule",
          copy: "spend > min_spend\nand subscriptions > 0\nand cpa <= max_cpa",
          span: "short",
        },
        {
          kind: "image",
          src: "assets/projects/runrate-3.png",
          caption: "趋势图把国家对比、日期趋势和散点关系同时放在一屏里。",
          span: "tall",
        },
        {
          kind: "text",
          title: "Why it matters",
          copy: "跑出率不是追短期噪声，而是用同一把尺子判断账户是否保持在稳定水平。",
          span: "medium",
        },
        {
          kind: "proof",
          src: "assets/awards/innovation-beijing-third.jpg",
          caption: "数据型作品也可以有证明材料。",
          span: "medium",
        },
      ],
    },
    {
      slug: "workbench",
      title: "文案生成 + API 工作台",
      alias: "Creative Workbench",
      category: "Tooling / Growth",
      summary:
        "把文案生成 skill 和 API、深度链接结合成一个完整工作台，支持批量识别地区与语言，也支持更快地进入创意测试。",
      fit:
        "更像海外增长日常中的内容中台：减少来回切工具，让创意和分发节奏更连贯。",
      tags: ["批量生成", "深度链接", "多地区适配", "工作台"],
      heroImage: "assets/projects/workbench-1.png",
      coverImage: "assets/projects/workbench-2.png",
      livePath: "detail.html?project=workbench",
      modalNotes: [
        "把文案、链接和输出路径收进同一个工作台。",
        "让批量任务也保留足够的结构感。",
      ],
      snippets: [
        { label: "输入", text: "国家 / 语言 / 视频类型" },
        { label: "输出", text: "TT 文案 + FB 文案 + 深度链接" },
        { label: "价值", text: "减少切工具和手工搬运的时间" },
      ],
      detailCards: [
        {
          kind: "image",
          src: "assets/projects/workbench-1.png",
          caption: "三步式工作台把输入、生成和输出连起来。",
          span: "tall",
        },
        {
          kind: "image",
          src: "assets/projects/workbench-2.png",
          caption: "纵向说明区保留了足够的批量复制空间。",
          span: "short",
        },
        {
          kind: "code",
          title: "Batch input",
          copy: "country / language / video type\n→ TT copy\n→ FB copy\n→ deep link",
          span: "medium",
        },
        {
          kind: "text",
          title: "System value",
          copy: "把内容生产、投放链接和团队协作放在一条流水线里，才能更快地做增长测试。",
          span: "medium",
        },
        {
          kind: "proof",
          src: "assets/awards/ican-beijing-second.png",
          caption: "结构化表达和结果证明可以放在同一页。",
          span: "medium",
        },
        {
          kind: "text",
          title: "Portfolio note",
          copy: "如果要继续扩展，这个工作台很适合接入更多地区、更多模板和更完整的深度链接策略。",
          span: "wide",
        },
      ],
    },
  ],
  awards: [
    {
      title: "三创赛校级特等奖",
      image: "assets/awards/sanchuang-special.jpg",
      detail: "证书原图可直接打开。",
      type: "image",
    },
    {
      title: "创业赛道校级",
      image: "assets/awards/chuangye-track.png",
      detail: "项目证明材料之一。",
      type: "image",
    },
    {
      title: "中国国际创新大赛北京市三等奖",
      image: "assets/awards/innovation-beijing-third.jpg",
      detail: "证书原图可直接打开。",
      type: "image",
    },
    {
      title: "iCAN 北京市二等奖",
      image: "assets/awards/ican-beijing-second.png",
      detail: "证书原图可直接打开。",
      type: "image",
    },
    {
      title: "创新赛道校级通知 1",
      image: "assets/pdfs/chuangxin-track-school.pdf",
      detail: "PDF，可打开查看原件。",
      type: "pdf",
    },
    {
      title: "创新赛道校级通知 2",
      image: "assets/pdfs/chuangxin-track-school-2.pdf",
      detail: "PDF，可打开查看原件。",
      type: "pdf",
    },
    {
      title: "北京市计算机大赛北京市三等奖",
      image: "assets/pdfs/beijing-computer-third.pdf",
      detail: "PDF，可打开查看原件。",
      type: "pdf",
    },
  ],
};
