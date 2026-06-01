// Auto-extracted from legacy tracker
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export type Exercise = {
  name: string;
  warmup: string;
  working: number | string;
  reps: string;
  technique: string;
  earlyRPE: string;
  lastRPE: string;
  rest: string;
  sub1?: string;
  sub2?: string;
  notes?: string;
};

export type WeekDay = {
  label: string;
  key: string;
  isRest?: boolean;
  exercises?: Exercise[];
};

export const BLOCKS = {
  foundation: { label: 'Foundation Block', weeks: [1,2,3,4,5] },
  ramping:    { label: 'Ramping Block',    weeks: [6,7,8,9,10,11,12] }
};

// Exercise demo videos (from official Jeff Nippard beginner spreadsheet)
export const EX_LINKS: Record<string, string> = {
  "1-Arm 45° Cable Rear Delt Flye": "https://youtu.be/6G5DmVaocGM",
  "45° Hyperextension": "https://youtu.be/lEeCPhlFZig?si=j-525U0GRL6YMLvK",
  "45° Incline Barbell Press": "https://youtu.be/vqQ9ok0dEgk",
  "45° Incline DB Press": "https://www.youtube.com/watch?v=p2t9daxLpB8",
  "45° Incline Machine Press": "https://youtu.be/b8fYnZ-usP0",
  "Ab Wheel Rollout": "https://youtu.be/gGTgyCU9gcg?si=2h_43OzMnRo5nVWU",
  "Arm Circles": "https://youtu.be/tFpwBr_7KPg?si=ZBn0o9wo6P78IwIg&t=10",
  "Arm Swings": "https://youtu.be/tFpwBr_7KPg?si=-dwT-qM4TzVqRWGx",
  "Barbell Bench Press": "https://youtu.be/nQL5ieH39sw?si=RjZSWBZ3CGKg-pax",
  "Barbell RDL": "https://youtu.be/3fJwfg51cv0",
  "Bayesian Cable Curl": "https://youtu.be/CWH5J_7kzjM?si=FlPzreLDPHogRxve",
  "Bench Dip": "https://youtu.be/3CaIq8jZe18?si=ZWFiM0R-hqcvpiQj",
  "Bottom-Half DB Flye": "https://youtu.be/qJzc-iHKGdg?si=GGd61Dr4uoDUI9b6",
  "Bottom-Half Seated Cable Flye": "https://youtu.be/tsJMV9Gxw-o?si=RBV8vCl6CNAx22eD",
  "Cable Crossover Ladder": "https://youtu.be/0TP9kVcWGic?si=5lWdSFfUA27mop9-",
  "Cable Crunch": "https://youtu.be/epBrpaGHMcg?si=FMV9IKBOvBkuUOZM",
  "Cable External Rotation (optional)": "https://youtu.be/tFpwBr_7KPg?si=ui18pgNWTE2IrKcu&t=39",
  "Cable Hip Abduction": "https://youtu.be/552L1K3Rb_Q?si=bwLZLzHR0AHulO9I",
  "Cable Paused Shrug-In": "https://youtu.be/Hy6f1Lz_PiA?si=MTEbKv_uMCL6zvge",
  "Cable Pull-Through": "https://youtu.be/eFsNZc69m10?si=HeWumPVqClmv0LyC",
  "Cable Rope Hammer Curl": "https://youtu.be/TTgICSfj1hY?si=yOoxlJpIv6HqFkwW",
  "Cable Shoulder Press": "https://youtu.be/OfjncdW_Vyc?si=kiSMQzlVHKNIQJ7J",
  "Cable Triceps Kickback": "https://youtu.be/oRxTKRtP8RE?si=S_C_5SZAal_SIFBq",
  "Chest-Supported Machine Row": "https://youtu.be/ijsSiWSzYw0?si=ADBJRkNSajLiVayN",
  "Chest-Supported T-Bar Row": "https://youtu.be/q8qlHwcuOtc?si=J-TyFYuv9rwi5VTy",
  "Concentration Cable Curl": "https://youtu.be/BFZyW_7ld0c?si=2quAznmV1D3pvYGG",
  "DB Bench Press": "https://youtu.be/zGXvPjlgVkk?si=sTJq1mF8qaCapYbx",
  "DB Bulgarian Split Squat": "https://youtu.be/htDXu61MPio?si=WNsXh0BmNMXONRHP",
  "DB Concentration Curl": "https://youtu.be/Oq7gJuAuJh0?si=MVr0h6JsUR4PxMgw",
  "DB Curl": "https://youtu.be/XxGCRSJmgwY?si=4ohHVIRqih3xCbD0",
  "DB Hammer Curl": "https://youtu.be/xY3sQXYhk7A?si=DPCD_x4ApcM8y3uN",
  "DB Preacher Curl": "https://youtu.be/WTkQLAethtg?si=BRKYwVgqPyD9Iayw",
  "DB RDL": "https://youtu.be/VRwSgUoj7uI",
  "DB Shrug": "https://youtu.be/moFqLlptX7Q?si=vsQXeROXKVa3beB7",
  "DB Skull Crusher": "https://youtu.be/fbLTzgTKOR8?si=z-O6SNR4HG4rd09j",
  "DB Static Lunge": "https://youtu.be/hci6iKFtTkg?si=R8PHuNMWbGOoTd9e",
  "DB Step-Up": "https://youtu.be/3FNfi_PrP9Y?si=xHZ-SXqhL_0_tXBD",
  "DB Triceps Kickback": "https://youtu.be/YdUUYFgpA7g?si=IiD6eODwVqDS3WlB",
  "DB Walking Lunge": "https://youtu.be/BC_eDtrB-M4?si=lhut9GRQ9n9g82Mz",
  "Decline Weighted Crunch": "https://youtu.be/ZheUsKqU81M?si=r3a6FT_AqWp1nq6L",
  "Dual-Handle Lat Pulldown": "https://youtu.be/NwQ5Ch5t5Vk?si=JHztlva6LI2NPBDC",
  "EZ-Bar Cable Curl": "https://youtu.be/ck1zjNTnFew?si=EgggtiVFxulCoYXU",
  "EZ-Bar Curl": "https://youtu.be/WMrgn4GG7mI?si=0dUmQt-g_zOMm14G",
  "EZ-Bar Preacher Curl": "https://youtu.be/Dn7qgf9iSH8?si=mCWsykyTRl0jYKA0",
  "EZ-Bar Skull Crusher": "https://youtu.be/oDKGCsTjAk8?si=6CA3mVlk1fYWb8Ek",
  "Front-to-Back Leg Swings": "https://youtu.be/tFpwBr_7KPg?si=xiy3TjoRiQUvn7qX&t=19",
  "Glute-Ham Raise": "https://youtu.be/9ksG-O0ZUto?si=I5F9HRiZe4C8JNOo",
  "Goblet Squat": "https://youtu.be/S2agsLlUSII?si=ZbM6zqY3sC151i0A",
  "Hack Squat": "https://youtu.be/TWUnnDK8rck?si=NmqKbwgMcHmaDp6T",
  "Hammer Preacher Curl": "https://youtu.be/dEdnC3ca-Yg?si=fAVE3jH_TAGmtG_u",
  "Hanging Leg Raise": "https://youtu.be/rGqwkinWqYI?si=-ygKr5ZOwrYdG0fX",
  "High-Bar Back Squat": "https://youtu.be/V-B_Y-OvOTQ?si=3cSY6hI1IDiedc8y",
  "High-Cable Cuffed Lateral Raise": "https://youtu.be/8m2jNHBP580?si=a4KGz2Dm0gRioyBG",
  "High-Cable Lateral Raise": "https://youtu.be/MnMux3Wc0Ac?si=diOk1ZKwTwTa4Sx0",
  "Incline Chest-Supported DB Row": "https://youtu.be/okCWuhxJEvw?si=-Q9-BAJbFeebhfpF",
  "Incline DB Stretch Curl": "https://youtu.be/Z0NIYS9nyoQ?si=PgrGaJLln2uZLfnY",
  "Katana Triceps Extension": "https://youtu.be/R7f45Mv7yyg?si=xsSbcMbkSOuYetpO",
  "Lateral Band Walk": "https://youtu.be/sOYvvFPYdsU?si=QAdyWBV_5NAX2CtW",
  "Lean-Back Lat Pulldown": "https://youtu.be/Zjzt4MRbAlc?si=Z5K9MxycnTyrnB1N",
  "Lean-Back Machine Pulldown": "https://youtu.be/CrfvmSGfT2c?si=hsWBdUyeIyjzr_7h",
  "Lean-Back Pull-Up": "https://youtu.be/Zjzt4MRbAlc?si=Z5K9MxycnTyrnB1N",
  "Lean-In DB Lateral Raise": "https://youtu.be/BmYuAG2j2co",
  "Leg Extension": "https://youtu.be/uFbNtqP966A?si=3mIG7OVH30gHjNhd",
  "Leg Press": "https://youtu.be/1yKAQLVV_XI?si=G0wEZEbz8Kq9vFnF",
  "Leg Press Calf Press": "https://youtu.be/S6DTPNZ_-F4?si=y3rx6TaVEuUONiI2",
  "Long-Lever Plank": "https://youtu.be/9rFS1gg0vJM?si=ihh3GBLwr9TyBojo",
  "Low-to-High Cable Crossover": "https://youtu.be/1LhGmhVFe2Y?si=vTZPhYePzGkU4I-g",
  "Lying Leg Curl": "https://youtu.be/sX4tGtcc62k?si=mparE5f2nb9KfXPl",
  "Lying Leg Raise": "https://youtu.be/w86Ph4iQgBM?si=IihE5X5en99z1H82",
  "Machine Chest Press": "https://youtu.be/zDecGJLyVm8?si=VF-70ajNWU4cDHEV",
  "Machine Crunch": "https://youtu.be/K2yKEoazT3g?si=mLbXtOh8oUF8lcIs",
  "Machine Hip Abduction": "https://youtu.be/pozooPg6PBE?si=uVtC8JPKXvZKeVlE",
  "Machine Preacher Curl": "https://youtu.be/R2iUnBxFtis",
  "Machine Shoulder Press": "https://youtu.be/SCQVmN1gYsk?si=Enyh4L6ZDiCc6RyU",
  "Machine Shrug": "https://youtu.be/ua0XuKwKQ9M?si=Y-kGNEq_riqAF2Tn",
  "Modified Candlestick": "https://youtu.be/-XVRl8KU7x0?si=o46w1tp8fNYfD-gU",
  "Neutral-Grip Lat Pulldown": "https://youtu.be/lA4_1F9EAFU?si=5Bh19rDwBplX5QUz",
  "Neutral-Grip Pull-Up": "https://youtu.be/b0ypSz63UGo?si=dMxuJGtxkR4jnUbb",
  "Nordic Ham Curl": "https://youtu.be/fzpYiRtzmFA?si=M3BGSywSskWqGRnE",
  "Overhead Cable Triceps Extension (Bar)": "https://youtu.be/9_I1PqZAjdA?si=hLmz2aLH05YfsUTF",
  "Overhead Cable Triceps Extension (Rope)": "https://youtu.be/GYoUoVNlbGc?si=mKlJH3mz_e7-RCu0",
  "Pec Deck": "https://youtu.be/CI88L1VNvEs?si=UjPZ3Ep5QaYBM5rC",
  "Pendlay Deficit Row": "https://youtu.be/MmuyHKYCLps?si=JK1d5szj5PIIbYYm",
  "Pull-Up": "https://youtu.be/5h_NehuTqe4?si=bZWK6q3A9wnD8TIW",
  "Reverse Nordic": "https://youtu.be/D-kqUKEQZZ0?si=1i2hWkoG06CDuFmq",
  "Reverse Pec Deck": "https://youtu.be/Y8fb_rtEU_4?si=nwaICiwwS3TatSq1",
  "Rope Face Pull": "https://youtu.be/GhrVM-jPIEA?si=_qGmAZLOCDUWVHy_",
  "Seated Calf Raise": "https://youtu.be/6pfj0G7VKdM?si=bXJmuLkyC3E3PYHW",
  "Seated DB Shoulder Press": "https://youtu.be/B8PB5RPhTWQ?si=JQ8J3qbCDkUCGtt5",
  "Seated Leg Curl": "https://youtu.be/yv0aAY7M1mk?si=Z1Cx7ih-vWTSTqq-",
  "Seated Super-Bayesian High Cable Curl": "https://youtu.be/jQ9rkfvAbIc?si=m1Q5OHGTNvhD6TZ9",
  "Side-to-Side Leg Swings": "https://youtu.be/tFpwBr_7KPg?si=m5M3W6evtbwi9amN&t=28",
  "Single-Arm DB Row": "https://youtu.be/roKtfQZbxzg?si=x0BVOCTXzrksYhHL",
  "Sissy Squat": "https://youtu.be/eWAjlO4FWPQ?si=CaRzMpTB37IdGgpM",
  "Smith Machine Row": "https://youtu.be/Wmivm40AV3Q?si=pAcxmzGxP16bt5I5",
  "Smith Machine Squat": "https://youtu.be/J2D2J7RO_tA",
  "Smith Machine Static Lunge": "https://youtu.be/SEjKxJGg_C8?si=I_mi9RO4vFVVhFER",
  "Smith Machine Static Lunge w/ Elevated Front Foot": "https://youtu.be/GOqHdmshRKY",
  "Snatch-Grip RDL": "https://youtu.be/b8fmEaXHapU",
  "Standing Calf Raise": "https://youtu.be/6lR2JdxUh7w?si=Q_4oyceNkI-WarRg",
  "Swiss Ball Rollout": "https://youtu.be/FvekMyIs-yk?si=WE_SAmFUUdmsWGgL",
  "Triceps Pressdown (Bar)": "https://youtu.be/o4eazahiXQw?si=L61XPqSVKpnjf1r1",
  "Triceps Pressdown (Rope)": "https://youtu.be/bCa036rGtVU?si=egxwlHADiCBQGss7",
  "Walking Lunge": "https://youtu.be/BC_eDtrB-M4?si=j6tHLEbqdJRbGeTW",
  "Wide-Grip Lat Pulldown": "https://youtu.be/IYXRrYXfVLc?si=8eUNzIQ9o7Y-XpSp",
  "Wide-Grip Pull-Up": "https://youtu.be/yGnp0HU8BnA?si=g9lS7YfxwnBQ5gbR",
};

