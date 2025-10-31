export type MegaItem = {
  label: string;
  href: string;
  description?: string;
  badge?: string;
};

export type MegaColumn = {
  title: string;
  items: MegaItem[];
};

export type MegaSection = {
  id: navId;
  label: string;
  href: string;
  columns?: MegaColumn[];
};

export const navIds = [
  "company",
  "business",
  "ir",
  "sustainability",
  "recruit",
] as const;

export type navId = (typeof navIds)[number];

export const MEGA_SECTIONS: MegaSection[] = [
  {
    id: navIds[0],
    label: "企業情報",
    href: "/company",
    columns: [
      {
        title: "会社情報",
        items: [
          { label: "トップメッセージ", href: "/company/message" },
          { label: "グループ企業理念", href: "/company/philosophy" },
          { label: "経営計画", href: "/company/plan" },
          { label: "コーポレートガバナンス", href: "/company/governance" },
        ],
      },
      {
        title: "組織・概要",
        items: [
          { label: "会社概要", href: "/company/overview" },
          { label: "組織図", href: "/company/organization" },
          { label: "役員紹介", href: "/company/executives" },
        ],
      },
      {
        title: "グループ情報",
        items: [
          { label: "グループ構成図", href: "/company/group-structure" },
          { label: "グループ史", href: "/company/history" },
          { label: "ニュースレター", href: "/company/newsletter" },
        ],
      },
    ],
  },
  {
    id: navIds[1],
    label: "事業概要",
    href: "/business",
    columns: [
      {
        title: "概要",
        items: [{ label: "領域・事業の構成概要", href: "/business/segments" }],
      },
      {
        title: "グループを知る",
        items: [{ label: "数字で見る〇〇グループ", href: "/business/numbers" }],
      },
      {
        title: "サービス",
        items: [{ label: "サービス一覧", href: "/services" }],
      },
    ],
  },
  {
    id: navIds[2],
    label: "株主・投資家情報",
    href: "/ir",
    columns: [
      {
        title: "基本情報",
        items: [
          { label: "経営方針", href: "/ir/policy" },
          { label: "業績・財務情報", href: "/ir/finance" },
          { label: "IRサイトマップ", href: "/ir/sitemap" },
          { label: "お問い合わせ", href: "/ir/contact" },
        ],
      },
      {
        title: "個人投資家の皆様へ",
        items: [
          { label: "株式・その他情報", href: "/ir/stocks" },
          { label: "よくあるご質問", href: "/ir/faq" },
          { label: "IRカレンダー", href: "/ir/calendar" },
        ],
      },
      {
        title: "リソース",
        items: [
          { label: "IR資料室", href: "/ir/library" },
          { label: "IRニュース", href: "/ir/news", badge: "更新" },
          { label: "用語集", href: "/ir/glossary" },
        ],
      },
    ],
  },
  {
    id: navIds[3],
    label: "サステナビリティ",
    href: "/sustainability",
    columns: [
      {
        title: "基本方針・戦略",
        items: [
          { label: "トップコミットメント", href: "/sustainability/commitment" },
          {
            label: "サステナブル経営の考え方・体制",
            href: "/sustainability/management",
          },
          {
            label: "サステナビリティ戦略・目標と実績",
            href: "/sustainability/strategy",
          },
          { label: "ESGに関する方針・宣言", href: "/sustainability/policies" },
        ],
      },
      {
        title: "取り組み",
        items: [
          { label: "環境への取り組み", href: "/sustainability/environment" },
          { label: "社会への取り組み", href: "/sustainability/social" },
          {
            label: "ガバナンス・コンプライアンス",
            href: "/sustainability/governance",
          },
          {
            label: "ステークホルダーエンゲージメント",
            href: "/sustainability/stakeholder",
          },
          {
            label: "イニシアティブへの参画・賛同",
            href: "/sustainability/initiatives",
          },
        ],
      },
      {
        title: "データ・報告",
        items: [
          { label: "ESGに関するデータ類", href: "/sustainability/data" },
          { label: "社外からの評価", href: "/sustainability/evaluation" },
          {
            label: "サステナブルファイナンス",
            href: "/sustainability/finance",
          },
          {
            label: "サステナビリティトピックス",
            href: "/sustainability/topics",
          },
          { label: "CSR報告書PDFダウンロード", href: "/sustainability/report" },
        ],
      },
    ],
  },
  {
    id: navIds[4],
    label: "採用情報",
    href: "/recruit",
    columns: [
      {
        title: "採用情報",
        items: [
          { label: "新卒採用情報", href: "/recruit/new-graduate" },
          { label: "キャリア採用情報", href: "/recruit/career" },
          {
            label: "アルバイト・インターンシップ採用情報",
            href: "/recruit/internship",
          },
        ],
      },
    ],
  },
];
