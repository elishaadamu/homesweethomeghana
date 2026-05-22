"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Icon } from "../../components/Icons";

/* ── Reusable styled field wrapper ─────────────────────── */
function Field({ label, children, full }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <div className={full ? "col-span-full" : ""}>
      <label className="block mb-1.5 font-outfit text-[0.82rem] font-semibold tracking-[0.02em] text-hsh-navy">
        {label}
      </label>
      {children}
    </div>
  );
}

/* ── Shared input classes ───────────────────────────────── */
const inputClasses = "w-full px-4 py-3 rounded-xl border-[1.5px] border-[#D8E0F0] bg-[#F8FAFF] text-[0.92rem] text-hsh-dark-text transition-all duration-200 outline-none font-inherit focus:border-hsh-cyan focus:ring-[3px] focus:ring-hsh-cyan/15";

/* ── Section Header ──────────────────────────────────────── */
function SectionHeader({ icon, title, number }: { icon: React.ReactNode; title: string; number: string }) {
  return (
    <div className="flex items-center gap-3.5 mb-7">
      <div className="w-11 h-11 rounded-xl bg-hsh-navy flex items-center justify-center text-white shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-hsh-cyan">
          Step {number}
        </div>
        <h2 className="font-outfit text-xl font-black text-hsh-dark-text leading-tight">
          {title}
        </h2>
      </div>
    </div>
  );
}

/* ── Checkbox Card ───────────────────────────────────────── */
function CheckCard({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label
      className={`flex items-center gap-2.5 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 text-[0.88rem] font-medium ${
        checked 
          ? "border-[1.5px] border-hsh-cyan bg-hsh-cyan/5 text-hsh-navy" 
          : "border-[1.5px] border-[#D8E0F0] bg-[#F8FAFF] text-hsh-muted"
      }`}
      onClick={(e) => {
        // Prevent default double toggle issue if wrapping inputs
        e.preventDefault();
        onChange();
      }}
    >
      <div className={`w-5 h-5 rounded-md shrink-0 flex items-center justify-center transition-all duration-200 ${
        checked ? "bg-hsh-cyan border-none" : "border-2 border-[#C5D0E6] bg-white"
      }`}>
        {checked && <Icon.Check className="w-3 h-3 text-white" />}
      </div>
      {label}
    </label>
  );
}

