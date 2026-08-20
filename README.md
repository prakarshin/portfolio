# Prakarsh Angular Portfolio

Angular 22 conversion of the supplied portfolio HTML.

## Run

```bash
npm install
ng serve
```

Open `http://localhost:4200`.

## Edit website data

Most website content is stored in:

`src/app/data/portfolio.data.ts`

You normally do not need to edit the HTML to add content.

### Add experience

Add another object inside `experience`:

```ts
{
  role: 'Senior Business Analyst',
  duration: '2026 — Present',
  summary: 'Role summary.',
  impacts: [
    'Achievement one.',
    'Achievement two.'
  ]
}
```

### Add a product/project

Add another object inside `products`:

```ts
{
  number: 'PRODUCT 04',
  title: 'New Product',
  description: 'Product contribution summary.',
  tags: ['Discovery', 'Delivery'],
  icon: 'fa-solid fa-layer-group'
}
```

### Add skills or industries

Append another object to `technicalSkills` or `industries`.

## Styling

The original page styling is intentionally kept in `src/styles.css` rather than component CSS. This is required because selectors such as `:root`, `html`, and `body` must be global in Angular; keeping them in component-scoped CSS changes the appearance.

`src/app/app.component.css` is intentionally minimal.
