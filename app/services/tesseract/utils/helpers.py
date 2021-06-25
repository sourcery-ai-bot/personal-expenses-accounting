"""
Helper Functions
"""
import csv
import json
import os


def data_to_file(data, filename, path):
    """Save passed data to file"""
    file_path = os.path.join(path, filename)

    # if func is passed as argument
    dat = data() if callable(data) else data
    with open(file_path, 'a', newline='') as f:
        for line in dat:
            writer = csv.writer(f)
            writer.writerow([line])


def read_file(file_name) -> list:
    """Read specified file"""
    with open(file_name) as f:
        reader = csv.reader(f)
        content = [line[0] for line in reader]
    return content


def read_json(file):
    file = f'{file}.json'
    if os.path.isfile(file):
        with open(file) as f:
            return json.load(f)
