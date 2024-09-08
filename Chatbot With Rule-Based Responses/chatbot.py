import random

def chatbot_response(user_input):
    user_input = user_input.lower()

    # Greetings
    if any(greeting in user_input for greeting in ["hello", "hi", "hey", "howdy"]):
        return random.choice(["Hello! How can I assist you?", "Hi there! What can I do for you?", "Hey! Need any help?"])

    # Name-related queries
    elif "name" in user_input:
        if "your" in user_input:
            return "I'm a chatbot, you can call me Chatbot!"
        else:
            return "I don't know your name, but I'd love to know!"

    # Self-identity
    elif "who are you" in user_input or "what are you" in user_input:
        return "I am a simple chatbot designed to assist with basic queries. Ask me anything!"

    # Goodbye
    elif any(bye in user_input for bye in ["bye", "goodbye", "see you"]):
        return random.choice(["Goodbye! Have a fantastic day!", "See you later!", "Goodbye! Take care."])

    # How are you?
    elif "how are you" in user_input:
        return random.choice(["I'm doing well, thank you!", "I'm just a program, but I'm here to help!", "I don't have feelings, but I'm ready to assist!"])

    # Mood-based responses
    elif any(angry_word in user_input for angry_word in ["angry", "frustrated", "mad"]):
        return "I'm sorry you're feeling this way. Can I help with something?"

    elif any(happy_word in user_input for happy_word in ["happy", "excited", "great"]):
        return "I'm glad you're feeling good! How can I assist today?"

    # Weather-related small talk
    elif "weather" in user_input:
        return "I don't have access to real-time weather updates, but you can check your local weather app for details."

    # Tell a joke
    elif "joke" in user_input or "funny" in user_input:
        jokes = [
            "Why don't scientists trust atoms? Because they make up everything!",
            "Why did the math book look sad? It had too many problems.",
            "Why did the computer go to therapy? It had too many bytes of anxiety!"
        ]
        return random.choice(jokes)

    # Unrecognized input
    else:
        return "I'm not sure how to respond to that. Can you ask something else?"

def main():
    print("Chatbot: Hi there! Type 'bye' to exit.")

    while True:
        user_input = input("You: ")

        if user_input.lower() in ["bye", "goodbye", "see you"]:
            print("Chatbot: Goodbye! Have a great day.")
            break

        response = chatbot_response(user_input)
        print(f"Chatbot: {response}")

if __name__ == "__main__":
    main()
