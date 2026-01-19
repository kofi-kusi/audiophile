from pathlib import Path

from fastapi import BackgroundTasks
from fastapi_mail import ConnectionConfig, FastMail, MessageSchema, MessageType
from pydantic import NameEmail

from app.config import notification_settings

TEMPLATES_DIR = Path(__file__).parent.parent / "templates"


class NotificationService:
    def __init__(self, tasks: BackgroundTasks):
        self.tasks: BackgroundTasks = tasks
        self.fastmail = FastMail(
            config=ConnectionConfig(
                **notification_settings.model_dump(),
                TEMPLATE_FOLDER=TEMPLATES_DIR,
            )
        )

    def send_mail(
        self,
        subject: str,
        recipients: list[NameEmail],
        body: str,
    ):
        message = MessageSchema(
            subject=subject,
            recipients=recipients,
            body=body,
            subtype=MessageType.html,
        )
        self.tasks.add_task(self.fastmail.send_message, message)

    def send_email_with_template(
        self,
        subject: str,
        recipients: list[NameEmail],
        context: dict,
        template_name: str,
    ):
        message = MessageSchema(
            subject=subject,
            recipients=recipients,
            template_body=context,
            subtype=MessageType.html,
        )
        self.tasks.add_task(
            func=self.fastmail.send_message,
            message=message,
            template_name=template_name,
        )
