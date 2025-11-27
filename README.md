# travel-app

## Set up
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

## Run frontend
cd frontend
npm run dev

## Run backend
cd backend
source ./.venv/bin/activate 
uvicorn main:app --reload