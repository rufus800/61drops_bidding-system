from fastapi import FastAPI
from app.api import bidding, users, websocket
from app.database import engine, Base

app = FastAPI()

@app.on_event("startup")
async def startup():
    Base.metadata.create_all(bind=engine)

app.include_router(bidding.router)
app.include_router(users.router)
app.include_router(websocket.router)