const EX_LINK_ALIASES: Record<string, string> = {
  "balanceos de brazos": "Arm Swings",
  "circulos de brazos": "Arm Circles",
  "balanceos de pierna adelante-atras": "Front-to-Back Leg Swings",
  "balanceos de pierna lateral": "Side-to-Side Leg Swings",
  "rotacion externa en polea (opcional)": "Cable External Rotation (optional)",
};

function normalizeLinkName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

export function getLink(name: string): string | null {
  const direct = (EX_LINKS as Record<string, string>)[name];
  if (direct) return direct;

  const normalized = normalizeLinkName(name);
  const canonical = EX_LINK_ALIASES[normalized];
  if (canonical) return EX_LINKS[canonical] || null;

  const matchingName = Object.keys(EX_LINKS).find(
    (linkName) => normalizeLinkName(linkName) === normalized
  );
  return matchingName ? EX_LINKS[matchingName] : null;
}

export function exName(name) {
  const link = getLink(name);
  if (link) return `<a href="${link}" target="_blank">${name}</a>`;
  return name;
}

export function subLink(name, fallbackLink) {
  if (!name) return '';
  const link = getLink(name) || fallbackLink;
  if (link) return `<a href="${link}" target="_blank">${name}</a>`;
  return name;
}

// =====================================================================
//  WORKOUT STRUCTURE
// =====================================================================

