"""create todo list

Revision ID: 6c81669e1b1f
Revises: 7fcd9d8d48e8
Create Date: 2025-02-06 16:15:01.721878

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '6c81669e1b1f'
down_revision: Union[str, None] = '7fcd9d8d48e8'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
