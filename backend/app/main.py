from fastapi import FastAPI
from routers.ai import router as ai_router

app = FastAPI()

app.include_router(ai_router, prefix="/ai")

@app.get("/")
def root():
    return {"message": "Hello from backend!"}
