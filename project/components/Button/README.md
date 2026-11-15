Squared-off JHU button; Heritage Blue primary, outline secondary, Gold for high-emphasis CTAs on white, onDark for Heritage Blue fields.

Provide `children` (a short verb phrase in sentence case: "Learn more", "Apply", "Request Info") and `onClick`. Use `primary` for the main action, `secondary` beside it, `gold` for the one high-emphasis CTA on white (Apply, Give), `onDark` on Heritage Blue fields, `ghost` for tertiary text actions like "View all news". Add `arrow` for navigational CTAs. Corners stay square; never more than one gold button per view.

```jsx
<Button arrow>Learn more</Button>
<Button variant="gold" size="lg">Apply</Button>
```
Variants: primary, secondary, gold, onDark, ghost. Sizes sm/md/lg. `arrow` adds a trailing →.
