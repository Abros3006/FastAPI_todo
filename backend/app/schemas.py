from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class TodoBase(BaseModel):
    title: str
    description: Optional[str] = None

class TodoCreate(TodoBase):
    pass

class Todo(TodoBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True