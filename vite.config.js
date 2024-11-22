// vite.config.js
export default {
  build: {
    // Set the entry point for your application
    rollupOptions: {
      input: {
        main: 'index.js' // Assuming your entry file is named index.js
      },
      output: {
       inlineDynamicImports: true, // Force inline all dynamic imports
       entryFileNames: `dist/assets/wharfkit.js` // Set the output file name
      }
    }
  }
}