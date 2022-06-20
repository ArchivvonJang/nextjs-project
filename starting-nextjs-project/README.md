# Startng Nextjs Project

## What is NextJS ?
Next.js is a flexible React framework that gives you building blocks to create fast web applications.

By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.

---
## NextJS key features and benefits

👍 File-based Routing
- Define pages and routes with files and folders instead of code.
- Less code, less work, highly understandable.

👍 Server-side Rendering
- Automatic page pre-rendering: Great for SEO(Search Engine Optimization) and initial load.
- Blending client-side and server-side: Fetch data on the server and render finished pages.

👍 Fullstack Capabilities
- Easily add backend(server-side) code to your Next/React apps.
- Storing data, getting data, authentication etc. can be added to your React projects.
---
## Project Structure

```javascript
|-- pages //Define the different pages that should make up an application.
|   |-- _document // HTML Document, Application Container. Create various pages, etc.
|   |-- _app      // Application Container. Create a common layout.
|   |-- _error    // Error Page.
|   |-- index     // Root page. Path with /. 
|   |-- hello     // Hello Page. Path with /hello.
|-- public //Public resources our page might use. For example, images.
|-- styles //Some style files.
```

