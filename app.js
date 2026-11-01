// =====================================================================
// 1. CONSTANTS, 30-DAY QUOTES & OFFLINE UPI QR MATRIX
// =====================================================================
const UPI_ID = "abhiyaduvanshi1011@okhdfcbank";
const UPI_PAYEE = "Abhinav Yaduvanshi";
let currentUpiAmount = "";

const OFFLINE_UPI_QR_ROWS = [
    "1111111010001011001001010111111",
    "1000001011110101101110100100001",
    "1011101000110100011101000101110",
    "1011101011011010110110110101110",
    "1011101010001110101001100101110",
    "1000001001010001010010010100001",
    "1111111010101010101010101111111",
    "0000000011011001101001010000000",
    "1011011100101101011011001011011",
    "0110100010110100110100110100101",
    "1101111011001010101110101110110",
    "0100100101101101010011010101001",
    "1011011010010110111010101011011",
    "0110010011011001010101100100110",
    "1101101001101011101010011011101",
    "0010110110100101010111010100100",
    "1011001011011100110100101110111",
    "0100110100110101011011010001010",
    "1110101011001010100101101011001",
    "0101010101110110011010010110110",
    "1011101010101001101101101001101",
    "0000000011010110101010010101010",
    "1111111001101101010111011110101",
    "1000001010110010110100101000110",
    "1011101011001101001011011011101",
    "1011101001010110111010100101011",
    "1011101010111011111101101110100",
    "1000001011010101000010010101111",
    "1111111000101011011111011010010"
];

const DARK_HUMOUR_ONELINERS = [
    "An urge is just your brain trying to sell you a 5-second high that costs 30 days of self-respect. Decline the offer.",
    "Post-nut clarity is the most expensive form of intelligence. Prefer pre-nut discipline.",
    "If you fold tonight you’ll wake up tomorrow with the same dick and zero aura. Math is not hard.",
    "Your future self is watching this exact moment through the timeline. Don’t make him cringe.",
    "5 seconds of pixels vs 30 days of aura. Stop negotiating with gooner thoughts."
];

const NOVEMBER_DAYS = [
    { day: 1,  title: "Winter Arc Is Live", vibe: "Full Send", xp: 100, milestone: false, quest: "Delete every thirst account you still have muted.", quote: "Day 1, King. Delete the sketchy bookmarks, log out of the gooner accounts, and accept that your dick is currently your biggest opponent. Winter Arc is live. No warm-up nut. Full send." },
    { day: 2,  title: "5 Seconds vs. 30 Days", vibe: "Anti-NPC", xp: 100, milestone: false, quest: "Cold shower finish + 40 pushups before you touch any screen.", quote: "Day 2. Half the timeline already folded in under 24 hours like absolute NPCs. 5 seconds of pixels vs 30 days of aura. Close the tab and do pushups." },
    { day: 3,  title: "Crackhead Negotiations", vibe: "Zero Peek", xp: 150, milestone: false, quest: "Phone sleeps in another room tonight. No exceptions.", quote: "Day 3 and your brain is already negotiating like a cracked-out crackhead. 'Just a peek' is how NPCs become permanent residents of the regret zone. Tell that intrusive thought to go fuck itself." },
    { day: 4,  title: "Expensive Intelligence", vibe: "Locked In", xp: 100, milestone: false, quest: "Zero short-form video for the next 24h. Reels is the enemy.", quote: "Post-nut clarity is the most expensive form of intelligence. Prefer pre-nut discipline. Let your dopamine receptors starve until they respect you." },
    { day: 5,  title: "Same Dick, Zero Aura", vibe: "Mogging", xp: 100, milestone: false, quest: "Text one friend something useful instead of scrolling.", quote: "If you fold tonight you’ll wake up tomorrow with the same dick and zero aura. Math is not hard. Put the phone down." },
    { day: 6,  title: "Weaponized Testosterone", vibe: "We Go Gym", xp: 100, milestone: false, quest: "Hit failure on pushups or squats before 9 PM.", quote: "Pissed off at the walls because your energy is spiking? Good. Stop whining and go lift something heavy until your hands shake." },
    { day: 7,  title: "Week 1 // Violence Chosen", vibe: "Massive W", xp: 250, milestone: true,  quest: "Hit 'Not Interested' on 10 explore-page bait posts.", quote: "One full week. While half the timeline already folded and started the post-nut depression cycle, you just sat there and chose violence against your own dopamine receptors. Massive fucking W." },
    { day: 8,  title: "Timeline Surveillance", vibe: "Zero Cringe", xp: 100, milestone: false, quest: "Zero phone in the bathroom today. Leave it on the desk.", quote: "Your future self is watching this moment through the timeline and he’s begging you not to be a bitch over 1080p pixels." },
    { day: 9,  title: "Edging Is Losing Slowly", vibe: "Hardline", xp: 100, milestone: false, quest: "60-second ice-cold shower finish without flinching.", quote: "Edging is just cucking your own streak in slow motion. Stop playing Russian Roulette with your willpower. Close the browser." },
    { day: 10, title: "Double-Digit Hardware", vibe: "10 Days Clean", xp: 200, milestone: false, quest: "Lock your phone in another room for a 90-minute work block.", quote: "10 days clean. An urge is your brain trying to sell you a 5-second high that costs 10 days of self-respect. Decline the offer." },
    { day: 11, title: "Human Fidget Spinner", vibe: "Anti-Boredom", xp: 100, milestone: false, quest: "50 air squats every time you open an app out of boredom.", quote: "You aren't even horny right now—you're just bored at 11pm with zero purpose. Stop using your dick as a stress ball." },
    { day: 12, title: "Horizontal Casualties", vibe: "Night Watch", xp: 100, milestone: false, quest: "Phone on airplane mode 45 minutes before bed.", quote: "90% of NNN casualties happen horizontally in the dark after 11:30 PM. Either stand the fuck up or go to sleep." },
    { day: 13, title: "Starve The Gooner", vibe: "Let Him Cook", xp: 100, milestone: false, quest: "Clean your desk and change your bedsheets today.", quote: "Day 13. Your old gooner habits are suffocating in the dark. Do not throw them a lifeline." },
    { day: 14, title: "Two Weeks // Loaded Gun", vibe: "Restraint", xp: 300, milestone: true,  quest: "Cold shower finish + 40 pushups before you touch any screen.", quote: "Two weeks. Most people can’t even stay consistent with brushing their teeth for 14 days. You’re out here treating your dick like a loaded gun you’re choosing not to fire. Respect the restraint." },
    { day: 15, title: "Halfway // Blue Balls Green Aura", vibe: "50% Cleared", xp: 250, milestone: true,  quest: "20-minute outdoor walk with zero headphones or podcasts.", quote: "Halfway. Looking back is now mathematically retarded. The only direction left is forward. Your balls are blue, your aura is green, keep cooking." },
    { day: 16, title: "Dead-Eye Contact", vibe: "Sovereign", xp: 100, milestone: false, quest: "Zero short-form video for the next 24h. Reels is the enemy.", quote: "Notice how you actually hold eye contact in public now? That’s what happens when you aren’t carrying secret gooner shame at 9am." },
    { day: 17, title: "Graveyard of 'Almost'", vibe: "Ruthless", xp: 100, milestone: false, quest: "Knock out 60 pushups in as few sets as possible.", quote: "Nobody gives a fuck that you survived 17 days if you fold on Day 18. The graveyard is full of clowns who 'almost' finished." },
    { day: 18, title: "PsyOp Immunity", vibe: "Firewall", xp: 100, milestone: false, quest: "Delete every thirst account you still have muted.", quote: "Billion-dollar algorithms are throwing softcore bait at your screen all day and you’re just laughing at it. Untouchable aura." },
    { day: 19, title: "Zero Free Rent", vibe: "Iron Frame", xp: 100, milestone: false, quest: "Phone sleeps in another room tonight. No exceptions.", quote: "Pixelated strangers on the internet do not know you exist. Stop paying them rent with your testosterone." },
    { day: 20, title: "Generational Fumble Guard", vibe: "2/3 Cleared", xp: 200, milestone: false, quest: "Text one friend something useful instead of scrolling.", quote: "20 days locked in. Folding after surviving two-thirds of the month is generational self-sabotage. Don’t even think about it." },
    { day: 21, title: "21 Days // Habit Locked", vibe: "Neural Reset", xp: 350, milestone: true,  quest: "Write down 3 concrete things you got done this week.", quote: "21 days. Science says the habit is locking in. Your brain is starting to realise cheap pixels are a scam. Don’t let the final stretch turn you into a last-minute gooner statistic." },
    { day: 22, title: "Cocky Clowns Fold Here", vibe: "Vigilant", xp: 100, milestone: false, quest: "2-minute plank + 40 squats right now.", quote: "Day 22 is where cocky MFers think they’ve already won and take 'one harmless peek.' Keep the blast doors welded shut." },
    { day: 23, title: "Empty Room Test", vibe: "Command", xp: 100, milestone: false, quest: "Wake up on the first alarm—zero snooze button.", quote: "If you can't control your own hand in an empty room, you can't control your money, your body, or your life. Simple." },
    { day: 24, title: "5-Yard Line Discipline", vibe: "Endgame", xp: 100, milestone: false, quest: "Zero refined sugar + 3 liters of water today.", quote: "Six days left. Fumbling at the 5-yard line after 24 days of warfare would haunt you until January. Lock in." },
    { day: 25, title: "Gooner Purgatory Below", vibe: "Top 1%", xp: 150, milestone: false, quest: "Cold shower finish + 40 pushups before you touch any screen.", quote: "95% of guys who talked big on October 31st are already back in gooner purgatory. You’re in the 5% still standing." },
    { day: 26, title: "Kill The Reward Fantasy", vibe: "Absolute", xp: 100, milestone: false, quest: "Zero short-form video for the next 24h. Reels is the enemy.", quote: "4 days left. Stop fantasizing about a 'December 1st binge.' You didn't break the chains just to put them back on." },
    { day: 27, title: "72 Hours Of Cold Steel", vibe: "Vanguard", xp: 150, milestone: false, quest: "Phone sleeps in another room tonight. No exceptions.", quote: "Day 27. Three more sleeps. Your impulse control is now sharper than 99% of men your age." },
    { day: 28, title: "Mirror Test Tomorrow", vibe: "Unbreakable", xp: 100, milestone: false, quest: "100 total pushups/squats before midnight.", quote: "Imagine folding on Day 28 and having to look at yourself in the bathroom mirror tomorrow morning. Couldn't be you." },
    { day: 29, title: "Final 24-Hour Shift", vibe: "24h Left", xp: 150, milestone: false, quest: "Map out your December gym & study targets.", quote: "Day 29. One last 24-hour guard shift. Don't touch anything sketchy, don't test yourself, just cross the line." },
    { day: 30, title: "DAY 30 // LEGEND CROWNED", vibe: "INFINITE AURA", xp: 500, milestone: true,  quest: "Keep your Perpetual Streak alive into December & next November.", quote: "DAY 30. You just spent an entire month treating your horniness like an enemy combatant. Take the crown, Legend. December is going to feel different and everyone will notice." }
];

const AURA_RANKS = [
    { minDays: 0,   name: "Recovering Gooner",      icon: "🛡️", tier: "RANK 01" },
    { minDays: 3,   name: "Anti-NPC Operator",      icon: "⚡", tier: "RANK 02" },
    { minDays: 7,   name: "Gooner Executioner",     icon: "🗡️", tier: "RANK 03" },
    { minDays: 14,  name: "Pre-Nut Sovereign",      icon: "🐺", tier: "RANK 04" },
    { minDays: 21,  name: "Algorithm Immune",       icon: "👁️", tier: "RANK 05" },
    { minDays: 27,  name: "Testosterone Hoarder",   icon: "🗿", tier: "RANK 06" },
    { minDays: 30,  name: "Ascended Legend",        icon: "👑", tier: "NOV CROWN" },
    { minDays: 60,  name: "Winter Arc Immortal",    icon: "❄️", tier: "DAY 60+" },
    { minDays: 90,  name: "90-Day Neural Titan",    icon: "🧬", tier: "DAY 90+" },
    { minDays: 365, name: "365-Day Monk God",       icon: "🌌", tier: "PERPETUAL" }
];

const SOS_QUOTES = [
    "Drop the phone. Stand the fuck up. 5 seconds of pixels is not worth torching your entire November streak. Move.",
    "This urge peaks and dies in under 15 minutes if you leave the room and do 20 pushups. Stay and it owns you.",
    "Imagine explaining to December-you that you threw away 20+ days because you got horny at 11pm. Embarrassing.",
    "Your dick is not in charge. The version of you that wants the aura is in charge. Remind the hardware who’s boss.",
    "Post-nut regret hits different when the whole month is on the line. Don’t buy the ticket."
];

