"use client";

import * as React from "react";
import { SITE_CONFIG } from "@/constants/site";
import { ROUTES } from "@/constants/routes";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const projectTypes = [
    "IPTV App Development",
    "OTT App Development",
    "White-Label IPTV App",
    "Smart TV App Development",
    "Web TV Player",
    "Admin Panel & API System",
    "Custom Business Software",
    "Not Sure Yet"
  ];

  const platformOptions = [
    "Android",
    "iOS",
    "Android TV",
    "Samsung Tizen",
    "LG webOS",
    "Fire TV",
    "Web",
    "Admin Panel",
    "API / Backend"
  ];

  const budgets = [
    "Not sure yet",
    "Under $1,000",
    "$1,000 - $3,000",
    "$3,000 - $7,000",
    "$7,000 - $15,000",
    "$15,000+"
  ];

  const timelines = [
    "Not sure yet",
    "As soon as possible",
    "2 - 4 weeks",
    "1 - 3 months",
    "3+ months"
  ];

  // Form State
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [projectType, setProjectType] = React.useState(projectTypes[0]);
  const [description, setDescription] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [selectedPlatforms, setSelectedPlatforms] = React.useState<string[]>([]);
  const [budget, setBudget] = React.useState(budgets[0]);
  const [timeline, setTimeline] = React.useState(timelines[0]);
  const [apiDetails, setApiDetails] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [validationError, setValidationError] = React.useState("");

  const handlePlatformChange = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !company || !description) {
      setValidationError("Please fill out all required fields marked with *");
      return;
    }
    setValidationError("");

    // Prefill mailto body parameters
    const mailSubject = `Project Quote Request: ${projectType} - ${company}`;
    const mailBody = 
      `Hello Motive Solutions Team,\n\n` +
      `I would like to request a project quote with the following details:\n\n` +
      `- Name: ${name}\n` +
      `- Email: ${email}\n` +
      `- Phone/WhatsApp: ${phone}\n` +
      `- Company: ${company}\n` +
      `- Project Type: ${projectType}\n` +
      `- Target Platforms: ${selectedPlatforms.join(", ") || "None selected"}\n` +
      `- Budget Range: ${budget}\n` +
      `- Preferred Timeline: ${timeline}\n\n` +
      `Project Description:\n${description}\n\n` +
      `Existing API/Backend Details:\n${apiDetails || "None"}\n\n` +
      `Website/URL: ${url || "None"}\n` +
      `Additional Notes:\n${notes || "None"}\n\n` +
      `Best regards,\n${name}`;

    // Open mailto link fallback
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    setFormSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
      {/* Left Column: Direct Contact Info & Checklist */}
      <div className="lg:col-span-5 flex flex-col gap-10">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Direct Contact Details</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Have questions before submitting your project details? Reach out to us via email or WhatsApp directly.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <Card hoverable={false} className="p-5 bg-slate-50/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Email Address</span>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm font-semibold text-foreground hover:text-primary">
                {SITE_CONFIG.email}
              </a>
            </Card>
            <Card hoverable={false} className="p-5 bg-slate-50/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Phone / WhatsApp</span>
              <a href={`tel:${SITE_CONFIG.telephone}`} className="text-sm font-semibold text-foreground hover:text-primary">
                {SITE_CONFIG.telephone}
              </a>
            </Card>
            <Card hoverable={false} className="p-5 bg-slate-50/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Office Locations</span>
              <span className="text-sm font-semibold text-foreground">
                Colchester, United Kingdom &bull; Sialkot, Pakistan
              </span>
            </Card>
            <Card hoverable={false} className="p-5 bg-slate-50/50">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Our Core Focus</span>
              <span className="text-xs font-semibold text-muted-foreground leading-relaxed">
                IPTV/OTT apps, Smart TV apps, web players, admin systems, and business custom software development.
              </span>
            </Card>
          </div>
        </div>

        {/* Checklist Guide */}
        <div className="border-t border-border pt-8">
          <h3 className="text-lg font-bold text-foreground mb-4">What Should You Include in Your Request?</h3>
          <ul className="space-y-3">
            {[
              "Your business or product idea",
              "Target platforms and devices",
              "Required features",
              "Existing API, backend, or provider system",
              "Branding assets if available",
              "Timeline and budget range",
              "Examples or references you like",
              "Any technical constraints or current problems"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground">
                <span className="text-primary text-[10.5px] font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column: Request Quote Form */}
      <div className="lg:col-span-7">
        {!formSubmitted ? (
          <Card hoverable={false} className="p-8 md:p-10 bg-white border border-border shadow-soft">
            <h2 className="text-2xl font-bold text-foreground mb-2">Request a Project Quote</h2>
            <p className="text-sm text-muted-foreground mb-8">
              Submit your details below and our technical architects will review them.
            </p>

            {validationError && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r text-xs font-bold text-red-700">
                {validationError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Required Fields Group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="full-name" className="text-xs font-bold text-muted-foreground uppercase">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="p-3 text-sm rounded-lg border border-border focus:outline-none focus:border-primary text-foreground bg-slate-50/20"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email-address" className="text-xs font-bold text-muted-foreground uppercase">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email-address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. john@example.com"
                    className="p-3 text-sm rounded-lg border border-border focus:outline-none focus:border-primary text-foreground bg-slate-50/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone-number" className="text-xs font-bold text-muted-foreground uppercase">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone-number"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +1 (555) 019-2834"
                    className="p-3 text-sm rounded-lg border border-border focus:outline-none focus:border-primary text-foreground bg-slate-50/20"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company-name" className="text-xs font-bold text-muted-foreground uppercase">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company-name"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Acme Media Corp"
                    className="p-3 text-sm rounded-lg border border-border focus:outline-none focus:border-primary text-foreground bg-slate-50/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="project-type" className="text-xs font-bold text-muted-foreground uppercase">
                  Project Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="project-type"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="p-3 text-sm rounded-lg border border-border focus:outline-none focus:border-primary text-foreground bg-slate-50/20"
                >
                  {projectTypes.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="project-desc" className="text-xs font-bold text-muted-foreground uppercase">
                  Project Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="project-desc"
                  required
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Briefly describe what you want to build, the users you are targeting, required features, and your launch goals."
                  className="p-3 text-sm rounded-lg border border-border focus:outline-none focus:border-primary text-foreground bg-slate-50/20 resize-y"
                />
              </div>

              {/* Optional Fields Group */}
              <div className="border-t border-border pt-6 mt-6 space-y-6">
                <h3 className="text-sm font-bold text-foreground">Optional Details (Helps us provide a more accurate quote)</h3>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="product-url" className="text-xs font-bold text-muted-foreground uppercase">
                    Website / Existing Product URL
                  </label>
                  <input
                    type="url"
                    id="product-url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.com"
                    className="p-3 text-sm rounded-lg border border-border focus:outline-none focus:border-primary text-foreground bg-slate-50/20"
                  />
                </div>

                {/* Target Platforms Checkboxes */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-bold text-muted-foreground uppercase">Target Platforms</span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {platformOptions.map((opt) => (
                      <label key={opt} className="flex items-center gap-2 text-xs font-semibold text-foreground cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={selectedPlatforms.includes(opt)}
                          onChange={() => handlePlatformChange(opt)}
                          className="w-4 h-4 rounded border-border text-primary focus:ring-primary cursor-pointer"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="budget-range" className="text-xs font-bold text-muted-foreground uppercase">
                      Budget Range
                    </label>
                    <select
                      id="budget-range"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="p-3 text-sm rounded-lg border border-border focus:outline-none focus:border-primary text-foreground bg-slate-50/20"
                    >
                      {budgets.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="project-timeline" className="text-xs font-bold text-muted-foreground uppercase">
                      Preferred Timeline
                    </label>
                    <select
                      id="project-timeline"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="p-3 text-sm rounded-lg border border-border focus:outline-none focus:border-primary text-foreground bg-slate-50/20"
                    >
                      {timelines.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="api-details" className="text-xs font-bold text-muted-foreground uppercase">
                    Existing API / Backend Details
                  </label>
                  <textarea
                    id="api-details"
                    rows={3}
                    value={apiDetails}
                    onChange={(e) => setApiDetails(e.target.value)}
                    placeholder="Tell us if you already have an API, admin panel, Xtream Codes API, M3U source, middleware, existing app, or backend system."
                    className="p-3 text-sm rounded-lg border border-border focus:outline-none focus:border-primary text-foreground bg-slate-50/20 resize-y"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="additional-notes" className="text-xs font-bold text-muted-foreground uppercase">
                    Additional Notes / Request Specifics
                  </label>
                  <textarea
                    id="additional-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Enter any other requirements, deployment constraints, or custom modules."
                    className="p-3 text-sm rounded-lg border border-border focus:outline-none focus:border-primary text-foreground bg-slate-50/20 resize-y"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-primary hover:bg-primary/95 text-primary-foreground font-bold text-sm shadow-soft transition-colors duration-200 cursor-pointer"
              >
                Send Project Request
              </button>

              <p className="text-[11px] text-center text-muted-foreground leading-relaxed">
                * Note: This form UI is prepared for integration. Until backend submission is connected, please contact us directly by email or WhatsApp.
              </p>
            </form>
          </Card>
        ) : (
          // Success State
          <Card hoverable={false} className="p-8 md:p-12 bg-white border border-green-200 shadow-soft text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-50 text-green-500 border border-green-200 flex items-center justify-center font-bold text-3xl mb-6">
              ✓
            </div>
            <h2 className="text-2xl font-black text-foreground mb-4">Project Details Prepared!</h2>
            <p className="text-sm text-muted-foreground max-w-lg leading-relaxed mb-8">
              Your local email client has been opened with your project quote specifications. Please review and send the pre-filled email to complete your request.
            </p>

            <div className="p-6 bg-slate-50 border border-border rounded-xl text-left w-full space-y-3 mb-8">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Prepared Overview:</h4>
              <div className="grid grid-cols-2 gap-y-2 text-xs">
                <span className="text-muted-foreground font-semibold">Project Type:</span>
                <span className="text-foreground font-bold">{projectType}</span>

                <span className="text-muted-foreground font-semibold">Budget Range:</span>
                <span className="text-foreground font-bold">{budget}</span>

                <span className="text-muted-foreground font-semibold">Timeline:</span>
                <span className="text-foreground font-bold">{timeline}</span>
              </div>
            </div>

            <div className="p-5 bg-blue-50/30 border border-primary/10 rounded-xl text-xs font-semibold text-muted-foreground leading-relaxed max-w-lg mb-8">
              📢 <strong>Integration Note:</strong> This form UI is prepared for integration. Until backend submission is connected, please send your project specs directly via email to <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary font-bold">{SITE_CONFIG.email}</a> or contact us on WhatsApp at <a href={`tel:${SITE_CONFIG.telephone}`} className="text-primary font-bold">{SITE_CONFIG.telephone}</a> if the mail client did not launch.
            </div>

            <div className="flex gap-4">
              <Button href={ROUTES.SERVICES.ROOT}>
                Browse Services
              </Button>
              <Button variant="outline" onClick={() => setFormSubmitted(false)}>
                Modify Details
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
