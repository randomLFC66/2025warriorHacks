import uvicorn
from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize OpenAI client
client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY")
)

app = FastAPI()

# Enable CORS for frontend to connect easily
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust to specific origin in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model for Chat
class ChatRequest(BaseModel):
    message: str
    history: list = []  # Optional history for maintaining chat context

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    messages = [{"role": "system", "content": "You are a compassionate AI that asks open-ended questions to understand the user's mental well-being, emotions, and habits. Based on their responses, assess signs of stress, anxiety, or depression, but avoid diagnosing. Keep the tone warm, friendly, and conversational, offering support and suggesting professional help if needed."}]
    
    # Add conversation history
    for msg in request.history:
        messages.append(msg)
    
    # Add current user message
    messages.append({"role": "user", "content": request.message})

    # Call OpenAI API to get response using the new implementation
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=messages,
        max_tokens=150
    )

    # Get reply from response
    reply = response.choices[0].message.content

    # Print the response
    print(f"Response: {reply}")

    return {"response": reply}

if __name__ == "__main__":
    # Run the FastAPI app with uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