// Foundation Block Days (Weeks 1–5)
// Day structure: Upper (Strength), Lower (Strength), Rest, Pull (Hypertrophy), Push (Hypertrophy), Legs (Hypertrophy), Rest

export function foundationUpperStrength(week) {
  const w = week;
  const wSets = w <= 2 ? 1 : 2;
  const earlyRPE = w <= 2 ? 'N/A' : '~7';
  const lastRPE_col1 = w == 1 ? '~6' : '~7';
  const lastRPE_col2 = w == 1 ? '~7' : '~8';
  return [
    { name: '45° Incline Barbell Press', warmup: '2-3', working: wSets, reps: '6-8', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col1, rest: '3-5 min', sub1: '45° Incline DB Press', sub2: '45° Incline Machine Press', notes: '1 second pause at the bottom of each rep while maintaining tension on the pecs.' },
    { name: 'Cable Crossover Ladder', warmup: '1-2', working: wSets, reps: '8-10', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col2, rest: '1-2 min', sub1: 'Pec Deck', sub2: 'Bottom-Half DB Flye', notes: 'Do one set with low cable position, one with medium-height, one with high cable position. If fewer sets, choose preferred cable positions.' },
    { name: 'Wide-Grip Pull-Up', warmup: '1-2', working: wSets, reps: '8-10', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col1, rest: '2-3 min', sub1: 'Wide-Grip Lat Pulldown', sub2: 'Dual-Handle Lat Pulldown', notes: '1.5x shoulder width overhand grip. Slow 2-3 second negative. Feel your lats pulling apart on the way down.' },
    { name: 'High-Cable Lateral Raise', warmup: '1-2', working: wSets, reps: '8-10', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col2, rest: '1-2 min', sub1: 'High-Cable Cuffed Lateral Raise', sub2: 'Lean-In DB Lateral Raise', notes: 'Focus on squeezing your lateral delt to move the weight.' },
    { name: 'Pendlay Deficit Row', warmup: '1-2', working: wSets, reps: '6-8', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col1, rest: '2-3 min', sub1: 'Smith Machine Row', sub2: 'Single-Arm DB Row', notes: 'Stand on a bumper plate. Focus on getting a big stretch and touch your stomach/chest on each rep!' },
    { name: 'Overhead Cable Triceps Extension (Bar)', warmup: '1', working: wSets, reps: '8-10', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col2, rest: '1-2 min', sub1: 'Overhead Cable Triceps Extension (Rope)', sub2: 'DB Skull Crusher', notes: 'Optionally pause for 0.5-1 second in the stretched aspect of each rep.' },
    { name: 'Bayesian Cable Curl', warmup: '1', working: wSets, reps: '8-10', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col2, rest: '1-2 min', sub1: 'Seated Super-Bayesian High Cable Curl', sub2: 'Incline DB Stretch Curl', notes: 'If you have a left-right bicep size imbalance, do these 1 arm at a time, starting with the weaker arm. Otherwise do both arms simultaneously.' },
  ];
}

