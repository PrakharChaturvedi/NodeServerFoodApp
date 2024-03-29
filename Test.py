import requests

def fetch_data_from_node_api():
    url = 'http://localhost:3001/getProducts'

    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            for item in data:
                products = item['products']
                for product in products:
                    print('Product ID:', product['id'])
                    print('Name:', product['name'])
                    print('Description:', product['description'])
                    print('Price:', product['price'])
                    print('Stars:', product['stars'])
                    print('Image:', product['img'])
                    print('Location:', product['location'])
                    print('Created At:', product['createdAt'])
                    print('Updated At:', product['updatedAt'])
                    print('Type ID:', product['typeId'])
                    print('---------------------')
        else:
            print('Failed to load data:', response.status_code)
    except requests.exceptions.RequestException as err:
        print('Error:', err)

if __name__ == '__main__':
    fetch_data_from_node_api()