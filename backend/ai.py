from flask import Flask, request, jsonify

from openai import OpenAI
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="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",
)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '')
    completion = client.chat.completions.create(
        extra_body={},
        model="deepseek/deepseek-r1-0528-qwen3-8b:free",
        messages=[
            {"role": "user", "content": user_message}
        ]
    )
    ai_response = completion.choices[0].message.content
    return jsonify({'response': ai_response})

if __name__ == '__main__':
    app.run(port=5050, debug=True)