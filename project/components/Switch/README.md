Toggle switch (the one rounded control — pill is functional here).

Provide `label`, `checked` and `onChange`. The one rounded control in the system: the pill is functional here. Use for settings that take effect immediately.

```jsx
<Switch label="Email alerts" checked={on} onChange={e => setOn(e.target.checked)} />
```
