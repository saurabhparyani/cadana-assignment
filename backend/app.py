from flask import Flask
from flask_cors import CORS
from config import Config
from routes.cart_routes import cart_bp

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

# Register blueprints
app.register_blueprint(cart_bp)

@app.route('/')
def home():
    return {"message": "Welcome to Susan's Sushi Shop!"}

if __name__ == '__main__':
    app.run(debug=True)
