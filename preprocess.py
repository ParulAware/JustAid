
import pandas as pd
from datasets import Dataset
from sklearn.preprocessing import LabelEncoder


# Load CSV data
df = pd.read_csv(r"C:\Users\skawa\OneDrive\Desktop\Indian_Laws.csv")  # Replace with actual CSV file
print("Columns in dataset: ",df.columns)

# Convert target column to integer labels (replace 'your_target_column' with actual column name)
label_encoder = LabelEncoder()
df["labels"] = label_encoder.fit_transform(df["Category"])  # Converts text categories to numbers

# Remove null values
df.dropna(inplace=True)



# Convert to Hugging Face Dataset format
dataset = Dataset.from_pandas(df)

# Save processed dataset
dataset.save_to_disk("processed_dataset")
label_mapping = dict(zip(label_encoder.classes_, label_encoder.transform(label_encoder.classes_)))
print("Label Mapping:", label_mapping)
print("Dataset preprocessing complete. Saved at 'processed_dataset'.")