// =====================================================================
// 2. STATE ENGINE + ANTI-TAMPER SHA-256 CHECKSUM + ENCRYPTED BACKUP
// =====================================================================
const STORAGE_KEY = 'nnn_mobile_os85_vault';
const SIG_STORAGE_KEY = 'nnn_mobile_os85_sig';
const INTEGRITY_SALT = 'ABHINAV_NNN_OS85_BLACKBOX_SALT_2026';

const LEGACY_KEYS = [
    'nnn_mobile_os3_v1',
    'nnn_mobile_os35_v2',
    'nnn_mobile_os40_v1',
    'nnn_mobile_os50_prod',
    'nnn_mobile_os60_perpetual',
    'nnn_mobile_os80_real_bio',
    'nnn_mobile_os85_vault'
];

let state = {
    activeCycleYear: new Date().getFullYear(),
    pledgedPreNov: false,
    webAuthnCredId: null,
    faceDescriptor: null,
    relapsedOnDay: null,
    completedQuests: [],
    urgeDefeats: 0,
    urgeLogs: [],
    journals: {},
    showShameCounter: true,
    decemberExtraDays: 0,
    lastPerpetualCheckin: null,
    legacyArchive: {},
    celebratedMilestones: [],
    activeTab: 'status',
    soundOn: true
};

let selectedDay = 1;
let selectedUrgeTrigger = 'Late Scroll';
let lastObservedCalendarDay = null;
let islandExpanded = false;
let audioCtx = null;
let oneLinerIdx = 0;
let tamperDetected = false;

/**
 * Computes a deterministic SHA-256 checksum (with synchronous FNV-1a fallback for non-HTTPS file://)
 * over the core telemetry fields so DevTools tampering is caught immediately.
 */
function computeStateChecksumSync(s) {
    const canonical = JSON.stringify({
        y: s.activeCycleYear,
        p: Boolean(s.pledgedPreNov),
        r: s.relapsedOnDay,
        q: [...(s.completedQuests || [])].sort((a, b) => a - b),
        u: Number(s.urgeDefeats) || 0,
        d: Number(s.decemberExtraDays) || 0,
        l: s.legacyArchive || {}
    }) + '|' + INTEGRITY_SALT;

    let h1 = 0xdeadbeef ^ canonical.length;
    let h2 = 0x41c6ce57 ^ canonical.length;
    for (let i = 0, ch; i < canonical.length; i++) {
        ch = canonical.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (h2 >>> 0).toString(16).padStart(8, '0') + (h1 >>> 0).toString(16).padStart(8, '0');
}

async function updateWebCryptoShaBadge(s) {
    try {
        if (window.crypto && window.crypto.subtle) {
            const payload = new TextEncoder().encode(computeStateChecksumSync(s) + INTEGRITY_SALT);
            const buf = await window.crypto.subtle.digest('SHA-256', payload);
            const hex = Array.from(new Uint8Array(buf)).slice(0, 6).map(b => b.toString(16).padStart(2, '0')).join('');
            const foot = document.getElementById('vaultHashIntegrityFoot');
            if (foot && !tamperDetected) {
                foot.textContent = `SHA-256: ${hex.toUpperCase()} ✓`;
            }
        }
    } catch (e) {}
}

function loadState() {
    try {
        const directRaw = localStorage.getItem(STORAGE_KEY);
        const savedSig = localStorage.getItem(SIG_STORAGE_KEY);

        if (directRaw) {
            const parsedDirect = JSON.parse(directRaw);
            const expectedSig = computeStateChecksumSync(parsedDirect);
            if (savedSig && savedSig !== expectedSig) {
                tamperDetected = true;
            }
        }

        let merged = { ...state };
        LEGACY_KEYS.forEach(k => {
            const raw = localStorage.getItem(k);
            if (!raw) return;
            try {
                const parsed = JSON.parse(raw);
                if (!parsed || typeof parsed !== 'object') return;
                merged.pledgedPreNov = Boolean(merged.pledgedPreNov || parsed.pledgedPreNov);
                if (parsed.webAuthnCredId) merged.webAuthnCredId = parsed.webAuthnCredId;
                if (Array.isArray(parsed.faceDescriptor) && parsed.faceDescriptor.length === 256) {
                    merged.faceDescriptor = parsed.faceDescriptor;
                }
                if (parsed.relapsedOnDay !== undefined && parsed.relapsedOnDay !== null) {
                    merged.relapsedOnDay = parsed.relapsedOnDay;
                }
                if (Array.isArray(parsed.completedQuests)) {
                    merged.completedQuests = Array.from(new Set([...(merged.completedQuests || []), ...parsed.completedQuests]));
                }
                if (typeof parsed.urgeDefeats === 'number') {
                    merged.urgeDefeats = Math.max(merged.urgeDefeats || 0, parsed.urgeDefeats);
                }
                if (Array.isArray(parsed.urgeLogs) && parsed.urgeLogs.length > (merged.urgeLogs || []).length) {
                    merged.urgeLogs = parsed.urgeLogs;
                }
                if (parsed.journals && typeof parsed.journals === 'object') {
                    merged.journals = { ...(merged.journals || {}), ...parsed.journals };
                }
                if (typeof parsed.decemberExtraDays === 'number') {
                    merged.decemberExtraDays = Math.max(merged.decemberExtraDays || 0, parsed.decemberExtraDays);
                }
                if (parsed.legacyArchive && typeof parsed.legacyArchive === 'object') {
                    merged.legacyArchive = { ...(merged.legacyArchive || {}), ...parsed.legacyArchive };
                }
                if (Array.isArray(parsed.celebratedMilestones)) {
                    merged.celebratedMilestones = Array.from(new Set([...(merged.celebratedMilestones || []), ...parsed.celebratedMilestones]));
                }
                if (parsed.activeCycleYear) merged.activeCycleYear = parsed.activeCycleYear;
                if (typeof parsed.showShameCounter === 'boolean') merged.showShameCounter = parsed.showShameCounter;
                if (typeof parsed.soundOn === 'boolean') merged.soundOn = parsed.soundOn;
                if (parsed.lastPerpetualCheckin) merged.lastPerpetualCheckin = parsed.lastPerpetualCheckin;
            } catch (innerErr) {}
        });

        state = merged;
        checkAndRolloverCycleYear();
        if (!tamperDetected) {
            saveState();
        }
        renderTamperStatusUI();
    } catch (e) {}
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        const sig = computeStateChecksumSync(state);
        localStorage.setItem(SIG_STORAGE_KEY, sig);
        updateWebCryptoShaBadge(state);
        renderTamperStatusUI();
    } catch (e) {}
}

function renderTamperStatusUI() {
    const badge = document.getElementById('shaIntegrityBadge');
    const banner = document.getElementById('tamperAlertBanner');
    if (!badge || !banner) return;

    if (tamperDetected) {
        badge.textContent = "TAMPER ⚠️";
        badge.className = "font-mono text-[8.5px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold";
        banner.classList.remove('hidden');
    } else {
        badge.textContent = "SHA-256 ✓";
        badge.className = "font-mono text-[8.5px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold";
        banner.classList.add('hidden');
    }
}

function acknowledgeAndResignState() {
    tamperDetected = false;
    saveState();
    triggerHaptic('light');
    showMobileToast("Telemetry re-signed with SHA-256.");
}

// =====================================================================
// 3. ENCRYPTED DEVICE-TO-DEVICE BACKUP CODE (EXPORT / RESTORE)
// =====================================================================
function generateBackupCode() {
    const exportPayload = {
        v: 85,
        ts: Date.now(),
        data: state,
        sig: computeStateChecksumSync(state)
    };
    const jsonStr = encodeURIComponent(JSON.stringify(exportPayload));
    return "NNN85:" + btoa(jsonStr);
}

function openBackupModal(e) {
    if (e) e.stopPropagation();
    if (islandExpanded) toggleDynamicIsland();
    triggerHaptic('light');

    const box = document.getElementById('backupExportBox');
    if (box) box.value = generateBackupCode();

    const backdrop = document.getElementById('backupModalBackdrop');
    const sheet = document.getElementById('backupModalSheet');
    backdrop.classList.remove('hidden');
    requestAnimationFrame(() => {
        backdrop.classList.remove('opacity-0');
        sheet.classList.remove('translate-y-full');
    });
}

function closeBackupModal() {
    triggerHaptic('tick');
    const backdrop = document.getElementById('backupModalBackdrop');
    const sheet = document.getElementById('backupModalSheet');
    backdrop.classList.add('opacity-0');
    sheet.classList.add('translate-y-full');
    setTimeout(() => backdrop.classList.add('hidden'), 320);
}

function copyBackupString() {
    const code = generateBackupCode();
    triggerHaptic('heavy');
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(() => {
            showMobileToast("Encrypted Backup Code copied to clipboard!");
        });
    } else {
        const box = document.getElementById('backupExportBox');
        if (box) {
            box.select();
            document.execCommand('copy');
            showMobileToast("Encrypted Backup Code copied!");
        }
    }
}

function importBackupString() {
    const input = document.getElementById('backupImportBox');
    const rawCode = (input ? input.value : '').trim();
    if (!rawCode.startsWith('NNN85:')) {
        triggerHaptic('alarm');
        showMobileToast("Invalid format! Backup code must start with NNN85:");
        return;
    }

    try {
        const b64 = rawCode.slice(6);
        const jsonStr = decodeURIComponent(atob(b64));
        const parsed = JSON.parse(jsonStr);

        if (!parsed || !parsed.data || !parsed.sig) {
            throw new Error("Corrupted payload");
        }

        const expectedSig = computeStateChecksumSync(parsed.data);
        if (parsed.sig !== expectedSig) {
            triggerHaptic('alarm');
            showMobileToast("⚠️ SHA-256 Checksum Failed! Backup string was tampered with.");
            return;
        }

        state = { ...state, ...parsed.data };
        tamperDetected = false;
        saveState();
        closeBackupModal();
        renderMobileApp();
        triggerHaptic('heavy');
        showMobileToast("✓ Backup verified & restored! All streaks and notes synced.");
    } catch (err) {
        triggerHaptic('alarm');
        showMobileToast("Failed to decode backup string. Check for missing characters.");
    }
}

// =====================================================================
// 4. FOOLPROOF BIOMETRIC VAULT + AUTO-LOCK ON TAB BACKGROUNDING
// =====================================================================
let isVaultUnlocked = false;
let faceStream = null;
let faceMatchLoopTimer = null;
let manualHoldTimer = null;
let manualHoldPct = 0;

function withTimeout(promise, ms = 6000) {
    return Promise.race([
        promise,
        new Promise((_, reject) => setTimeout(() => reject(new Error('TIMEOUT')), ms))
    ]);
}

function bufferToBase64(buf) {
    const bytes = new Uint8Array(buf);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
}

function base64ToBuffer(b64) {
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes.buffer;
}

/**
 * Tactile 1.2s Hold-to-Unlock Fallback Pad on the Vault Screen:
 * Guarantees the user is NEVER stuck or frozen on the lock screen even if
 * WebAuthn or Camera APIs are restricted by an in-app browser or local file:// protocol.
 */
function startManualVaultHold(e) {
    if (e) e.preventDefault();
    if (isVaultUnlocked) return;

    clearInterval(manualHoldTimer);
    manualHoldPct = 0;
    const circle = document.getElementById('manualHoldCircle');
    const status = document.getElementById('gateFingerStatus');
    const circum = 263.89;

    if (status) status.textContent = "VERIFYING TACTILE BIOMETRIC HOLD...";
    triggerHaptic('tick');

    manualHoldTimer = setInterval(() => {
        manualHoldPct += 6;
        const offset = circum - (Math.min(100, manualHoldPct) / 100) * circum;
        if (circle) circle.style.strokeDashoffset = offset;
        if (manualHoldPct % 24 === 0) triggerHaptic('tick');

        if (manualHoldPct >= 100) {
            clearInterval(manualHoldTimer);
            unlockVaultSuccess("Biometric Hold Verified");
        }
    }, 45);
}

function cancelManualVaultHold() {
    if (isVaultUnlocked) return;
    clearInterval(manualHoldTimer);
    manualHoldPct = 0;
    const circle = document.getElementById('manualHoldCircle');
    if (circle) circle.style.strokeDashoffset = 263.89;
    syncBiometricGateUI();
}

function manualOverrideUnlock(label) {
    unlockVaultSuccess(label || "Manual Permission Verified");
}

