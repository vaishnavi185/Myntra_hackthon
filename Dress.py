import streamlit as st

# Define the dictionary with keywords and associated images for females and males
girl_image_dict = {
    "birthday": ["C:/Users/akshr/OneDrive/Desktop/birthday_dress.jpg", "C:/Users/akshr/OneDrive/Desktop/Birthday_dress1.jpg"],
    "wedding": ["C:/Users/akshr/OneDrive/Desktop/Wedding_Dress.jpg"],
    "casual": ["C:/Users/akshr/OneDrive/Desktop/casual_dress.jpg"],
    "formal": ["C:/Users/akshr/OneDrive/Desktop/formal_dress.jpg"],
    "party": ["C:/Users/akshr/OneDrive/Desktop/party_dress.jpg", "C:/Users/akshr/OneDrive/Desktop/party_dress1.jpg"]
}

boy_image_dict = {
    "casual": ["C:/Users/akshr/OneDrive/Desktop/CasualBoy_dress.jpg"],
    "formal": ["C:/Users/akshr/OneDrive/Desktop/formalboy_dress.jpg"],
    "party": ["C:/Users/akshr/OneDrive/Desktop/PartyBoy_dress.jpg"],
    "birthday": ["C:/Users/akshr/OneDrive/Desktop/Birthdayboy_dress.jpg"]
}

def recommend_images(prompt):
    """Recommends a list of images based on keywords in the prompt."""
    
    prompt = prompt.lower()
    matching_images = []

    # Determine if gender is specified
    if "boy" in prompt:
        gender_specific_dict = boy_image_dict
    elif "girl" in prompt:
        gender_specific_dict = girl_image_dict
    else:
        gender_specific_dict = None

    if gender_specific_dict:
        for keyword, image_paths in gender_specific_dict.items():
            if keyword in prompt:
                matching_images.extend(image_paths)
    else:
        # Search both dictionaries if no gender specified
        for keyword, image_paths in girl_image_dict.items():
            if keyword in prompt:
                matching_images.extend(image_paths)
        for keyword, image_paths in boy_image_dict.items():
            if keyword in prompt:
                matching_images.extend(image_paths)
    
    # Limit to a maximum of 3 images
    matching_images = matching_images[:3]

    return matching_images

def main():
    # Set page background color (optional)
    st.markdown("""
        <style>
            .reportview-container {
                background-color:white;
                
            }
        </style>
    """, unsafe_allow_html=True)

    st.title("Dress Recommendation Chatbot")

    # Initialize chat history
    if 'chat_history' not in st.session_state:
        st.session_state['chat_history'] = []

    # User input
    user_input = st.text_input("You:", "")

    # Bot responses
    bot_response = ""
    if user_input:
        st.session_state['chat_history'].append(("User", user_input))

        recommended_images = recommend_images(user_input)
        if recommended_images:
            bot_response = f"Here are some recommendations for '{user_input}':"
            st.session_state['chat_history'].append(("Bot", bot_response))
            st.write(bot_response)
            cols = st.columns(len(recommended_images))  # Create columns based on number of images
            for i, image_path in enumerate(recommended_images):
                with cols[i]:
                    st.image(image_path, caption=image_path.split("/")[-1], use_column_width=True)
        else:
            bot_response = f"No matching images found for '{user_input}'."
            st.session_state['chat_history'].append(("Bot", bot_response))
            st.write(bot_response)

    # Display chat history
    for speaker, message in st.session_state['chat_history']:
        st.write(f"{speaker}: {message}")

if __name__ == "__main__":
    main()