export function foundationLowerStrength(week) {
  const w = week;
  const wSets = w <= 2 ? 1 : 2;
  const earlyRPE = w <= 2 ? 'N/A' : '~7';
  const lastRPE_col1 = w == 1 ? '~7' : '~8';
  return [
    { name: 'Lying Leg Curl', warmup: '2', working: wSets, reps: '8-10', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col1, rest: '1-2 min', sub1: 'Seated Leg Curl', sub2: 'Nordic Ham Curl', notes: 'Set the machine so that you get the biggest stretch possible at the bottom. Prevent your butt from popping up as you curl.' },
    { name: 'Smith Machine Squat', warmup: '2-4', working: wSets, reps: '6-8', technique: 'N/A', earlyRPE, lastRPE: w == 1 ? '~6' : '~7', rest: '3-5 min', sub1: 'DB Bulgarian Split Squat', sub2: 'High-Bar Back Squat', notes: 'Bring feet forward ~3-6 inches from normal squat position. This creates a more upright torso and more quad tension. If heels raise, bring feet more forward. If feet slip or lower back rounds, bring feet back.' },
    { name: 'Barbell RDL', warmup: '2-4', working: wSets, reps: '6-8', technique: 'N/A', earlyRPE, lastRPE: w == 1 ? '~6' : '~7', rest: '2-3 min', sub1: 'DB RDL', sub2: 'Snatch-Grip RDL', notes: 'To keep tension on the hamstrings, stop about 75% of the way to full lockout on each rep (stay in the bottom 3/4 of the ROM).' },
    { name: 'Leg Extension', warmup: '1-2', working: wSets, reps: '8-10', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col1, rest: '1-2 min', sub1: 'Reverse Nordic', sub2: 'Sissy Squat', notes: 'Set the seat back as far as it will go. Grab the handles to pull your butt into the seat. Use a 2-3 second negative. Feel your quads pulling apart.' },
    { name: 'Standing Calf Raise', warmup: '1-2', working: wSets, reps: '6-8', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col1, rest: '1-2 min', sub1: 'Seated Calf Raise', sub2: 'Leg Press Calf Press', notes: '1-2 second pause at the bottom. Think about rolling your ankle back and forth on the balls of your feet rather than just going up on toes.' },
    { name: 'Cable Crunch', warmup: '1', working: wSets, reps: '8-10', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col1, rest: '1-2 min', sub1: 'Decline Weighted Crunch', sub2: 'Machine Crunch', notes: 'Round your lower back as you crunch. Maintain a mind-muscle connection with your 6-pack.' },
  ];
}

export function foundationPullHypertrophy(week) {
  const w = week;
  const wSets = w <= 2 ? 1 : 2;
  const earlyRPE = w <= 2 ? 'N/A' : '~7';
  const lastRPE_col1 = w == 1 ? '~6' : '~7';
  const lastRPE_col2 = w == 1 ? '~7' : '~8';
  return [
    { name: 'Neutral-Grip Lat Pulldown', warmup: '2-3', working: wSets, reps: '8-10', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col1, rest: '2-3 min', sub1: 'Neutral-Grip Pull-Up', sub2: 'Dual-Handle Lat Pulldown', notes: 'Do these pulldowns with the handle more out in front of you, like a cross between a pullover and a pulldown. Focus on feeling your lats more than the weight you\'re using.' },
    { name: 'Chest-Supported Machine Row', warmup: '2-3', working: wSets, reps: '8-10', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col1, rest: '2-3 min', sub1: 'Chest-Supported T-Bar Row', sub2: 'Incline Chest-Supported DB Row', notes: 'Flare elbows out at roughly 45° and squeeze your shoulder blades together hard at the top of each rep.' },
    { name: '1-Arm 45° Cable Rear Delt Flye', warmup: '1-2', working: wSets, reps: '10-12', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col2, rest: '1-2 min', sub1: 'Rope Face Pull', sub2: 'Reverse Pec Deck', notes: 'Pause for 1-2 seconds in the squeeze of each rep. Contract the rear delts hard!' },
    { name: 'Machine Shrug', warmup: '2-3', working: wSets, reps: '10-12', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col1, rest: '1-2 min', sub1: 'Cable Paused Shrug-In', sub2: 'DB Shrug', notes: 'Brief pause at the top and bottom of ROM. Think about pulling your shoulders up to your ears!' },
    { name: 'EZ-Bar Cable Curl', warmup: '1', working: wSets, reps: '10-12', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col2, rest: '1-2 min', sub1: 'EZ-Bar Curl', sub2: 'DB Curl', notes: 'Set up the cable at the lowest position. Maintain constant tension on the biceps. Slow, controlled reps!' },
    { name: 'Machine Preacher Curl', warmup: '1', working: wSets, reps: '12-15', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col2, rest: '1-2 min', sub1: 'EZ-Bar Preacher Curl', sub2: 'DB Preacher Curl', notes: 'Smooth, controlled reps. Mind-muscle connection with the biceps.' },
  ];
}

