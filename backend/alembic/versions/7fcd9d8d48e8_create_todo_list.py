"""create todo list

Revision ID: 7fcd9d8d48e8
Revises: d87621310c50
Create Date: 2025-02-06 16:13:08.788150

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '7fcd9d8d48e8'
down_revision: Union[str, None] = 'd87621310c50'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
