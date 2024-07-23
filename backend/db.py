import mysql.connector
from config import Config

def get_db_connection():
    return mysql.connector.connect(
        user=Config.DB_USER,
        password=Config.DB_PASSWORD,
        host=Config.DB_HOST,
        database=Config.DB_NAME
    )
