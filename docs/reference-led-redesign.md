# Schorcht — reference-led redesign

23 October 2026. Extends the original onepager and Three.js hero.

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

- Deep Schorcht wine (`#792b39`), warm paper (`#f2efe7`) and charcoal (`#252a28`). The existing logo and real Dresden shop remain the identity anchors.
- Inter Tight display type, Manrope reading text and restrained monospace labels. Large statements have clear line breaks; labels stay secondary.
- The hero combines “Sehen. erleben.” with the existing procedural eyewear model, genuine shop-image reflections and three selectable cameras. No automatic carousel or forced scrolling.
- Einblick becomes a personal introduction and full-width shop gallery. Rückblick remains an expandable, complete history.
- Anblick uses a material index for Acetat, Holz and Metall, each with an authentic product photograph and its own text. It supports pointer and keyboard selection.
- Durchblick changes to a dark technical study around the real Visionix photograph. Rundblick uses a circular lens study. Weitblick pairs an actual shop image with service disclosures.
- The facade, address, hours and telephone precede the wine-colored appointment area. The form explicitly prepares an email draft; it does not claim to send or confirm a booking.

## Motion and small screens

Desktop uses a short native sticky hero sequence with demand-driven camera rendering. Mobile uses a separate, larger three-quarter composition and directly selectable views, without pinning. Material tabs become horizontal and expose the corresponding ARIA orientation.

Reduced motion removes WebGL, pinning and reveal animations. All three views remain available as static pictures. Content is visible before JavaScript or observers run. Texture or context failure leaves a poster visible. Six new desktop/mobile fallback renders match the final scene. Browser captures were converted from Display P3 to sRGB before export, so their backgrounds match CSS rather than introducing a tinted rectangular seam.

## Verification

See `verification/reference-upgrade.md`. Local visual research sheets and screenshots remain in the ignored `docs/hero-sculpt/reference-upgrade/` directory, outside the published website.
