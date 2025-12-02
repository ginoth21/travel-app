from langchain_groq import ChatGroq
from langchain.schema import HumanMessage
from dotenv import load_dotenv
import os

load_dotenv(dotenv_path="../.env")

# Initialize model
llm = ChatGroq(
    api_key=os.getenv("GROQ_API_KEY"),
    model="llama-3.3-70b-versatile"
)

def ask(prompt):
    message = [
        HumanMessage(content=prompt)
    ]

    response = llm(message)
    return response
