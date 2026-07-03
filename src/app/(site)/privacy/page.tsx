import * as React from "react";
import { getMetadata } from "@/lib/seo";
import Container from "@/components/common/Container";

export const metadata = getMetadata({
  title: "Privacy Policy",
  description: "Read the Motive Solutions Privacy Policy to learn how we handle visitor data.",
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <Container className="py-20 max-w-3xl">
      <h1 className="text-4xl font-extrabold text-foreground tracking-tight mb-8">
        Privacy Policy
      </h1>
      
      <div className="prose max-w-none text-muted-foreground leading-relaxed space-y-6 text-sm">
        <p>
          Last updated: July 3, 2026
        </p>

        <p>
          At Motive Solutions (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we respect your privacy and are committed to protecting any information collected through your use of our website (<a href="https://motivesolutions.uk" className="text-primary hover:underline">motivesolutions.uk</a>).
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">1. Information We Collect</h2>
        <p>
          We do not require user accounts or registration to browse our site. We only collect details that you voluntarily submit through our Contact / Quote Request Form (such as name, email, telephone number, company, and project requirements) to respond to your inquiry.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">2. How We Use Your Information</h2>
        <p>
          We use the information we collect solely to:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Review your software project requirements and formulate a quote or proposal.</li>
          <li>Communicate with you regarding consultations, support, and technical project scopes.</li>
          <li>Ensure the security and operational safety of our website interface.</li>
        </ul>

        <h2 className="text-xl font-bold text-foreground pt-4">3. Data Sharing & Third Parties</h2>
        <p>
          Motive Solutions does not sell, lease, or distribute your email, contact details, or project descriptions to third-party marketing companies. We only share details with trusted infrastructure providers required to operate our email tools or comply with legally mandated regulations.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">4. Software-Only Disclaimer</h2>
        <p className="font-semibold text-foreground">
          Motive Solutions is a custom software engineering agency. We build IPTV players, media applications, backend administrative portals, and API integrations. We do not host, provision, or resell playlists, TV channels, movie streams, or broadcaster content.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or wish to request the correction or removal of your details, please contact us at: <a href="mailto:info@motivesolutions.uk" className="text-primary hover:underline">info@motivesolutions.uk</a>.
        </p>
      </div>
    </Container>
  );
}
