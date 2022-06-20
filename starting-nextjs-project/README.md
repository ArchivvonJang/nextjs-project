# Startng Nextjs Project

### NextJS ?

---
### NextJS key features and benefits

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
### Project Structure

```javascript
|-- pages //Define the different pages that should make up an application.
|   |-- _document // HTML Document, Application Container, 각종 페이지 등을 작성한다.
|   |-- _app      // Application Container. 공통의 레이아웃을 작성한다.
|   |-- _error    // Error Page.
|   |-- index     // Root page. path with /. 
|   |-- hello     // Hello Page. path with /hello.
|-- public //Public resources our page might use. For example, images.
|-- styles //Some style files.
```

