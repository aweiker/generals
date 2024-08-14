import unittest
import json
import os
from jsonschema import validate, exceptions
from parameterized import parameterized

class TestData(unittest.TestCase):
    @classmethod
    def setUpClass(self):
        with open('schema.json') as f:
            self.schema = json.loads(f.read())

    def test_data(self):
        self.assertEqual(1, 1)

    @parameterized.expand([
        (data_file,) for data_file in os.listdir('data') if data_file.endswith('.json')
    ])
    def test_data_validates_against_schema(self, data_file):
        with open(os.path.join('data', data_file)) as f:
            data = json.loads(f.read())
            try:
                validate(data, self.schema)
                self.assertTrue(True)
            except exceptions.ValidationError as e:
                self.fail(f'{data_file} failed validation')

if __name__ == '__main__':
    unittest.main()