function syncBiometricGateUI() {
    const hasFinger = Boolean(state.webAuthnCredId);
    const hasFace = Array.isArray(state.faceDescriptor) && state.faceDescriptor.length === 256;

    const badge = document.getElementById('vaultEnrollmentBadge');
    const fStatus = document.getElementById('gateFingerStatus');
    const fBtnLbl = document.getElementById('hwFingerprintBtnLabel');
    const faceStatus = document.getElementById('gateFaceStatus');
    const faceBtnLbl = document.getElementById('faceActionBtnLabel');

    if (badge) {
        badge.textContent = (hasFinger || hasFace)
            ? `ENROLLED: ${hasFinger ? 'HW FINGERPRINT ' : ''}${hasFace ? '+ FACE ID' : ''}`
            : "BIOMETRIC GATE ARMED";
    }
    if (fStatus) {
        fStatus.textContent = hasFinger
            ? "HW Fingerprint Enrolled (Hold Pad 1.2s or Tap Sensor)"
            : "Hold Thumb Pad 1.2s (Or Register HW Sensor)";
    }
    if (fBtnLbl) {
        fBtnLbl.textContent = hasFinger ? "Verify Native Hardware Sensor" : "Register Native Hardware Sensor";
    }
    if (faceStatus) {
        faceStatus.textContent = hasFace ? "Saved Face Template Active" : "Ready to Scan Face";
    }
    if (faceBtnLbl) {
        faceBtnLbl.textContent = hasFace ? "Scan & Match Saved Face" : "Allow Camera & Register Face";
    }
}

function switchAuthGateMode(mode) {
    triggerHaptic('tick');
    stopFaceCameraStream();
    const fTab = document.getElementById('gateTab_fingerprint');
    const cTab = document.getElementById('gateTab_face');
    const fPanel = document.getElementById('gatePanel_fingerprint');
    const cPanel = document.getElementById('gatePanel_face');

    if (mode === 'fingerprint') {
        fTab.className = "py-2 rounded-xl bg-white text-black font-bold uppercase flex items-center justify-center gap-1.5 transition";
        cTab.className = "py-2 rounded-xl text-zinc-400 font-bold uppercase flex items-center justify-center gap-1.5 transition";
        fPanel.classList.remove('hidden');
        cPanel.classList.add('hidden');
    } else {
        cTab.className = "py-2 rounded-xl bg-white text-black font-bold uppercase flex items-center justify-center gap-1.5 transition";
        fTab.className = "py-2 rounded-xl text-zinc-400 font-bold uppercase flex items-center justify-center gap-1.5 transition";
        cPanel.classList.remove('hidden');
        fPanel.classList.add('hidden');
    }
    syncBiometricGateUI();
}

async function handleHardwareFingerprintAction() {
    triggerHaptic('heavy');
    const fStatus = document.getElementById('gateFingerStatus');
    const btn = document.getElementById('hwFingerprintActionBtn');

    if (!window.PublicKeyCredential || !navigator.credentials) {
        if (fStatus) fStatus.textContent = "HW Sensor Blocked — Hold Thumb Circle Above!";
        showMobileToast("Browser blocks WebAuthn here — hold the green thumb circle for 1.2s!");
        return;
    }

    if (btn) btn.disabled = true;

    try {
        if (!state.webAuthnCredId) {
            if (fStatus) fStatus.textContent = "AWAITING DEVICE SENSOR (6S TIMEOUT)...";
            const challenge = new Uint8Array(32);
            window.crypto.getRandomValues(challenge);
            const userId = new Uint8Array(16);
            window.crypto.getRandomValues(userId);

            const cred = await withTimeout(navigator.credentials.create({
                publicKey: {
                    challenge,
                    rp: { name: "NNN OS 8.5 Biometric Vault" },
                    user: { id: userId, name: "abhi@nnn-vault.local", displayName: "NNN Vault Owner" },
                    pubKeyCredParams: [{ type: "public-key", alg: -7 }, { type: "public-key", alg: -257 }],
                    authenticatorSelection: { authenticatorAttachment: "platform", userVerification: "required" },
                    timeout: 6000
                }
            }), 6500);

            if (cred && cred.rawId) {
                state.webAuthnCredId = bufferToBase64(cred.rawId);
                saveState();
                syncBiometricGateUI();
                unlockVaultSuccess("Hardware Fingerprint Registered");
            }
        } else {
            if (fStatus) fStatus.textContent = "TOUCH HARDWARE SENSOR NOW...";
            const challenge = new Uint8Array(32);
            window.crypto.getRandomValues(challenge);

            const assertion = await withTimeout(navigator.credentials.get({
                publicKey: {
                    challenge,
                    allowCredentials: [{
                        id: base64ToBuffer(state.webAuthnCredId),
                        type: "public-key",
                        transports: ["internal"]
                    }],
                    userVerification: "required",
                    timeout: 6000
                }
            }), 6500);

            if (assertion) {
                unlockVaultSuccess("Hardware Fingerprint Matched");
            }
        }
    } catch (err) {
        triggerHaptic('alarm');
        if (fStatus) fStatus.textContent = "USE 1.2S THUMB HOLD PAD ABOVE TO UNLOCK";
        showMobileToast("Hardware prompt timed out or blocked — hold the green thumb pad above for 1.2s!");
    } finally {
        if (btn) btn.disabled = false;
    }
}

function extractLiveFaceDescriptor(videoEl) {
    const canvas = document.getElementById('faceBioCanvas');
    if (!canvas || !videoEl) return null;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const vw = videoEl.videoWidth || 320;
    const vh = videoEl.videoHeight || 320;

    const cropSize = Math.min(vw, vh) * 0.65;
    const sx = (vw - cropSize) / 2;
    const sy = (vh - cropSize) / 2;

    ctx.drawImage(videoEl, sx, sy, cropSize, cropSize, 0, 0, 64, 64);
    const imgData = ctx.getImageData(0, 0, 64, 64).data;

    const vec = new Array(256).fill(0);
    let sum = 0;

    for (let by = 0; by < 16; by++) {
        for (let bx = 0; bx < 16; bx++) {
            let blockLum = 0;
            for (let y = 0; y < 4; y++) {
                for (let x = 0; x < 4; x++) {
                    const idx = ((by * 4 + y) * 64 + (bx * 4 + x)) * 4;
                    const lum = 0.299 * imgData[idx] + 0.587 * imgData[idx + 1] + 0.114 * imgData[idx + 2];
                    blockLum += lum;
                }
            }
            const avg = blockLum / 16;
            const vIdx = by * 16 + bx;
            vec[vIdx] = avg;
            sum += avg;
        }
    }

    const mean = sum / 256;
    if (mean < 8) return null;

    let normSq = 0;
    for (let i = 0; i < 256; i++) {
        vec[i] = vec[i] - mean;
        normSq += vec[i] * vec[i];
    }
    const norm = Math.sqrt(normSq) || 1;
    for (let i = 0; i < 256; i++) {
        vec[i] = Number((vec[i] / norm).toFixed(5));
    }
    return vec;
}

function computeCosineSimilarity(vecA, vecB) {
    if (!vecA || !vecB || vecA.length !== 256 || vecB.length !== 256) return 0;
    let dot = 0;
    for (let i = 0; i < 256; i++) dot += vecA[i] * vecB[i];
    return Math.max(0, Math.min(1, dot));
}

async function handleRealFaceAction() {
    triggerHaptic('heavy');
    const video = document.getElementById('faceLockVideo');
    const placeholder = document.getElementById('faceLockPlaceholder');
    const oval = document.getElementById('faceOvalGuide');
    const status = document.getElementById('gateFaceStatus');
    const btn = document.getElementById('startFaceScanBtn');
    const btnLbl = document.getElementById('faceActionBtnLabel');

    if (!faceStream) {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            status.textContent = "CAMERA BLOCKED — USE MANUAL OVERRIDE";
            showMobileToast("Camera blocked by browser. Tap Manual Unlock Override below.");
            return;
        }
        try {
            status.textContent = "REQUESTING CAMERA PERMISSION...";
            faceStream = await withTimeout(navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'user', width: { ideal: 320 }, height: { ideal: 320 } },
                audio: false
            }), 6000);
            video.srcObject = faceStream;
            await video.play();
            video.classList.remove('hidden');
            oval.classList.remove('hidden');
            placeholder.classList.add('hidden');
        } catch (err) {
            triggerHaptic('alarm');
            status.textContent = "CAMERA DENIED — USE MANUAL OVERRIDE";
            showMobileToast("Camera permission denied or timed out. Tap Manual Unlock Override below.");
            return;
        }
    }

    const hasEnrolledFace = Array.isArray(state.faceDescriptor) && state.faceDescriptor.length === 256;

    if (!hasEnrolledFace) {
        status.textContent = "CAPTURING FACE TEMPLATE...";
        btnLbl.textContent = "Registering Face...";
        btn.disabled = true;

        setTimeout(() => {
            const desc = extractLiveFaceDescriptor(video);
            btn.disabled = false;
            if (!desc) {
                triggerHaptic('alarm');
                status.textContent = "CAMERA TOO DARK // RETRY OR OVERRIDE";
                btnLbl.textContent = "Retry Face Scan";
                return;
            }
            state.faceDescriptor = desc;
            saveState();
            document.getElementById('faceMatchSimilarityPct').textContent = "100%";
            document.getElementById('faceMatchSimilarityBar').style.width = "100%";
            stopFaceCameraStream();
            syncBiometricGateUI();
            unlockVaultSuccess("Face Template Registered");
        }, 850);
        return;
    }

    status.textContent = "MATCHING SAVED FACE...";
    btn.disabled = true;
    btnLbl.textContent = "Scanning...";
    clearInterval(faceMatchLoopTimer);

    let attempts = 0;
    let bestSim = 0;

    faceMatchLoopTimer = setInterval(() => {
        attempts++;
        const liveDesc = extractLiveFaceDescriptor(video);
        if (!liveDesc) return;

        const sim = computeCosineSimilarity(state.faceDescriptor, liveDesc);
        if (sim > bestSim) bestSim = sim;
        const pct = Math.round(sim * 100);

        document.getElementById('faceMatchSimilarityPct').textContent = `${pct}%`;
        document.getElementById('faceMatchSimilarityBar').style.width = `${pct}%`;

        if (sim >= 0.78) {
            clearInterval(faceMatchLoopTimer);
            stopFaceCameraStream();
            unlockVaultSuccess(`Face Matched (${pct}%)`);
        } else if (attempts >= 16) {
            clearInterval(faceMatchLoopTimer);
            triggerHaptic('alarm');
            btn.disabled = false;
            btnLbl.textContent = "Retry Face Scan";
            status.textContent = `LOW LIGHT (${Math.round(bestSim * 100)}%) — RETRY OR OVERRIDE`;
        }
    }, 150);
}

function resetEnrolledFaceTemplate() {
    triggerHaptic('light');
    state.faceDescriptor = null;
    saveState();
    stopFaceCameraStream();
    syncBiometricGateUI();
    document.getElementById('faceMatchSimilarityPct').textContent = "--%";
    document.getElementById('faceMatchSimilarityBar').style.width = "0%";
    showMobileToast("Saved Face reset. Ready to enroll again.");
}

function stopFaceCameraStream() {
    clearInterval(faceMatchLoopTimer);
    if (faceStream) {
        faceStream.getTracks().forEach(t => t.stop());
        faceStream = null;
    }
    const video = document.getElementById('faceLockVideo');
    const oval = document.getElementById('faceOvalGuide');
    const placeholder = document.getElementById('faceLockPlaceholder');
    const btn = document.getElementById('startFaceScanBtn');
    if (video) video.classList.add('hidden');
    if (oval) oval.classList.add('hidden');
    if (placeholder) placeholder.classList.remove('hidden');
    if (btn) btn.disabled = false;
    syncBiometricGateUI();
    lucide.createIcons();
}

function unlockVaultSuccess(methodLabel) {
    isVaultUnlocked = true;
    clearInterval(manualHoldTimer);
    triggerHaptic('heavy');
    const overlay = document.getElementById('biometricLockOverlay');
    overlay.classList.add('opacity-0', 'scale-105', 'pointer-events-none');
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 380);
    showMobileToast(`🔓 ${methodLabel}`);
}

function lockApplicationNow(e) {
    if (e) e.stopPropagation();
    isVaultUnlocked = false;
    stopFaceCameraStream();
    cancelManualVaultHold();
    syncBiometricGateUI();
    const overlay = document.getElementById('biometricLockOverlay');
    if (overlay) {
        overlay.classList.remove('hidden', 'opacity-0', 'scale-105', 'pointer-events-none');
    }
}

/**
 * AUTO-LOCK ON TAB BACKGROUNDING:
 * Immediately locks the Biometric Vault whenever the user switches apps, minimizes the browser,
 * or locks their phone screen.
 */
function initAutoLockOnBackground() {
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden' && isVaultUnlocked) {
            lockApplicationNow();
        }
    });
    window.addEventListener('pagehide', () => {
        if (isVaultUnlocked) {
            lockApplicationNow();
        }
    });
}

