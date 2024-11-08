import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.preprocessing import MinMaxScaler, StandardScaler
from imblearn.over_sampling import SMOTE  # Import SMOTE
import pickle

# Sample data (replace this with your actual dataset)
data = {
    'Nitrogen': [10, 20, 30],
    'Phosphorus': [20, 30, 10],
    'Potassium': [30, 10, 20],
    'Temperature': [25, 30, 20],
    'Humidity': [80, 70, 60],
    'Ph': [6.5, 6.0, 7.0],
    'Rainfall': [200, 150, 300],
    'Crop': [1, 2, 1]  # Example crop labels
}

# Create DataFrame
df = pd.DataFrame(data)

# Separate features and target
X = df.drop('Crop', axis=1)
y = df['Crop']

# Train-test split (you can adjust the test size as needed)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create scalers
minmax_scaler = MinMaxScaler()
standard_scaler = StandardScaler()

# Fit scalers on training data
minmax_scaler.fit(X_train)
standard_scaler.fit(X_train)

# Scale the training data
X_train_minmax = minmax_scaler.transform(X_train)
X_train_standard = standard_scaler.transform(X_train)

# Apply SMOTE to handle class imbalance
smote = SMOTE(random_state=42)  # You can set a random state for reproducibility
X_resampled, y_resampled = smote.fit_resample(X_train_minmax, y_train)

# Create and fit the model using the resampled data
model = DecisionTreeClassifier()
model.fit(X_resampled, y_resampled)

# # Save the model and scalers
# with open('model.pkl', 'wb') as model_file:
#     pickle.dump(model, model_file)

with open('model.pkl', 'wb') as model_file:
    pickle.dump(model, model_file)

with open('minmax_scaler.pkl', 'wb') as minmax_file:
    pickle.dump(minmax_scaler, minmax_file)

with open('standard_scaler.pkl', 'wb') as standard_file:
    pickle.dump(standard_scaler, standard_file)

print("Model and scalers trained and saved successfully.")
