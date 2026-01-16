from redis import Redis

from app.config import db_settings

_token_blacklist = Redis(
    host=db_settings.REDIS_HOST,
    port=db_settings.REDIS_PORT,
    db=0,
)


def add_jti_to_blacklist(jti: str, time_remaining: int):
    _token_blacklist.setex(jti, time=time_remaining, value="blacklisted")


def is_jti_blacklisted(jti: str):
    return _token_blacklist.get(jti)