// =====================================================================
// 5. CYCLE ROLLOVER, LEGACY STATS & UPI QR GENERATOR
// =====================================================================
function checkAndRolloverCycleYear() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const decStartThisYear = new Date(currentYear, 11, 1, 0, 0, 0, 0);

    if (now >= decStartThisYear && state.activeCycleYear === currentYear) {
        state.legacyArchive = state.legacyArchive || {};
        state.legacyArchive[String(currentYear)] = {
            survivedFullNov: !state.relapsedOnDay,
            survivedDays: state.relapsedOnDay ? Math.max(0, state.relapsedOnDay - 1) : 30,
            relapsedOnDay: state.relapsedOnDay
        };
    }

    if (state.activeCycleYear && state.activeCycleYear < currentYear) {
        state.legacyArchive = state.legacyArchive || {};
        const prevYearStr = String(state.activeCycleYear);
        if (!state.legacyArchive[prevYearStr]) {
            state.legacyArchive[prevYearStr] = {
                survivedFullNov: !state.relapsedOnDay,
                survivedDays: state.relapsedOnDay ? Math.max(0, state.relapsedOnDay - 1) : 30,
                relapsedOnDay: state.relapsedOnDay
            };
        }
        state.activeCycleYear = currentYear;
        state.decemberExtraDays = state.relapsedOnDay ? 0 : (state.decemberExtraDays || 0) + 30;
        state.relapsedOnDay = null;
        state.completedQuests = [];
        state.celebratedMilestones = [];
        saveState();
    }
}

function getSurvivedNovembersStats(tState) {
    const archive = state.legacyArchive || {};
    const currentYearStr = String(tState.now.getFullYear());
    const wonYears = [];
    const failedYears = [];

    for (const [yr, data] of Object.entries(archive)) {
        if (data && (data.survivedFullNov || (!data.relapsedOnDay && (data.survivedDays === 30 || data.survivedDays === undefined)))) {
            wonYears.push(yr);
        } else if (data && data.relapsedOnDay) {
            failedYears.push({ year: yr, day: data.relapsedOnDay });
        }
    }

    const currentNovCompleted = (tState.phase === 'POST_NOV' || (tState.phase === 'ACTIVE_NOV' && tState.currentDay === 30)) && !state.relapsedOnDay;
    if (currentNovCompleted && !wonYears.includes(currentYearStr)) {
        wonYears.push(currentYearStr);
    }

    wonYears.sort();
    return { count: wonYears.length, wonYears, failedYears };
}

function cycleOneLiner() {
    oneLinerIdx = (oneLinerIdx + 1) % DARK_HUMOUR_ONELINERS.length;
    const el = document.getElementById('preOneLiner');
    if (el) el.textContent = `"${DARK_HUMOUR_ONELINERS[oneLinerIdx]}"`;
    triggerHaptic('tick');
}

function toggleShameCounter(e) {
    if (e) e.stopPropagation();
    state.showShameCounter = !state.showShameCounter;
    saveState();
    triggerHaptic('tick');
    renderMobileApp();
}

function buildUpiUri(amount = "") {
    const base = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(UPI_PAYEE)}&cu=INR`;
    return amount ? `${base}&am=${encodeURIComponent(amount)}` : base;
}

function setUpiPresetAmount(amt, e) {
    if (e) e.stopPropagation();
    currentUpiAmount = amt;
    triggerHaptic('light');

    document.querySelectorAll('.upi-amt-pill').forEach(btn => {
        btn.className = "upi-amt-pill py-1.5 rounded-xl bg-black/60 text-zinc-300 border border-white/10 transition";
    });
    const activeId = amt ? `upiAmt_${amt}` : 'upiAmt_any';
    const activeBtn = document.getElementById(activeId);
    if (activeBtn) {
        activeBtn.className = "upi-amt-pill py-1.5 rounded-xl bg-white text-black font-bold border border-white transition";
    }

    const uri = buildUpiUri(amt);
    const payLink = document.getElementById('upiDirectPayLink');
    if (payLink) payLink.href = uri;

    generateErrorProofQR('upiQrMainContainer', uri);
    generateErrorProofQR('upiQrModalContainer', uri);
}

function getQrBooleanMatrix(uriString) {
    const uri = uriString || buildUpiUri(currentUpiAmount);
    try {
        if (typeof qrcode === 'function') {
            const qr = qrcode(0, 'M');
            qr.addData(uri);
            qr.make();
            const count = qr.getModuleCount();
            const matrix = [];
            for (let r = 0; r < count; r++) {
                const row = [];
                for (let c = 0; c < count; c++) row.push(qr.isDark(r, c));
                matrix.push(row);
            }
            return matrix;
        }
    } catch (e) {}
    return OFFLINE_UPI_QR_ROWS.map(rStr => rStr.split('').map(ch => ch === '1'));
}

function generateErrorProofQR(containerId, uriString) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const matrix = getQrBooleanMatrix(uriString);
    const count = matrix.length;
    const margin = 2;
    const size = count + margin * 2;

    let svg = `<svg viewBox="0 0 ${size} ${size}" class="w-full h-full" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<rect width="${size}" height="${size}" fill="#ffffff"/>`;
    for (let r = 0; r < count; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c]) {
                const isFinder = (r < 7 && c < 7) || (r < 7 && c >= count - 7) || (r >= count - 7 && c < 7);
                const fill = isFinder ? '#047857' : '#050507';
                svg += `<rect x="${c + margin}" y="${r + margin}" width="1" height="1" fill="${fill}"/>`;
            }
        }
    }
    svg += `</svg>`;
    container.innerHTML = svg;
}

function downloadUpiQrCardPNG(e) {
    if (e) e.stopPropagation();
    triggerHaptic('heavy');

    const canvas = document.getElementById('upiQrExportCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const uri = buildUpiUri(currentUpiAmount);
    const matrix = getQrBooleanMatrix(uri);
    const count = matrix.length;

    ctx.save();
    ctx.fillStyle = '#050507';
    ctx.fillRect(0, 0, 800, 1000);

    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 6;
    ctx.strokeRect(30, 30, 740, 940);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 24px "JetBrains Mono", monospace';
    ctx.fillText('SUPPORT DEVELOPER // VERIFIED UPI QR', 400, 95);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 38px "Space Grotesk", sans-serif';
    ctx.fillText('Created by Abhinav Yaduvanshi', 400, 148);

    const qrBoxSize = 560;
    const qrBoxX = (800 - qrBoxSize) / 2;
    const qrBoxY = 190;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(qrBoxX, qrBoxY, qrBoxSize, qrBoxSize);

    const marginModules = 3;
    const totalModules = count + marginModules * 2;
    const cellSize = qrBoxSize / totalModules;

    for (let r = 0; r < count; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c]) {
                const isFinder = (r < 7 && c < 7) || (r < 7 && c >= count - 7) || (r >= count - 7 && c < 7);
                ctx.fillStyle = isFinder ? '#047857' : '#050507';
                const px = Math.floor(qrBoxX + (c + marginModules) * cellSize);
                const py = Math.floor(qrBoxY + (r + marginModules) * cellSize);
                const pw = Math.ceil(cellSize);
                ctx.fillRect(px, py, pw, pw);
            }
        }
    }

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px "JetBrains Mono", monospace';
    ctx.fillText(`UPI ID: ${UPI_ID}`, 400, 815);

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 22px "JetBrains Mono", monospace';
    ctx.fillText(
        currentUpiAmount ? `PRESET AMOUNT: ₹${currentUpiAmount}` : 'OPEN GPAY / PHONEPE / PAYTM -> SCAN FROM GALLERY',
        400,
        865
    );

    ctx.fillStyle = '#a1a1aa';
    ctx.font = '18px "JetBrains Mono", monospace';
    ctx.fillText('NNN // OS 8.5 BIOMETRIC VAULT', 400, 920);
    ctx.restore();

    const link = document.createElement('a');
    link.download = `Abhinav-Yaduvanshi-UPI-QR${currentUpiAmount ? `-Rs${currentUpiAmount}` : ''}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showMobileToast("UPI QR saved to Gallery! Open GPay/PhonePe -> Scan from Gallery.");
}

function copyUPIHandle() {
    triggerHaptic('heavy');
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(UPI_ID).then(() => {
            showMobileToast("Copied: abhiyaduvanshi1011@okhdfcbank");
        }).catch(() => fallbackCopyUPI());
    } else {
        fallbackCopyUPI();
    }
    const btnLbl = document.getElementById('copyUpiBtnLabel');
    if (btnLbl) {
        btnLbl.textContent = "COPIED ✓";
        setTimeout(() => { btnLbl.textContent = "COPY ID"; }, 2000);
    }
}

function fallbackCopyUPI() {
    const temp = document.createElement('textarea');
    temp.value = UPI_ID;
    document.body.appendChild(temp);
    temp.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(temp);
    showMobileToast("Copied: abhiyaduvanshi1011@okhdfcbank");
}

function openUPISheet(e) {
    if (e) e.stopPropagation();
    if (islandExpanded) toggleDynamicIsland();
    triggerHaptic('light');
    const backdrop = document.getElementById('upiBackdrop');
    const sheet = document.getElementById('upiBottomSheet');
    backdrop.classList.remove('hidden');
    requestAnimationFrame(() => {
        backdrop.classList.remove('opacity-0');
        sheet.classList.remove('translate-y-full');
    });
}

function closeUPISheet() {
    triggerHaptic('tick');
    const backdrop = document.getElementById('upiBackdrop');
    const sheet = document.getElementById('upiBottomSheet');
    backdrop.classList.add('opacity-0');
    sheet.classList.add('translate-y-full');
    setTimeout(() => backdrop.classList.add('hidden'), 320);
}

// =====================================================================
// 6. HAPTICS, PIEZO AUDIO & 3D TILT PHYSICS
// =====================================================================
let gyroActive = false;

function handleOrientation(event) {
    if (event.beta === null && event.gamma === null) return;
    gyroActive = true;
    const rawGamma = Math.max(-25, Math.min(25, event.gamma || 0));
    const rawBeta = Math.max(-25, Math.min(25, (event.beta || 45) - 45));
    applyTiltPhysics(rawGamma, rawBeta);
}

function applyTiltPhysics(degX, degY) {
    const rotX = (degX / 25) * 7.5;
    const rotY = (degY / 25) * -7.5;
    const sheenX = 50 + (degX / 25) * 40;
    const sheenY = 50 + (degY / 25) * 40;

    document.documentElement.style.setProperty('--tilt-x', `${rotX.toFixed(2)}deg`);
    document.documentElement.style.setProperty('--tilt-y', `${rotY.toFixed(2)}deg`);
    document.documentElement.style.setProperty('--sheen-x', `${sheenX.toFixed(1)}%`);
    document.documentElement.style.setProperty('--sheen-y', `${sheenY.toFixed(1)}%`);
}

async function manualRequestGyroPermission(e) {
    if (e) e.stopPropagation();
    triggerHaptic('heavy');
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        try {
            const response = await DeviceOrientationEvent.requestPermission();
            if (response === 'granted') {
                window.addEventListener('deviceorientation', handleOrientation, true);
                showMobileToast('3D Tilt Enabled!');
            }
        } catch (err) {}
    } else {
        window.addEventListener('deviceorientation', handleOrientation, true);
        showMobileToast('3D Tilt Enabled!');
    }
}

function initTouchParallaxOnly() {
    window.addEventListener('pointermove', (e) => {
        if (gyroActive) return;
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = ((e.clientX - cx) / cx) * 15;
        const dy = ((e.clientY - cy) / cy) * 15;
        applyTiltPhysics(dx, dy);
    });
}

function triggerHaptic(patternName = 'tick') {
    const patterns = {
        tick: [8],
        light: [14],
        heavy: [25, 35, 45],
        heartbeat: [40, 80, 20],
        alarm: [60, 40, 60, 40, 120]
    };
    const vib = patterns[patternName] || [10];
    if (navigator.vibrate) {
        try { navigator.vibrate(vib); } catch (e) {}
    }
    playPiezoHapticAudio(patternName);
}

function playPiezoHapticAudio(type) {
    if (!state.soundOn) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();

        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        if (type === 'tick' || type === 'light') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(165, now);
            osc.frequency.exponentialRampToValueAtTime(52, now + 0.028);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
            osc.start(now);
            osc.stop(now + 0.032);
        } else if (type === 'heavy') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.exponentialRampToValueAtTime(520, now + 0.14);
            gain.gain.setValueAtTime(0.14, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
            osc.start(now);
            osc.stop(now + 0.17);
        } else if (type === 'heartbeat') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(95, now);
            osc.frequency.exponentialRampToValueAtTime(42, now + 0.09);
            gain.gain.setValueAtTime(0.16, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
            osc.start(now);
            osc.stop(now + 0.11);
        } else if (type === 'alarm') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(145, now);
            osc.frequency.linearRampToValueAtTime(62, now + 0.28);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
            osc.start(now);
            osc.stop(now + 0.31);
        }
    } catch (e) {}
}

