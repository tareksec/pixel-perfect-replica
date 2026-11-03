// All sample data for the preview. Swap with real data later.
export type Text = { en: string; bn: string };

export type Approval = { id: string; title: Text; detail: Text };

export type Business = {
  id: string;
  name: Text;
  updatedMinutesAgo: number;
  investment: { activeProjects: number; raised: number; needed: number; profit: number };
  supply: { inStock: number; onTheWay: number; deliveredToday: number; lowStock: number };
  website: { online: boolean; productsLive: number; productsHidden: number };
  approvals: Approval[];
};

export const businesses: Business[] = [
  {
    id: "b1",
    name: { en: "Business 1", bn: "ব্যবসা ১" },
    updatedMinutesAgo: 0,
    investment: { activeProjects: 4, raised: 1250000, needed: 1785000, profit: 182500 },
    supply: { inStock: 1240, onTheWay: 320, deliveredToday: 86, lowStock: 3 },
    website: { online: true, productsLive: 148, productsHidden: 12 },
    approvals: [
      { id: "a1", title: { en: "Supplier payment · ৳ 85,000", bn: "সরবরাহকারী পেমেন্ট · ৳ ৮৫,০০০" }, detail: { en: "Rahim Traders · due today", bn: "রহিম ট্রেডার্স · আজ শেষ দিন" } },
      { id: "a2", title: { en: "New staff hire", bn: "নতুন কর্মী নিয়োগ" }, detail: { en: "Sales assistant · Dhanmondi shop", bn: "বিক্রয় সহকারী · ধানমন্ডি দোকান" } },
      { id: "a3", title: { en: "Price change · 6 products", bn: "দাম পরিবর্তন · ৬টি পণ্য" }, detail: { en: "Requested by store manager", bn: "স্টোর ম্যানেজারের অনুরোধ" } },
    ],
  },
  {
    id: "b2",
    name: { en: "Business 2", bn: "ব্যবসা ২" },
    updatedMinutesAgo: 0,
    investment: { activeProjects: 2, raised: 900000, needed: 1000000, profit: 96000 },
    supply: { inStock: 860, onTheWay: 140, deliveredToday: 42, lowStock: 0 },
    website: { online: true, productsLive: 64, productsHidden: 3 },
    approvals: [],
  },
  {
    id: "b3",
    name: { en: "Business 3", bn: "ব্যবসা ৩" },
    updatedMinutesAgo: 0,
    investment: { activeProjects: 3, raised: 420000, needed: 1200000, profit: 31000 },
    supply: { inStock: 310, onTheWay: 75, deliveredToday: 9, lowStock: 5 },
    website: { online: false, productsLive: 0, productsHidden: 38 },
    approvals: [
      { id: "c1", title: { en: "Loan instalment · ৳ 1,20,000", bn: "ঋণের কিস্তি · ৳ ১,২০,০০০" }, detail: { en: "City Bank · due in 2 days", bn: "সিটি ব্যাংক · ২ দিন বাকি" } },
    ],
  },
  {
    id: "b4",
    name: { en: "Business 4", bn: "ব্যবসা ৪" },
    updatedMinutesAgo: 0,
    investment: { activeProjects: 1, raised: 300000, needed: 300000, profit: 54000 },
    supply: { inStock: 520, onTheWay: 0, deliveredToday: 18, lowStock: 1 },
    website: { online: true, productsLive: 41, productsHidden: 0 },
    approvals: [
      { id: "d1", title: { en: "Refund request · ৳ 4,500", bn: "টাকা ফেরত · ৳ ৪,৫০০" }, detail: { en: "Customer order #2291", bn: "গ্রাহক অর্ডার #২২৯১" } },
      { id: "d2", title: { en: "Shop rent renewal", bn: "দোকান ভাড়া নবায়ন" }, detail: { en: "12 months · Gulshan", bn: "১২ মাস · গুলশান" } },
    ],
  },
];

export const fundedPercent = (b: Business) =>
  Math.round((b.investment.raised / b.investment.needed) * 100);
