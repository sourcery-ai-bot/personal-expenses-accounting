"""empty message

Revision ID: 9c0af5b61c4c
Revises: 
Create Date: 2020-06-24 22:27:18.030915

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9c0af5b61c4c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('email', sa.String(length=70), nullable=False),
    sa.Column('password', sa.String(length=255), nullable=False),
    sa.Column('verified', sa.Boolean(), nullable=True),
    sa.Column('avatar', sa.String(length=50), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('receipt_data',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('image', sa.String(length=255), nullable=False),
    sa.Column('vendor', sa.String(length=255), nullable=True),
    sa.Column('price', sa.String(length=20), nullable=True),
    sa.Column('date', sa.DateTime(), nullable=True),
    sa.Column('category', sa.String(length=50), nullable=True),
    sa.Column('warranty', sa.String(length=50), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('receipt_data')
    op.drop_table('users')
    # ### end Alembic commands ###
