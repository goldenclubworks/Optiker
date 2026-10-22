# Optik Schorcht / Onepager verification

Implementation: 22 October 2026. Preview: http://127.0.0.1:4173/.

- Production build and TypeScript: PASS (`pnpm build`). Full-project ESLint: PASS (`pnpm lint`), including minor unused-component cleanup. `git diff --check`: PASS.
- Browser review at 1440 × 1000, 390 × 844, and 320 × 800 CSS pixels.
- All original Blick areas retained: Überblick, Einblick, Anblick, Durchblick, Rundblick, Weitblick. Rückblick retained as an expandable history area. Legal pages remain separate.
- Original Blick URLs, /kontakt, /termin, /brillen, /leistungen, /links and /angebote redirect to corresponding onepage anchors.
- Original business/store/product/device photographs used, with German alt text. No generated people or customer endorsements used.
- Three hero views share one authored procedural eyewear model: macro, store reflection, three-quarter. The original blue frame photograph is a shape-family reference, not an exact product/SKU claim. Smoke gray/Bordeaux are the authored material study.
- Reflection sources: unmodified `start03.jpg` and `start05.jpg` from the original Schorcht site. Reflections are deliberately composed in a curved Fresnel shader over physical glass, not a surveyed ray-traced reproduction of the shop.
- Keyboard: perspective buttons, navigation, gallery previous/next and lightbox/Escape, service details, native required-name validation verified.
- Mobile navigation opens, selects Anblick, closes and reaches the anchor. Horizontal overflow: zero at 390 and 320 pixels, including headings, fields and action buttons.
- Reduced motion emulation: zero WebGL canvases, static poster loaded, perspective buttons switch images. Scroll pinning disabled.
- Forced reflection-load failure: static fallback poster loaded and no leftover canvas. Network test configuration restored.
- Runtime: 48,088 model triangles; 52 steady-state draw calls; desktop DPR capped at 1.5, mobile 1.25. Demand-driven RAF and visibility pause. Render submission on this machine ~1–4ms, not a guarantee of 60fps on every device.
- Appointment form prepares an editable mailto draft. It does not confirm a booking or send an email itself. Existing unused `/api/termin` is not called by this form.
- All eight sculpt phases have local browser screenshot/comparison evidence in `docs/hero-sculpt/evidence` and authored-concept review records in `spec.json`. These local QA artifacts and machine-specific helper scripts are excluded from Git; production source, original images and optimized fallback images are committed.

HTTP route verification: root and legal pages return 200; all legacy routes return 308 with the expected root anchor; unknown routes return 404.
