**MindQuest — Free AI Mental Health Support for Kids**

**Inspiration**

During the COVID-19 pandemic, many kids felt isolated and lonely, struggling to connect with peers and find someone to talk to. Despite the growing need, most mental health AI tools remain costly and inaccessible for many young people. We created MindQuest to bridge that gap — a free, compassionate AI chatbot designed to support children’s mental well-being, especially in the aftermath of the pandemic.

**What it does**

MindQuest offers an empathetic conversational experience that helps users explore their feelings and stressors in a safe space. It:

- Asks open-ended, supportive questions to understand emotional well-being

- Suggests gentle coping strategies inspired by cognitive-behavioral techniques

- Provides motivational conversations and encourages positive habits

- Promotes seeking professional help when serious distress is detected

**How we built it**

The project combines vanilla JavaScript and HTML for the frontend UI with Python and FastAPI backend to securely communicate with OpenAI’s GPT-4o-mini model. Our prompt engineering ensures the AI maintains a warm, supportive tone without diagnosing or giving medical advice.

**Challenges we ran into**
We faced issues with Flask CORS and CORS Middleware, unexpected bugs, and code incompatibilities that required multiple changes. We ultimately switched to Vanilla JS for this reason. Managing asynchronous calls and maintaining conversation context were tricky, but crucial for a smooth user experience.

**Accomplishments we’re proud of**

Successfully syncing multiple technologies into a seamless chatbot that feels natural and supportive was a major achievement. We’re proud of the thoughtful prompt design that helps the AI respond empathetically and responsibly.

**What we learned**

This project taught us the necessities of prompt engineering, API integration, and combining frontend and backend languages to build an interactive AI application.

**What’s next for MindQuest**

We plan to add more interactive features like guided breathing exercises, yoga tips, and personalized stress relief activities. Our goal is to continuously improve MindQuest’s ability to support mental health in an engaging, accessible way.