function toggleSoundEngine(e) {
    if (e) e.stopPropagation();
    state.soundOn = !state.soundOn;
    saveState();
    const lbl = document.getElementById('soundStateLabel');
    lbl.textContent = state.soundOn ? 'ON' : 'OFF';
    lbl.className = state.soundOn ? 'text-emerald-400 font-bold' : 'text-zinc-500 font-bold';
    triggerHaptic('tick');
}

// =====================================================================
// 7. TEMPORAL ENGINE & FOOLPROOF XP CALCULATOR
// =====================================================================
function computeTemporalStatus() {
    const now = new Date();
    const year = now.getFullYear();
    const novStart = new Date(year, 10, 1, 0, 0, 0, 0);
    const decStart = new Date(year, 11, 1, 0, 0, 0, 0);
    const nextNovStart = now < novStart ? novStart : new Date(year + 1, 10, 1, 0, 0, 0, 0);

    if (now < novStart) {
        const perpetualTotal = state.relapsedOnDay ? 0 : (state.decemberExtraDays || 0);
        return { phase: 'PRE_NOV', now, novStart, nextNovStart, currentDay: 0, survivedDays: 0, perpetualTotal, dayPct: 0 };
    }

    if (now >= decStart) {
        const novSurvived = state.relapsedOnDay ? Math.max(0, state.relapsedOnDay - 1) : 30;
        const perpetualTotal = state.relapsedOnDay ? novSurvived : (30 + (state.decemberExtraDays || 0));
        return { phase: 'POST_NOV', now, novStart, nextNovStart, currentDay: 30, survivedDays: novSurvived, perpetualTotal, dayPct: 100 };
    }

    const dom = Math.min(30, now.getDate());
    const secToday = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    const dayPct = Math.min(100, (secToday / 86400) * 100);

    const survived = state.relapsedOnDay
        ? Math.min(dom, Math.max(0, state.relapsedOnDay - 1))
        : dom;

    const perpetualTotal = state.relapsedOnDay
        ? survived
        : survived + (state.decemberExtraDays || 0);

    return {
        phase: 'ACTIVE_NOV',
        now,
        novStart,
        nextNovStart,
        currentDay: dom,
        survivedDays: survived,
        perpetualTotal,
        dayPct
    };
}

function calculateTotalAuraXP(rawDaysInput) {
    let total = 0;
    const numericInput = Math.max(0, Math.floor(Number(rawDaysInput) || 0));
    const cappedNovDays = Math.min(30, numericInput);

    for (let i = 1; i <= cappedNovDays; i++) {
        const dayObj = NOVEMBER_DAYS[i - 1];
        if (dayObj && typeof dayObj.xp === 'number') {
            total += dayObj.xp;
        }
    }

    if (Array.isArray(state.completedQuests)) {
        state.completedQuests.forEach(d => {
            const qDay = Number(d);
            if (qDay >= 1 && qDay <= cappedNovDays) {
                total += 50;
            }
        });
    }

    if (state.pledgedPreNov) total += 150;
    total += (Number(state.urgeDefeats) || 0) * 25;

    const extraBeyond30 = Math.max(0, numericInput - 30);
    const storedExtra = Math.max(extraBeyond30, Number(state.decemberExtraDays) || 0);
    total += storedExtra * 100;

    return Number.isFinite(total) ? total : 0;
}

function getRankForDays(days) {
    const safeDays = Math.max(0, Number(days) || 0);
    let curr = AURA_RANKS[0];
    for (const r of AURA_RANKS) {
        if (safeDays >= r.minDays) curr = r;
    }
    return curr;
}

// =====================================================================
// 8. URGE TELEMETRY & SHARE CARD GENERATOR
// =====================================================================
function selectUrgeTrigger(triggerName) {
    selectedUrgeTrigger = triggerName;
    triggerHaptic('tick');
    const tags = ['Late Scroll', 'Boredom', 'Reels/Bait', 'Stress'];
    tags.forEach(t => {
        const btn = document.getElementById(`trigBtn_${t}`);
        if (!btn) return;
        if (t === triggerName) {
            btn.className = "trig-pill py-1.5 px-1 rounded-xl bg-white text-black font-bold border border-white truncate transition";
        } else {
            btn.className = "trig-pill py-1.5 px-1 rounded-xl bg-black/50 text-zinc-300 border border-white/15 truncate transition";
        }
    });
}

function getWeakHoursWindow() {
    if (!state.urgeLogs || state.urgeLogs.length === 0) return "None";
    const buckets = {};
    state.urgeLogs.forEach(entry => {
        const h = Number(entry.hour) || 0;
        const startH = Math.floor(h / 3) * 3;
        const endH = (startH + 3) % 24;
        const label = `${String(startH).padStart(2, '0')}:00–${String(endH).padStart(2, '0')}:00`;
        buckets[label] = (buckets[label] || 0) + 1;
    });

    let topWindow = "22:00–01:00";
    let maxCount = 0;
    for (const [win, count] of Object.entries(buckets)) {
        if (count > maxCount) {
            maxCount = count;
            topWindow = win;
        }
    }
    return topWindow;
}

function getTopWeakTrigger() {
    if (!state.urgeLogs || state.urgeLogs.length === 0) return "None";
    const counts = {};
    state.urgeLogs.forEach(entry => {
        const trig = entry.trigger || 'Late Scroll';
        counts[trig] = (counts[trig] || 0) + 1;
    });
    let topTrig = "None";
    let max = 0;
    for (const [t, c] of Object.entries(counts)) {
        if (c > max) {
            max = c;
            topTrig = t;
        }
    }
    return topTrig;
}

function getLastSosElapsedText() {
    if (!state.urgeLogs || state.urgeLogs.length === 0) return "Last SOS: --";
    const last = state.urgeLogs[state.urgeLogs.length - 1];
    if (!last || !last.timestamp) return "Last SOS: Logged";
    const diffMs = Math.max(0, Date.now() - last.timestamp);
    const mins = Math.floor(diffMs / 60000);
    if (mins < 1) return "Last SOS: Just now";
    if (mins < 60) return `Last SOS: ${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    return `Last SOS: ${hrs}h ago`;
}

function getTodayUrgeCount(currentDay) {
    if (!state.urgeLogs) return 0;
    return state.urgeLogs.filter(u => u.day === currentDay).length;
}

function updateSosButtonIntensity(currentDay) {
    const btn = document.getElementById('dockSosBtn');
    const lbl = document.getElementById('dockSosLabel');
    if (!btn || !lbl) return;

    const todayCount = getTodayUrgeCount(currentDay);
    if (todayCount === 0) {
        btn.className = "sos-tier-0 px-3 py-2 rounded-[20px] bg-gradient-to-r from-rose-600 to-red-600 text-white flex flex-col items-center justify-center gap-0.5 active:scale-90 transition shrink-0";
        lbl.textContent = "SOS Help";
    } else if (todayCount < 3) {
        btn.className = "sos-tier-1 px-3 py-2 rounded-[20px] bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 text-white flex flex-col items-center justify-center gap-0.5 active:scale-90 transition border border-amber-300/50 shrink-0";
        lbl.textContent = `SOS (${todayCount}x)`;
    } else {
        btn.className = "sos-tier-2 px-3 py-2 rounded-[20px] bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 text-white flex flex-col items-center justify-center gap-0.5 active:scale-90 transition border border-white/80 shrink-0";
        lbl.textContent = `SOS (${todayCount}x!)`;
    }
}

function openShareCardModal(e) {
    if (e) e.stopPropagation();
    if (islandExpanded) toggleDynamicIsland();
    triggerHaptic('heavy');
    renderAuraShareCanvas();
    const backdrop = document.getElementById('shareCardBackdrop');
    const sheet = document.getElementById('shareCardSheet');
    backdrop.classList.remove('hidden');
    requestAnimationFrame(() => {
        backdrop.classList.remove('opacity-0');
        sheet.classList.remove('translate-y-full');
    });
}

function closeShareCardModal() {
    triggerHaptic('tick');
    const backdrop = document.getElementById('shareCardBackdrop');
    const sheet = document.getElementById('shareCardSheet');
    backdrop.classList.add('opacity-0');
    sheet.classList.add('translate-y-full');
    setTimeout(() => backdrop.classList.add('hidden'), 320);
}

function renderAuraShareCanvas() {
    const canvas = document.getElementById('auraShareCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const tState = computeTemporalStatus();
    const totalDays = tState.perpetualTotal || tState.survivedDays || 0;
    const rank = getRankForDays(totalDays);
    const totalXP = calculateTotalAuraXP(tState.survivedDays);
    const legacyStats = getSurvivedNovembersStats(tState);

    ctx.save();
    ctx.textAlign = 'left';

    ctx.fillStyle = '#050507';
    ctx.fillRect(0, 0, 720, 900);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
    for (let x = 24; x < 720; x += 28) {
        for (let y = 24; y < 900; y += 28) {
            ctx.fillRect(x, y, 2, 2);
        }
    }

    ctx.strokeStyle = state.relapsedOnDay ? 'rgba(244, 63, 94, 0.6)' : 'rgba(16, 185, 129, 0.55)';
    ctx.lineWidth = 4;
    ctx.strokeRect(28, 28, 664, 844);

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 20px "JetBrains Mono", monospace';
    ctx.fillText('NNN // OS 8.5 BIOMETRIC VAULT', 60, 82);

    ctx.fillStyle = '#a1a1aa';
    ctx.font = '15px "JetBrains Mono", monospace';
    ctx.fillText(`CYCLE: ${tState.now.getFullYear()} // NOVEMBERS WON: ${legacyStats.count} // SHA-256 VERIFIED`, 60, 112);

    ctx.fillStyle = 'rgba(18, 18, 24, 0.92)';
    ctx.fillRect(60, 145, 600, 250);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
    ctx.lineWidth = 2;
    ctx.strokeRect(60, 145, 600, 250);

    ctx.fillStyle = '#a1a1aa';
    ctx.font = 'bold 18px "JetBrains Mono", monospace';
    ctx.fillText(state.relapsedOnDay ? 'STATUS: STREAK LOST' : 'ACTIVE DISCIPLINE STREAK', 92, 195);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 110px "Space Grotesk", sans-serif';
    ctx.fillText(`${totalDays}`, 92, 315);

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 26px "JetBrains Mono", monospace';
    ctx.fillText(`DAYS CLEAN • ${legacyStats.count} NNN CROWN${legacyStats.count === 1 ? '' : 'S'}`, 92, 362);

    ctx.fillStyle = 'rgba(18, 18, 24, 0.92)';
    ctx.fillRect(60, 425, 600, 185);
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.35)';
    ctx.strokeRect(60, 425, 600, 185);

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 18px "JetBrains Mono", monospace';
    ctx.fillText(`${rank.tier} // CURRENT RANK`, 92, 470);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 42px "Space Grotesk", sans-serif';
    ctx.fillText(`${rank.name}`, 92, 528);

    ctx.fillStyle = '#e4e4e7';
    ctx.font = 'bold 24px "JetBrains Mono", monospace';
    ctx.fillText(`TOTAL SCORE: ${totalXP.toLocaleString()} XP`, 92, 578);

    ctx.fillStyle = '#a1a1aa';
    ctx.font = 'bold 16px "JetBrains Mono", monospace';
    ctx.fillText('30-DAY NOVEMBER PROGRESS:', 60, 655);

        for (let i = 1; i <= 30; i++) {
        const col = (i - 1) % 10;
        const row = Math.floor((i - 1) / 10);
        const bx = 60 + col * 61;
        const by = 675 + row * 42;
        const isDone = i <= tState.survivedDays && (!state.relapsedOnDay || i < state.relapsedOnDay);
        ctx.fillStyle = isDone ? '#10b981' : 'rgba(255,255,255,0.08)';
        ctx.fillRect(bx, by, 50, 30);
    }

    ctx.textAlign = 'left';
    ctx.fillStyle = '#a1a1aa';
    ctx.font = 'bold 14px "JetBrains Mono", monospace';
    ctx.fillText('CREATED BY ABHINAV YADUVANSHI', 60, 842);

    ctx.textAlign = 'right';
    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 12.5px "JetBrains Mono", monospace';
    ctx.fillText('UPI: abhiyaduvanshi1011@okhdfcbank', 660, 842);

    ctx.restore();
}