export function foundationPushHypertrophy(week) {
  const w = week;
  const wSets = w <= 2 ? 1 : 2;
  const earlyRPE = w <= 2 ? 'N/A' : '~7';
  const lastRPE_col1 = w == 1 ? '~6' : '~7';
  const lastRPE_col2 = w == 1 ? '~7' : '~8';
  return [
    { name: 'Barbell Bench Press', warmup: '2-4', working: wSets, reps: '8-10', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col1, rest: '3-5 min', sub1: 'Machine Chest Press', sub2: 'DB Bench Press', notes: 'Set up a comfortable arch, quick pause on the chest and explode up on each rep.' },
    { name: 'Machine Shoulder Press', warmup: '2-3', working: wSets, reps: '8-10', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col1, rest: '2-3 min', sub1: 'Cable Shoulder Press', sub2: 'Seated DB Shoulder Press', notes: 'Ensure that your elbows break at least 90°. Mind-muscle connection with your delts. Smooth, controlled reps.' },
    { name: 'Bottom-Half DB Flye', warmup: '1-2', working: wSets, reps: '10-12', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col2, rest: '1-2 min', sub1: 'Bottom-Half Seated Cable Flye', sub2: 'Low-to-High Cable Crossover', notes: 'All reps performed in the bottom half of the ROM. Focus on feeling a deep stretch in your pecs at the bottom.' },
    { name: 'High-Cable Lateral Raise', warmup: '1', working: wSets, reps: '10-12', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col2, rest: '1-2 min', sub1: 'High-Cable Cuffed Lateral Raise', sub2: 'Lean-In DB Lateral Raise', notes: 'Focus on squeezing your lateral delt to move the weight.' },
    { name: 'Overhead Cable Triceps Extension (Bar)', warmup: '1', working: wSets, reps: '10-12', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col2, rest: '1-2 min', sub1: 'Overhead Cable Triceps Extension (Rope)', sub2: 'DB Skull Crusher', notes: 'Optionally pause for 0.5-1 second in the stretched aspect of each rep.' },
    { name: 'Cable Triceps Kickback', warmup: '1', working: wSets, reps: '12-15', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col2, rest: '1-2 min', sub1: 'DB Triceps Kickback', sub2: 'Bench Dip', notes: 'Can be done upright or bent over. When in the full squeeze, your shoulder should be positioned back behind your torso.' },
    { name: 'Lying Leg Raise', warmup: '1-2', working: wSets, reps: '10-20', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col2, rest: '1-2 min', sub1: 'Hanging Leg Raise', sub2: 'Modified Candlestick', notes: 'Perform slowly; focus on keeping your lower back against the ground throughout the set.' },
  ];
}

export function foundationLegsHypertrophy(week) {
  const w = week;
  const wSets = w <= 2 ? 1 : 2;
  const earlyRPE = w <= 2 ? 'N/A' : '~7';
  const lastRPE_col1 = w == 1 ? '~6' : '~7';
  const lastRPE_col2 = w == 1 ? '~7' : '~8';
  return [
    { name: 'Leg Press', warmup: '2-4', working: wSets, reps: '8-10', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col1, rest: '2-3 min', sub1: 'Smith Machine Static Lunge', sub2: 'DB Walking Lunge', notes: 'Feet lower on the platform for more quad focus. Get as deep as you can without excessive back rounding. Control the negative and do a slight pause at the bottom.' },
    { name: 'Seated Leg Curl', warmup: '1-2', working: wSets, reps: '10-12', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col2, rest: '1-2 min', sub1: 'Lying Leg Curl', sub2: 'Nordic Ham Curl', notes: 'Lean forward over the machine to get a maximum stretch in your hamstrings.' },
    { name: 'Walking Lunge', warmup: '2-3', working: wSets, reps: '8-10', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col1, rest: '2-3 min', sub1: 'DB Step-Up', sub2: 'Goblet Squat', notes: 'Take medium strides. Minimize contribution from the back leg.' },
    { name: 'Machine Hip Abduction', warmup: '1-2', working: wSets, reps: '10-12', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col2, rest: '1-2 min', sub1: 'Cable Hip Abduction', sub2: 'Lateral Band Walk', notes: 'If possible, use pads to increase the range of motion. Lean forward and grab the machine rails to stretch the glutes further.' },
    { name: 'Standing Calf Raise', warmup: '1-2', working: wSets, reps: '10-12', technique: 'N/A', earlyRPE, lastRPE: lastRPE_col2, rest: '1-2 min', sub1: 'Seated Calf Raise', sub2: 'Leg Press Calf Press', notes: '1-2 second pause at the bottom. Think about rolling your ankle back and forth on the balls of your feet.' },
  ];
}

