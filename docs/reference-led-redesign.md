# Schorcht — reference-led redesign

24 October 2026. Second design pass on the original onepager and Three.js hero, following the user's request for a stronger synthesis of the reference library.

## Reference review

Reviewed the desktop and mobile heroes, interior states, and design notes of all 15 studies in the user's local `WEBSEITENREFERENZEN/high-end-web-reference` library:

| Study | Principle considered for Schorcht |
| --- | --- |
| Fine Thought | A clear visual voice and deliberate shifts in scale |
| Inertia Studios | Large typography, quiet navigation, object-led composition |
| Studio Alphonse | Broad display type and a coherent material identity |
| Siena Film Foundation | A subject-specific editorial structure |
| dhk Architects | Photographs as evidence, consistent alignment and readable copy |
| Tracing Art | An exploratory reading rhythm |
| 45R Denim Karuta | Meaningful interaction instead of decorative controls |
| Terminal Industries | Precise labels and information hierarchy |
| zeroz | A product within one coherent colored environment |
| Lando Norris | Camera and input behavior tied to the featured object |
| serotoninn | Different layout modes for different kinds of content |
| Seasoned | Clear feedback and direct navigation |
| White Desert | Cinematic imagery alongside practical visitor information |
| Gil Huybrecht | Unequal image scales and editorial pacing |
| Colonia Zacamil | Identity expressed through the whole page |

The principal composition references are Inertia, Studio Alphonse, zeroz and White Desert. This is a Schorcht-specific interpretation; reference screenshots, logos, fonts and media are not published or copied into the site.

## Resulting design

- A warm studio (`#e9e2d6`), paper (`#f5f1e9`), Schorcht wine (`#792b39`) and charcoal (`#252a28`). The existing logo and real Dresden shop remain the identity anchors.
- Inter Tight display type now contrasts with italic Instrument Serif; Manrope handles reading text and monospace stays limited to labels. The same contrast connects hero, personal introduction, material names, measurement, care and closure.
- “Sehen. erleben.” and the floating eyewear occupy different depths. A warmer, more polished acetate study, studio highlights, physical shadow and less opaque genuine shop-image reflections replace the previous flat wine-colored chamber. Three views remain directly selectable.
- A quiet masthead opens a full-screen Blick index. Desktop pairs its large routes with a real shop photograph; mobile keeps the routes and direct contact access.
- Einblick pairs a large personal statement with the original logo's dot language and the proprietor's note. A masked image entrance leads into the full-width shop gallery. Rückblick remains an expandable, complete history.
- Anblick is now a native horizontal editorial series: differently sized, staggered Acetat, Holz and Metall photographs, material links, previous/next controls and a visible position indicator. It supports touch, pointer and keyboard access without automatic advancement or scroll hijacking.
- Durchblick remains a dark technical study around the real Visionix photograph. Rundblick uses a circular lens study on a warmer surface. Weitblick pairs a real shop image with service disclosures and the founding year.
- The facade, address, hours and telephone precede the wine-colored appointment area. The form explicitly prepares an email draft; it does not claim to send or confirm a booking.

## Motion and small screens

Desktop uses a short native sticky hero sequence with demand-driven camera rendering. Mobile uses a separate three-quarter composition and directly selectable views, without pinning. Tablet receives a taller image field; camera zoom matches the static poster's cover behavior, preventing a hard cut through the frame. The material series uses native horizontal scrolling and explicit controls across input types.

Reduced motion removes WebGL, pinning and reveal animations. All three views remain available as static pictures. Content is visible before JavaScript or observers run. Texture or context failure leaves a poster visible. Six new desktop/mobile fallback renders match the final scene. Browser captures were converted from Display P3 to sRGB before export, so their backgrounds match CSS rather than introducing a tinted rectangular seam.

## Verification

See the dated reports in `verification/reference-upgrade.md` and `verification/atelier-refinement.md`. Removed 132 obsolete CSS rules belonging to the previous hero, material tabs and introduction. The new art direction is isolated in `src/app/atelier.css`; shared gallery, form, legal and layout styles remain in `globals.css`.

Local visual research sheets and screenshots remain in the ignored `docs/hero-sculpt/reference-upgrade/` directory, outside the published website. The reference library's assets are never used as production media.