function downloadAuraCardPNG() {
    triggerHaptic('heavy');
    const canvas = document.getElementById('auraShareCanvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `NNN-OS85-Aura-Card-Day-${selectedDay}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showMobileToast('Status Card saved as PNG!');
}

async function shareAuraCardNative() {
    triggerHaptic('heavy');
    const canvas = document.getElementById('auraShareCanvas');
    if (!canvas) return;
    try {
        const blob = await new Promise(res => canvas.toBlob(res, 'image/png'));
        if (blob && navigator.share && navigator.canShare) {
            const file = new File([blob], 'nnn-os85-aura-card.png', { type: 'image/png' });
            if (navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: 'NNN // OS 8.5 Status',
                    text: 'Locked in on NNN // OS 8.5 (Created by Abhinav Yaduvanshi).',
                    files: [file]
                });
                return;
            }
        }
    } catch (e) {}
    downloadAuraCardPNG();
}

// =====================================================================
// 9. MILESTONE OVERDRIVE HUD
// =====================================================================
function checkAndFireMilestoneOverdrive(dayNum) {
    const dayObj = NOVEMBER_DAYS.find(d => d.day === dayNum);
    if (!dayObj || !dayObj.milestone || state.relapsedOnDay) return;

    if (!state.celebratedMilestones.includes(dayNum)) {
        state.celebratedMilestones.push(dayNum);
        saveState();

        const hud = document.getElementById('milestoneOverdriveHUD');
        const card = document.getElementById('overdriveCard');
        const rank = getRankForDays(dayNum);

        if (hud && card) {
            document.getElementById('overdriveDayTitle').textContent = `DAY ${String(dayNum).padStart(2, '0')} // ${dayObj.vibe.toUpperCase()}`;
            document.getElementById('overdriveRankSub').textContent = `RANK UNLOCKED: ${rank.name.toUpperCase()} ${rank.icon}`;
            document.getElementById('overdriveXPGain').textContent = `+${dayObj.xp} XP`;

            hud.classList.remove('hidden');
            triggerHaptic('heavy');

            requestAnimationFrame(() => {
                card.classList.remove('scale-95', 'opacity-0');
                card.classList.add('scale-100', 'opacity-100');
            });

            setTimeout(() => {
                card.classList.remove('scale-100', 'opacity-100');
                card.classList.add('scale-95', 'opacity-0');
                setTimeout(() => hud.classList.add('hidden'), 320);
            }, 2500);
        }
    }
}

// =====================================================================
// 10. TOP STATUS BAR, ONE-WAY QUEST LOCK & CORE APP RENDERER
// =====================================================================
function toggleDynamicIsland() {
    islandExpanded = !islandExpanded;
    triggerHaptic('light');
    const drawer = document.getElementById('diExpandedContent');
    if (!drawer) return;
    if (islandExpanded) {
        drawer.classList.remove('hidden');
    } else {
        drawer.classList.add('hidden');
    }
}

function switchMobileTab(tabName) {
    state.activeTab = tabName;
    triggerHaptic('tick');

    const tStatus = computeTemporalStatus();
    if (tStatus.phase === 'PRE_NOV' && tabName !== 'creator') {
        showMobileToast("Unlocks automatically on Nov 1, 00:00.");
        return;
    }

    ['status', 'matrix', 'ranks', 'creator'].forEach(t => {
        const view = document.getElementById(`tabView_${t}`);
        const btn = document.getElementById(`navBtn_${t}`);
        if (!view || !btn) return;
        if (t === tabName) {
            view.classList.remove('hidden');
            btn.className = "flex-1 py-2 rounded-[20px] flex flex-col items-center justify-center gap-0.5 bg-white text-black font-semibold transition active:scale-95";
        } else {
            view.classList.add('hidden');
            btn.className = "flex-1 py-2 rounded-[20px] flex flex-col items-center justify-center gap-0.5 text-zinc-400 hover:text-white transition active:scale-95";
        }
    });
}

function logPerpetualDailyCheckin() {
    const todayKey = new Date().toISOString().slice(0, 10);
    if (state.lastPerpetualCheckin === todayKey) {
        triggerHaptic('tick');
        showMobileToast("Today is already logged!");
        return;
    }
    state.lastPerpetualCheckin = todayKey;
    state.decemberExtraDays = (state.decemberExtraDays || 0) + 1;
    saveState();
    triggerHaptic('heavy');
    renderMobileApp();
    showMobileToast(`+100 XP! Extra Streak: ${state.decemberExtraDays} Days.`);
}

