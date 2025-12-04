from fastapi import APIRouter
from llama_ai import ai_router as llama
import json

router = APIRouter()

@router.get("/")
async def hello():
    ai_answer = llama.ask("Give me a short fun fact about travelling.")
    response = ai_answer.content
    return {"message": response}

@router.get("/generate")
async def generate():
    ai_answer = llama.ask("Provide a 2 day itinerary for a trip to New York City. Provide this in a JSON format with only the JSON body.")
    response = ai_answer.content
    return {"message": response}