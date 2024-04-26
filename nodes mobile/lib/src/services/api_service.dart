import 'dart:convert';
import 'package:http/http.dart' as http;

  class HttpService {
  final String baseUrl;
  HttpService(this.baseUrl);

  Future<http.Response> get(
      {String? endpoint, Map<String, String>? header}) {
    final url = Uri.parse('$baseUrl$endpoint');
    final response = http.get(url, headers: header );
    return response;
  }

  Future<http.Response> post(
      {String? endpoint, Map<String, String>? header, Map<String, dynamic>? data}) {
    final url = Uri.parse('$baseUrl$endpoint');
    final response = http.post(url, headers: header, body: jsonEncode(data));
    return response;
  }
  Future<http.Response> post1(
      {String? endpoint, Map<String, String>? header, Map<String, dynamic>? data}) {
    final url = Uri.parse(endpoint!);
    final response = http.post(url, headers: header, body: jsonEncode(data));
    return response;
  }



}

