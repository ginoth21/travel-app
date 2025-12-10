from fastapi import APIRouter
from llama_ai import ai_router as llama
import json
from pydantic import BaseModel

router = APIRouter()

class itineraryRequest(BaseModel):
    destination: str
    days: str

@router.get("/")
async def hello():
    ai_answer = llama.ask("Give me a short fun fact about travelling.")
    response = ai_answer.content
    return {"message": response}

@router.post("/generate")
async def generate(request: itineraryRequest):
    destination = request.destination
    num_days = request.days
    ai_answer = llama.ask("Provide a " + num_days + " day itinerary for a trip to " + destination + " . Provide this in a JSON format with only the JSON body.")
    response = json.loads(ai_answer.content)
    return {"message": response}