// Ramping Block Days (Weeks 6–12)
export function rampingUpperStrength(week) {
  const w = week;
  return [
    { name: '45° Incline DB Press', warmup: '2-3', working: w == 6 ? 1 : 3, reps: '8-10', technique: 'N/A', earlyRPE: w==6?'N/A':'~7-8', lastRPE: w==6?'~6':'~7-8', rest: '3-5 min', sub1: '45° Incline Barbell Press', sub2: '45° Incline Machine Press', notes: '1 second pause at the bottom of each rep while maintaining tension on the pecs.' },
    { name: 'Pec Deck', warmup: '1-2', working: w == 6 ? 1 : 2, reps: '10-12', technique: 'N/A', earlyRPE: w==6?'N/A':'~7-8', lastRPE: w==6?'~7':'~8-9', rest: '1-2 min', sub1: 'Cable Crossover Ladder', sub2: 'Bottom-Half DB Flye', notes: 'Focus on bringing your elbows together — not your hands.' },
    { name: 'Dual-Handle Lat Pulldown', warmup: '1-2', working: w == 6 ? 1 : 3, reps: '10-12', technique: 'N/A', earlyRPE: w==6?'N/A':'~7-8', lastRPE: w==6?'~6':'~7-8', rest: '2-3 min', sub1: 'Wide-Grip Lat Pulldown', sub2: 'Wide-Grip Pull-Up', notes: 'Lean back by ~15° and drive your elbows down as you squeeze your shoulder blades together. Should feel like a mix of lats and mid-traps.' },
    { name: 'High-Cable Lateral Raise', warmup: '1-2', working: w == 6 ? 1 : 2, reps: '10-12', technique: w >= 7 ? 'Failure' : 'N/A', earlyRPE: w>=7?'~8-9':(w==6?'N/A':'~7-8'), lastRPE: w>=7?'10':(w==6?'~6':'~7-8'), rest: '1-2 min', sub1: 'High-Cable Cuffed Lateral Raise', sub2: 'Lean-In DB Lateral Raise', notes: 'Focus on squeezing your lateral delt to move the weight.' },
    { name: 'Smith Machine Row', warmup: '1-2', working: w == 6 ? 1 : 2, reps: '8-10', technique: 'N/A', earlyRPE: w==6?'N/A':'~7-8', lastRPE: w==6?'~6':'~7-8', rest: '2-3 min', sub1: 'Pendlay Deficit Row', sub2: 'Single-Arm DB Row', notes: 'Focus on squeezing your shoulder blades together, keeping your elbows at a ~45° angle.' },
    { name: 'Overhead Cable Triceps Extension (Bar)', warmup: '1', working: w == 6 ? 1 : 2, reps: '10-12', technique: w >= 7 ? 'Failure' : 'N/A', earlyRPE: w>=7?'~8-9':(w==6?'N/A':'~7-8'), lastRPE: w>=7?'10':(w==6?'~7':'~7-8'), rest: '1-2 min', sub1: 'Overhead Cable Triceps Extension (Rope)', sub2: 'DB Skull Crusher', notes: 'Optionally pause for 0.5-1 second in the stretched aspect of each rep.' },
    { name: 'Bayesian Cable Curl', warmup: '1', working: w == 6 ? 1 : 2, reps: '10-12', technique: w >= 7 ? 'Failure' : 'N/A', earlyRPE: w>=7?'~8-9':(w==6?'N/A':'~7-8'), lastRPE: w>=7?'10':(w==6?'~7':'~7-8'), rest: '1-2 min', sub1: 'Seated Super-Bayesian High Cable Curl', sub2: 'Incline DB Stretch Curl', notes: 'If you have a left-right bicep size imbalance, do these 1 arm at a time, starting with the weaker arm. Otherwise do both arms simultaneously.' },
  ];
}

export function rampingLowerStrength(week) {
  const w = week;
  const wSets1 = w == 6 ? 1 : (w >= 7 ? 2 : 2);
  const wSets2 = w == 6 ? 1 : 3;
  const lastRPE_n = w == 6 ? '~7' : (w >= 7 ? '~8-9' : '~8-9');
  const failure = w >= 7;
  return [
    { name: 'Lying Leg Curl', warmup: '2', working: wSets1, reps: '10-12', technique: 'N/A', earlyRPE, lastRPE: w==6?'~7':'~8-9', rest: '1-2 min', sub1: 'Seated Leg Curl', sub2: 'Nordic Ham Curl', notes: 'Set the machine so that you get the biggest stretch possible at the bottom. Prevent your butt from popping up as you curl.' },
    { name: 'Smith Machine Static Lunge w/ Elevated Front Foot', warmup: '2-4', working: wSets2, reps: '8-10', technique: 'N/A', earlyRPE, lastRPE: w==6?'~6':'~7-8', rest: '3-5 min', sub1: 'DB Bulgarian Split Squat', sub2: 'High-Bar Back Squat', notes: 'Elevate your front foot on a small box. Minimize contribution from your back leg.' },
    { name: '45° Hyperextension', warmup: '2-4', working: wSets2, reps: '8-10', technique: 'N/A', earlyRPE, lastRPE: w==6?'~6':'~7-8', rest: '2-3 min', sub1: 'Glute-Ham Raise', sub2: 'Cable Pull-Through', notes: 'Squeeze your glutes hard at the top of each rep. Slow controlled reps on the way down, followed by an explosive positive.' },
    { name: 'Leg Extension', warmup: '1-2', working: wSets1, reps: '10-12', technique: failure ? 'Failure' : 'N/A', earlyRPE: failure?'~8-9':earlyRPE, lastRPE: failure?'10':lastRPE_n, rest: '1-2 min', sub1: 'Reverse Nordic', sub2: 'Sissy Squat', notes: 'Set the seat back as far as possible. Grab the handles to pull your butt into the seat. Use a 2-3 second negative. Feel your quads pulling apart.' },
    { name: 'Leg Press Calf Press', warmup: '1-2', working: wSets1, reps: '8-10', technique: failure ? 'Failure' : 'N/A', earlyRPE: failure?'~8-9':earlyRPE, lastRPE: failure?'10':lastRPE_n, rest: '1-2 min', sub1: 'Seated Calf Raise', sub2: 'Standing Calf Raise', notes: '1-2 second pause at the bottom. Think about rolling your ankle back and forth on the balls of your feet.' },
    { name: 'Machine Crunch', warmup: '1', working: wSets1, reps: '10-12', technique: failure ? 'Failure' : 'N/A', earlyRPE: failure?'~8-9':earlyRPE, lastRPE: failure?'10':lastRPE_n, rest: '1-2 min', sub1: 'Decline Weighted Crunch', sub2: 'Cable Crunch', notes: 'Round your lower back as you crunch. Maintain a mind-muscle connection with your 6-pack.' },
  ];
}

