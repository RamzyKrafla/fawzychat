# FawzyChat Frontend Structure

## Folder Organization

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   └── logo.svg        # Logo asset
├── pages/              # Page components
│   └── Home.js         # Home page
├── styles/             # CSS files
│   ├── App.css         # Main app styles
│   ├── Header.css      # Header component styles
│   ├── Home.css        # Home page styles
│   └── index.css       # Global styles
├── utils/              # Utility functions
│   └── firebase.js     # Firebase configuration
├── hooks/              # Custom React hooks
├── context/            # React context providers
├── App.js              # Main app component
└── index.js            # App entry point
```

## Component Structure

### Pages (`src/pages/`)

- **Home.js**: Main landing page
- Add more pages as needed: `Chat.js`, `About.js`, etc.

### Components (`src/components/`)

- **Header.js**: Navigation component
- Add reusable components: `Button.js`, `Card.js`, `Modal.js`, etc.

### Styles (`src/styles/`)

- Each component/page has its own CSS file
- Global styles in `index.css`
- App-wide styles in `App.css`

### Utils (`src/utils/`)

- **firebase.js**: Firebase configuration
- Add other utilities: API calls, helpers, etc.

### Hooks (`src/hooks/`)

- Custom React hooks for reusable logic

### Context (`src/context/`)

- React context providers for state management

## Best Practices

1. **One component per file**
2. **CSS files match component names**
3. **Keep components small and focused**
4. **Use descriptive names**
5. **Import from relative paths**

## Adding New Components

1. Create component in appropriate folder
2. Create matching CSS file in `styles/`
3. Import and use in your pages
