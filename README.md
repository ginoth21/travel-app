# travel-app

## add Llama API Key
cd backend<br>
create .env file with following:<br>
GROQ_API_KEY={api_key}<br>

Can get keys from https://console.groq.com/home<br>

## Set up
cd backend<br>
python3 -m venv .venv<br>
source .venv/bin/activate<br>
pip install -r requirements.txt<br>

## Run frontend
cd frontend<br>
npm run dev<br>

## Run backend
cd backend<br>
source ./.venv/bin/activate<br>
uvicorn main:app --reload<br>