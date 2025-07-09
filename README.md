# VictuAI - Deepseek-R1-7B Supervised Finetuned for Diet Recommendation

## Introduction
In this repository I finetune a DeepSeek-R1-Distill-Qwen-7B model (https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B) into providing personalised diet recommendations using Supervised Finetuning, QLoRA and a custom full training loop, which allowed me to finetune the model in a free tier Kaggle notebook using the 2 T4 GPUs available and with limited RAM.

I explain more in detail in the notebooks how I did it and my thought process behind it, which are in the notebooks folder, along with how to test the model for inference in Gradio and how to "deploy" the model in a temporal "server" that can be connected to the basic interface I built on React, by getting the ngrok URL and putting it into the App.js file in the React app.

This project has taught me a lot about the basics of Deep Learning, NLP and LLMs, learning from FastAI Practical Deep Learning course, which can be found here: https://course.fast.ai/, and HuggingFace LLM Course, which can be found here: https://huggingface.co/learn/llm-course .

VictuAI-v5, which is how I call the finetuned model, only provides diet recommendation, because that's what the system prompt forces it to do, and it can not follow up a conversation, but if you provide your personal health description, it will reason and think deeply into what's the best diet for you, and most of the time it provides very good diets. Obviously, always check with a doctor or health specialist, since these models can commit mistakes.

The basic React interface is not a very good one, but it works and you can ask it to provide you a diet for your personal circumstances. In the interface/src/App.js change the link in the handleSubmit function, in the line 32, but keep the "/chat?prompt" at the end, like this: {ngrok URL}/chat?prompt, so that it works perfectly.

If you want to run the model locally, you can find the model in my HuggingFace repository sse3ele3/VictuAI-v5, or in the following link: https://huggingface.co/sse3ele3/VictuAI-v5, and since it's in SafeTensors, you would need to convert it in GGUF to run it in Ollama. The reason I haven't used Ollama and Open WebUI is because my computer doesn't have the hardware necessary to run a 7B model with ease, even with 4 bit quantization, so that's why I complicated the things to make use of the Kaggle GPUs on a local interface.
