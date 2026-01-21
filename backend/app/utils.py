from datetime import datetime, timedelta, timezone
from uuid import uuid4

import jwt
from itsdangerous import BadSignature, SignatureExpired, URLSafeTimedSerializer
from jwt.exceptions import InvalidTokenError
from pwdlib import PasswordHash

from app.config import security_settings

password_hash = PasswordHash.recommended()
_serializer = URLSafeTimedSerializer(secret_key=security_settings.JWT_SECRET)


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


def generate_url_safe_token(data: dict):
    return _serializer.dumps(data)


def decode_url_safe_token(
    token: str,
    exp: timedelta | None = None,
) -> dict | None:
    try:
        return _serializer.loads(s=token)
    except (BadSignature, SignatureExpired):
        return None
