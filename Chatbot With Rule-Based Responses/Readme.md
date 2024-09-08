# Rule-Based Chatbot

This is a simple chatbot built using Python that responds to user inputs based on predefined rules. The chatbot uses `if-else` statements and pattern matching techniques to identify common queries and provide appropriate responses.

## Features

- Responds to basic greetings and farewells.
- Can answer questions about its identity and "name."
- Provides responses based on user moods (happy, angry, frustrated).
- Includes small talk capabilities (e.g., jokes, weather-related).
- Randomized responses to create a more interactive experience.
- A user can type 'bye' to end the conversation.

## How It Works

The chatbot processes user input through the `chatbot_response()` function, which checks for specific keywords or phrases in the user’s message. Based on the detected pattern, the chatbot responds with a predefined answer.

### Example Inputs

- **Greetings**: "Hello", "Hi", "Hey"
- **Questions**: "What is your name?", "Who are you?"
- **Goodbye**: "Bye", "Goodbye"
- **Moods**: "I'm happy", "I'm frustrated"
- **Small Talk**: "Tell me a joke", "What's the weather?"

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/sarthakgarg1204/Codsoft.git
   ```

2. Navigate to the project directory:

   ```bash
   cd 'Chatbot With Rule-Based Responses'
   ```

3. Run the chatbot script:

   ```bash
   python chatbot.py
   ```

## Usage

Once you run the chatbot, you can interact with it by typing messages in the terminal. The bot will respond based on the keywords or phrases it detects in your input.

### Example Interaction:

```bash
You: Hello
Chatbot: Hello! How can I assist you?

You: What is your name?
Chatbot: I'm a chatbot, you can call me Chatbot!

You: Tell me a joke
Chatbot: Why don't scientists trust atoms? Because they make up everything!

You: Bye
Chatbot: Goodbye! Have a fantastic day!
```

## Contributing

Feel free to contribute to the project by opening a pull request or submitting an issue. Suggestions and enhancements are always welcome!

