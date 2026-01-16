from datetime import datetime, timedelta, timezone
from uuid import uuid4

import jwt
from jwt.exceptions import InvalidTokenError
from pwdlib import PasswordHash

from app.config import security_settings

password_hash = PasswordHash.recommended()


def generate_access_token(data: dict, expires_delta: timedelta | None = None) -> str:
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(tz=timezone.utc) + expires_delta
    else:
        expire = datetime.now(tz=timezone.utc) + timedelta(hours=3)
    to_encode.update({"exp": expire, "jti": str(uuid4())})
    token: str = jwt.encode(
        payload=to_encode,
        key=security_settings.JWT_SECRET,
        algorithm=security_settings.JWT_ALGORITHM,
    )
    return token


def decode_access_token(token: str) -> dict | None:
    try:
        return jwt.decode(
            jwt=token,
            key=security_settings.JWT_SECRET,
            algorithms=security_settings.JWT_ALGORITHM,
        )
    except InvalidTokenError:
        return None
