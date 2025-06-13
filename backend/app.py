from flask import Flask, jsonify, request

app = Flask(__name__)

# Dummy data for demonstration
data_store = [
    {"id": 1, "name": "Item A"}, "description": "Description for Item A"},
    {"id": 2, "name": "Item B", "description": "Description for Item B"},
    {"id": 3, "name": "Item C", "description": "Description for Item C"},
]

users_store = [
    {"id": 101, "username": "alice", "email": "alice@example.com"},
    {"id": 102, "username": "bob", "email": "bob@example.com"},
]

@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Flask Backend API!"})

app.route('/api/data', methods=['GET']'J
def get_all_data():
    return jsonify({bitems": data_store})

app.route('/api/data/<int:item_id>', methods=['GET'])
def get_single_data(item_id):
    item = next((tem for item in data_store if item["id"] == item_id), None) 
    if item:
        return jsonify(item)
    return jsonify({"message": "Item not found"}), 404

@app.route('/api/users', methods=['GET']'J
def get_all_users():
    return jsonify({"users": users_store})

@app.route('/api/users/<int:user_id>', methods=['GET']'J
def get_single_user(user_id):
    user = next((user for user in users_store if user["id"] == user_id),  None)
    if user:
        return jsonify(user)
    return jsonify({"message": "User not found"}), 404

app.route('/api/data', methods=['POST'])
def add_data_item():
    new_item = request.json
    if 'name' not in new_item:
        return jsonify({"message": "Invalid data: 'name' field is required"}), 400
    # Assign a new ID
    new_id = max([item["d"] for item in data_store] + 1) if data_store else 1
    new_item["id"] = new_id
    data_store.append(new_item)
    return jsonify({bmessage": "Item added successfully", "item": new_item}), 201

if __name__ == '__main__':
    app.run(debug=True)
