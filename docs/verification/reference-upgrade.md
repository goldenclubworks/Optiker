# Reference-led upgrade verification

23 October 2026. Story: a visitor explores the new Schorcht hero, discovers the original Blick areas and authentic photographs, and reaches clear contact information or an editable email appointment request.

| Boundary | Result | Evidence |
| --- | --- | --- |
| Source → production build | PASS | `pnpm build`: compiled successfully; 21 static pages generated; TypeScript passed |
| Source quality | PASS | `pnpm lint` and `git diff --check`, no errors |
| Browser → page | PASS | Production server on 127.0.0.1:4174; root rendered; production console has no errors or warnings |
| Navigation → sections | PASS | Desktop links, mobile menu → Anblick, menu closes and reaches the section |
| Material input → content | PASS | ArrowRight selects Holz and updates image, copy, selected state and panel label; mobile Metall selection also works |
| Gallery → enlarged media | PASS | Opened on mobile production build, next image changes image/title/counter, Escape closes and returns focus |
| History input → content | PASS | Enter opens the native disclosure and reveals all original history paragraphs and photograph |
| Appointment → validation | PASS | Empty submit focuses required name field and does not create a success message or mail draft |
| Reduced motion → fallback | PASS | Media emulation: zero canvases, static mobile perspective loaded, buttons switch static views, no sticky sequence |
| Failed texture → fallback | PASS | Blocked start03.jpg: poster complete, zero leftover canvases, static state true; network overrides subsequently removed |
| Shared layout → legal | PASS | Production Impressum renders below fixed navigation, no horizontal overflow |

Visual review: desktop at 1440 × 1000 CSS pixels; mobile at 390 × 844 and 320 × 800. No horizontal overflow at either mobile width. Reviewed hero, introductory statement, full-width shop gallery, material index, technical measurement study, contact-lens study, service, appointment and legal layout. All six fallback exports were visually checked. Mobile fallback background is seamless after color-profile conversion.

Original business details and photographs remain in use. No reference-library media or stock portraits have been added. Existing separate legal pages and legacy redirects remain intact. The email form retains its existing mailto behavior; no delivery service, booking backend or external message was added or invoked.

Three.js geometry remains the previously verified authored concept (48,088 model triangles). Runtime observation: 52 steady-state draw calls, approximately 0.7ms submission in the sampled local frame. This is not a GPU benchmark or a promise of a device-independent frame rate. Idle/offscreen rendering remains demand-driven and DPR remains capped.

Local browser evidence: `docs/hero-sculpt/reference-upgrade/` (ignored from Git). The compiled production server was used for final interaction checks to exclude development HMR artifacts.
