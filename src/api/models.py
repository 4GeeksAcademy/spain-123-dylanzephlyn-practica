from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from sqlalchemy import Enum  # IMPORT NECESARIO
from enum import Enum as PyEnum  # Para definir tu enum en Python

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    is_active = db.Column(db.Boolean, nullable=False, default=True)
    is_admin = db.Column(db.Boolean, nullable=False, default=False)
    favorites = db.relationship("Favorite", backref="user", lazy=True)
    posts = db.relationship("Post", backref="user", lazy=True)
    comments = db.relationship("Comment", backref="author", lazy=True)
    followers_from = db.relationship("Followers", foreign_keys='Followers.user_from_id', backref="following", lazy=True)
    followers_to = db.relationship("Followers", foreign_keys='Followers.user_to_id', backref="follower", lazy=True)

    def __repr__(self):
        return f'<User {self.id} - {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "is_active": self.is_active,
            "is_admin": self.is_admin
        }


class MediaType(Enum):
    FOTO = "foto"
    VIDEO = "video"


class Medias(db.Model):
    __tablename__ = 'medias'
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(Enum(MediaType), nullable=False)
    url = db.Column(db.String(500), unique=True, nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))
    post_to = db.relationship('Post', backref=db.backref('media_to', lazy='select'))


class Post(db.Model):
    __tablename__ = 'post'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class Comment(db.Model):
    __tablename__ = 'comment'
    id = db.Column(db.Integer, primary_key=True)
    comment_text = db.Column(db.String(500), nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))
    post_to = db.relationship('Post', backref=db.backref('comment_to', lazy='select'))


class Followers(db.Model):
    __tablename__ = 'followers'
    id = db.Column(db.Integer, primary_key=True)
    user_from_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user_to_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return f'<Follower {self.user_from_id} -> {self.user_to_id}>'


class Planet(db.Model):
    __tablename__ = 'planet'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    climate = db.Column(db.String(120))
    terrain = db.Column(db.String(120))
    population = db.Column(db.Integer)
    favorites = db.relationship("Favorite", backref="planet", lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "climate": self.climate,
            "terrain": self.terrain,
            "population": self.population
        }


class Character(db.Model):
    __tablename__ = 'character'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    gender = db.Column(db.String(20))
    birth_year = db.Column(db.String(20))
    height = db.Column(db.Integer)
    favorites = db.relationship("Favorite", backref="character", lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "gender": self.gender,
            "birth_year": self.birth_year,
            "height": self.height
        }


class Favorite(db.Model):
    __tablename__ = 'favorite'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    planet_id = db.Column(db.Integer, db.ForeignKey("planet.id"), nullable=True)
    character_id = db.Column(db.Integer, db.ForeignKey("character.id"), nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "planet_id": self.planet_id,
            "character_id": self.character_id
        }