/* ── Progress Indicator ───────────────────────────────────── */
function ProgressBar({ step }: { step: number }) {
  const steps = ["Personal Info", "Membership", "Emergency", "Declaration"];
  return (
    <div className="w-full overflow-x-auto hide-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 mb-10 pb-4 sm:pb-0">
      <div className="flex items-center gap-0 min-w-[500px] sm:min-w-0">
        {steps.map((s, i) => (
          <div key={s} className={`flex items-center ${i < steps.length - 1 ? "flex-1" : "shrink-0"}`}>
            <div className="flex flex-col items-center gap-1.5 relative z-10">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[0.72rem] font-black transition-all duration-300 ${
                i <= step ? "bg-hsh-navy text-white" : "bg-[#E2E8F4] text-hsh-muted"
              } ${i === step ? "ring-4 ring-hsh-cyan/20" : ""}`}>
                {i + 1}
              </div>
              <span className={`text-[0.6rem] font-semibold tracking-[0.04em] whitespace-nowrap transition-colors duration-300 ${
                i <= step ? "text-hsh-navy" : "text-hsh-muted"
              }`}>
                {s}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-[2px] mx-1 mb-[1.2rem] rounded-[1px] transition-colors duration-300 ${
                i < step ? "bg-hsh-cyan" : "bg-[#E2E8F4]"
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Selected Plan Badge ───────────────────────────────────── */
function SelectedPlanBadge({ planParam }: { planParam: string | null }) {
  if (!planParam) return null;

  return (
    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-hsh-cyan/20 border border-hsh-cyan/30 backdrop-blur-md mt-6">
      <Icon.Award className="w-4 h-4 text-amber-300" />
      <span className="text-sm font-semibold tracking-wide text-white">
        Applying for: <span className="text-amber-300">{planParam}</span>
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════ */
function ApplyFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const planParam = searchParams.get("plan");

  const [step, setStep] = useState(0);
  const [countries, setCountries] = useState<string[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("");

  const isDiaspora = !planParam && selectedCountry !== "" && selectedCountry !== "Ghana";
  const derivedPlan = planParam || (selectedCountry === "Ghana" ? "Local Member" : (selectedCountry !== "" ? "Diaspora Member" : null));

  const paypalLinks: Record<string, string> = {
    "Local Member": "https://paypal.me/placeholder-local",
    "Diaspora Member": "https://paypal.me/placeholder-diaspora",
    "Corporate Partner": "https://paypal.me/placeholder-corporate",
  };
  const paymentLink = derivedPlan ? (paypalLinks[derivedPlan] || paypalLinks["Local Member"]) : paypalLinks["Local Member"];

  /* membership type & interests as sets */
  const [memberType, setMemberType] = useState<Set<string>>(new Set());
  const [interests, setInterests] = useState<Set<string>>(new Set());

  const toggleSet = (set: Set<string>, setter: (s: Set<string>) => void, val: string) => {
    const next = new Set(set);
    if (next.has(val)) next.delete(val); else next.add(val);
    setter(next);
  };

  /* Fetch countries */
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then((r) => r.json())
      .then((data: { name: { common: string } }[]) => {
        const names = data.map((c) => c.name.common).sort((a, b) => a.localeCompare(b));
        setCountries(names);
      })
      .catch(() => setCountries(["Ghana", "Nigeria", "United Kingdom", "United States"]))
      .finally(() => setLoadingCountries(false));
  }, []);

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <>
      {/* ── Beautiful Premium Hero Header ────────────────────────── */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0A1840]">
        <Image
          src="/apply_hero.png"
          alt="Join HSH Network"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1840] via-[#0A1840]/60 to-transparent" />
        
        {/* Massive Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] md:text-[9rem] font-black text-white/[0.04] whitespace-nowrap pointer-events-none uppercase tracking-widest font-outfit z-0">
          JOIN US
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-20 w-full">
          <p className="text-xs font-bold tracking-widest uppercase text-hsh-cyan mb-4">Welcome to the Family</p>
          <h1 className="font-outfit text-5xl md:text-7xl font-black text-white leading-tight mb-5">
            Membership <span className="text-hsh-cyan">Application</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            Become a part of the Home Sweet Home Ghana Network and connect with a vibrant community of Ghanaians across the globe.
          </p>
          <SelectedPlanBadge planParam={derivedPlan} />
        </div>
        
      
      </section>

      {/* ── Form Container ────────────────────────────── */}
      <main className="bg-hsh-off-white px-6 pb-20">
        <div className="max-w-[780px] -mt-12 md:-mt-24 mx-auto relative z-10 bg-white rounded-[20px] shadow-[0_20px_60px_rgba(27,58,143,0.08),0_1px_3px_rgba(0,0,0,0.04)] p-10 pb-12 border border-hsh-navy/5">
          {/* Progress */}
          <ProgressBar step={step} />

          <form onSubmit={(e) => e.preventDefault()}>

            {/* ═══════ STEP 0: Personal Info ═══════ */}
            {step === 0 && (
              <div className="animate-fade-in-up">
                <SectionHeader
                  icon={<Icon.Users className="w-5 h-5" />}
                  title="Personal Information"
                  number="01"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.1rem]">
                  <Field label="Full Name" full>
                    <input type="text" placeholder="Enter your full name" className={inputClasses} />
                  </Field>
                  <Field label="Date of Birth">
                    <input type="date" className={inputClasses} />
                  </Field>
                  <Field label="Gender">
                    <select className={`${inputClasses} cursor-pointer`}>
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </Field>
                  <Field label="Country of Residence">
                    <select 
                      className={`${inputClasses} cursor-pointer`} 
                      value={selectedCountry}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSelectedCountry(val);
                        
                        const params = new URLSearchParams(searchParams.toString());
                        const newPlan = val === "Ghana" ? "Local Member" : "Diaspora Member";
                        params.set("plan", newPlan);
                        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
                      }}
                    >
                      <option value="" disabled>{loadingCountries ? "Loading countries..." : "Select your country"}</option>
                      {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </Field>
                  <Field label="Home Town in Ghana">
                    <input type="text" placeholder="e.g. Kumasi" className={inputClasses} />
                  </Field>
                  <Field label="Residential Address" full>
                    <input type="text" placeholder="Enter your residential address" className={inputClasses} />
                  </Field>
                  <Field label="City / Town of Residence">
                    <input type="text" placeholder="e.g. London" className={inputClasses} />
                  </Field>
                  <Field label="Region">
                    <input type="text" placeholder="e.g. Greater Accra" className={inputClasses} />
                  </Field>
                  <Field label="Phone Number">
                    <input type="tel" placeholder="+233 XXX XXX XXXX" className={inputClasses} />
                  </Field>
                  <Field label="Email Address">
                    <input type="email" placeholder="you@example.com" className={inputClasses} />
                  </Field>
                  <Field label="Occupation / Profession">
                    <input type="text" placeholder="e.g. Software Engineer" className={inputClasses} />
                  </Field>
                  <Field label="Organisation / Company (if applicable)">
                    <input type="text" placeholder="Optional" className={inputClasses} />
                  </Field>
                </div>
              </div>
            )}

            {/* ═══════ STEP 1: Membership Details ═══════ */}
            {step === 1 && (
              <div className="animate-fade-in-up">
                <SectionHeader
                  icon={<Icon.Award className="w-5 h-5" />}
                  title="Membership Details"
                  number="02"
                />

                <div className="mb-8">
                  <label className="block mb-3 font-semibold text-[0.85rem] text-hsh-navy">
                    Type of Membership Applying For
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {["Individual Membership", "Student Membership", "Corporate Membership", "Volunteer Membership", "Honorary Membership"].map((t) => (
                      <CheckCard key={t} label={t} checked={memberType.has(t)} onChange={() => toggleSet(memberType, setMemberType, t)} />
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <Field label="Reason for Joining Home Sweet Home Ghana Network" full>
                    <textarea placeholder="Tell us why you would like to join..." className={`${inputClasses} min-h-[110px] resize-y`} />
                  </Field>
                </div>

                <div>
                  <label className="block mb-3 font-semibold text-[0.85rem] text-hsh-navy">
                    Areas of Interest / Skills
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {["Community Development", "Youth Empowerment", "Education", "Health & Wellness", "Entrepreneurship", "Volunteering", "Networking & Partnerships"].map((s) => (
                      <CheckCard key={s} label={s} checked={interests.has(s)} onChange={() => toggleSet(interests, setInterests, s)} />
                    ))}
                  </div>
                  <div className="mt-3.5">
                    <Field label="Other interests (optional)" full>
                      <input type="text" placeholder="Specify other interests..." className={inputClasses} />
                    </Field>
                  </div>
                </div>
              </div>
            )}

            {/* ═══════ STEP 2: Emergency Contact ═══════ */}
            {step === 2 && (
              <div className="animate-fade-in-up">
                <SectionHeader
                  icon={<Icon.Shield className="w-5 h-5" />}
                  title="Emergency Contact Information"
                  number="03"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.1rem]">
                  <Field label="Full Name" full>
                    <input type="text" placeholder="Emergency contact name" className={inputClasses} />
                  </Field>
                  <Field label="Relationship">
                    <input type="text" placeholder="e.g. Spouse, Sibling" className={inputClasses} />
                  </Field>
                  <Field label="Phone Number">
                    <input type="tel" placeholder="+233 XXX XXX XXXX" className={inputClasses} />
                  </Field>
                </div>
              </div>
            )}

            {/* ═══════ STEP 3: Declaration ═══════ */}
            {step === 3 && (
              <div className="animate-fade-in-up">
                <SectionHeader
                  icon={<Icon.ClipboardList className="w-5 h-5" />}
                  title="Declaration"
                  number="04"
                />

                <div className="bg-hsh-cyan/5 border border-hsh-cyan/15 rounded-[14px] px-7 py-6 mb-8">
                  <p className="text-[0.92rem] leading-relaxed text-hsh-dark-text">
                    I hereby declare that the information provided in this application form is true and accurate to the best of my knowledge. I agree to abide by the rules, regulations, and objectives of Home Sweet Home Ghana Network.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.1rem] mb-8">
                  <Field label="Applicant's Signature (Type Full Name)">
                    <input type="text" placeholder="Type your full name" className={`${inputClasses} italic`} />
                  </Field>
                  <Field label="Date">
                    <input type="date" className={inputClasses} />
                  </Field>
                </div>
              </div>
            )}

            {/* ═══════ STEP 4: Success & Payment ═══════ */}
            {step === 4 && (
              <div className="animate-fade-in-up text-center py-8">
                <div className="w-20 h-20 bg-hsh-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon.Check className="w-10 h-10 text-hsh-cyan" />
                </div>
                <h2 className="font-outfit text-3xl font-black text-hsh-dark-text mb-4">
                  Application Submitted!
                </h2>
                <p className="text-hsh-muted text-[0.95rem] leading-relaxed mb-6 max-w-lg mx-auto">
                  Thank you for applying to join the Home Sweet Home Ghana Network. 
                  {isDiaspora && " We noticed you reside outside Ghana, so you'll be joining as a Diaspora Member! "}
                  Please complete your membership fee payment to finalize your application.
                </p>
                
                <div className="bg-hsh-off-white border-[1.5px] border-[#D8E0F0] rounded-[16px] p-6 mb-8 max-w-sm mx-auto">
                  <div className="text-xs font-bold uppercase tracking-widest text-hsh-navy mb-2">Membership Type</div>
                  <div className="font-outfit text-xl font-black text-hsh-dark-text">{derivedPlan}</div>
                </div>

                <a 
                  href={paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-hsh-orange px-10 py-3.5 font-bold text-base text-white font-outfit transition-transform duration-200 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(249,115,22,0.25)]"
                >
                  <Icon.Send className="w-5 h-5" />
                  Pay with PayPal
                </a>
              </div>
            )}

            {/* ── Navigation Buttons ──────────────────── */}
            {step < 4 && (
              <div className={`flex items-center mt-10 pt-6 border-t border-[#EEF3FF] ${step === 0 ? "justify-end" : "justify-between"}`}>
                {step > 0 && (
                  <button type="button" onClick={prev}
                    className="bg-transparent border-2 border-[#D8E0F0] rounded-full px-7 py-2.5 font-bold text-[0.88rem] text-hsh-navy cursor-pointer flex items-center gap-2 font-outfit transition-all duration-200 hover:border-hsh-navy hover:bg-hsh-navy/5"
                  >
                    <Icon.ArrowRight className="w-4 h-4 rotate-180" />
                    Previous
                  </button>
                )}

                {step < 3 ? (
                  <button type="button" onClick={next} className="flex items-center gap-2 rounded-full bg-hsh-orange px-8 py-2.5 font-bold text-[0.9rem] text-white font-outfit transition-transform duration-200 hover:scale-105 active:scale-95">
                    Continue
                    <Icon.ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button type="button" 
                    className="flex items-center gap-2 rounded-full bg-hsh-navy px-10 py-3 font-bold text-base text-white font-outfit transition-transform duration-200 hover:scale-105 active:scale-95"
                    onClick={() => setStep(4)}
                  >
                    <Icon.Send className="w-4 h-4" />
                    Submit Application
                  </button>
                )}
              </div>
            )}
          </form>
        </div>

        {/* Bottom tagline */}
        <p className="text-center mt-8 text-[0.82rem] text-hsh-muted italic">
          Home Sweet Home Ghana Network &bull; Promoting Unity, Growth, and Community Development
        </p>
      </main>
    </>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#0A1840]"><p className="text-white">Loading...</p></div>}>
      <ApplyFormContent />
    </Suspense>
  );
}