export function rampingPullHypertrophy(week) {
  const w = week;
  const wSets1 = w == 6 ? 1 : 2;
  const wSets2 = w == 6 ? 1 : 3;
  const earlyRPE = w == 6 ? 'N/A' : (w >= 7 ? '~7-8' : '~7');
  const failure = w >= 7;
  return [
    { name: 'Lean-Back Lat Pulldown', warmup: '2-3', working: wSets1, reps: '10-12', technique: 'N/A', earlyRPE, lastRPE: w==6?'~6':'~7-8', rest: '2-3 min', sub1: 'Lean-Back Machine Pulldown', sub2: 'Lean-Back Pull-Up', notes: 'Initiate with a straight up posture. As you pull the bar down, lean back by about 15-30° to get the mid-back more involved. Softly touch the bar to your chest on every rep.' },
    { name: 'Chest-Supported T-Bar Row', warmup: '2-3', working: wSets2, reps: '10-12', technique: failure ? 'Failure' : 'N/A', earlyRPE: failure?'~8-9':earlyRPE, lastRPE: failure?'10':(w==6?'~6':'~7-8'), rest: '2-3 min', sub1: 'Chest-Supported Machine Row', sub2: 'Incline Chest-Supported DB Row', notes: 'Flare elbows out at roughly 45° and squeeze your shoulder blades together hard at the top of each rep.' },
    { name: '1-Arm 45° Cable Rear Delt Flye', warmup: '1-2', working: wSets1, reps: '12-15', technique: failure ? 'Failure' : 'N/A', earlyRPE: failure?'~8-9':earlyRPE, lastRPE: failure?'10':(w==6?'~7':'~7-8'), rest: '1-2 min', sub1: 'Rope Face Pull', sub2: 'Reverse Pec Deck', notes: 'Pause for 1-2 seconds in the squeeze of each rep. Contract the rear delts hard!' },
    { name: 'Cable Paused Shrug-In', warmup: '2-3', working: wSets1, reps: '12-15', technique: 'N/A', earlyRPE: w==6?'N/A':'~7', lastRPE: w==6?'~6':'~8-9', rest: '1-2 min', sub1: 'Machine Shrug', sub2: 'DB Shrug', notes: 'Shrug up and in. Think about shrugging "up to your ears." 1-2 second pause in the squeeze (at the top), then another 1-2 second pause in the stretch (at the bottom).' },
    { name: 'Cable Rope Hammer Curl', warmup: '1', working: wSets2, reps: '12-15', technique: 'N/A', earlyRPE: w==6?'N/A':'~7', lastRPE: w==6?'~7':'~8-9', rest: '1-2 min', sub1: 'DB Hammer Curl', sub2: 'Hammer Preacher Curl', notes: 'Squeeze the rope hard as you curl the weight up. Smooth, controlled reps.' },
    { name: 'DB Concentration Curl', warmup: '1', working: wSets1, reps: '15-20', technique: failure ? 'Failure' : 'N/A', earlyRPE: failure?'~8-9':(w==6?'N/A':'~7'), lastRPE: failure?'10':(w==6?'~7':'~7-8'), rest: '1-2 min', sub1: 'Concentration Cable Curl', sub2: 'DB Preacher Curl', notes: 'Smooth, controlled reps. Mind-muscle connection with the biceps.' },
  ];
}

export function rampingPushHypertrophy(week) {
  const w = week;
  const wSets1 = w == 6 ? 1 : 2;
  const wSets2 = w == 6 ? 1 : 3;
  const failure = w >= 7;
  return [
    { name: 'Machine Chest Press', warmup: '2-4', working: wSets2, reps: '10-12', technique: 'N/A', earlyRPE, lastRPE: w==6?'~6':'~7-8', rest: '3-5 min', sub1: 'Barbell Bench Press', sub2: 'DB Bench Press', notes: '1 second pause at the bottom of each rep while maintaining tension on the pecs.' },
    { name: 'Seated DB Shoulder Press', warmup: '2-3', working: wSets1, reps: '10-12', technique: 'N/A', earlyRPE, lastRPE: w==6?'~6':'~7-8', rest: '2-3 min', sub1: 'Cable Shoulder Press', sub2: 'Machine Shoulder Press', notes: 'Ensure that your elbows break at least 90°. Mind-muscle connection with your delts. Smooth, controlled reps.' },
    { name: 'Bottom-Half Seated Cable Flye', warmup: '1-2', working: wSets1, reps: '12-15', technique: failure ? 'Failure' : 'N/A', earlyRPE: failure?'~8-9':earlyRPE, lastRPE: failure?'10':(w==6?'~7':'~7-8'), rest: '1-2 min', sub1: 'Bottom-Half DB Flye', sub2: 'Low-to-High Cable Crossover', notes: 'All reps in the bottom half of the ROM. Focus on feeling a deep stretch in your pecs at the bottom.' },
    { name: 'High-Cable Lateral Raise', warmup: '1', working: wSets1, reps: '12-15', technique: failure ? 'Failure' : 'N/A', earlyRPE: failure?'~8-9':earlyRPE, lastRPE: failure?'10':(w==6?'~7':'~7-8'), rest: '1-2 min', sub1: 'High-Cable Cuffed Lateral Raise', sub2: 'Lean-In DB Lateral Raise', notes: 'Focus on squeezing your lateral delt to move the weight.' },
    { name: 'EZ-Bar Skull Crusher', warmup: '1', working: wSets2, reps: '12-15', technique: 'N/A', earlyRPE, lastRPE: w==6?'~7':'~8-9', rest: '1-2 min', sub1: 'DB Skull Crusher', sub2: 'Katana Triceps Extension', notes: 'Optionally pause for 0.5-1 second in the stretched aspect of each rep.' },
    { name: 'Triceps Pressdown (Bar)', warmup: '1', working: wSets1, reps: '15-20', technique: failure ? 'Failure' : 'N/A', earlyRPE: failure?'~8-9':earlyRPE, lastRPE: failure?'10':(w==6?'~7':'~7-8'), rest: '1-2 min', sub1: 'Triceps Pressdown (Rope)', sub2: 'DB Triceps Kickback', notes: 'Focus on squeezing your triceps to move the weight.' },
    { name: 'Ab Wheel Rollout', warmup: '1-2', working: wSets1, reps: '12-15', technique: failure ? 'Failure' : 'N/A', earlyRPE: failure?'~8-9':earlyRPE, lastRPE: failure?'10':(w==6?'~7':'~7-8'), rest: '1-2 min', sub1: 'Swiss Ball Rollout', sub2: 'Long-Lever Plank', notes: 'Don\'t just bend at your hips — use your abs to lower and pull back up. If you lack core strength to fully extend, progressively increase ROM week to week.' },
  ];
}

