from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas import BidCreate, Bid
from app.models import Bid as BidModel

router = APIRouter()

@router.post("/bids/", response_model=Bid)
def create_bid(bid: BidCreate, db: Session = Depends(get_db)):
    db_bid = BidModel(**bid.dict())
    db.add(db_bid)
    db.commit()
    db.refresh(db_bid)
    return db_bid
