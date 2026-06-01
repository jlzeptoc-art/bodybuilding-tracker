// Auto-extracted from legacy tracker
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

// Exercise links map (YouTube demo searches)
export const EX_LINKS = {
  '45° Incline Barbell Press': 'https://www.youtube.com/results?search_query=45+degree+incline+barbell+press+jeff+nippard',
  '45° Incline DB Press': 'https://www.youtube.com/results?search_query=45+degree+incline+dumbbell+press',
  'Cable Crossover Ladder': 'https://www.youtube.com/results?search_query=cable+crossover+ladder+jeff+nippard',
  'Pec Deck': 'https://www.youtube.com/results?search_query=pec+deck+fly+form',
  'Wide-Grip Pull-Up': 'https://www.youtube.com/results?search_query=wide+grip+pull+up+form',
  'Dual-Handle Lat Pulldown': 'https://www.youtube.com/results?search_query=dual+handle+lat+pulldown',
  'High-Cable Lateral Raise': 'https://www.youtube.com/results?search_query=high+cable+lateral+raise+form',
  'Pendlay Deficit Row': 'https://www.youtube.com/results?search_query=pendlay+row+deficit+form',
  'Smith Machine Row': 'https://www.youtube.com/results?search_query=smith+machine+row+form',
  'Overhead Cable Triceps Extension (Bar)': 'https://www.youtube.com/results?search_query=overhead+cable+triceps+extension+bar',
  'Bayesian Cable Curl': 'https://www.youtube.com/results?search_query=bayesian+cable+curl+form',
  'Lying Leg Curl': 'https://www.youtube.com/results?search_query=lying+leg+curl+form',
  'Smith Machine Squat': 'https://www.youtube.com/results?search_query=smith+machine+squat+form+jeff+nippard',
  'Smith Machine Static Lunge w/ Elevated Front Foot': 'https://www.youtube.com/results?search_query=smith+machine+static+lunge+elevated+front+foot',
  'Barbell RDL': 'https://www.youtube.com/results?search_query=barbell+rdl+form+jeff+nippard',
  '45° Hyperextension': 'https://www.youtube.com/results?search_query=45+degree+hyperextension+form',
  'Leg Extension': 'https://www.youtube.com/results?search_query=leg+extension+machine+form',
  'Standing Calf Raise': 'https://www.youtube.com/results?search_query=standing+calf+raise+form',
  'Leg Press Calf Press': 'https://www.youtube.com/results?search_query=leg+press+calf+raise+form',
  'Cable Crunch': 'https://www.youtube.com/results?search_query=cable+crunch+form',
  'Machine Crunch': 'https://www.youtube.com/results?search_query=machine+crunch+form',
  'Neutral-Grip Lat Pulldown': 'https://www.youtube.com/results?search_query=neutral+grip+lat+pulldown+form',
  'Chest-Supported Machine Row': 'https://www.youtube.com/results?search_query=chest+supported+machine+row+form',
  'Chest-Supported T-Bar Row': 'https://www.youtube.com/results?search_query=chest+supported+t+bar+row',
  '1-Arm 45° Cable Rear Delt Flye': 'https://www.youtube.com/results?search_query=1+arm+cable+rear+delt+fly+form',
  'Machine Shrug': 'https://www.youtube.com/results?search_query=machine+shrug+form',
  'Cable Paused Shrug-In': 'https://www.youtube.com/results?search_query=cable+shrug+form',
  'EZ-Bar Cable Curl': 'https://www.youtube.com/results?search_query=ez+bar+cable+curl+form',
  'Machine Preacher Curl': 'https://www.youtube.com/results?search_query=machine+preacher+curl+form',
  'Barbell Bench Press': 'https://www.youtube.com/results?search_query=barbell+bench+press+form+jeff+nippard',
  'Machine Chest Press': 'https://www.youtube.com/results?search_query=machine+chest+press+form',
  'Machine Shoulder Press': 'https://www.youtube.com/results?search_query=machine+shoulder+press+form',
  'Seated DB Shoulder Press': 'https://www.youtube.com/results?search_query=seated+dumbbell+shoulder+press+form',
  'Bottom-Half DB Flye': 'https://www.youtube.com/results?search_query=bottom+half+dumbbell+fly+form',
  'Bottom-Half Seated Cable Flye': 'https://www.youtube.com/results?search_query=seated+cable+fly+bottom+half',
  'Cable Triceps Kickback': 'https://www.youtube.com/results?search_query=cable+triceps+kickback+form',
  'Lying Leg Raise': 'https://www.youtube.com/results?search_query=lying+leg+raise+form',
  'Ab Wheel Rollout': 'https://www.youtube.com/results?search_query=ab+wheel+rollout+form',
  'Leg Press': 'https://www.youtube.com/results?search_query=leg+press+form+jeff+nippard',
  'Hack Squat': 'https://www.youtube.com/results?search_query=hack+squat+form+jeff+nippard',
  'Seated Leg Curl': 'https://www.youtube.com/results?search_query=seated+leg+curl+form',
  'Walking Lunge': 'https://www.youtube.com/results?search_query=walking+lunge+form',
  'Machine Hip Abduction': 'https://www.youtube.com/results?search_query=machine+hip+abduction+form',
  'Lean-Back Lat Pulldown': 'https://www.youtube.com/results?search_query=lean+back+lat+pulldown+form',
  'EZ-Bar Skull Crusher': 'https://www.youtube.com/results?search_query=ez+bar+skull+crusher+form',
  'Triceps Pressdown (Bar)': 'https://www.youtube.com/results?search_query=triceps+pressdown+bar+form',
  'Cable Rope Hammer Curl': 'https://www.youtube.com/results?search_query=cable+rope+hammer+curl+form',
  'DB Concentration Curl': 'https://www.youtube.com/results?search_query=dumbbell+concentration+curl+form',
};

export function getLink(name: string): string | null {
  return (EX_LINKS as Record<string, string>)[name] || null;
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
  const wSets = w == 6 ? 1 : (w >= 7 ? 2 : 2);
  const earlyRPE = w == 6 ? 'N/A' : '~7-8';
  const lastRPE = w == 6 ? '~6' : (w >= 7 ? '~7-8' : '~7-8');
  const failureExes = w >= 7 ? ['High-Cable Lateral Raise','Overhead Cable Triceps Extension (Bar)','Bayesian Cable Curl'] : [];
  
  function tech(name) { return failureExes.includes(name) ? 'Failure' : 'N/A'; }
  function er(name) { return failureExes.includes(name) ? (w >= 7 ? '~8-9' : 'N/A') : earlyRPE; }
  function lr(name) { return failureExes.includes(name) ? (w >= 7 ? '10' : '~7') : (w == 6 ? '~6' : '~7-8'); }

  const highLR = w == 6 ? '~7' : (w >= 7 ? '~8-9' : '~8-9');
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
  const earlyRPE = w == 6 ? 'N/A' : '~7-8';
  const lastRPE_n = w == 6 ? '~7' : (w >= 7 ? '~8-9' : '~8-9');
  const lastRPE_f = w >= 7 ? '10' : (w == 6 ? '~7' : '~7-8');
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
  const earlyRPE = w == 6 ? 'N/A' : '~7-8';
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
  const earlyRPE = w == 6 ? 'N/A' : '~7-8';
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


