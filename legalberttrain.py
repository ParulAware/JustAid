from transformers import AutoModelForQuestionAnswering, AutoTokenizer, Trainer, TrainingArguments
import torch
import json
from datasets import Dataset

# Load dataset
with open("legal_qa.json", "r") as f:
    data = json.load(f)

# Ensure all entries have 'context' and compute start & end positions
processed_data = []
for d in data:
    context = d.get("context", d["answer"])  # Use answer as fallback if context is missing
    answer = d["answer"]

    # Compute start and end positions for answer inside context
    start_pos = context.find(answer)
    if start_pos == -1:  # If the answer is not in context, assign default positions
        start_pos, end_pos = 0, 0
    else:
        end_pos = start_pos + len(answer)

    processed_data.append({
        "question": d["question"],
        "context": context,
        "answer": answer,
        "start_positions": start_pos,
        "end_positions": end_pos
    })

# Convert to Hugging Face dataset format
dataset = Dataset.from_dict({
    "question": [d["question"] for d in processed_data],
    "context": [d["context"] for d in processed_data],
    "answer": [d["answer"] for d in processed_data],
    "start_positions": [d["start_positions"] for d in processed_data],
    "end_positions": [d["end_positions"] for d in processed_data]
})

# Load LegalBERT model
model_name = "nlpaueb/legal-bert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForQuestionAnswering.from_pretrained(model_name)

# Tokenize data
def tokenize_function(examples):
    return tokenizer(
        examples["question"], 
        examples["context"], 
        padding="max_length", 
        truncation=True
    )

tokenized_datasets = dataset.map(tokenize_function, batched=True)

# Training Arguments
training_args = TrainingArguments(
    output_dir="./results",
    evaluation_strategy="no",
    learning_rate=2e-5,
    per_device_train_batch_size=8,
    num_train_epochs=3
)

# Trainer
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_datasets
)

# Train Model
trainer.train()
model.save_pretrained("legalbert_finetuned")
tokenizer.save_pretrained("legalbert_finetuned")

print("Fine-tuning completed!")
