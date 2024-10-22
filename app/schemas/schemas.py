from pydantic import BaseModel

class BidCreate(BaseModel):
    user_id: int
    amount: float

class Bid(BaseModel):
    id: int
    user_id: int
    amount: float

    class Config:
        orm_mode = True
