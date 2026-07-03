import * as React from "react";
import { getMetadata } from "@/lib/seo";
import Container from "@/components/common/Container";

export const metadata = getMetadata({
  title: "Terms of Service",
  description: "Read the Motive Solutions Terms of Service.",
  path: "/terms",
});

export default function TermsOfServicePage() {
  return (
    <Container className="py-20 max-w-3xl">
      <h1 className="text-4xl font-extrabold text-foreground tracking-tight mb-8">
        Terms of Service
      </h1>
      
      <div className="prose max-w-none text-muted-foreground leading-relaxed space-y-6 text-sm">
        <p>
          Last updated: July 3, 2026
        </p>

        <p>
          By using our website (<a href="https://motivesolutions.uk" className="text-primary hover:underline">motivesolutions.uk</a>), you agree to comply with and be bound by the following Terms of Service.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">1. Use of Website</h2>
        <p>
          This website is provided to convey information regarding Motive Solutions&rsquo; custom software engineering services, portfolios, and platforms. You agree to use the site only for lawful queries and quote requests.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">2. Intellectual Property</h2>
        <p>
          All layout templates, design accents, copy, code snippets, and custom CSS visuals rendered on this website are the property of Motive Solutions and are protected by applicable intellectual property regulations.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">3. Software-Only Delivery Limitation</h2>
        <p className="font-semibold text-foreground">
          Motive Solutions designs and develops customized streaming players, Smart TV apps (Tizen, webOS, Android TV), administration consoles, and API systems. We do not provide, resell, or distribute TV playlists, video files, live streaming streams, or television channel access of any type. It is the sole legal responsibility of the client/operator to obtain appropriate licensing for any content streamed through codebases built by us.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">4. Limitation of Liability</h2>
        <p>
          Motive Solutions provides this website and its information on an &ldquo;as is&rdquo; basis. We make no warranty that our website will be uninterrupted or error-free. We shall not be held liable for any damages arising out of the use of or inability to use this website.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">5. Governing Law</h2>
        <p>
          Any disputes arising out of the use of this website or these Terms of Service shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to conflict of law principles.
        </p>
      </div>
    </Container>
  );
}
