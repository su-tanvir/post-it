***
## 🎯 Overview
- Idea: creation of a **document editor** to facilitate the publication of this.
- Goal: mainly aimed at students so that they are able to create a document to share their knowledge.

***
## 📚 Project management
- `Inception phase`
  - Documentation: project overview, project management (use cases), ...
  - Brainstorming / gathering ideas - goals + create sketch pages + extract features in ***epics + user stories***
  - Analyze technological solutions
  - <details><summary><strong>MVP backlog</strong></summary>
    
    | **Epic**                    | **User story**
    | :-:                         | :-:                
    | **Home**               | Access main page <br> Create post <br> See posts <br> Change language  <br>  Change theme
    | **Edition**            | Edit post form <br> Preview post <br> Publish post
    | **Visualization**      | See list of posts <br> Filter list of posts <br> View post content
  </details>

- `Development stage`: <ins>mono-repository or workspace</ins> to manage two projects (follow branch strategy: **Github flow**)
  - [Frontend](../frontend/README.md)
  - [Backend](../backend/README.md)

***
## ⚙️ Tech stack
- Frontend: Npm - Vite - React [TS] - Sass - MUI - Context API - i18n
- Backend: Pnpm - Express [TS]
- Database: Mongodb [online DB] - Mongoose ORM

***
## 📝 License
The software is published under the [`ISC` License](../LICENSE).

***