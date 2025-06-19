## 🧪 AI Model Testing: Frontend Coding Assistants
This project compares multiple AI models by asking each to build the same frontend application — a To-Do List — using React, TypeScript, and Tailwind CSS.

This project compares multiple AI models by asking each to build the same frontend application — a To-Do List — using React, TypeScript, and Tailwind CSS.

### 🎯 Objective
To evaluate the real-world usability of AI coding assistants when building a project from scratch.
The focus is on:

- Code quality

- Feature completeness

- Developer experience

- UI/UX polish

- Bug frequency

💡 This experiment simulates greenfield development. Model performance in complex, large-scale projects may vary.




### 🧱 Task Definition
Build a To-Do List Web App with the following features:

- Add / Edit / Delete tasks

- Toggle task completion

- Filter: All / Completed / Incomplete

- Persist data in localStorage

- Use React functional components

- Style using Tailwind CSS

- Use TypeScript throughout


  
  
### 🧠 Models Compared
| Model               | Total LoC | Code Quality | Feature Completion | UI/UX Design | Bugs | Dev Experience | Notes                      |
| ------------------- | --------- | ------------ | ------------------ | ------------ | ---- | -------------- | -------------------------- |
| **Claude 4 Sonnet** | 586       | 9/10         | ✅✅✅✅✅✅             | 8/10         | 0    | 10/10          | Modular, clean, uses hooks |
| **Grok 3 Beta**     | 328       | 7/10         | ✅✅✅✅✅✅             | 6/10         | 0    | 10/10          | Feature-rich but unmodular |
| **GPT-4.1**         | \~?       | 7/10         | ✅✅✅✅✅✅             | 5/10         | 1    | 7/10           | Bug in setup, interactive  |


### 📝 Discussion Highlights
- Claude 4 was best for long-term maintainability and team projects.
- Grok 3 delivered the same results in fewer lines, but harder to scale.
- GPT-4.1 had a collaborative feel but suffered from package errors and slower progress.


### 🚀 Future Plans
- Add GPT-4o and Gemini 2.5 Pro
- Try larger apps (with routing, auth, or APIs)
- Compare behavior on mid-project refactoring or bug fixing

