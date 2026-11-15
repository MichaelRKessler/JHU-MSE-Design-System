Left-bar alert. Tones: info, success, warning, danger.

Provide `tone` (`info`, `success`, `warning`, `danger`), optional `title`, `children` and `onDismiss`. The tone icon is a Font Awesome glyph, so the consumer must load the Font Awesome 6.5.2 stylesheet (cdnjs) for it to show; the left bar and tint carry the tone without it. Always state the issue in words.

```jsx
<Alert tone="warning" title="Deadline">All VTSI materials due December 1.</Alert>
```
