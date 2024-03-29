import 'dart:convert';
import 'package:http/http.dart' as http;

void fetchDataFromNodeAPI() async {
  const String url = 'http://localhost:3001/getProducts';

  try {
    final response = await http.get(Uri.parse(url));
    if (response.statusCode == 200) {
      List<dynamic> data = json.decode(response.body);
      for (var item in data) {
        List<dynamic> products = item['products'];
        for (var product in products) {
          print('Product ID: ${product['id']}');
          print('Name: ${product['name']}');
          print('Description: ${product['description']}');
          print('Price: ${product['price']}');
          print('Stars: ${product['stars']}');
          print('Image: ${product['img']}');
          print('Location: ${product['location']}');
          print('Created At: ${product['createdAt']}');
          print('Updated At: ${product['updatedAt']}');
          print('Type ID: ${product['typeId']}');
          print('---------------------');
        }
      }
    } else {
      print('Failed to load data: ${response.statusCode}');
    }
  } catch (error) {
    print('Error: $error');
  }
}

void main() {
  fetchDataFromNodeAPI();
}
