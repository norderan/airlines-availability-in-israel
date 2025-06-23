import pandas as pd
import json
import io
import numpy as np # Needed for checking pandas' NaN values

def _convert_string_to_json_type(value):
    """
    Converts specific string representations to their appropriate JSON types.
    - "TRUE" (case-insensitive) -> True
    - "FALSE" (case-insensitive) -> False
    - "null" (case-insensitive) -> None (which becomes JSON null)
    - Leaves other values as is.
    """
    if isinstance(value, str):
        lower_value = value.strip().lower()
        if lower_value == 'true':
            return True
        elif lower_value == 'false':
            return False
        elif lower_value == 'null':
            return None
    # If it's a pandas NaN (from empty cells in non-numeric columns), convert to None
    # json.dumps converts Python None to JSON null
    if pd.isna(value):
        return None
    return value

def convert_csv_to_nested_json(csv_file_content):
    """
    Converts CSV content into a JSON array with nested objects based on '_' in column names,
    and handles explicit string "TRUE", "FALSE", "null" to their JSON counterparts.

    Args:
        csv_file_content (str): The content of the CSV file as a string.

    Returns:
        str: A JSON string representing the converted data, or an error message.
    """
    try:
        # Read CSV into a DataFrame.
        # pandas automatically handles some type inference (numbers, booleans for clean columns).
        df = pd.read_csv(io.StringIO(csv_file_content))

        json_rows = []

        # Iterate over each row in the DataFrame
        for index, row in df.iterrows():
            current_row_dict = {}
            for col_name, value in row.items():
                # Apply the type conversion first
                processed_value = _convert_string_to_json_type(value)

                if '_' in col_name:
                    # Split the column name at the first underscore
                    parts = col_name.split('_', 1)
                    parent_key = parts[0]
                    child_key = parts[1]

                    # Ensure the parent key exists as a dictionary
                    if parent_key not in current_row_dict:
                        current_row_dict[parent_key] = {}

                    # Assign the processed value to the nested key
                    current_row_dict[parent_key][child_key] = processed_value
                else:
                    # If no underscore, assign directly
                    current_row_dict[col_name] = processed_value

            json_rows.append(current_row_dict)

        # Convert the list of dictionaries to a JSON string with pretty-printing
        return json.dumps(json_rows, indent=2, ensure_ascii=False)

    except pd.errors.EmptyDataError:
        return "Error: The provided CSV content is empty."
    except Exception as e:
        return f"An error occurred during conversion: {e}"

# --- Main execution block ---
if __name__ == "__main__":
    # Example CSV content as a multi-line string with "TRUE", "FALSE", and "null" strings
    example_csv = """id,name_first,name_last,contact_email,contact_phone,address_street,address_city,age,is_active,status,notes
1,John,Doe,john.doe@example.com,555-1234,123 Main St,Anytown,30,TRUE,Active,null
2,Jane,Smith,jane.smith@example.com,555-5678,456 Oak Ave,Otherville,25,FALSE,Inactive,NULL
3,Peter,Jones,peter.j@example.com,555-9012,789 Pine Ln,Villagetown,42,true,Active,
"""

    print("--- Original CSV Content ---")
    print(example_csv)
    print("\n" + "="*30 + "\n")

    json_output = convert_csv_to_nested_json(example_csv)

    print("--- Converted JSON Output ---")
    print(json_output)

    csv_file_path = "data.csv" # Or "data.csv" if that's your file name
    try:
        with open(csv_file_path, 'r', encoding='utf-8') as f:
            csv_content = f.read()
        json_output = convert_csv_to_nested_json(csv_content)
        print(json_output)
        with open("output.json", 'w', encoding='utf-8') as f:
            f.write(json_output)
        print(f"\nConverted JSON saved to output.json")
    except FileNotFoundError:
        print(f"Error: The file '{csv_file_path}' was not found. Make sure it's in the same directory or provide the full path.")
    except Exception as e:
        print(f"An error occurred: {e}")
