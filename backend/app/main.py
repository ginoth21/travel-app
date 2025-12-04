from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.ai import router as ai_router

app = FastAPI()

origins = [
   "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ai_router, prefix="/ai")

@app.get("/")
def root():
    return {"message": "Hello from backend!"}