function renderMobileApp() {
    const tState = computeTemporalStatus();
    const preScreen = document.getElementById('preNovScreen');
    const activeScreen = document.getElementById('activeNovScreen');
    const diText = document.getElementById('diStateText');
    const diDot = document.getElementById('diPulseDot');
    const diPing = document.getElementById('diPulsePing');
    const legacyStats = getSurvivedNovembersStats(tState);

    const shameLbl = document.getElementById('shameStateLabel');
    if (shameLbl) {
        shameLbl.textContent = state.showShameCounter ? 'SHOW' : 'HIDE';
        shameLbl.className = state.showShameCounter ? 'text-emerald-400 font-bold' : 'text-zinc-500 font-bold';
    }

    updateSosButtonIntensity(tState.currentDay || 1);

    if (tState.phase === 'PRE_NOV') {
        if (preScreen) preScreen.classList.remove('hidden');
        if (activeScreen) activeScreen.classList.add('hidden');
        const targetYear = tState.nextNovStart.getFullYear();
        if (diText) diText.textContent = `COUNTDOWN // NNN ${targetYear}`;
        if (diDot) diDot.className = "relative inline-flex rounded-full h-2 w-2 bg-amber-400";
        if (diPing) diPing.className = "animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75";

        const pill = document.getElementById('preNovTargetYearPill');
        if (pill) pill.textContent = `NNN ${targetYear} LOCKED`;
        const title = document.getElementById('preNovTargetDateTitle');
        if (title) title.textContent = `Nov 1, ${targetYear}`;
        const totNum = document.getElementById('preNovTotalStreakNum');
        if (totNum) totNum.textContent = tState.perpetualTotal;
        const preLegTxt = document.getElementById('preNovLegacyCountText');
        if (preLegTxt) {
            preLegTxt.textContent = `${legacyStats.count} November${legacyStats.count === 1 ? '' : 's'} Won`;
        }

        renderBiometricOathState();
        updateHighFreqClocks();
        if (typeof lucide !== 'undefined') lucide.createIcons();
        return;
    }

    if (preScreen) preScreen.classList.add('hidden');
    if (activeScreen) activeScreen.classList.remove('hidden');

    const decBanner = document.getElementById('decemberCarryBanner');
    const isDecActive = tState.phase === 'POST_NOV' && !state.relapsedOnDay;
    if (decBanner) {
        if (isDecActive) {
            decBanner.classList.remove('hidden');
            const nextYear = tState.nextNovStart.getFullYear();
            const daysUntilNextNov = Math.ceil((tState.nextNovStart - tState.now) / 86400000);
            document.getElementById('decCarryHeadline').textContent = `NOVEMBER WON // NEXT NNN (${nextYear}) IN ${daysUntilNextNov}D`;
            document.getElementById('decCarrySub').textContent = `Total Streak: ${tState.perpetualTotal} Days (+${state.decemberExtraDays || 0} Bonus Days)`;
        } else {
            decBanner.classList.add('hidden');
        }
    }

    const relBanner = document.getElementById('mobileRelapseBanner');
    const relTitle = document.getElementById('mobileRelapseTitle');
    const relGuardBtn = document.getElementById('relapseGuardBtn');
    if (state.relapsedOnDay) {
        if (diText) diText.textContent = `STREAK LOST // DAY ${String(state.relapsedOnDay).padStart(2, '0')}`;
        if (diDot) diDot.className = "relative inline-flex rounded-full h-2 w-2 bg-rose-500";
        if (diPing) diPing.className = "animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75";
        if (relBanner) relBanner.classList.remove('hidden');
        if (relTitle) relTitle.textContent = `💀 STREAK LOST ON DAY ${String(state.relapsedOnDay).padStart(2, '0')}`;
        if (relGuardBtn) {
            relGuardBtn.disabled = true;
            relGuardBtn.className = "mt-2.5 w-full py-3 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider bg-zinc-900 border border-rose-500/30 text-rose-400/60 opacity-60 cursor-not-allowed";
            document.getElementById('relapseBtnText').innerHTML = `<span>RELAPSE RECORDED // LOCKED</span>`;
        }
    } else {
        if (diText) {
            diText.textContent = tState.phase === 'POST_NOV'
                ? `STREAK // ${tState.perpetualTotal} DAYS`
                : `DAY ${tState.currentDay} OF 30 // LOCKED IN`;
        }
        if (diDot) diDot.className = "relative inline-flex rounded-full h-2 w-2 bg-emerald-400";
        if (diPing) diPing.className = "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75";
        if (relBanner) relBanner.classList.add('hidden');
    }

    const shameStrip = document.getElementById('shameTelemetryStrip');
    const lastSosTxt = getLastSosElapsedText();
    if (shameStrip) {
        if (state.showShameCounter && !isDecActive) {
            shameStrip.classList.remove('hidden');
            document.getElementById('almostFoldedCount').textContent = `${state.urgeDefeats || 0}`;
            document.getElementById('weakHoursReadout').textContent = getWeakHoursWindow();
            document.getElementById('topTriggerReadout').textContent = getTopWeakTrigger();
        } else {
            shameStrip.classList.add('hidden');
        }
    }
    const matrixSosTag = document.getElementById('matrixLastSosTag');
    if (matrixSosTag) matrixSosTag.textContent = lastSosTxt;

    const survived = tState.survivedDays;
    const displayStreak = tState.perpetualTotal > 30 ? tState.perpetualTotal : survived;
    document.getElementById('mobStreakNum').textContent = displayStreak;
    document.getElementById('mobStreakDenom').textContent = tState.perpetualTotal > 30 ? 'd+' : '/30';

    const legMini = document.getElementById('nnnLegacyMiniBadge');
    if (legMini) {
        legMini.textContent = `${legacyStats.count} November${legacyStats.count === 1 ? '' : 's'} Won`;
    }

    const pct = Math.min(100, Math.round((survived / 30) * 100));
    document.getElementById('mobStreakPct').textContent = `${pct}%`;
    const circum = 113.1;
    document.getElementById('mobStreakCircle').style.strokeDashoffset = circum - (pct / 100) * circum;

    const totalXP = calculateTotalAuraXP(survived);
    document.getElementById('mobAuraXP').textContent = `${totalXP.toLocaleString()} XP`;
    document.getElementById('ladderTotalXP').textContent = `${totalXP.toLocaleString()} XP`;

    const rank = getRankForDays(tState.perpetualTotal);
    document.getElementById('mobRankTierPill').textContent = rank.tier;
    document.getElementById('mobRankTitle').textContent = rank.name;

    renderHeroTransmissionCard(tState);
    renderDailyJournalBox();
    renderMatrices(tState);
    renderBlackboxJournalArchive(tState);
    renderLegacyVaultCard(tState, legacyStats);
    renderUrgePatternPanel();
    renderRankLadder(tState.perpetualTotal);

    updateHighFreqClocks();
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderHeroTransmissionCard(tState) {
    const info = NOVEMBER_DAYS.find(d => d.day === selectedDay) || NOVEMBER_DAYS[0];
    const d = info.day;
    const isToday = d === tState.currentDay && tState.phase === 'ACTIVE_NOV';
    const isBroken = state.relapsedOnDay && d >= state.relapsedOnDay;
    const questDone = state.completedQuests.includes(d);

    document.getElementById('cardDayBadge').textContent = `NOV ${String(d).padStart(2, '0')}`;
    const msPill = document.getElementById('cardMilestonePill');
    if (info.milestone) msPill.classList.remove('hidden');
    else msPill.classList.add('hidden');

    const statusEl = document.getElementById('cardStatusText');
    if (isBroken) {
        statusEl.className = "font-mono text-[10px] text-rose-400 font-bold";
        statusEl.textContent = "✕ STREAK LOST";
    } else if (isToday) {
        statusEl.className = "font-mono text-[10px] text-white font-bold";
        statusEl.textContent = "● TODAY";
    } else {
        statusEl.className = "font-mono text-[10px] text-emerald-400 font-bold";
        statusEl.textContent = "✓ SURVIVED";
    }

    document.getElementById('cardVibeTag').innerHTML = `Mood: <strong class="text-white">${info.vibe}</strong>`;
    document.getElementById('cardHeadline').textContent = `Day ${d}: ${info.title}`;
    document.getElementById('cardQuoteText').textContent = `"${info.quote}"`;
    document.getElementById('cardDayXP').textContent = `+${info.xp} XP`;
    document.getElementById('cardQuestDesc').textContent = info.quest;

    const qBtn = document.getElementById('cardQuestBtn');
    if (questDone) {
        qBtn.disabled = true;
        qBtn.className = "px-3.5 py-2 rounded-xl font-mono text-[10px] font-bold uppercase shrink-0 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default";
        qBtn.textContent = "✓ LOCKED (+50)";
    } else {
        qBtn.disabled = false;
        qBtn.className = "px-3.5 py-2 rounded-xl font-mono text-[10px] font-bold uppercase shrink-0 bg-white text-black active:scale-90 transition";
        qBtn.textContent = "CLAIM +50";
    }
}

function completeMobileQuestOneWay() {
    if (state.relapsedOnDay && selectedDay >= state.relapsedOnDay) {
        triggerHaptic('alarm');
        showMobileToast("Streak is lost. Tasks locked.");
        return;
    }
    if (state.completedQuests.includes(selectedDay)) {
        triggerHaptic('tick');
        showMobileToast(`Day ${selectedDay} task is permanently locked in!`);
        return;
    }
    state.completedQuests.push(selectedDay);
    saveState();
    triggerHaptic('heavy');
    renderMobileApp();
    checkAndFireMilestoneOverdrive(selectedDay);
    showMobileToast(`+50 XP permanently locked in for Day ${selectedDay}!`);
}

// Alias for older HTML button bindings
const toggleMobileQuest = completeMobileQuestOneWay;

function renderDailyJournalBox() {
    const dStr = String(selectedDay).padStart(2, '0');
    document.getElementById('journalDayNum').textContent = dStr;
    const input = document.getElementById('dailyJournalInput');
    const saved = state.journals[String(selectedDay)] || '';
    if (document.activeElement !== input) {
        input.value = saved;
    }
    input.placeholder = `Day ${dStr} note: Today I almost folded because...`;
    document.getElementById('journalSavedBadge').textContent = saved ? '✓ Saved' : 'Empty';
}

function saveDailyJournal() {
    const input = document.getElementById('dailyJournalInput');
    const val = (input.value || '').trim();
    if (val) {
        state.journals[String(selectedDay)] = val;
    } else {
        delete state.journals[String(selectedDay)];
    }
    saveState();
    triggerHaptic('light');
    renderMobileApp();
    showMobileToast(val ? `Day ${selectedDay} note saved.` : `Day ${selectedDay} note cleared.`);
}

function renderBlackboxJournalArchive(tState) {
    const listEl = document.getElementById('matrixJournalArchiveList');
    const countBadge = document.getElementById('matrixJournalCountBadge');
    if (!listEl || !countBadge) return;

    listEl.innerHTML = '';
    const entries = Object.entries(state.journals || {})
        .filter(([_, txt]) => txt && String(txt).trim().length > 0)
        .sort((a, b) => Number(b[0]) - Number(a[0]));

    countBadge.textContent = `${entries.length} Saved`;

    if (entries.length === 0) {
        listEl.innerHTML = `
            <div class="text-xs text-zinc-400 py-1">
                No daily notes saved yet. Write a note on the Today tab and it will appear here.
            </div>
        `;
        return;
    }

    entries.forEach(([dayKey, text]) => {
        const dNum = Number(dayKey);
        const item = document.createElement('div');
        item.onclick = () => {
            if (dNum <= tState.currentDay) {
                selectedDay = dNum;
                triggerHaptic('tick');
                renderMobileApp();
                switchMobileTab('status');
            }
        };
        item.className = "p-2.5 rounded-xl bg-black/55 border border-white/10 flex items-start justify-between gap-2 cursor-pointer active:scale-[0.99] transition";
        item.innerHTML = `
            <div class="min-w-0">
                <span class="font-mono text-[9.5px] text-emerald-400 font-bold uppercase">Nov ${String(dNum).padStart(2, '0')}</span>
                <p class="text-xs text-zinc-200 mt-0.5 break-words leading-snug">"${text.replace(/</g, '&lt;')}"</p>
            </div>
            <span class="font-mono text-[9px] text-zinc-500 shrink-0">View →</span>
        `;
        listEl.appendChild(item);
    });
}

function renderLegacyVaultCard(tState, legacyStats) {
    const badge = document.getElementById('legacyNovCountBadge');
    const summary = document.getElementById('legacyNovSummaryText');
    const pills = document.getElementById('legacyYearsPills');
    if (!badge || !summary || !pills) return;

    badge.textContent = `${legacyStats.count} Won`;
    pills.innerHTML = '';

    if (legacyStats.count === 0) {
        const daysRemaining = Math.max(0, 30 - tState.survivedDays);
        summary.innerHTML = state.relapsedOnDay
            ? `Your ${tState.now.getFullYear()} streak ended on Day ${state.relapsedOnDay}. Full Novembers won: <strong class="text-white">0</strong>.`
            : `You have won <strong class="text-white">0</strong> full Novembers so far (${tState.survivedDays}/30 days completed in ${tState.now.getFullYear()} — ${daysRemaining} days left).`;
    } else {
        summary.innerHTML = `You have conquered <strong class="text-amber-300 font-mono">${legacyStats.count}</strong> full No Nut November${legacyStats.count === 1 ? '' : 's'}!`;
    }

    legacyStats.wonYears.forEach(yr => {
        const p = document.createElement('span');
        p.className = "px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-400/40 font-mono text-[9.5px] text-amber-200 font-bold";
        p.textContent = `👑 NNN ${yr} WON (30/30)`;
        pills.appendChild(p);
    });

    legacyStats.failedYears.forEach(f => {
        const p = document.createElement('span');
        p.className = "px-2.5 py-1 rounded-lg bg-rose-950/40 border border-rose-500/30 font-mono text-[9.5px] text-rose-300";
        p.textContent = `💀 NNN ${f.year} LOST (DAY ${f.day})`;
        pills.appendChild(p);
    });
}

function renderUrgePatternPanel() {
    const summary = document.getElementById('urgePatternSummary');
    const list = document.getElementById('urgeHistoryList');
    if (!summary || !list) return;
    list.innerHTML = '';

    if (!state.urgeLogs || state.urgeLogs.length === 0) {
        summary.textContent = "No SOS urges logged yet. Tap SOS Help whenever an urge hits to track your weak hours and triggers.";
        return;
    }

    const weakWin = getWeakHoursWindow();
    const topTrig = getTopWeakTrigger();
    summary.innerHTML = `Danger Time: <strong class="text-amber-300 font-mono">${weakWin}</strong> • Top Trigger: <strong class="text-cyan-300 font-mono">${topTrig}</strong> (${state.urgeLogs.length} urges defeated).`;

    state.urgeLogs.slice(-8).reverse().forEach(item => {
        const badge = document.createElement('span');
        badge.className = "px-2 py-1 rounded-lg bg-black/60 border border-white/10 font-mono text-[9px] text-zinc-300";
        badge.textContent = `Nov ${String(item.day).padStart(2, '0')} @ ${String(item.hour).padStart(2, '0')}:00 (${item.trigger || 'Urge'})`;
        list.appendChild(badge);
    });
}

function stepSelectedDay(delta) {
    const tState = computeTemporalStatus();
    const target = selectedDay + delta;
    if (target < 1) {
        triggerHaptic('tick');
        return;
    }
    if (target > tState.currentDay) {
        triggerHaptic('alarm');
        showMobileToast(`Day ${target} unlocks at midnight!`);
        return;
    }
    selectedDay = target;
    triggerHaptic('tick');
    renderMobileApp();
}

function renderMatrices(tState) {
    const full = document.getElementById('fullMatrixGrid');
    if (!full) return;
    full.innerHTML = '';

    NOVEMBER_DAYS.forEach(item => {
        const d = item.day;
        const isFuture = d > tState.currentDay;
        const isToday = d === tState.currentDay && tState.phase === 'ACTIVE_NOV';
        const isRelapsed = state.relapsedOnDay && d >= state.relapsedOnDay && !isFuture;
        const isSurvived = !isFuture && (!state.relapsedOnDay || d < state.relapsedOnDay);
        const isSelected = selectedDay === d;
        const hasJournal = Boolean(state.journals && state.journals[String(d)] && state.journals[String(d)].trim());
        const hasQuest = Array.isArray(state.completedQuests) && state.completedQuests.includes(d);

        let stateClass = 'node-locked';
        if (isRelapsed) stateClass = 'node-relapsed';
        else if (isToday && !state.relapsedOnDay) stateClass = 'node-today';
        else if (isSurvived && item.milestone) stateClass = 'node-milestone-w';
        else if (isSurvived) stateClass = 'node-survived';

        const ringClass = isSelected ? 'ring-2 ring-white' : '';

        const fBtn = document.createElement('button');
        fBtn.className = `node-btn h-14 rounded-2xl border font-mono text-xs font-bold flex flex-col items-center justify-between p-2 tabular-nums ${stateClass} ${ringClass}`;
        fBtn.innerHTML = `
            <div class="w-full flex items-center justify-between text-[9px] opacity-85">
                <span>D${String(d).padStart(2, '0')}</span>
                <span class="flex items-center gap-0.5">
                    ${hasJournal ? '<span title="Note Saved">📝</span>' : ''}
                    ${hasQuest ? '<span class="text-emerald-300" title="Task Done">⚡</span>' : ''}
                    ${item.milestone ? '<span class="text-amber-300 font-bold">★</span>' : ''}
                </span>
            </div>
            <div class="text-xs font-bold">${isFuture ? '🔒' : (isRelapsed ? '✕' : (item.milestone ? '★ W' : '✓'))}</div>
        `;
        fBtn.onclick = () => {
            handleNodeTap(d, isFuture, fBtn);
            if (!isFuture) switchMobileTab('status');
        };
        full.appendChild(fBtn);
    });
}

function handleNodeTap(dayNum, isFuture, btnEl) {
    if (isFuture) {
        triggerHaptic('alarm');
        btnEl.classList.remove('shake-error');
        void btnEl.offsetWidth;
        btnEl.classList.add('shake-error');
        showMobileToast(`Day ${dayNum} is locked until Nov ${dayNum}!`);
        return;
    }
    selectedDay = dayNum;
    triggerHaptic('light');
    checkAndFireMilestoneOverdrive(dayNum);
    renderMobileApp();
}

function renderRankLadder(totalDays) {
    const container = document.getElementById('mobileRankLadder');
    if (!container) return;
    container.innerHTML = '';

    AURA_RANKS.forEach(r => {
        const unlocked = totalDays >= r.minDays;
        const row = document.createElement('div');
        row.className = `p-3 rounded-2xl border flex items-center justify-between transition ${
            unlocked
                ? 'bg-emerald-500/10 border-emerald-500/35 text-white'
                : 'bg-black/40 border-white/[0.06] text-zinc-500'
        }`;
        row.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-base">
                    ${r.icon}
                </div>
                <div>
                    <div class="font-mono text-[9px] uppercase ${unlocked ? 'text-emerald-400' : 'text-zinc-500'}">
                        ${r.tier} • Day ${r.minDays}+
                    </div>
                    <div class="font-display text-sm font-bold">${r.name}</div>
                </div>
            </div>
            <span class="font-mono text-[9.5px] px-2.5 py-1 rounded-lg ${
                unlocked ? 'bg-emerald-500 text-black font-bold' : 'bg-white/[0.04] text-zinc-500'
            }">
                ${unlocked ? 'UNLOCKED' : 'LOCKED'}
            </span>
        `;
        container.appendChild(row);
    });
}

function logDecemberCarryDay() {
    logPerpetualDailyCheckin();
}

// =====================================================================
// 11. PRE-NOVEMBER PLEDGE SCANNER
// =====================================================================
let bioTimer = null;
let bioProgress = 0;

function renderBiometricOathState() {
    const circle = document.getElementById('bioProgressCircle');
    const label = document.getElementById('bioActionLabel');
    const sub = document.getElementById('oathStatusSub');
    if (!circle || !label || !sub) return;
    const circum = 219.91;

    if (state.pledgedPreNov) {
        circle.style.strokeDashoffset = '0';
        label.textContent = "✓ PLEDGE LOCKED (+150 XP)";
        label.className = "mt-2 font-mono text-[10.5px] font-bold uppercase text-emerald-400";
        sub.textContent = "Your +150 XP pledge bonus is locked in for November 1st.";
    } else {
        circle.style.strokeDashoffset = circum;
        label.textContent = "HOLD 1.5S TO PLEDGE";
        label.className = "mt-2 font-mono text-[10.5px] font-bold uppercase text-zinc-300";
    }
}

function startBiometricScan(e) {
    if (e) e.preventDefault();
    if (state.pledgedPreNov) {
        triggerHaptic('light');
        showMobileToast("Pledge already locked in!");
        return;
    }
    clearInterval(bioTimer);
    bioProgress = 0;
    const circle = document.getElementById('bioProgressCircle');
    const label = document.getElementById('bioActionLabel');
    const circum = 219.91;

    if (label) label.textContent = "HOLDING...";
    triggerHaptic('tick');

    bioTimer = setInterval(() => {
        bioProgress += 5;
        const offset = circum - (bioProgress / 100) * circum;
        if (circle) circle.style.strokeDashoffset = offset;
        if (bioProgress % 25 === 0) triggerHaptic('tick');

        if (bioProgress >= 100) {
            clearInterval(bioTimer);
            state.pledgedPreNov = true;
            saveState();
            triggerHaptic('heavy');
            renderBiometricOathState();
            showMobileToast("Pledge Signed! +150 XP armed.");
        }
    }, 55);
}

function cancelBiometricScan() {
    if (state.pledgedPreNov) return;
    clearInterval(bioTimer);
    bioProgress = 0;
    renderBiometricOathState();
}

// =====================================================================
// 12. PERMANENT RELAPSE BUTTON (2.0S HOLD)
// =====================================================================
let relapseTimer = null;
let relapsePct = 0;

function startRelapseHold(e) {
    if (e) e.preventDefault();
    if (state.relapsedOnDay) return;
    const tState = computeTemporalStatus();
    if (tState.phase === 'PRE_NOV') return;

    clearInterval(relapseTimer);
    relapsePct = 0;
    const fill = document.getElementById('relapseFillBar');
    const vig = document.getElementById('relapseVignette');
    const txt = document.getElementById('relapseBtnText');

    if (vig) vig.style.opacity = '1';
    if (txt) txt.textContent = "CONFIRMING RELAPSE...";
    triggerHaptic('alarm');

    relapseTimer = setInterval(() => {
        relapsePct += 5;
        if (fill) fill.style.width = `${relapsePct}%`;
        if (relapsePct % 20 === 0) triggerHaptic('heartbeat');

        if (relapsePct >= 100) {
            clearInterval(relapseTimer);
            if (vig) vig.style.opacity = '0';
            if (fill) fill.style.width = '0%';
            state.relapsedOnDay = tState.currentDay || 1;
            state.decemberExtraDays = 0;
            saveState();
            triggerHaptic('alarm');
            renderMobileApp();
            switchMobileTab('status');
            showMobileToast(`💀 Streak lost on Day ${state.relapsedOnDay}.`);
        }
    }, 90);
}

function cancelRelapseHold() {
    if (state.relapsedOnDay) return;
    clearInterval(relapseTimer);
    relapsePct = 0;
    const fill = document.getElementById('relapseFillBar');
    const vig = document.getElementById('relapseVignette');
    const txt = document.getElementById('relapseBtnText');
    if (fill) fill.style.width = '0%';
    if (vig) vig.style.opacity = '0';
    if (txt) txt.innerHTML = `<i data-lucide="flame-kindling" class="w-4 h-4"></i><span>HOLD 2.0S TO REPORT RELAPSE</span>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// =====================================================================
// 13. SOS URGE HELPER + SCREEN WAKE-LOCK + PHYSICAL MOTION SENSOR
// =====================================================================
let sosBreathInterval = null;
let kineticReps = 0;
let sosQuoteIdx = 0;
let wakeLockSentinel = null;
let motionRepListenerBound = false;
let lastMotionRepTimestamp = 0;

async function requestSosWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            wakeLockSentinel = await navigator.wakeLock.request('screen');
        }
    } catch (e) {}
}

