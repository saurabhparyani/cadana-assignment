from flask import Blueprint, jsonify, request
from db import get_db_connection
from datetime import datetime

cart_bp = Blueprint('cart', __name__)

@cart_bp.route('/add_to_cart', methods=['POST'])
def add_to_cart():
    data = request.get_json()
    quantity_sushi_A = data.get('quantity_sushi_A', 0)
    quantity_sushi_B = data.get('quantity_sushi_B', 0)

    price_sushi_A = 3
    price_sushi_B = 4
    total_price = (quantity_sushi_A * price_sushi_A) + (quantity_sushi_B * price_sushi_B)

    total_quantity = quantity_sushi_A + quantity_sushi_B
    discount = 0.0
    if total_quantity >= 20:
        discount = 0.2
    elif total_quantity >= 10:
        discount = 0.1
    
    current_hour = datetime.now().hour
    if 11 <= current_hour <= 14:
        discount += 0.2
    
    total_discount = total_price * discount
    final_price = total_price - total_discount

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO Cart (user_id, amount_of_A_bought, amount_of_B_bought, time, discount)
        VALUES (%s, %s, %s, NOW(), %s)
    """, (1, quantity_sushi_A, quantity_sushi_B, discount))

    conn.commit()
    cursor.close()
    conn.close()

    order = {
        'quantity_sushi_A': quantity_sushi_A,
        'quantity_sushi_B': quantity_sushi_B,
        'total_price': total_price,
        'discount': discount,
        'total_discount': total_discount,
        'final_price': final_price
    }
    return jsonify(order), 201


@cart_bp.route('/orders', methods=['GET'])
def get_orders():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM Cart')
    orders = cursor.fetchall()
    cursor.close()
    conn.close()

    return jsonify(orders), 200
