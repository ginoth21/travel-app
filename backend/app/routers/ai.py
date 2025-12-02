from fastapi import APIRouter
from llama_ai import ai_router as llama

router = APIRouter()

@router.get("/")
async def hello():
    ai_answer = llama.ask("Give me a short fun fact about travelling.")
    response = ai_answer.content
    return {"message": response}