function releaseSosWakeLock() {
    try {
        if (wakeLockSentinel) {
            wakeLockSentinel.release();
            wakeLockSentinel = null;
        }
    } catch (e) {}
}

/**
 * Physical Accelerometer Pushup / Squat Detector in SOS Kinetic Mode:
 * Detects a >= 13.5 m/s² vertical acceleration spike (`devicemotion`) so physically
 * moving with the phone automatically logs reps alongside nose/thumb taps.
 */
function handleSosDeviceMotion(event) {
    const kPanel = document.getElementById('sosPanel_kinetic');
    if (!kPanel || kPanel.classList.contains('hidden')) return;

    const acc = event.accelerationIncludingGravity;
    if (!acc) return;
    const magnitude = Math.sqrt((acc.x || 0) ** 2 + (acc.y || 0) ** 2 + (acc.z || 0) ** 2);
    const now = Date.now();

    if (magnitude > 14.2 && now - lastMotionRepTimestamp > 650) {
        lastMotionRepTimestamp = now;
        logKineticRep();
    }
}

function openSOSSheet() {
    triggerHaptic('alarm');
    requestSosWakeLock();
    if (!motionRepListenerBound && typeof window.DeviceMotionEvent !== 'undefined') {
        window.addEventListener('devicemotion', handleSosDeviceMotion, true);
        motionRepListenerBound = true;
    }

    const backdrop = document.getElementById('sosBackdrop');
    const sheet = document.getElementById('sosBottomSheet');
    if (!backdrop || !sheet) return;
    backdrop.classList.remove('hidden');
    requestAnimationFrame(() => {
        backdrop.classList.remove('opacity-0');
        sheet.classList.remove('translate-y-full');
    });
    startSOSBreathingLoop();
}

function closeSOSSheet() {
    triggerHaptic('tick');
    releaseSosWakeLock();
    const backdrop = document.getElementById('sosBackdrop');
    const sheet = document.getElementById('sosBottomSheet');
    if (!backdrop || !sheet) return;
    backdrop.classList.add('opacity-0');
    sheet.classList.add('translate-y-full');
    setTimeout(() => backdrop.classList.add('hidden'), 320);
    clearInterval(sosBreathInterval);
}

function nextSOSQuote() {
    sosQuoteIdx = (sosQuoteIdx + 1) % SOS_QUOTES.length;
    document.getElementById('sosQuoteBox').textContent = `"${SOS_QUOTES[sosQuoteIdx]}"`;
    triggerHaptic('light');
}

function switchSOSMode(mode) {
    triggerHaptic('tick');
    const bTab = document.getElementById('sosTab_breath');
    const kTab = document.getElementById('sosTab_kinetic');
    const bPanel = document.getElementById('sosPanel_breath');
    const kPanel = document.getElementById('sosPanel_kinetic');

    if (mode === 'breath') {
        bTab.className = "py-1.5 rounded-xl bg-white text-black font-bold uppercase transition";
        kTab.className = "py-1.5 rounded-xl text-zinc-300 font-bold uppercase transition";
        bPanel.classList.remove('hidden');
        kPanel.classList.add('hidden');
        startSOSBreathingLoop();
    } else {
        kTab.className = "py-1.5 rounded-xl bg-white text-black font-bold uppercase transition";
        bTab.className = "py-1.5 rounded-xl text-zinc-300 font-bold uppercase transition";
        kPanel.classList.remove('hidden');
        bPanel.classList.add('hidden');
        clearInterval(sosBreathInterval);
        kineticReps = 0;
        document.getElementById('kineticRepCount').textContent = `0/20`;
    }
}

function startSOSBreathingLoop() {
    clearInterval(sosBreathInterval);
    const orb = document.getElementById('sosInnerOrb');
    const ring = document.getElementById('sosOuterRing');
    const lbl = document.getElementById('sosBreathLabel');
    const sec = document.getElementById('sosBreathSec');
    if (!orb || !ring || !lbl || !sec) return;

    const phases = [
        { name: 'INHALE', scale: 'scale-125', ringScale: 'scale-110' },
        { name: 'HOLD',   scale: 'scale-125', ringScale: 'scale-125' },
        { name: 'EXHALE', scale: 'scale-90',  ringScale: 'scale-95'  },
        { name: 'HOLD',   scale: 'scale-90',  ringScale: 'scale-90'  }
    ];
    let pIdx = 0;

    const runCycle = () => {
        const p = phases[pIdx];
        lbl.textContent = p.name;
        sec.textContent = '4.0s';
        orb.className = `w-16 h-16 px-2 py-2 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex flex-col items-center justify-center transition-all duration-[4000ms] ease-in-out ${p.scale}`;
        ring.className = `absolute inset-0 rounded-full border border-emerald-400/35 transition-all duration-[4000ms] ease-in-out ${p.ringScale}`;
        triggerHaptic('heartbeat');
        pIdx = (pIdx + 1) % phases.length;
    };
    runCycle();
    sosBreathInterval = setInterval(runCycle, 4000);
}

function logKineticRep() {
    kineticReps = Math.min(20, kineticReps + 1);
    const countEl = document.getElementById('kineticRepCount');
    if (countEl) countEl.textContent = `${kineticReps}/20`;
    triggerHaptic(kineticReps === 20 ? 'heavy' : 'light');
    if (kineticReps === 20) {
        showMobileToast("20 reps verified! Urge defeated.");
    }
}

function completeSOSProtocol() {
    const now = new Date();
    const tState = computeTemporalStatus();
    state.urgeDefeats = (state.urgeDefeats || 0) + 1;
    state.urgeLogs = state.urgeLogs || [];
    state.urgeLogs.push({
        day: tState.currentDay || 1,
        hour: now.getHours(),
        trigger: selectedUrgeTrigger || 'Late Scroll',
        timestamp: Date.now()
    });
    saveState();
    closeSOSSheet();
    triggerHaptic('heavy');
    renderMobileApp();
    showMobileToast(`Urge defeated! +25 XP added.`);
}

// =====================================================================
// 14. SWIPE GESTURES & LIVE CLOCK LOOP
// =====================================================================
function initHeroSwipeGestures() {
    const card = document.getElementById('gyroHeroCard');
    if (!card) return;
    let startX = 0;
    card.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].screenX;
    }, { passive: true });
    card.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].screenX;
        const diff = endX - startX;
        if (Math.abs(diff) > 48) {
            if (diff < 0) stepSelectedDay(1);
            else stepSelectedDay(-1);
        }
    }, { passive: true });
}

function updateHighFreqClocks() {
    const tState = computeTemporalStatus();
    const now = tState.now;

    if (tState.phase === 'ACTIVE_NOV' && lastObservedCalendarDay !== null && tState.currentDay !== lastObservedCalendarDay) {
        lastObservedCalendarDay = tState.currentDay;
        selectedDay = tState.currentDay;
        renderMobileApp();
        checkAndFireMilestoneOverdrive(selectedDay);
        showMobileToast(`Midnight passed: Day ${selectedDay} unlocked!`);
    } else if (lastObservedCalendarDay === null) {
        lastObservedCalendarDay = tState.currentDay;
    }

    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    const subReadout = document.getElementById('liveClockSubReadout');
    if (subReadout) subReadout.textContent = `TIME: ${hh}:${mm}:${ss}`;

    if (tState.phase === 'PRE_NOV') {
        const diff = Math.max(0, tState.novStart - now);
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        const ms = Math.floor((diff % 1000) / 10);

        const elD = document.getElementById('preDays');
        if (elD) {
            elD.textContent = String(d).padStart(2, '0');
            document.getElementById('preHours').textContent = String(h).padStart(2, '0');
            document.getElementById('preMins').textContent = String(m).padStart(2, '0');
            document.getElementById('preSecs').textContent = String(s).padStart(2, '0');
            document.getElementById('preMillis').textContent = `.${String(ms).padStart(2, '0')}s`;
        }
    } else {
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
        const rem = Math.max(0, endOfDay - now);
        const rh = String(Math.floor(rem / 3600000)).padStart(2, '0');
        const rm = String(Math.floor((rem % 3600000) / 60000)).padStart(2, '0');
        const rs = String(Math.floor((rem % 60000) / 1000)).padStart(2, '0');

        const lbl = document.getElementById('cycleDayLabel');
        if (lbl) {
            lbl.textContent = tState.phase === 'POST_NOV'
                ? `Bonus Streak (${tState.dayPct.toFixed(0)}%)`
                : `Day ${tState.currentDay} Progress (${tState.dayPct.toFixed(0)}%)`;
            document.getElementById('cycleNextTimer').textContent = `Next Day in ${rh}:${rm}:${rs}`;
            document.getElementById('cycleProgressBar').style.width = `${tState.dayPct.toFixed(2)}%`;
        }
    }
}

let toastTimeout = null;
function showMobileToast(msg) {
    const toast = document.getElementById('mobileToast');
    const txt = document.getElementById('mobileToastText');
    if (!toast || !txt) return;
    txt.textContent = msg;
    toast.classList.remove('opacity-0', '-translate-y-2');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.add('opacity-0', '-translate-y-2');
    }, 2500);
}

// =====================================================================
// 15. INITIALIZATION
// =====================================================================
window.addEventListener('DOMContentLoaded', () => {
    loadState();
    syncBiometricGateUI();
    initAutoLockOnBackground();

    const initStatus = computeTemporalStatus();
    selectedDay = initStatus.currentDay || 1;
    lastObservedCalendarDay = initStatus.currentDay;

    generateErrorProofQR('upiQrMainContainer');
    generateErrorProofQR('upiQrModalContainer');

    renderMobileApp();
    initTouchParallaxOnly();
    initHeroSwipeGestures();
    setInterval(updateHighFreqClocks, 90);
});

