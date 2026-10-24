# Schorcht / studio and editorial refinement

24 October 2026. Story: visitors experience a branded eyewear introduction, explore authentic Schorcht material and shop imagery, and reach the original services and a clearly described email appointment request.

## Design evidence

- The local reference library's 15 desktop heroes and interior contact sheets were compared again with the previous implementation. The second pass strengthens product/typography depth, font contrast, changing image scale, navigation as a separate mode, and material-based exploration.
- Reviewed at 1440 × 1000, 1440 × 900, 1920 × 1000, 768 × 1024, 390 × 844 and 320 × 800 CSS pixels. Desktop and mobile visual evidence is retained locally in the ignored `docs/hero-sculpt/reference-upgrade/` directory.
- Six final fallback renders were visually reviewed as a set and converted from Display P3 to sRGB before WebP export. The three views now run from perspective to shop reflection to macro. Geometry remains the authored concept, not an exact product/SKU claim.
- Tablet's enlarged image field avoids a horizontal cut through the frame. Camera projection uses the same cover composition as the corresponding static picture. The sticky sequence starts at its first view at scroll position zero.
- The original Schorcht logo, business details, shop photographs, product photographs, history and Blick areas remain. Reference-library images, copied brand assets and stock portraits were not introduced.

## Checks

| Boundary | Result / evidence |
| --- | --- |
| Source → production | `pnpm build` passes compilation, TypeScript and generation of 21 static pages |
| React/Next.js source | `pnpm lint` passes; client-only scene remains dynamically imported and disposes its resources |
| CSS declarations | Stylelint with `property-no-unknown` and `declaration-property-value-no-unknown` passes both CSS files |
| Desktop/mobile page width | No horizontal document overflow at 320, 390, 768 and 1920 pixels; headings, paragraphs, form options and footer also checked |
| Menu → section | Production full-screen menu opens with shop photograph, Anblick selection closes it and reaches the section |
| Material controls → rail | Production Holz selection and next control reach Metall; selected material and count update |
| Wide rail endpoints | At 1920 pixels, Acetat → Metall correctly reaches 03/03 and disables the next control; explicit endpoint handling prevents a middle selection at the rail end |
| Gallery → overlay | Production gallery opens; Escape closes it and restores focus to its trigger |
| Form → validation | Production empty submit focuses `appointment-name`; no draft or success state created |
| Reduced motion | Zero canvases, static mobile picture complete, perspective controls switch pictures; pinning and animations disabled |
| Small viewport → visible canvas | At 320 × 200 the canvas is intentionally below the viewport. Expanding to 390 × 844 now resumes rendering (`hero-render is-ready`, frame counter increments); Im Glas then selects and renders correctly |
| Reflection failure | Blocked `start03.jpg`: zero leftover canvases, completed poster and static state; network settings restored |
| Production runtime | Browser console contains no errors or warnings in the sampled production journey |

The form retains its existing mailto behavior and sends nothing itself. No new API, external booking integration, credentials or analytics were added. The direct hero thumbnail reuses a shop image already used by the Three.js scene rather than requesting a separate optimized variant.

The final runtime check exposed a visibility mismatch: initialization checked the canvas host, while the observer watched the entire hero. When the title was visible but the canvas was below the fold, expanding the viewport could leave the renderer paused. Both checks now use the canvas host, including the document-visibility handler. The small-to-large viewport regression was reproduced and verified after the fix.

The geometry remains 48,088 model triangles with 24–52 sampled steady-state draw calls. Desktop/mobile DPR caps remain 1.5/1.25, with demand-driven rendering and visibility pause. Warm local render-submission samples were approximately 0.5–2ms; this does not measure total GPU time or guarantee a frame rate on physical devices.

All checks used the real local browser and a separately compiled production server. Viewport and motion emulation are responsive checks, not a claim of testing on physical iOS or Android devices. Temporary network and viewport overrides are removed before handoff.