export function rampingLegsHypertrophy(week) {
  const w = week;
  const wSets1 = w == 6 ? 1 : 2;
  const wSets2 = w == 6 ? 1 : 3;
  const failure = w >= 7;
  return [
    { name: 'Hack Squat', warmup: '2-4', working: wSets2, reps: '10-12', technique: 'N/A', earlyRPE, lastRPE: w==6?'~6':'~7-8', rest: '2-3 min', sub1: 'Leg Press', sub2: 'DB Walking Lunge', notes: 'Use a controlled negative (don\'t free fall) and then explode on the positive.' },
    { name: 'Seated Leg Curl', warmup: '1-2', working: wSets1, reps: '12-15', technique: failure ? 'Failure' : 'N/A', earlyRPE: failure?'~8-9':earlyRPE, lastRPE: failure?'10':(w==6?'~7':'~7-8'), rest: '1-2 min', sub1: 'Lying Leg Curl', sub2: 'Nordic Ham Curl', notes: 'Lean forward over the machine to get a maximum stretch in your hamstrings.' },
    { name: 'Walking Lunge', warmup: '2-3', working: wSets1, reps: '10-12', technique: 'N/A', earlyRPE, lastRPE: w==6?'~6':'~7-8', rest: '2-3 min', sub1: 'Smith Machine Static Lunge', sub2: 'DB Static Lunge', notes: 'Take medium strides. Minimize contribution from the back leg.' },
    { name: 'Machine Hip Abduction', warmup: '1-2', working: wSets1, reps: '12-15', technique: failure ? 'Failure' : 'N/A', earlyRPE: failure?'~8-9':earlyRPE, lastRPE: failure?'10':(w==6?'~7':'~7-8'), rest: '1-2 min', sub1: 'Cable Hip Abduction', sub2: 'Lateral Band Walk', notes: 'If possible, use pads to increase the range of motion. Lean forward and grab the machine rails to stretch the glutes further.' },
    { name: 'Standing Calf Raise', warmup: '1-2', working: wSets2, reps: '12-15', technique: failure ? 'Failure' : 'N/A', earlyRPE: failure?'~8-9':earlyRPE, lastRPE: failure?'10':(w==6?'~7':'~7-8'), rest: '1-2 min', sub1: 'Seated Calf Raise', sub2: 'Leg Press Calf Press', notes: '1-2 second pause at the bottom. Think about rolling your ankle back and forth on the balls of your feet.' },
  ];
}

export function getWeekDays(week) {
  const isFoundation = week <= 5;
  if (isFoundation) {
    return [
      { label: 'Day 1 — Upper (Strength)', key: 'upper', exercises: foundationUpperStrength(week) },
      { label: 'Day 2 — Lower (Strength)', key: 'lower', exercises: foundationLowerStrength(week) },
      { label: 'Rest Day', key: 'rest1', isRest: true },
      { label: 'Day 3 — Pull (Hypertrophy)', key: 'pull', exercises: foundationPullHypertrophy(week) },
      { label: 'Day 4 — Push (Hypertrophy)', key: 'push', exercises: foundationPushHypertrophy(week) },
      { label: 'Day 5 — Legs (Hypertrophy)', key: 'legs', exercises: foundationLegsHypertrophy(week) },
      { label: 'Rest Day', key: 'rest2', isRest: true },
    ];
  } else {
    return [
      { label: 'Day 1 — Upper (Strength)', key: 'upper', exercises: rampingUpperStrength(week) },
      { label: 'Day 2 — Lower (Strength)', key: 'lower', exercises: rampingLowerStrength(week) },
      { label: 'Rest Day', key: 'rest1', isRest: true },
      { label: 'Day 3 — Pull (Hypertrophy)', key: 'pull', exercises: rampingPullHypertrophy(week) },
      { label: 'Day 4 — Push (Hypertrophy)', key: 'push', exercises: rampingPushHypertrophy(week) },
      { label: 'Day 5 — Legs (Hypertrophy)', key: 'legs', exercises: rampingLegsHypertrophy(week) },
      { label: 'Rest Day', key: 'rest2', isRest: true },
    ];
  }
}


