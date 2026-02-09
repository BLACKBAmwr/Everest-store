
import React from 'react';
import { ShoppingBag, Users, CheckCircle, TrendingUp, Calculator, Send, ShieldCheck, Zap } from 'lucide-react';
import { Stat, Review, TeamMember } from './types';

export const STORE_NAME = "Everest Store";
export const FACEBOOK_URL = "https://m.facebook.com/profile.php?id=61577573870702&name=xhp_nt__fb__action__open_user";
export const CONTACT_NUMBER = "01022449197";
export const VODAFONE_CASH = "01287702619";

export const CALCULATE_TAX = (amount: number): number => {
  return 5 + Math.floor(amount / 500) * 5;
};

export const CALCULATE_PRICE = (amount: number): number => {
  return (amount / 100) * 50;
};

export const TEAM_MEMBERS: TeamMember[] = [
  { 
    name: "Abdalla Emad", 
    alias: "BAmwr", 
    role: "Creative Leader Behind Everest Company", 
    country: "مصر 🇪🇬", 
    discord: "bamwr",
    isLeader: true 
  },
  { 
    name: "Hamza Elhawy", 
    role: "Lead Programmer", 
    country: "مصر 🇪🇬" 
  },
  { 
    name: "Iyed Chraiti", 
    role: "Team Member", 
    country: "تونس 🇹🇳" 
  }
];

export const PROCESS_STEPS = [
  { title: "احسب سعرك", desc: "استخدم الحاسبة لمعرفة المبلغ الإجمالي شامل الضرائب.", icon: <Calculator /> },
  { title: "حول المبلغ", desc: "قم بتحويل المبلغ عبر فودافون كاش للرقم الموضح.", icon: <Send /> },
  { title: "ارسل السكرين", desc: "تواصل معنا عبر الفيسبوك وارسل صورة التحويل.", icon: <ShieldCheck /> },
  { title: "استلم الروبكس", desc: "سيتم شحن الروبكس لحسابك فوراً بطريقة آمنة.", icon: <Zap /> },
];

export const FAQS = [
  { q: "هل الشحن آمن على حسابي؟", a: "نعم، الشحن يتم بطرق رسمية (Gamepass) ولا يتطلب كلمة سر حسابك نهائياً." },
  { q: "كم يستغرق استلام الروبكس؟", a: "التسليم فوري بمجرد تأكيد التحويل، ويظهر الروبكس في حسابك كـ Pending لمدة 5-7 أيام (قوانين روبلوكس)." },
  { q: "ما هي طرق الدفع المتاحة؟", a: "حالياً نوفر الدفع عبر فودافون كاش وأي محفظة إلكترونية في مصر." },
];

export const STATS: Stat[] = [
  { label: "عملية ناجحة", value: "+1,250", icon: <CheckCircle className="w-6 h-6" /> },
  { label: "عميل راضٍ", value: "+890", icon: <Users className="w-6 h-6" /> },
  { label: "روبكس مُباع", value: "250K+", icon: <ShoppingBag className="w-6 h-6" /> },
  { label: "جنيه محول", value: "62K+", icon: <TrendingUp className="w-6 h-6" /> },
];

export const REVIEWS: Review[] = [
  { id: "1", name: "أحمد محمد", rating: 5, comment: "أفضل سيرفر تعاملت معه، سرعة في التسليم ومصداقية عالية جداً.", date: "2024-03-15" },
  { id: "2", name: "ياسين علي", rating: 5, comment: "التسليم كان فوري والمساعد الذكي ساعدني جداً في فهم الخطوات.", date: "2024-03-18" },
  { id: "3", name: "سارة محمود", rating: 5, comment: "شكراً إيفرست ستور، خدمة ممتازة وسعر منافس جداً.", date: "2024-03-20" },
  { id: "4", name: "خالد حسن", rating: 5, comment: "أمين جداً والتسليم كان عن طريق الجيم باس بدون أي مشاكل.", date: "2024-03-22" },
];
